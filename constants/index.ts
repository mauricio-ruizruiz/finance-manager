let uniqueIdCounter = 1;
const getUniqueId = () => uniqueIdCounter++;

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

export const categoriasGastosDefault = [
  // Categorias de Gastos
  {
    id: getUniqueId(),
    categoria: 'Alimentos',
    categoriaicon: '🍽️',
    grupos: [
      {
        id: getUniqueId(),
        grupo: 'Comercios',
        grupoicon: '🏪',
        descripcion: 'Gastos relacionados con comercios, incluyendo restaurantes y cafeterías.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Restaurante',
            subgrupoicon: '🍽️',
            descripcion:
              'Gastos relacionados con restaurantes, incluyendo cenas y comidas fuera de casa.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Café',
            subgrupoicon: '☕',
            descripcion: 'Gastos relacionados con cafés, incluyendo bebidas y snacks.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Bar',
            subgrupoicon: '🍻',
            descripcion: 'Gastos relacionados con bares, incluyendo bebidas y entretenimiento.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Comida',
        grupoicon: '🍔',
        descripcion:
          'Gastos relacionados con la comida, incluyendo comida a domicilio y comida rápida.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'A Domicilio',
            subgrupoicon: '🛵',
            descripcion:
              'Gastos relacionados con comida a domicilio, incluyendo pedidos y entregas.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Callejera',
            subgrupoicon: '🌮',
            descripcion:
              'Gastos relacionados con comida callejera, incluyendo puestos y vendedores ambulantes.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Comida Rápida',
            subgrupoicon: '🍔',
            descripcion:
              'Gastos relacionados con comida rápida, incluyendo cadenas de comida rápida.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Tiendita',
            subgrupoicon: '🏪',
            descripcion:
              'Gastos relacionados con tiendas, incluyendo compras en tiendas de conveniencia.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Despensa',
        grupoicon: '🧺',
        descripcion:
          'Gastos relacionados con la compra de productos de despensa, como mercado y supermercado.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Mercado',
            subgrupoicon: '🥕',
            descripcion:
              'Gastos relacionados con mercados, incluyendo compras de productos frescos.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Supermercado',
            subgrupoicon: '🛒',
            descripcion:
              'Gastos relacionados con supermercados, incluyendo compras de productos en grandes cantidades.',
            tipo: 'Gasto Fijo',
          },
        ],
      },
    ],
  },
  {
    id: getUniqueId(),
    categoria: 'Compras',
    categoriaicon: '🛒',
    grupos: [
      {
        id: getUniqueId(),
        grupo: 'Accesorios',
        grupoicon: '🧢',
        descripcion:
          'Artículos complementarios como joyería, gorros, cinturones, mochilas y otros elementos de uso personal.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Artículos para el Hogar',
        grupoicon: '🧺',
        descripcion:
          'Objetos para uso doméstico: utensilios de cocina, decoración, organización y textiles para el hogar.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Electrónica',
        grupoicon: '📱',
        descripcion:
          'Dispositivos electrónicos como celulares, tablets, consolas, audio y pequeños gadgets.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Herramientas',
        grupoicon: '🔧',
        descripcion:
          'Herramientas manuales o eléctricas usadas para reparación, construcción o mantenimiento.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Higiene Personal',
        grupoicon: '🧼',
        descripcion:
          'Productos de cuidado e higiene: shampoo, jabón, desodorante, cuidado dental y similares.',
        tipo: 'Gasto Fijo',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Muebles',
        grupoicon: '🛋️',
        descripcion:
          'Mobiliario para casa u oficina: sillas, mesas, estanterías, camas y otros elementos grandes.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Oficina',
        grupoicon: '🖇️',
        descripcion:
          'Material y suministros para trabajo o estudio: papelería, escritorios, sillas y organización.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Productos de Limpieza para el Hogar',
        grupoicon: '🧽',
        descripcion:
          'Detergentes, desinfectantes, escobas, trapeadores y artículos para mantener el hogar limpio.',
        tipo: 'Gasto Fijo',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Regalos',
        grupoicon: '🎁',
        descripcion:
          'Compras destinadas a obsequiar: detalles, presentes en fechas especiales y celebraciones.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Ropa y Calzado',
        grupoicon: '👗',
        descripcion: 'Prendas de vestir y zapatos para cualquier temporada o actividad.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Tiempo libre',
        grupoicon: '🎲',
        descripcion:
          'Artículos recreativos: juegos de mesa, hobbies, entretenimiento y diversión personal.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
    ],
  },
  {
    id: getUniqueId(),
    categoria: 'Gastos Financieros',
    categoriaicon: '💳',
    grupos: [
      {
        id: getUniqueId(),
        grupo: 'Servicios',
        grupoicon: '🏦',
        descripcion: 'Cuotas y cargos por servicios financieros, mantenimiento de cuenta u otros.',
        tipo: 'Gasto Fijo',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Intereses',
        grupoicon: '📈',
        descripcion: 'Intereses generados por créditos, préstamos o financiamientos.',
        tipo: 'Gasto Fijo',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Comisiones',
        grupoicon: '💸',
        descripcion:
          'Comisiones por transferencias, retiros, pagos con tarjeta y operaciones bancarias.',
        tipo: 'Gasto Fijo',
        subgrupos: '',
      },
    ],
  },
  {
    id: getUniqueId(),
    categoria: 'Mascota',
    categoriaicon: '🐾',
    grupos: [
      {
        id: getUniqueId(),
        grupo: 'Baño',
        grupoicon: '🛁',
        descripcion:
          'Servicios o productos para aseo de la mascota: shampoo, cortes de pelo, limpieza.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Croquetas',
        grupoicon: '🥫',
        descripcion: 'Alimento seco o balanceado para el consumo diario de la mascota.',
        tipo: 'Gasto Fijo',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Juguetes y Accesorios',
        grupoicon: '🧸',
        descripcion:
          'Pelotas, cuerdas, collares, correas y otros objetos para entretenimiento y control.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Medicinas y Suplementos',
        grupoicon: '💊',
        descripcion:
          'Tratamientos veterinarios, suplementos nutricionales y productos de salud preventiva.',
        tipo: 'Gasto Fijo',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Otros',
        grupoicon: '❓',
        descripcion:
          'Gastos diversos relacionados con la mascota que no encajan en otras categorías.',
        tipo: 'Gasto Variable',
        subgrupos: '',
      },
      {
        id: getUniqueId(),
        grupo: 'Veterinario',
        grupoicon: '🩺',
        descripcion: 'Consultas, revisiones, intervenciones y servicios médicos para la mascota.',
        tipo: 'Gasto Fijo',
        subgrupos: '',
      },
    ],
  },
  {
    id: getUniqueId(),
    categoria: 'Tecnologia',
    categoriaicon: '💻',
    grupos: [
      {
        id: getUniqueId(),
        grupo: 'Hardware',
        grupoicon: '🖥️',
        descripcion:
          'Equipos físicos y dispositivos: computadoras, accesorios, componentes y periféricos.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Computadora',
            subgrupoicon: '💻',
            descripcion:
              'Compra o actualización de equipos principales: desktop, laptop, workstation.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Periféricos',
            subgrupoicon: '🖱️',
            descripcion: 'Teclados, ratones, monitores, impresoras y otros dispositivos externos.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Componentes',
            subgrupoicon: '🔩',
            descripcion: 'Partes internas: discos, memoria RAM, tarjetas de video y procesadores.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Video',
            subgrupoicon: '🎥',
            descripcion: 'Cámaras, capturadoras, accesorios para producción audiovisual.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Software & Apps',
        grupoicon: '📲',
        descripcion:
          'Aplicaciones, servicios digitales, licencias y herramientas de productividad.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Nube',
            subgrupoicon: '☁️',
            descripcion:
              'Servicios de almacenamiento, infraestructura o herramientas basadas en la nube.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Apps',
            subgrupoicon: '📱',
            descripcion: 'Aplicaciones móviles o de escritorio adquiridas o con costo recurrente.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Suscripciones',
            subgrupoicon: '🔄',
            descripcion: 'Pagos periódicos por servicios digitales, software o contenido premium.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Software',
            subgrupoicon: '💾',
            descripcion: 'Programas instalables, licencias únicas o suites especializadas.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Telefonia Móvil',
        grupoicon: '📱',
        descripcion:
          'Servicios y productos relacionados con telefonía celular: planes, recargas y accesorios.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Accesorios',
            subgrupoicon: '🔌',
            descripcion: 'Protectores, cargadores, auriculares y otros complementos para el móvil.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Planes',
            subgrupoicon: '📶',
            descripcion: 'Servicios contratados de datos, llamadas y mensajes.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Recargas',
            subgrupoicon: '💳',
            descripcion: 'Pagos para añadir saldo o paquetes específicos al servicio móvil.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Web',
        grupoicon: '🌐',
        descripcion: 'Servicios y gastos de presencia digital: hosting, dominios y desarrollo web.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Alojamiento',
            subgrupoicon: '🗄️',
            descripcion: 'Hosting y servidores para sitios o aplicaciones web.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Desarrollo',
            subgrupoicon: '💻',
            descripcion: 'Servicios o herramientas para crear y mantener proyectos web.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Dominios',
            subgrupoicon: '🌐',
            descripcion: 'Registro y renovación de nombres de dominio en internet.',
            tipo: 'Gasto Fijo',
          },
        ],
      },
    ],
  },
  {
    id: getUniqueId(),
    categoria: 'Transporte',
    categoriaicon: '🚗',
    grupos: [
      {
        id: getUniqueId(),
        grupo: 'Automovil',
        grupoicon: '🚗',
        descripcion: 'Gastos relacionados con propiedad y uso del automóvil.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Estacionamiento',
            subgrupoicon: '🅿️',
            descripcion: 'Pagos por aparcar en calles, pensiones, estacionamientos y parquímetros.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Gasolina',
            subgrupoicon: '⛽',
            descripcion: 'Compra de combustible para el vehículo.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Mantenimiento',
            subgrupoicon: '🔧',
            descripcion:
              'Servicios de reparación preventiva y correctiva: cambio de aceite, refacciones.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Bicicleta',
        grupoicon: '🚲',
        descripcion: 'Compras y mantenimiento de bicicletas y elementos asociados.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Accesorios',
            subgrupoicon: '🔔',
            descripcion:
              'Cascos, luces, candados, timbres y otros agregados para seguridad y comodidad.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Mantenimiento',
            subgrupoicon: '🔧',
            descripcion:
              'Ajustes, refacciones y servicios para mantener la bicicleta en buen estado.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Taxi',
        grupoicon: '🚕',
        descripcion: 'Pagos por servicios de transporte privado bajo demanda.',
        tipo: 'Gasto Variable',
        subgrupos: [],
      },
      {
        id: getUniqueId(),
        grupo: 'Transporte Público',
        grupoicon: '🚌',
        descripcion: 'Tarifas y pasajes de metro, autobús, tren u otros sistemas públicos.',
        tipo: 'Gasto Fijo',
        subgrupos: [],
      },
    ],
  },
  {
    id: getUniqueId(),
    categoria: 'Vida y Entretenimiento',
    catgeoriaicon: '🎉',
    grupos: [
      {
        id: getUniqueId(),
        grupo: 'Juegos de Azar | Apuestas',
        grupoicon: '🎰',
        descripcion: 'Dinero destinado a juegos de azar y actividades de apuestas recreativas.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Loteria',
            subgrupoicon: '🎟️',
            descripcion: 'Compra de boletos o participaciones en sorteos oficiales.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Casino',
            subgrupoicon: '🎰',
            descripcion: 'Participación en juegos de azar dentro de casinos físicos o en línea.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Apuestas Deportivas',
            subgrupoicon: '🏆',
            descripcion: 'Dinero colocado en pronósticos de eventos deportivos.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Malos Vicios',
        grupoicon: '🚬',
        descripcion: 'Consumo de productos nocivos como tabaco, alcohol y otros hábitos.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Cigarros',
            subgrupoicon: '🚬',
            descripcion: 'Compra de tabaco y derivados para consumo personal.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Alcohol',
            subgrupoicon: '🍺',
            descripcion: 'Bebidas alcohólicas para consumo social o personal.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Otros',
            subgrupoicon: '❓',
            descripcion: 'Otros hábitos o consumos nocivos no clasificados.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Viajes',
        grupoicon: '✈️',
        descripcion: 'Planeación y realización de desplazamientos recreativos o de descanso.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Comida',
            subgrupoicon: '🍽️',
            descripcion: 'Alimentación durante viajes: restaurantes, snacks y provisiones.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Avión',
            subgrupoicon: '✈️',
            descripcion: 'Boletos y servicios relacionados con vuelos comerciales.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Hospedaje',
            subgrupoicon: '🏨',
            descripcion: 'Alojamiento temporal: hoteles, hostales, alquileres vacacionales.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Transporte',
            subgrupoicon: '🚗',
            descripcion: 'Movilidad en destino: renta de autos, traslados, tours y otros.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Otros',
            subgrupoicon: '❓',
            descripcion: 'Gastos misceláneos relacionados con la experiencia de viaje.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'TV Streaming',
        grupoicon: '📺',
        descripcion: 'Servicios de suscripción para ver series, películas y contenido digital.',
        tipo: 'Gasto Variable',
        subgrupos: [],
      },
      {
        id: getUniqueId(),
        grupo: 'Libros | Audio',
        grupoicon: '📚',
        descripcion: 'Material de lectura y audio: libros físicos, digitales y audiolibros.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Libros Fisicos',
            subgrupoicon: '📖',
            descripcion: 'Libros impresos adquiridos en tiendas físicas o en línea.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Ebooks',
            subgrupoicon: '📱',
            descripcion: 'Libros digitales para lectura en dispositivos electrónicos.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Audiolibros',
            subgrupoicon: '🎧',
            descripcion: 'Contenido narrado en formato de audio para escucha en plataformas.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Educación y Desarrollo',
        grupoicon: '🎓',
        descripcion: 'Formación académica y profesional: cursos, talleres y recursos educativos.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Cursos',
            subgrupoicon: '🎓',
            descripcion: 'Formación estructurada en línea o presencial para adquirir habilidades.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Libros',
            subgrupoicon: '📚',
            descripcion: 'Textos orientados al crecimiento profesional o personal.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Conferencias',
            subgrupoicon: '🎤',
            descripcion: 'Asistencia a eventos educativos, seminarios o charlas especializadas.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Otros',
            subgrupoicon: '❓',
            descripcion: 'Material adicional no clasificado para desarrollo y aprendizaje.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Pasatiempos',
        grupoicon: '🎨',
        descripcion: 'Actividades recreativas y creativas realizadas por gusto personal.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Clases de Baile',
            subgrupoicon: '💃',
            descripcion: 'Pagos por lecciones de danza recreativa o artística.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Batucada',
            subgrupoicon: '🥁',
            descripcion: 'Participación en grupos musicales o compra de instrumentos relacionados.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Otros',
            subgrupoicon: '❓',
            descripcion: 'Hobbies varios no especificados en otras categorías.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Eventos Sociales',
        grupoicon: '🎊',
        descripcion: 'Participación en celebraciones y reuniones sociales.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Cumpleaños',
            subgrupoicon: '🎂',
            descripcion: 'Gastos asociados a celebración de cumpleaños propios o ajenos.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Bodas',
            subgrupoicon: '💍',
            descripcion: 'Participación o aportes financieros en eventos matrimoniales.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Reuniones',
            subgrupoicon: '🤝',
            descripcion: 'Encuentros sociales informales: comida, bebida y organización.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Otros',
            subgrupoicon: '❓',
            descripcion: 'Otros eventos sociales no clasificados (aniversarios, despedidas, etc.).',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Eventos',
        grupoicon: '🎟️',
        descripcion: 'Acceso a espectáculos, conciertos, cine y entretenimiento en vivo.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Cine',
            subgrupoicon: '🎬',
            descripcion: 'Entradas y consumos relacionados con funciones de cine.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Conciertos',
            subgrupoicon: '🎵',
            descripcion: 'Boletos y gastos asociados a presentaciones musicales en vivo.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Teatro',
            subgrupoicon: '🎭',
            descripcion: 'Funciones teatrales y eventos escénicos.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Otros',
            subgrupoicon: '❓',
            descripcion: 'Otros espectáculos o eventos culturales no definidos.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Fitness',
        grupoicon: '🏋️',
        descripcion: 'Actividades físicas y deportivas para mantener salud y condición.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Gym',
            subgrupoicon: '🏋️',
            descripcion: 'Suscripciones o pases a gimnasios y centros deportivos.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Clases',
            subgrupoicon: '🏫',
            descripcion:
              'Lecciones deportivas como natación, artes marciales o entrenamientos especializados.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Equipo',
            subgrupoicon: '🎽',
            descripcion: 'Compra de ropa y accesorios deportivos para entrenamiento.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Futbol',
            subgrupoicon: '⚽',
            descripcion: 'Inscripción, renta de canchas o artículos específicos para jugar fútbol.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Yoga',
            subgrupoicon: '🧘',
            descripcion: 'Clases, accesorios y material para práctica de yoga y meditación.',
            tipo: 'Gasto Fijo',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Cuidado Personal',
        grupoicon: '💇',
        descripcion: 'Servicios y productos para mejorar apariencia y bienestar personal.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Peluquería',
            subgrupoicon: '💇',
            descripcion: 'Cortes de cabello, peinados y tratamientos capilares.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Spa',
            subgrupoicon: '💆',
            descripcion: 'Masajes, faciales y servicios de relajación y cuidado corporal.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Salud',
        grupoicon: '🏥',
        descripcion: 'Gastos orientados al cuidado médico y bienestar físico.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Farmacia',
            subgrupoicon: '💊',
            descripcion: 'Compra de medicamentos de venta libre y productos sanitarios.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Medicinas',
            subgrupoicon: '💊',
            descripcion: 'Tratamientos prescritos y medicación específica.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Dentista',
            subgrupoicon: '🦷',
            descripcion: 'Servicios odontológicos preventivos y correctivos.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Consultas Médicas',
            subgrupoicon: '🩺',
            descripcion: 'Atención profesional general y especializada.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Exámenes',
            subgrupoicon: '🧪',
            descripcion: 'Pruebas diagnósticas y estudios clínicos.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Terapias',
            subgrupoicon: '🧘',
            descripcion: 'Sesiones terapéuticas físicas o emocionales.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Fisioterapia',
            subgrupoicon: '🦵',
            descripcion: 'Tratamientos de rehabilitación física y recuperación funcional.',
            tipo: 'Gasto Fijo',
          },
        ],
      },
    ],
  },
  {
    id: getUniqueId(),
    categoria: 'Vivienda',
    categoriaicon: '🏠',
    grupos: [
      {
        id: getUniqueId(),
        grupo: 'Mantenimiento Y Reparaciones',
        grupoicon: '🛠️',
        descripcion: 'Trabajos y servicios para conservar y reparar la vivienda.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Fontanería',
            subgrupoicon: '🚰',
            descripcion: 'Reparaciones y mantenimiento de tuberías, grifos y sistemas de agua.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Electricidad',
            subgrupoicon: '💡',
            descripcion:
              'Ajustes y reparaciones en cableado, enchufes, iluminación y sistemas eléctricos.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Carpintería',
            subgrupoicon: '🪚',
            descripcion:
              'Trabajos con madera: fabricación, ajuste y reparación de muebles o estructuras.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Servicios',
        grupoicon: '💡',
        descripcion: 'Pagos periódicos de insumos básicos como agua, luz y gas.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Gas',
            subgrupoicon: '🔥',
            descripcion: 'Pago por suministro de gas doméstico (natural o LP).',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Agua',
            subgrupoicon: '🚰',
            descripcion: 'Facturación o recargas por uso de agua potable.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Luz',
            subgrupoicon: '💡',
            descripcion: 'Consumo eléctrico y cargo por servicio.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Recolección de Basura',
            subgrupoicon: '🗑️',
            descripcion: 'Servicios municipales o privados de gestión de residuos.',
            tipo: 'Gasto Variable',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Internet y Telefonía',
        grupoicon: '🌐',
        descripcion: 'Servicios de telecomunicaciones: telefonía fija y acceso a internet.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Teléfono',
            subgrupoicon: '📞',
            descripcion: 'Servicio de telefonía fija o línea residencial.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Internet',
            subgrupoicon: '🌐',
            descripcion: 'Acceso a banda ancha, fibra óptica o servicios inalámbricos domésticos.',
            tipo: 'Gasto Fijo',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Limpieza del Hogar',
        grupoicon: '🧹',
        descripcion: 'Productos y servicios para mantener la limpieza y orden del hogar.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Productos de Limpieza',
            subgrupoicon: '🧴',
            descripcion: 'Detergentes, limpiadores, desinfectantes y herramientas de aseo.',
            tipo: 'Gasto Fijo',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Servicios de Limpieza',
            subgrupoicon: '🧹',
            descripcion: 'Contratación de personal o empresas para aseo del hogar.',
            tipo: 'Gasto Fijo',
          },
        ],
      },
      {
        id: getUniqueId(),
        grupo: 'Mantenimiento Copilco',
        grupoicon: '🏢',
        descripcion:
          'Cuotas y servicios compartidos relacionados con áreas comunes o administración.',
        tipo: '',
        subgrupos: [
          {
            id: getUniqueId(),
            subgrupo: 'Reparaciones',
            subgrupoicon: '🛠️',
            descripcion: 'Arreglos en áreas comunes o estructuras compartidas.',
            tipo: 'Gasto Variable',
          },
          {
            id: getUniqueId(),
            subgrupo: 'Cuotas de Mantenimiento',
            subgrupoicon: '💵',
            descripcion: 'Pagos regulares para administración y conservación de espacios.',
            tipo: 'Gasto Fijo',
          },
        ],
      },
    ],
  },
];
