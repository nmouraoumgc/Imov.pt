import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type PropertyType = "apartment" | "house" | "land" | "commercial";
export type PropertySource = "Idealista" | "Imovirtual" | "SuperCasa" | "CustoJusto" | "BPI Expresso";

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number; // m2
  description: string;
  imageUrl: string;
  source: PropertySource;
  originalUrl: string;
  date: string;
  features: string[];
  isPromoted?: boolean;
}

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Moradia T4 com Piscina em Condomínio Fechado",
    price: 450000,
    location: "Alcácer do Sal, Setúbal",
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    description: "Excelente moradia inserida em condomínio de luxo com vista para o rio Sado.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?auto=format&fit=crop&q=80&w=800",
    source: "Idealista",
    originalUrl: "#",
    date: "2023-12-20",
    features: ["Piscina", "Condomínio Fechado", "Jardim", "Garagem"],
    isPromoted: true
  },
  {
    id: "2",
    title: "Apartamento T2 Renovado no Centro Histórico",
    price: 185000,
    location: "Centro, Alcácer do Sal",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    description: "Apartamento cheio de charme no coração da cidade, totalmente remodelado.",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    source: "Imovirtual",
    originalUrl: "#",
    date: "2023-12-22",
    features: ["Renovado", "Varanda", "Ar Condicionado"],
  },
  {
    id: "3",
    title: "Monte Alentejano com 5 Hectares",
    price: 890000,
    location: "Santa Susana, Alcácer do Sal",
    type: "house",
    bedrooms: 5,
    bathrooms: 4,
    area: 350,
    description: "Autêntico monte alentejano, privacidade total, ideal para turismo rural.",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    source: "SuperCasa",
    originalUrl: "#",
    date: "2023-12-18",
    features: ["Terreno Grande", "Piscina", "Lareira", "Furo de Água"],
  },
  {
    id: "4",
    title: "Terreno para Construção perto da Comporta",
    price: 120000,
    location: "Comporta, Alcácer do Sal",
    type: "land",
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    description: "Lote de terreno urbano com viabilidade de construção a 10 min da praia.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    source: "CustoJusto",
    originalUrl: "#",
    date: "2023-12-23",
    features: ["Viabilidade Construção", "Perto da Praia"],
  },
  {
    id: "5",
    title: "Moradia Moderna T3 com Design Único",
    price: 550000,
    location: "Torrão, Alcácer do Sal",
    type: "house",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    description: "Arquitetura contemporânea integrada na natureza.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    source: "Idealista",
    originalUrl: "#",
    date: "2023-12-21",
    features: ["Design Moderno", "Eficiência Energética A+", "Domótica"],
  },
  {
    id: "6",
    title: "Herdade com Sobreiros e Pinheiros",
    price: 1500000,
    location: "Alcácer do Sal",
    type: "land",
    bedrooms: 0,
    bathrooms: 0,
    area: 50000,
    description: "Vasta propriedade florestal com rendimento de cortiça.",
    imageUrl: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=800",
    source: "BPI Expresso",
    originalUrl: "#",
    date: "2023-12-15",
    features: ["Rendimento", "Floresta"],
  }
];
