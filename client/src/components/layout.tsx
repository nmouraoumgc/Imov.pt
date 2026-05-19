import { Link, useLocation } from "wouter";
import { Search, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold text-primary tracking-tight">LusaHome</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <a className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}>
                Início
              </a>
            </Link>
            <Link href="/search">
              <a className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/search') ? 'text-primary' : 'text-muted-foreground'}`}>
                Pesquisar
              </a>
            </Link>
            <Link href="/favorites">
              <a className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/favorites') ? 'text-primary' : 'text-muted-foreground'}`}>
                Favoritos
              </a>
            </Link>
            <Button variant="outline" size="sm" className="ml-4">
              Entrar
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/">
                  <a className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
                </Link>
                <Link href="/search">
                  <a className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Pesquisar</a>
                </Link>
                <Link href="/favorites">
                  <a className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Favoritos</a>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="font-serif text-xl font-bold text-primary">LusaHome</span>
              <p className="text-sm text-muted-foreground">
                O seu agregador imobiliário de confiança para encontrar a casa perfeita em Portugal.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Explorar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/search">Pesquisar Imóveis</Link></li>
                <li><Link href="/favorites">Favoritos</Link></li>
                <li><a href="#">Tendências de Mercado</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Aviso Legal (Scraping)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@lusahome.pt</li>
                <li>+351 210 000 000</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
            © 2024 LusaHome. Todos os direitos reservados. Este é um protótipo demonstrativo.
          </div>
        </div>
      </footer>
    </div>
  );
}
