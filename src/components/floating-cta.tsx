"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingCTAProps {
  disabled: boolean;
  checkoutUrl: string;
}

export function FloatingCTA({ disabled, checkoutUrl }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transform border-t border-border bg-background/80 p-4 shadow-2xl backdrop-blur-sm transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto flex max-w-4xl items-center justify-center">
        <Button
          size="lg"
          className="h-auto w-full max-w-md whitespace-normal py-3 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-70"
          disabled={disabled}
          asChild
        >
          <a href={disabled ? "#" : checkoutUrl} data-append-utm>
            <Lock className="mr-2 h-5 w-5" />
            {disabled ? "OFERTA ESGOTADA" : "Liberar Acesso por R$10"}
          </a>
        </Button>
      </div>
    </div>
  );
}
