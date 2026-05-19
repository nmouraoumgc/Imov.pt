import { Link } from "wouter";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout";
import { PropertyCard } from "@/components/property-card";
import { MOCK_PROPERTIES } from "@/lib/mock-data";
import heroImage from "@assets/generated_images/scenic_alcácer_do_sal_riverfront_with_white_houses.png";

export function HomePage() {
  const featuredProperties = MOCK_PROPERTIES.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Alcácer do Sal" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-in fade-in zoom-in duration-700">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-md">
            A Sua Casa de Sonho <br/> em Alcácer do Sal
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm font-light">
            Agregamos anúncios de múltiplos portais para que encontre o que procura num só lugar.
          </p>

          <div className="bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-2xl max-w-2xl mx-auto flex flex-col md:flex-row gap-2 mt-8">
            <div className="flex-1 flex items-center px-4 h-12 border-b md:border-b-0 md:border-r border-gray-200">
              <MapPin className="text-muted-foreground w-5 h-5 mr-3" />
              <Input 
                placeholder="Onde procura?" 
                defaultValue="Alcácer do Sal"
                className="border-none focus-visible:ring-0 text-base shadow-none bg-transparent h-auto p-0 placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex-1 flex items-center px-4 h-12">
               <Input 
                placeholder="Tipo (Ex: Moradia, T2...)" 
                className="border-none focus-visible:ring-0 text-base shadow-none bg-transparent h-auto p-0 placeholder:text-muted-foreground"
              />
            </div>
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 h-12" asChild>
              <Link href="/search">
                <a className="flex items-center">
                  Pesquisar <Search className="ml-2 h-4 w-4" />
                </a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground">Destaques da Semana</h2>
              <p className="text-muted-foreground mt-2">Os imóveis mais exclusivos na região do Sado.</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/search">
                <a>Ver todos <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/search">
                <a>Ver todos os imóveis</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Pesquisa Centralizada</h3>
              <p className="text-muted-foreground">
                Não perca tempo a visitar 10 sites diferentes. Nós varremos a web por si.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Foco Local</h3>
              <p className="text-muted-foreground">
                Especializados na zona de Alcácer do Sal, Comporta e arredores.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Atualização Constante</h3>
              <p className="text-muted-foreground">
                Novos anúncios adicionados diariamente de fontes verificadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
