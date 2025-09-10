"use client";

import { useEffect } from 'react';

// Componente para capturar parâmetros UTM e anexá-los aos links de checkout
export function TrackingScripts() {
  useEffect(() => {
    // Este código só roda no navegador do cliente
    const params = new URLSearchParams(window.location.search);
    const utmParams: { [key: string]: string } = {};
    let hasUtm = false;

    // Lista dos parâmetros UTM que queremos capturar
    const utmKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'src',
      'sck',
    ];

    utmKeys.forEach(key => {
      const value = params.get(key);
      if (value) {
        utmParams[key] = value;
        hasUtm = true;
      }
    });

    // Se encontrarmos algum parâmetro UTM na URL, os armazenamos
    if (hasUtm) {
      sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
    }

    // Função para atualizar os links
    const updateLinks = () => {
      const storedUtmParams = sessionStorage.getItem('utm_params');
      if (storedUtmParams) {
        const query = new URLSearchParams(JSON.parse(storedUtmParams)).toString();
        
        // Encontra todos os links que apontam para a plataforma de checkout
        document.querySelectorAll('a[href*="ggcheckout.com"]').forEach(link => {
          const anchor = link as HTMLAnchorElement;
          try {
            const url = new URL(anchor.href);
            // Anexa os parâmetros UTM, garantindo que não haja duplicatas
            Object.entries(JSON.parse(storedUtmParams)).forEach(([key, value]) => {
              url.searchParams.set(key, value as string);
            });
            anchor.href = url.toString();
          } catch (error) {
            console.error('Error updating link:', error);
          }
        });
      }
    };
    
    // Atualiza os links assim que o componente é montado
    updateLinks();

    // Como os links podem ser renderizados dinamicamente, usamos um MutationObserver
    // para garantir que novos links também sejam atualizados.
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                updateLinks();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Limpa o observer quando o componente é desmontado
    return () => {
        observer.disconnect();
    };

  }, []);

  return null; // Este componente não renderiza nada visualmente
}
