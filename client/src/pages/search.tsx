import { useState } from "react";
import { Layout } from "@/components/layout";
import { FilterSidebar } from "@/components/filter-sidebar";
import { PropertyCard } from "@/components/property-card";
import { MOCK_PROPERTIES } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SearchPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
      <div className="bg-muted/30 py-8 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-foreground">Pesquisar Imóveis</h1>
          <p className="text-muted-foreground mt-2">Encontrados {MOCK_PROPERTIES.length} resultados em Alcácer do Sal</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <SlidersHorizontal className="h-4 w-4" /> Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] overflow-y-auto">
                <FilterSidebar />
              </SheetContent>
            </Sheet>
            
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mais Recentes</SelectItem>
                <SelectItem value="price-asc">Preço: Baixo a Alto</SelectItem>
                <SelectItem value="price-desc">Preço: Alto a Baixo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-between items-center mb-6">
              <div className="text-sm text-muted-foreground">
                A mostrar 1-{MOCK_PROPERTIES.length} de {MOCK_PROPERTIES.length}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Ordenar por:</span>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Mais Recentes</SelectItem>
                    <SelectItem value="price-asc">Preço: Baixo a Alto</SelectItem>
                    <SelectItem value="price-desc">Preço: Alto a Baixo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {MOCK_PROPERTIES.map(property => (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                  isFavorite={favorites.includes(property.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" disabled>
                Não há mais resultados
              </Button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
