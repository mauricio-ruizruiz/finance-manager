// Helper function to generate unique IDs
let uniqueIdCounter = 1;
const getUniqueId = () => uniqueIdCounter++;

const dataCategorias = [
  // Categorias de Gastos
  {
    id: getUniqueId(),
    categoria: 'Alimentos',
    categoriaEmoji: '🍽️',
    grupos: [
      { id: getUniqueId(), nombre: 'Comercios', emoji: '🏪' },
      { id: getUniqueId(), nombre: 'Comida', emoji: '🍔' },
      { id: getUniqueId(), nombre: 'Despensa', emoji: '🛒' },
    ],
    subgrupos: {
      Comercios: [
        { id: getUniqueId(), nombre: 'Restaurante', subgrupoEmoji: '🍽️' },
        { id: getUniqueId(), nombre: 'Café', subgrupoEmoji: '☕' },
        { id: getUniqueId(), nombre: 'Bar', subgrupoEmoji: '🍻' },
      ],
      Comida: [
        { id: getUniqueId(), nombre: 'A Domicilio', subgrupoEmoji: '🚚' },
        { id: getUniqueId(), nombre: 'Callejera', subgrupoEmoji: '🌮' },
        { id: getUniqueId(), nombre: 'Comida Rápida', subgrupoEmoji: '🍔' },
        { id: getUniqueId(), nombre: 'Tiendita', subgrupoEmoji: '🏪' },
      ],
      Despensa: [
        { id: getUniqueId(), nombre: 'Mercado', subgrupoEmoji: '🧺' },
        { id: getUniqueId(), nombre: 'Supermercado', subgrupoEmoji: '🏬' },
      ],
    },
  },
  {
    id: getUniqueId(),
    categoria: 'Compras',
    categoriaEmoji: '🛒',
    grupos: [
      { id: getUniqueId(), nombre: 'Accesorios', emoji: '🧢' },
      { id: getUniqueId(), nombre: 'Artículos para el Hogar', emoji: '🏠' },
      { id: getUniqueId(), nombre: 'Electrónica', emoji: '📱' },
      { id: getUniqueId(), nombre: 'Herramientas', emoji: '🔧' },
      { id: getUniqueId(), nombre: 'Higiene Personal', emoji: '🧼' },
      { id: getUniqueId(), nombre: 'Muebles', emoji: '🛋️' },
      { id: getUniqueId(), nombre: 'Oficina', emoji: '🖇️' },
      { id: getUniqueId(), nombre: 'Productos de Limpieza para el Hogar', emoji: '🧽' },
      { id: getUniqueId(), nombre: 'Regalos', emoji: '🎁' },
      { id: getUniqueId(), nombre: 'Ropa y Calzado', emoji: '👗' },
      { id: getUniqueId(), nombre: 'Tiempo libre', emoji: '🎲' },
    ],
    subgrupos: [],
  },
  {
    id: getUniqueId(),
    categoria: 'Gastos Financieros',
    categoriaEmoji: '🛒',
    grupos: [
      { id: getUniqueId(), nombre: 'Servicios', emoji: '💡' },
      { id: getUniqueId(), nombre: 'Intereses', emoji: '💰' },
      { id: getUniqueId(), nombre: 'Comisiones', emoji: '💸' },
    ],
  },

  {
    id: getUniqueId(),
    categoria: 'Mascota',
    categoriaEmoji: '🐾',
    grupos: [
      { id: getUniqueId(), nombre: 'Baño', emoji: '🛁' },
      { id: getUniqueId(), nombre: 'Croquetas', emoji: '🍖' },
      { id: getUniqueId(), nombre: 'Juguetes y Accesorios', emoji: '🧸' },
      { id: getUniqueId(), nombre: 'Medicinas y Suplementos', emoji: '💊' },
      { id: getUniqueId(), nombre: 'Otros', emoji: '❓' },
      { id: getUniqueId(), nombre: 'Veterinario', emoji: '👨‍⚕️' },
    ],
    subgrupos: [],
  },
  {
    id: getUniqueId(),
    categoria: 'Tecnologia',
    categoriaEmoji: '💻',
    grupos: [
      { id: getUniqueId(), nombre: 'Hardware', emoji: '🖥️' },
      { id: getUniqueId(), nombre: 'Software&Apps', emoji: '📲' },
      { id: getUniqueId(), nombre: 'Telefonia Móvil', emoji: '📱' },
      { id: getUniqueId(), nombre: 'Web', emoji: '🌐' },
    ],
    subgrupos: {
      'Software&Apps': [
        { id: getUniqueId(), nombre: 'Nube', subgrupoEmoji: '☁️' },
        { id: getUniqueId(), nombre: 'Apps', subgrupoEmoji: '📱' },
        { id: getUniqueId(), nombre: 'Suscripciones', subgrupoEmoji: '🔄' },
        { id: getUniqueId(), nombre: 'Software', subgrupoEmoji: '💾' },
      ],
      Web: [
        { id: getUniqueId(), nombre: 'Alojamiento', subgrupoEmoji: '🏠' },
        { id: getUniqueId(), nombre: 'Desarrollo', subgrupoEmoji: '💻' },
        { id: getUniqueId(), nombre: 'Dominios', subgrupoEmoji: '🌐' },
      ],
      'Telefonia Móvil': [
        { id: getUniqueId(), nombre: 'Accesorios', subgrupoEmoji: '🔌' },
        { id: getUniqueId(), nombre: 'Planes', subgrupoEmoji: '📅' },
        { id: getUniqueId(), nombre: 'Recargas', subgrupoEmoji: '💳' },
      ],
      Hardware: [
        { id: getUniqueId(), nombre: 'Computadora', subgrupoEmoji: '🖥️' },
        { id: getUniqueId(), nombre: 'Periféricos', subgrupoEmoji: '🖱️' },
        { id: getUniqueId(), nombre: 'Componentes', subgrupoEmoji: '🔩' },
        { id: getUniqueId(), nombre: 'Video', subgrupoEmoji: '🎥' },
      ],
    },
  },
  {
    id: getUniqueId(),
    categoria: 'Transporte',
    categoriaEmoji: '🚗',
    grupos: [
      { id: getUniqueId(), nombre: 'Automovil', emoji: '🚗' },
      { id: getUniqueId(), nombre: 'Bicicleta', emoji: '🚲' },
      { id: getUniqueId(), nombre: 'Taxi', emoji: '🚕' },
      { id: getUniqueId(), nombre: 'Transporte Público', emoji: '🚌' },
    ],
    subgrupos: {
      Automovil: [
        { id: getUniqueId(), nombre: 'Estacionamiento', subgrupoEmoji: '🅿️' },
        { id: getUniqueId(), nombre: 'Gasolina', subgrupoEmoji: '⛽' },
        { id: getUniqueId(), nombre: 'Mantenimiento', subgrupoEmoji: '🔧' },
      ],
      Bicicleta: [
        { id: getUniqueId(), nombre: 'Accesorios', subgrupoEmoji: '🔔' },
        { id: getUniqueId(), nombre: 'Mantenimiento', subgrupoEmoji: '🔧' },
      ],
      Taxi: [{ id: getUniqueId(), nombre: 'Viajes', subgrupoEmoji: '🚕' }],
      'Transporte Público': [],
    },
  },
  {
    id: getUniqueId(),
    categoria: 'Vida y Entretenimiento',
    categoriaEmoji: '🎉',
    grupos: [
      { id: getUniqueId(), nombre: 'Juegos de Azar | Apuestas', emoji: '🎰' },
      { id: getUniqueId(), nombre: 'Malos Vicios', emoji: '🚬' },
      { id: getUniqueId(), nombre: 'Viajes', emoji: '✈️' },
      { id: getUniqueId(), nombre: 'TV Streaming', emoji: '📺' },
      { id: getUniqueId(), nombre: 'Libros | Audio', emoji: '📚' },
      { id: getUniqueId(), nombre: 'Educación y Desarrollo', emoji: '🎓' },
      { id: getUniqueId(), nombre: 'Pasatiempos', emoji: '🎨' },
      { id: getUniqueId(), nombre: 'Eventos Sociales', emoji: '🎊' },
      { id: getUniqueId(), nombre: 'Eventos', emoji: '🎟️' },
      { id: getUniqueId(), nombre: 'Fitness', emoji: '🏋️' },
      { id: getUniqueId(), nombre: 'Cuidado Personal', emoji: '💇' },
      { id: getUniqueId(), nombre: 'Salud', emoji: '🏥' },
    ],
    subgrupos: {
      'Juegos de Azar | Apuestas': [
        { id: getUniqueId(), nombre: 'Loteria', subgrupoEmoji: '🎲' },
        { id: getUniqueId(), nombre: 'Casino', subgrupoEmoji: '🎰' },
        { id: getUniqueId(), nombre: 'Apuestas Deportivas', subgrupoEmoji: '🏆' },
      ],
      'Malos Vicios': [
        { id: getUniqueId(), nombre: 'Cigarros', subgrupoEmoji: '🚬' },
        { id: getUniqueId(), nombre: 'Alcohol', subgrupoEmoji: '🍺' },
        { id: getUniqueId(), nombre: 'Otros', subgrupoEmoji: '❓' },
      ],
      Viajes: [
        { id: getUniqueId(), nombre: 'Comida', subgrupoEmoji: '🍽️' },
        { id: getUniqueId(), nombre: 'Avión', subgrupoEmoji: '✈️' },
        { id: getUniqueId(), nombre: 'Hospedaje', subgrupoEmoji: '🏨' },
        { id: getUniqueId(), nombre: 'Transporte', subgrupoEmoji: '🚗' },
        { id: getUniqueId(), nombre: 'Otros', subgrupoEmoji: '❓' },
      ],
      'TV Streaming': [],
      'Libros | Audio': [
        { id: getUniqueId(), nombre: 'Libros Fisicos', subgrupoEmoji: '📖' },
        { id: getUniqueId(), nombre: 'Ebooks', subgrupoEmoji: '📱' },
        { id: getUniqueId(), nombre: 'Audiolibros', subgrupoEmoji: '🎧' },
      ],
      'Educación y Desarrollo': [
        { id: getUniqueId(), nombre: 'Cursos', subgrupoEmoji: '🎓' },
        { id: getUniqueId(), nombre: 'Libros', subgrupoEmoji: '📚' },
        { id: getUniqueId(), nombre: 'Conferencias', subgrupoEmoji: '🎤' },
        { id: getUniqueId(), nombre: 'Otros', subgrupoEmoji: '❓' },
      ],
      Pasatiempos: [
        { id: getUniqueId(), nombre: 'Clases de Baile', subgrupoEmoji: '💃' },
        { id: getUniqueId(), nombre: 'Batucada', subgrupoEmoji: '🥁' },
        { id: getUniqueId(), nombre: 'Otros', subgrupoEmoji: '❓' },
      ],
      'Eventos Sociales': [
        { id: getUniqueId(), nombre: 'Cumpleaños', subgrupoEmoji: '🎂' },
        { id: getUniqueId(), nombre: 'Bodas', subgrupoEmoji: '💍' },
        { id: getUniqueId(), nombre: 'Reuniones', subgrupoEmoji: '🤝' },
        { id: getUniqueId(), nombre: 'Otros', subgrupoEmoji: '❓' },
      ],
      Eventos: [
        { id: getUniqueId(), nombre: 'Cine', subgrupoEmoji: '🎬' },
        { id: getUniqueId(), nombre: 'Conciertos', subgrupoEmoji: '🎵' },
        { id: getUniqueId(), nombre: 'Teatro', subgrupoEmoji: '🎭' },
        { id: getUniqueId(), nombre: 'Otros', subgrupoEmoji: '❓' },
      ],
      Fitness: [
        { id: getUniqueId(), nombre: 'Gym', subgrupoEmoji: '🏋️' },
        { id: getUniqueId(), nombre: 'Clases', subgrupoEmoji: '🏫' },
        { id: getUniqueId(), nombre: 'Equipo', subgrupoEmoji: '🎽' },
        { id: getUniqueId(), nombre: 'Futbol', subgrupoEmoji: '⚽' },
        { id: getUniqueId(), nombre: 'Yoga', subgrupoEmoji: '🧘' },
      ],
      'Cuidado Personal': [
        { id: getUniqueId(), nombre: 'Peluquería', subgrupoEmoji: '💇' },
        { id: getUniqueId(), nombre: 'Spa', subgrupoEmoji: '💆' },
      ],
      Salud: [
        { id: getUniqueId(), nombre: 'Farmacia', subgrupoEmoji: '💊' },
        { id: getUniqueId(), nombre: 'Medicinas', subgrupoEmoji: '💊' },
        { id: getUniqueId(), nombre: 'Dentista', subgrupoEmoji: '🦷' },
        { id: getUniqueId(), nombre: 'Consultas Médicas', subgrupoEmoji: '👨‍⚕️' },
        { id: getUniqueId(), nombre: 'Exámenes', subgrupoEmoji: '🧪' },
        { id: getUniqueId(), nombre: 'Terapias', subgrupoEmoji: '🧘' },
        { id: getUniqueId(), nombre: 'Fisioterapia', subgrupoEmoji: '🦵' },
      ],
    },
  },
  {
    id: getUniqueId(),
    categoria: 'Vivienda',
    categoriaEmoji: '🏠',
    grupos: [
      { id: getUniqueId(), nombre: 'Mantenimiento Y Reparaciones', emoji: '🛠️' },
      { id: getUniqueId(), nombre: 'Servicios', emoji: '💡' },
      { id: getUniqueId(), nombre: 'Internet y Telefonía', emoji: '🌐' },
      { id: getUniqueId(), nombre: 'Limpieza del Hogar', emoji: '🧹' },
      { id: getUniqueId(), nombre: 'Mantenimiento Copilco', emoji: '🏢' },
    ],
    subgrupos: {
      'Mantenimiento Y Reparaciones': [
        { id: getUniqueId(), nombre: 'Fontanería', subgrupoEmoji: '🚰' },
        { id: getUniqueId(), nombre: 'Electricidad', subgrupoEmoji: '💡' },
        { id: getUniqueId(), nombre: 'Carpintería', subgrupoEmoji: '🪚' },
      ],
      Servicios: [
        { id: getUniqueId(), nombre: 'Gas', subgrupoEmoji: '🛢️' },
        { id: getUniqueId(), nombre: 'Agua', subgrupoEmoji: '🚰' },
        { id: getUniqueId(), nombre: 'Luz', subgrupoEmoji: '💡' },
        { id: getUniqueId(), nombre: 'Recolección de Basura', subgrupoEmoji: '🗑️' },
      ],
      'Internet y Telefonía': [
        { id: getUniqueId(), nombre: 'Teléfono', subgrupoEmoji: '📞' },
        { id: getUniqueId(), nombre: 'Internet', subgrupoEmoji: '🌐' },
      ],
      'Limpieza del Hogar': [
        { id: getUniqueId(), nombre: 'Productos de Limpieza', subgrupoEmoji: '🧴' },
        { id: getUniqueId(), nombre: 'Servicios de Limpieza', subgrupoEmoji: '🧹' },
      ],
      'Mantenimiento Copilco': [
        { id: getUniqueId(), nombre: 'Reparaciones', subgrupoEmoji: '🛠️' },
        { id: getUniqueId(), nombre: 'Cuotas de Mantenimiento', subgrupoEmoji: '💵' },
      ],
    },
  },
];

export default dataCategorias;
