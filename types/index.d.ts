export type SubcategoriaIngreso = {
  nombre: string;
  icon: string;
};

export type CategoriaIngreso = {
  nombre: string;
  icon: string;
  subcategorias: SubcategoriaIngreso[];
};

export type CategoriasIngresosDefault = CategoriaIngreso[];

export type CeldaCategoria = {
  nombre: string;
  icon: string;
};
