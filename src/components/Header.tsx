import { Link } from "@tanstack/react-router";
import { Brain } from "lucide-react";

const linkClass =
  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
const activeClass = "text-foreground";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur print:hidden">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Brain className="h-5 w-5" />
          </span>
          <span className="text-base font-semibold tracking-tight">AulaTDAH</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className={linkClass} activeProps={{ className: activeClass }} activeOptions={{ exact: true }}>
            Inicio
          </Link>
          <Link to="/checklist" className={linkClass} activeProps={{ className: activeClass }}>
            Evaluación
          </Link>
          <Link to="/acerca" className={linkClass} activeProps={{ className: activeClass }}>
            Acerca
          </Link>
        </nav>
      </div>
    </header>
  );
}
