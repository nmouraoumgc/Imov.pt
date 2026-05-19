import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

interface FilterSidebarProps {
  className?: string;
}

export function FilterSidebar({ className }: FilterSidebarProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h3 className="font-serif text-xl font-semibold mb-4">Filtros</h3>
        <div className="space-y-4">
          
          <div className="space-y-2">
            <Label>Localização</Label>
            <Input placeholder="Ex: Alcácer do Sal" defaultValue="Alcácer do Sal" />
          </div>

          <div className="space-y-2">
            <Label>Tipo de Imóvel</Label>
            <Select defaultValue="house">
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="house">Moradia</SelectItem>
                <SelectItem value="apartment">Apartamento</SelectItem>
                <SelectItem value="land">Terreno</SelectItem>
                <SelectItem value="commercial">Comercial</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
      </div>

      <Separator />

      <Accordion type="single" collapsible className="w-full" defaultValue="price">
        <AccordionItem value="price">
          <AccordionTrigger className="font-medium">Preço</AccordionTrigger>
          <AccordionContent>
            <div className="px-1 py-4 space-y-4">
              <Slider defaultValue={[150000, 600000]} max={2000000} step={10000} />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>€150k</span>
                <span>€600k</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="features">
          <AccordionTrigger className="font-medium">Características</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="condo" defaultChecked />
                <Label htmlFor="condo" className="font-normal cursor-pointer">Condomínio Fechado</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pool" />
                <Label htmlFor="pool" className="font-normal cursor-pointer">Piscina</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="garage" />
                <Label htmlFor="garage" className="font-normal cursor-pointer">Garagem</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terrace" />
                <Label htmlFor="terrace" className="font-normal cursor-pointer">Terraço/Varanda</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="details">
          <AccordionTrigger className="font-medium">Detalhes</AccordionTrigger>
          <AccordionContent>
             <div className="space-y-3">
               <div className="space-y-1">
                 <Label className="text-xs text-muted-foreground">Quartos (Min)</Label>
                 <div className="flex gap-2">
                   {[1, 2, 3, 4].map(n => (
                     <Button key={n} variant="outline" size="sm" className="h-8 w-8 p-0">{n}+</Button>
                   ))}
                 </div>
               </div>
               <div className="space-y-1">
                 <Label className="text-xs text-muted-foreground">Área Mínima (m²)</Label>
                 <Input type="number" placeholder="Ex: 100" className="h-8" />
               </div>
             </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <div className="space-y-2">
         <Label>Palavras-chave</Label>
         <Input placeholder="Ex: vista rio, renovado..." />
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90">Aplicar Filtros</Button>
    </div>
  );
}
