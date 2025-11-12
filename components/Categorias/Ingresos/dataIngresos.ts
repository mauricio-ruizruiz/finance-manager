import { CategoriaIngreso, SubcategoriaIngreso } from './types';

let ingresoId = 1;
const categoriasIngresos: CategoriaIngreso[] = [
  {
    id: ingresoId++,
    nombre: 'Apoyo Familiar',
    icon: '🤝',
    subcategorias: [],
  },
  {
    id: ingresoId++,
    nombre: 'Vales de Despensa',
    icon: '🎟️',
    subcategorias: [],
  },
  {
    id: ingresoId++,
    nombre: 'Alquiler',
    icon: '🏠',
    subcategorias: [
      { id: ingresoId++, nombre: 'Cajón de Estacionamiento', icon: '🅿️' },
      { id: ingresoId++, nombre: 'Inquilino', icon: '👤' },
    ] as SubcategoriaIngreso[],
  },
  {
    id: ingresoId++,
    nombre: 'Loteria / Juegos de Azar',
    icon: '🎰',
    subcategorias: [],
  },
  {
    id: ingresoId++,
    nombre: 'Prestamos',
    icon: '💸',
    subcategorias: [],
  },
  {
    id: ingresoId++,
    nombre: 'Reembolsos',
    icon: '🔄',
    subcategorias: [
      { id: ingresoId++, nombre: 'Impuestos', icon: '🧾' },
      { id: ingresoId++, nombre: 'Compras', icon: '🛍️' },
    ] as SubcategoriaIngreso[],
  },
  {
    id: ingresoId++,
    nombre: 'Regalos',
    icon: '🎁',
    subcategorias: [],
  },
  {
    id: ingresoId++,
    nombre: 'Nómina',
    icon: '💼',
    subcategorias: [
      { id: ingresoId++, nombre: 'Catorcena 1', icon: '1️⃣' },
      { id: ingresoId++, nombre: 'Catorcena 2', icon: '2️⃣' },
      { id: ingresoId++, nombre: 'Catorcena 3', icon: '3️⃣' },
    ] as SubcategoriaIngreso[],
  },
  {
    id: ingresoId++,
    nombre: 'Venta',
    icon: '🛒',
    subcategorias: [],
  },
];

export default categoriasIngresos;
