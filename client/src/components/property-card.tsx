import { Property } from "@/lib/mock-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Bed, Bath, Move, MapPin, Calendar } from "lucide-react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

interface PropertyCardProps {
  property: Property;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function PropertyCard({ property, isFavorite = false, onToggleFavorite }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="backdrop-blur-md bg-background/80 font-medium text-xs">
            {property.source}
          </Badge>
          {property.isPromoted && (
            <Badge className="bg-primary text-primary-foreground font-medium text-xs">
              Destaque
            </Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 text-foreground transition-colors"
          onClick={(e) => {
            e.preventDefault();
            onToggleFavorite?.(property.id);
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </Button>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
             <h3 className="font-serif text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
              {property.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {property.location}
            </div>
          </div>
        </div>

        <div className="text-xl font-bold text-primary">
          {formatPrice(property.price)}
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground border-t pt-3">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms > 0 ? `T${property.bedrooms}` : "N/A"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms > 0 ? property.bathrooms : "N/A"} WC</span>
          </div>
          <div className="flex items-center gap-1">
            <Move className="h-4 w-4" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          {format(new Date(property.date), "d MMM yyyy", { locale: pt })}
        </div>
        <Button variant="outline" size="sm" asChild className="hover:bg-primary hover:text-primary-foreground">
          <a href={property.originalUrl} target="_blank" rel="noopener noreferrer">
            Ver Original <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
