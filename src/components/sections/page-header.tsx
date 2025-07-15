import { Bomb } from "lucide-react";

export function PageHeader() {
    return (
        <header className="fade-in-down sticky top-0 z-20 bg-primary p-3 text-center text-sm font-bold text-primary-foreground shadow-lg md:text-base">
            <div className="flex items-center justify-center gap-2">
            <Bomb className="h-5 w-5 animate-pulse" />
            <span>Esta página se autodestruirá em 15 minutos. Você tem uma chance.</span>
            </div>
      </header>
    )
}
