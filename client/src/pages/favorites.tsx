import { Layout } from "@/components/layout";
import { PropertyCard } from "@/components/property-card";
import { MOCK_PROPERTIES } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart } from "lucide-react";

export function FavoritesPage() {
  // Mock favorites (usually would come from local storage or context)
  const favorites = MOCK_PROPERTIES.slice(0, 2); 

  return (
    <Layout>
      <div className="bg-muted/30 py-8 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
            <Heart className="h-8 w-8 text-primary fill-primary/20" />
            Os Seus Favoritos
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                isFavorite={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-lg border border-dashed">
            <h3 className="text-xl font-medium mb-2">Ainda não guardou nenhum imóvel</h3>
            <p className="text-muted-foreground mb-6">
              Explore os nossos anúncios e clique no coração para guardar os que mais gostar.
            </p>
            <Button asChild>
              <Link href="/search">Começar a Pesquisar</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
