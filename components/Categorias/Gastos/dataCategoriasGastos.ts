import type { CategoriaGasto } from './types';

// Helper function to generate unique IDs
let uniqueIdCounter = 1;
const getUniqueId = () => uniqueIdCounter++;

const dataCategoriasGastos: CategoriaGasto[] = [
  // Categorias de Gastos
  {
    id: getUniqueId(),
    categoria: 'Alimentos',
    emoji: '🍽️',
    grupos: [
      {
        id: getUniqueId(),
        nombre: 'Comercios',
        emoji: '🏪',
        descripcion: 'Gastos relacionados con comercios, incluyendo restaurantes y cafeterías.',
      },
      {
        id: getUniqueId(),
        nombre: 'Comida',
        emoji: '🍔',
        descripcion:
          'Gastos relacionados con la comida, incluyendo comida a domicilio y comida rápida.',
      },
      {
        id: getUniqueId(),
        nombre: 'Despensa',
        emoji: '🛒',
        descripcion:
          'Gastos relacionados con la compra de productos de despensa, como mercado y supermercado.',
      },
    ],
    subgrupos: {
      Comercios: [
        {
          id: getUniqueId(),
          nombre: 'Restaurante',
          emoji: '🍽️',
          descripcion:
            'Gastos relacionados con restaurantes, incluyendo cenas y comidas fuera de casa.',
        },
        {
          id: getUniqueId(),
          nombre: 'Café',
          emoji: '☕',
          descripcion: 'Gastos relacionados con cafés, incluyendo bebidas y snacks.',
        },
        {
          id: getUniqueId(),
          nombre: 'Bar',
          emoji: '🍻',
          descripcion: 'Gastos relacionados con bares, incluyendo bebidas y entretenimiento.',
        },
      ],
      Comida: [
        {
          id: getUniqueId(),
          nombre: 'A Domicilio',
          emoji: '🚚',
          descripcion: 'Gastos relacionados con comida a domicilio, incluyendo pedidos y entregas.',
        },
        {
          id: getUniqueId(),
          nombre: 'Callejera',
          emoji: '🌮',
          descripcion:
            'Gastos relacionados con comida callejera, incluyendo puestos y vendedores ambulantes.',
        },
        {
          id: getUniqueId(),
          nombre: 'Comida Rápida',
          emoji: '🍔',
          descripcion:
            'Gastos relacionados con comida rápida, incluyendo cadenas de comida rápida.',
        },
        {
          id: getUniqueId(),
          nombre: 'Tiendita',
          emoji: '🏪',
          descripcion:
            'Gastos relacionados con tiendas, incluyendo compras en tiendas de conveniencia.',
        },
      ],
      Despensa: [
        {
          id: getUniqueId(),
          nombre: 'Mercado',
          emoji: '🧺',
          descripcion: 'Gastos relacionados con mercados, incluyendo compras de productos frescos.',
        },
        {
          id: getUniqueId(),
          nombre: 'Supermercado',
          emoji: '🏬',
          descripcion:
            'Gastos relacionados con supermercados, incluyendo compras de productos en grandes cantidades.',
        },
      ],
    },
  },
  {
    id: getUniqueId(),
    categoria: 'Compras',
    emoji: '🛒',
    grupos: [
      {
        id: getUniqueId(),
        nombre: 'Accesorios',
        emoji: '🧢',
        descripcion:
          'Artículos complementarios como joyería, gorros, cinturones, mochilas y otros elementos de uso personal.',
      },
      {
        id: getUniqueId(),
        nombre: 'Artículos para el Hogar',
        emoji: '🏠',
        descripcion:
          'Objetos para uso doméstico: utensilios de cocina, decoración, organización y textiles para el hogar.',
      },
      {
        id: getUniqueId(),
        nombre: 'Electrónica',
        emoji: '📱',
        descripcion:
          'Dispositivos electrónicos como celulares, tablets, consolas, audio y pequeños gadgets.',
      },
      {
        id: getUniqueId(),
        nombre: 'Herramientas',
        emoji: '🔧',
        descripcion:
          'Herramientas manuales o eléctricas usadas para reparación, construcción o mantenimiento.',
      },
      {
        id: getUniqueId(),
        nombre: 'Higiene Personal',
        emoji: '🧼',
        descripcion:
          'Productos de cuidado e higiene: shampoo, jabón, desodorante, cuidado dental y similares.',
      },
      {
        id: getUniqueId(),
        nombre: 'Muebles',
        emoji: '🛋️',
        descripcion:
          'Mobiliario para casa u oficina: sillas, mesas, estanterías, camas y otros elementos grandes.',
      },
      {
        id: getUniqueId(),
        nombre: 'Oficina',
        emoji: '🖇️',
        descripcion:
          'Material y suministros para trabajo o estudio: papelería, escritorios, sillas y organización.',
      },
      {
        id: getUniqueId(),
        nombre: 'Productos de Limpieza para el Hogar',
        emoji: '🧽',
        descripcion:
          'Detergentes, desinfectantes, escobas, trapeadores y artículos para mantener el hogar limpio.',
      },
      {
        id: getUniqueId(),
        nombre: 'Regalos',
        emoji: '🎁',
        descripcion:
          'Compras destinadas a obsequiar: detalles, presentes en fechas especiales y celebraciones.',
      },
      {
        id: getUniqueId(),
        nombre: 'Ropa y Calzado',
        emoji: '👗',
        descripcion: 'Prendas de vestir y zapatos para cualquier temporada o actividad.',
      },
      {
        id: getUniqueId(),
        nombre: 'Tiempo libre',
        emoji: '🎲',
        descripcion:
          'Artículos recreativos: juegos de mesa, hobbies, entretenimiento y diversión personal.',
      },
    ],
    subgrupos: [],
  },
  {
    id: getUniqueId(),
    categoria: 'Gastos Financieros',
    emoji: '🛒',
    grupos: [
      {
        id: getUniqueId(),
        nombre: 'Servicios',
        emoji: '💡',
        descripcion: 'Cuotas y cargos por servicios financieros, mantenimiento de cuenta u otros.',
      },
      {
        id: getUniqueId(),
        nombre: 'Intereses',
        emoji: '💰',
        descripcion: 'Intereses generados por créditos, préstamos o financiamientos.',
      },
      {
        id: getUniqueId(),
        nombre: 'Comisiones',
        emoji: '💸',
        descripcion:
          'Comisiones por transferencias, retiros, pagos con tarjeta y operaciones bancarias.',
      },
    ],
  },

  {
    id: getUniqueId(),
    categoria: 'Mascota',
    emoji: '🐾',
    grupos: [
      {
        id: getUniqueId(),
        nombre: 'Baño',
        emoji: '🛁',
        descripcion:
          'Servicios o productos para aseo de la mascota: shampoo, cortes de pelo, limpieza.',
      },
      {
        id: getUniqueId(),
        nombre: 'Croquetas',
        emoji: '🍖',
        descripcion: 'Alimento seco o balanceado para el consumo diario de la mascota.',
      },
      {
        id: getUniqueId(),
        nombre: 'Juguetes y Accesorios',
        emoji: '🧸',
        descripcion:
          'Pelotas, cuerdas, collares, correas y otros objetos para entretenimiento y control.',
      },
      {
        id: getUniqueId(),
        nombre: 'Medicinas y Suplementos',
        emoji: '💊',
        descripcion:
          'Tratamientos veterinarios, suplementos nutricionales y productos de salud preventiva.',
      },
      {
        id: getUniqueId(),
        nombre: 'Otros',
        emoji: '❓',
        descripcion:
          'Gastos diversos relacionados con la mascota que no encajan en otras categorías.',
      },
      {
        id: getUniqueId(),
        nombre: 'Veterinario',
        emoji: '👨‍⚕️',
        descripcion: 'Consultas, revisiones, intervenciones y servicios médicos para la mascota.',
      },
    ],
    subgrupos: [],
  },
  {
    id: getUniqueId(),
    categoria: 'Tecnologia',
    emoji: '💻',
    grupos: [
      {
        id: getUniqueId(),
        nombre: 'Hardware',
        emoji: '🖥️',
        descripcion:
          'Equipos físicos y dispositivos: computadoras, accesorios, componentes y periféricos.',
      },
      {
        id: getUniqueId(),
        nombre: 'Software&Apps',
        emoji: '📲',
        descripcion:
          'Aplicaciones, servicios digitales, licencias y herramientas de productividad.',
      },
      {
        id: getUniqueId(),
        nombre: 'Telefonia Móvil',
        emoji: '📱',
        descripcion:
          'Servicios y productos relacionados con telefonía celular: planes, recargas y accesorios.',
      },
      {
        id: getUniqueId(),
        nombre: 'Web',
        emoji: '🌐',
        descripcion: 'Servicios y gastos de presencia digital: hosting, dominios y desarrollo web.',
      },
    ],
    subgrupos: {
      'Software&Apps': [
        {
          id: getUniqueId(),
          nombre: 'Nube',
          emoji: '☁️',
          descripcion:
            'Servicios de almacenamiento, infraestructura o herramientas basadas en la nube.',
        },
        {
          id: getUniqueId(),
          nombre: 'Apps',
          emoji: '📱',
          descripcion: 'Aplicaciones móviles o de escritorio adquiridas o con costo recurrente.',
        },
        {
          id: getUniqueId(),
          nombre: 'Suscripciones',
          emoji: '🔄',
          descripcion: 'Pagos periódicos por servicios digitales, software o contenido premium.',
        },
        {
          id: getUniqueId(),
          nombre: 'Software',
          emoji: '💾',
          descripcion: 'Programas instalables, licencias únicas o suites especializadas.',
        },
      ],
      Web: [
        {
          id: getUniqueId(),
          nombre: 'Alojamiento',
          emoji: '🏠',
          descripcion: 'Hosting y servidores para sitios o aplicaciones web.',
        },
        {
          id: getUniqueId(),
          nombre: 'Desarrollo',
          emoji: '💻',
          descripcion: 'Servicios o herramientas para crear y mantener proyectos web.',
        },
        {
          id: getUniqueId(),
          nombre: 'Dominios',
          emoji: '🌐',
          descripcion: 'Registro y renovación de nombres de dominio en internet.',
        },
      ],
      'Telefonia Móvil': [
        {
          id: getUniqueId(),
          nombre: 'Accesorios',
          emoji: '🔌',
          descripcion: 'Protectores, cargadores, auriculares y otros complementos para el móvil.',
        },
        {
          id: getUniqueId(),
          nombre: 'Planes',
          emoji: '📅',
          descripcion: 'Servicios contratados de datos, llamadas y mensajes.',
        },
        {
          id: getUniqueId(),
          nombre: 'Recargas',
          emoji: '💳',
          descripcion: 'Pagos para añadir saldo o paquetes específicos al servicio móvil.',
        },
      ],
      Hardware: [
        {
          id: getUniqueId(),
          nombre: 'Computadora',
          emoji: '🖥️',
          descripcion:
            'Compra o actualización de equipos principales: desktop, laptop, workstation.',
        },
        {
          id: getUniqueId(),
          nombre: 'Periféricos',
          emoji: '🖱️',
          descripcion: 'Teclados, ratones, monitores, impresoras y otros dispositivos externos.',
        },
        {
          id: getUniqueId(),
          nombre: 'Componentes',
          emoji: '🔩',
          descripcion: 'Partes internas: discos, memoria RAM, tarjetas de video y procesadores.',
        },
        {
          id: getUniqueId(),
          nombre: 'Video',
          emoji: '🎥',
          descripcion: 'Cámaras, capturadoras, accesorios para producción audiovisual.',
        },
      ],
    },
  },
  {
    id: getUniqueId(),
    categoria: 'Transporte',
    emoji: '🚗',
    grupos: [
      {
        id: getUniqueId(),
        nombre: 'Automovil',
        emoji: '🚗',
        descripcion: 'Gastos relacionados con propiedad y uso del automóvil.',
      },
      {
        id: getUniqueId(),
        nombre: 'Bicicleta',
        emoji: '🚲',
        descripcion: 'Compras y mantenimiento de bicicletas y elementos asociados.',
      },
      {
        id: getUniqueId(),
        nombre: 'Taxi',
        emoji: '🚕',
        descripcion: 'Pagos por servicios de transporte privado bajo demanda.',
      },
      {
        id: getUniqueId(),
        nombre: 'Transporte Público',
        emoji: '🚌',
        descripcion: 'Tarifas y pasajes de metro, autobús, tren u otros sistemas públicos.',
      },
    ],
    subgrupos: {
      Automovil: [
        {
          id: getUniqueId(),
          nombre: 'Estacionamiento',
          emoji: '🅿️',
          descripcion: 'Pagos por aparcar en calles, pensiones, estacionamientos y parquímetros.',
        },
        {
          id: getUniqueId(),
          nombre: 'Gasolina',
          emoji: '⛽',
          descripcion: 'Compra de combustible para el vehículo.',
        },
        {
          id: getUniqueId(),
          nombre: 'Mantenimiento',
          emoji: '🔧',
          descripcion:
            'Servicios de reparación preventiva y correctiva: cambio de aceite, refacciones.',
        },
      ],
      Bicicleta: [
        {
          id: getUniqueId(),
          nombre: 'Accesorios',
          emoji: '🔔',
          descripcion:
            'Cascos, luces, candados, timbres y otros agregados para seguridad y comodidad.',
        },
        {
          id: getUniqueId(),
          nombre: 'Mantenimiento',
          emoji: '🔧',
          descripcion:
            'Ajustes, refacciones y servicios para mantener la bicicleta en buen estado.',
        },
      ],
      Taxi: [
        {
          id: getUniqueId(),
          nombre: 'Viajes',
          emoji: '🚕',
          descripcion: 'Costos individuales por cada recorrido realizado en taxi.',
        },
      ],
      'Transporte Público': [],
    },
  },
  {
    id: getUniqueId(),
    categoria: 'Vida y Entretenimiento',
    emoji: '🎉',
    grupos: [
      {
        id: getUniqueId(),
        nombre: 'Juegos de Azar | Apuestas',
        emoji: '🎰',
        descripcion: 'Dinero destinado a juegos de azar y actividades de apuestas recreativas.',
      },
      {
        id: getUniqueId(),
        nombre: 'Malos Vicios',
        emoji: '🚬',
        descripcion: 'Consumo de productos nocivos como tabaco, alcohol y otros hábitos.',
      },
      {
        id: getUniqueId(),
        nombre: 'Viajes',
        emoji: '✈️',
        descripcion: 'Planeación y realización de desplazamientos recreativos o de descanso.',
      },
      {
        id: getUniqueId(),
        nombre: 'TV Streaming',
        emoji: '📺',
        descripcion: 'Servicios de suscripción para ver series, películas y contenido digital.',
      },
      {
        id: getUniqueId(),
        nombre: 'Libros | Audio',
        emoji: '📚',
        descripcion: 'Material de lectura y audio: libros físicos, digitales y audiolibros.',
      },
      {
        id: getUniqueId(),
        nombre: 'Educación y Desarrollo',
        emoji: '🎓',
        descripcion: 'Formación académica y profesional: cursos, talleres y recursos educativos.',
      },
      {
        id: getUniqueId(),
        nombre: 'Pasatiempos',
        emoji: '🎨',
        descripcion: 'Actividades recreativas y creativas realizadas por gusto personal.',
      },
      {
        id: getUniqueId(),
        nombre: 'Eventos Sociales',
        emoji: '🎊',
        descripcion: 'Participación en celebraciones y reuniones sociales.',
      },
      {
        id: getUniqueId(),
        nombre: 'Eventos',
        emoji: '🎟️',
        descripcion: 'Acceso a espectáculos, conciertos, cine y entretenimiento en vivo.',
      },
      {
        id: getUniqueId(),
        nombre: 'Fitness',
        emoji: '🏋️',
        descripcion: 'Actividades físicas y deportivas para mantener salud y condición.',
      },
      {
        id: getUniqueId(),
        nombre: 'Cuidado Personal',
        emoji: '💇',
        descripcion: 'Servicios y productos para mejorar apariencia y bienestar personal.',
      },
      {
        id: getUniqueId(),
        nombre: 'Salud',
        emoji: '🏥',
        descripcion: 'Gastos orientados al cuidado médico y bienestar físico.',
      },
    ],
    subgrupos: {
      'Juegos de Azar | Apuestas': [
        {
          id: getUniqueId(),
          nombre: 'Loteria',
          emoji: '🎲',
          descripcion: 'Compra de boletos o participaciones en sorteos oficiales.',
        },
        {
          id: getUniqueId(),
          nombre: 'Casino',
          emoji: '🎰',
          descripcion: 'Participación en juegos de azar dentro de casinos físicos o en línea.',
        },
        {
          id: getUniqueId(),
          nombre: 'Apuestas Deportivas',
          emoji: '🏆',
          descripcion: 'Dinero colocado en pronósticos de eventos deportivos.',
        },
      ],
      'Malos Vicios': [
        {
          id: getUniqueId(),
          nombre: 'Cigarros',
          emoji: '🚬',
          descripcion: 'Compra de tabaco y derivados para consumo personal.',
        },
        {
          id: getUniqueId(),
          nombre: 'Alcohol',
          emoji: '🍺',
          descripcion: 'Bebidas alcohólicas para consumo social o personal.',
        },
        {
          id: getUniqueId(),
          nombre: 'Otros',
          emoji: '❓',
          descripcion: 'Otros hábitos o consumos nocivos no clasificados.',
        },
      ],
      Viajes: [
        {
          id: getUniqueId(),
          nombre: 'Comida',
          emoji: '🍽️',
          descripcion: 'Alimentación durante viajes: restaurantes, snacks y provisiones.',
        },
        {
          id: getUniqueId(),
          nombre: 'Avión',
          emoji: '✈️',
          descripcion: 'Boletos y servicios relacionados con vuelos comerciales.',
        },
        {
          id: getUniqueId(),
          nombre: 'Hospedaje',
          emoji: '🏨',
          descripcion: 'Alojamiento temporal: hoteles, hostales, alquileres vacacionales.',
        },
        {
          id: getUniqueId(),
          nombre: 'Transporte',
          emoji: '🚗',
          descripcion: 'Movilidad en destino: renta de autos, traslados, tours y otros.',
        },
        {
          id: getUniqueId(),
          nombre: 'Otros',
          emoji: '❓',
          descripcion: 'Gastos misceláneos relacionados con la experiencia de viaje.',
        },
      ],
      'TV Streaming': [],
      'Libros | Audio': [
        {
          id: getUniqueId(),
          nombre: 'Libros Fisicos',
          emoji: '📖',
          descripcion: 'Libros impresos adquiridos en tiendas físicas o en línea.',
        },
        {
          id: getUniqueId(),
          nombre: 'Ebooks',
          emoji: '📱',
          descripcion: 'Libros digitales para lectura en dispositivos electrónicos.',
        },
        {
          id: getUniqueId(),
          nombre: 'Audiolibros',
          emoji: '🎧',
          descripcion: 'Contenido narrado en formato de audio para escucha en plataformas.',
        },
      ],
      'Educación y Desarrollo': [
        {
          id: getUniqueId(),
          nombre: 'Cursos',
          emoji: '🎓',
          descripcion: 'Formación estructurada en línea o presencial para adquirir habilidades.',
        },
        {
          id: getUniqueId(),
          nombre: 'Libros',
          emoji: '📚',
          descripcion: 'Textos orientados al crecimiento profesional o personal.',
        },
        {
          id: getUniqueId(),
          nombre: 'Conferencias',
          emoji: '🎤',
          descripcion: 'Asistencia a eventos educativos, seminarios o charlas especializadas.',
        },
        {
          id: getUniqueId(),
          nombre: 'Otros',
          emoji: '❓',
          descripcion: 'Material adicional no clasificado para desarrollo y aprendizaje.',
        },
      ],
      Pasatiempos: [
        {
          id: getUniqueId(),
          nombre: 'Clases de Baile',
          emoji: '💃',
          descripcion: 'Pagos por lecciones de danza recreativa o artística.',
        },
        {
          id: getUniqueId(),
          nombre: 'Batucada',
          emoji: '🥁',
          descripcion: 'Participación en grupos musicales o compra de instrumentos relacionados.',
        },
        {
          id: getUniqueId(),
          nombre: 'Otros',
          emoji: '❓',
          descripcion: 'Hobbies varios no especificados en otras categorías.',
        },
      ],
      'Eventos Sociales': [
        {
          id: getUniqueId(),
          nombre: 'Cumpleaños',
          emoji: '🎂',
          descripcion: 'Gastos asociados a celebración de cumpleaños propios o ajenos.',
        },
        {
          id: getUniqueId(),
          nombre: 'Bodas',
          emoji: '💍',
          descripcion: 'Participación o aportes financieros en eventos matrimoniales.',
        },
        {
          id: getUniqueId(),
          nombre: 'Reuniones',
          emoji: '🤝',
          descripcion: 'Encuentros sociales informales: comida, bebida y organización.',
        },
        {
          id: getUniqueId(),
          nombre: 'Otros',
          emoji: '❓',
          descripcion: 'Otros eventos sociales no clasificados (aniversarios, despedidas, etc.).',
        },
      ],
      Eventos: [
        {
          id: getUniqueId(),
          nombre: 'Cine',
          emoji: '🎬',
          descripcion: 'Entradas y consumos relacionados con funciones de cine.',
        },
        {
          id: getUniqueId(),
          nombre: 'Conciertos',
          emoji: '🎵',
          descripcion: 'Boletos y gastos asociados a presentaciones musicales en vivo.',
        },
        {
          id: getUniqueId(),
          nombre: 'Teatro',
          emoji: '🎭',
          descripcion: 'Funciones teatrales y eventos escénicos.',
        },
        {
          id: getUniqueId(),
          nombre: 'Otros',
          emoji: '❓',
          descripcion: 'Otros espectáculos o eventos culturales no definidos.',
        },
      ],
      Fitness: [
        {
          id: getUniqueId(),
          nombre: 'Gym',
          emoji: '🏋️',
          descripcion: 'Suscripciones o pases a gimnasios y centros deportivos.',
        },
        {
          id: getUniqueId(),
          nombre: 'Clases',
          emoji: '🏫',
          descripcion:
            'Lecciones deportivas como natación, artes marciales o entrenamientos especializados.',
        },
        {
          id: getUniqueId(),
          nombre: 'Equipo',
          emoji: '🎽',
          descripcion: 'Compra de ropa y accesorios deportivos para entrenamiento.',
        },
        {
          id: getUniqueId(),
          nombre: 'Futbol',
          emoji: '⚽',
          descripcion: 'Inscripción, renta de canchas o artículos específicos para jugar fútbol.',
        },
        {
          id: getUniqueId(),
          nombre: 'Yoga',
          emoji: '🧘',
          descripcion: 'Clases, accesorios y material para práctica de yoga y meditación.',
        },
      ],
      'Cuidado Personal': [
        {
          id: getUniqueId(),
          nombre: 'Peluquería',
          emoji: '💇',
          descripcion: 'Cortes de cabello, peinados y tratamientos capilares.',
        },
        {
          id: getUniqueId(),
          nombre: 'Spa',
          emoji: '💆',
          descripcion: 'Masajes, faciales y servicios de relajación y cuidado corporal.',
        },
      ],
      Salud: [
        {
          id: getUniqueId(),
          nombre: 'Farmacia',
          emoji: '💊',
          descripcion: 'Compra de medicamentos de venta libre y productos sanitarios.',
        },
        {
          id: getUniqueId(),
          nombre: 'Medicinas',
          emoji: '💊',
          descripcion: 'Tratamientos prescritos y medicación específica.',
        },
        {
          id: getUniqueId(),
          nombre: 'Dentista',
          emoji: '🦷',
          descripcion: 'Servicios odontológicos preventivos y correctivos.',
        },
        {
          id: getUniqueId(),
          nombre: 'Consultas Médicas',
          emoji: '👨‍⚕️',
          descripcion: 'Atención profesional general y especializada.',
        },
        {
          id: getUniqueId(),
          nombre: 'Exámenes',
          emoji: '🧪',
          descripcion: 'Pruebas diagnósticas y estudios clínicos.',
        },
        {
          id: getUniqueId(),
          nombre: 'Terapias',
          emoji: '🧘',
          descripcion: 'Sesiones terapéuticas físicas o emocionales.',
        },
        {
          id: getUniqueId(),
          nombre: 'Fisioterapia',
          emoji: '🦵',
          descripcion: 'Tratamientos de rehabilitación física y recuperación funcional.',
        },
      ],
    },
  },
  {
    id: getUniqueId(),
    categoria: 'Vivienda',
    emoji: '🏠',
    grupos: [
      {
        id: getUniqueId(),
        nombre: 'Mantenimiento Y Reparaciones',
        emoji: '🛠️',
        descripcion: 'Trabajos y servicios para conservar y reparar la vivienda.',
      },
      {
        id: getUniqueId(),
        nombre: 'Servicios',
        emoji: '💡',
        descripcion: 'Pagos periódicos de insumos básicos como agua, luz y gas.',
      },
      {
        id: getUniqueId(),
        nombre: 'Internet y Telefonía',
        emoji: '🌐',
        descripcion: 'Servicios de telecomunicaciones: telefonía fija y acceso a internet.',
      },
      {
        id: getUniqueId(),
        nombre: 'Limpieza del Hogar',
        emoji: '🧹',
        descripcion: 'Productos y servicios para mantener la limpieza y orden del hogar.',
      },
      {
        id: getUniqueId(),
        nombre: 'Mantenimiento Copilco',
        emoji: '🏢',
        descripcion:
          'Cuotas y servicios compartidos relacionados con áreas comunes o administración.',
      },
    ],
    subgrupos: {
      'Mantenimiento Y Reparaciones': [
        {
          id: getUniqueId(),
          nombre: 'Fontanería',
          emoji: '🚰',
          descripcion: 'Reparaciones y mantenimiento de tuberías, grifos y sistemas de agua.',
        },
        {
          id: getUniqueId(),
          nombre: 'Electricidad',
          emoji: '💡',
          descripcion:
            'Ajustes y reparaciones en cableado, enchufes, iluminación y sistemas eléctricos.',
        },
        {
          id: getUniqueId(),
          nombre: 'Carpintería',
          emoji: '🪚',
          descripcion:
            'Trabajos con madera: fabricación, ajuste y reparación de muebles o estructuras.',
        },
      ],
      Servicios: [
        {
          id: getUniqueId(),
          nombre: 'Gas',
          emoji: '🛢️',
          descripcion: 'Pago por suministro de gas doméstico (natural o LP).',
        },
        {
          id: getUniqueId(),
          nombre: 'Agua',
          emoji: '🚰',
          descripcion: 'Facturación o recargas por uso de agua potable.',
        },
        {
          id: getUniqueId(),
          nombre: 'Luz',
          emoji: '💡',
          descripcion: 'Consumo eléctrico y cargo por servicio.',
        },
        {
          id: getUniqueId(),
          nombre: 'Recolección de Basura',
          emoji: '🗑️',
          descripcion: 'Servicios municipales o privados de gestión de residuos.',
        },
      ],
      'Internet y Telefonía': [
        {
          id: getUniqueId(),
          nombre: 'Teléfono',
          emoji: '📞',
          descripcion: 'Servicio de telefonía fija o línea residencial.',
        },
        {
          id: getUniqueId(),
          nombre: 'Internet',
          emoji: '🌐',
          descripcion: 'Acceso a banda ancha, fibra óptica o servicios inalámbricos domésticos.',
        },
      ],
      'Limpieza del Hogar': [
        {
          id: getUniqueId(),
          nombre: 'Productos de Limpieza',
          emoji: '🧴',
          descripcion: 'Detergentes, limpiadores, desinfectantes y herramientas de aseo.',
        },
        {
          id: getUniqueId(),
          nombre: 'Servicios de Limpieza',
          emoji: '🧹',
          descripcion: 'Contratación de personal o empresas para aseo del hogar.',
        },
      ],
      'Mantenimiento Copilco': [
        {
          id: getUniqueId(),
          nombre: 'Reparaciones',
          emoji: '🛠️',
          descripcion: 'Arreglos en áreas comunes o estructuras compartidas.',
        },
        {
          id: getUniqueId(),
          nombre: 'Cuotas de Mantenimiento',
          emoji: '💵',
          descripcion: 'Pagos regulares para administración y conservación de espacios.',
        },
      ],
    },
  },
];

export default dataCategoriasGastos;
