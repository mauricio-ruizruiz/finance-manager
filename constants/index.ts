export const sidebarLinks = [
  {
    imgURL: '/icons/home.svg',
    route: '/',
    label: 'Home',
  },
  {
    imgURL: '/icons/dollar-circle.svg',
    route: '/my-banks',
    label: 'My Banks',
  },
  {
    imgURL: '/icons/transaction.svg',
    route: '/transaction-history',
    label: 'Transaction History',
  },
  {
    imgURL: '/icons/money-send.svg',
    route: '/payment-transfer',
    label: 'Transfer Funds',
  },
];

export const categoriasIngresosDefault = [
  {
    nombre: 'Apoyo Familiar',
    icon: '🤝',
    subcategorias: [],
  },
  {
    nombre: 'Vales de Despensa',
    icon: '🎟️',
    subcategorias: [],
  },
  {
    nombre: 'Alquiler',
    icon: '🏠',
    subcategorias: [
      { nombre: 'Cajón de Estacionamiento', icon: '🅿️' },
      { nombre: 'Inquilino', icon: '👤' },
    ],
  },
  {
    nombre: 'Loteria / Juegos de Azar',
    icon: '🎰',
    subcategorias: [],
  },
  {
    nombre: 'Prestamos',
    icon: '💸',
    subcategorias: [],
  },
  {
    nombre: 'Reembolsos',
    icon: '🔄',
    subcategorias: [
      { nombre: 'Impuestos', icon: '🧾' },
      { nombre: 'Compras', icon: '🛍️' },
    ],
  },
  {
    nombre: 'Regalos',
    icon: '🎁',
    subcategorias: [],
  },
  {
    nombre: 'Nómina',
    icon: '💼',
    subcategorias: [
      { nombre: 'Catorcena 1', icon: '1️⃣' },
      { nombre: 'Catorcena 2', icon: '2️⃣' },
      { nombre: 'Catorcena 3', icon: '3️⃣' },
    ],
  },
  {
    nombre: 'Venta',
    icon: '🛒',
    subcategorias: [],
  },
];

export const categoriasGastosDefault = [];
