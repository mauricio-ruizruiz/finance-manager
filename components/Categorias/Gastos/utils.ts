import type { CategoriaGasto, SubgrupoGasto, SubgruposMap } from './types';

// Helper: obtain subgrupos array for a given grupo nombre
export function getSubgrupos(
  categoria: CategoriaGasto,
  grupoNombre: string
): SubgrupoGasto[] | undefined {
  if (!categoria.subgrupos) return undefined;
  if (Array.isArray(categoria.subgrupos)) return categoria.subgrupos;
  const map = categoria.subgrupos as SubgruposMap;
  return map[grupoNombre];
}
