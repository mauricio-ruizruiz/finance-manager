export interface SubgrupoGasto {
  id: number;
  nombre: string;
  emoji: string;
  descripcion?: string;
}

export interface GrupoGasto {
  id: number;
  nombre: string;
  emoji: string;
  descripcion?: string;
}

export type SubgruposMap = Record<string, SubgrupoGasto[]>;

export interface CategoriaGasto {
  id: number;
  categoria: string;
  emoji: string;
  descripcion?: string;
  grupos: GrupoGasto[];
  subgrupos?: SubgrupoGasto[] | SubgruposMap;
}
