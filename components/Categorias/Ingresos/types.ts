export interface SubcategoriaIngreso {
  id: number;
  nombre: string;
  icon: string;
}

export interface CategoriaIngreso {
  id: number;
  nombre: string;
  icon: string;
  subcategorias: SubcategoriaIngreso[];
}
