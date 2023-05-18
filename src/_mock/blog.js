import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Como mejorar el rendimiento en sus cultivos',
  'Nueva serie de sensores climaticos',
  'Los agricultores recurren a soluciones de alta tecnología para mejorar el rendimiento de los cultivos',
  'Los drones impulsados por inteligencia artificial transforman las operaciones de cultivo',
  'Nuevos métodos de agricultura sostenible ofrecen esperanza para el futuro',
  'Los sistemas inteligentes de riego reducen el desperdicio de agua y aumentan el crecimiento de los cultivos',
  'Como aumentar sus ventas con 5 tips sencillos',
  'Las herramientas de agricultura digital ayudan a los agricultores a tomar decisiones basadas en datos',
  'Cursos gratuitos para aprender sobre mejores practicas al momento de cultivar',
  'La agricultura inteligente al clima: adaptarse a un entorno cambiante',
  'Como prepararse para la temporada del niño y que cultivos son viables cultivar durante este periodo',
  'Los sensores de suelo y clima permiten una gestión más precisa de los cultivos',
  'Nueva serie de dispositivos AHCI-1245 con mejoras energeticas',
  'La tecnología de invernadero reduce el uso de pesticidas y mejora la calidad de los cultivos',
  'La tecnología de micro-irrigación reduce el consumo de agua y mejora la eficiencia del riego',
  'La agricultura vertical y las granjas urbanas traen alimentos frescos a las ciudades',
  'La tecnología de teledetección permite una monitorización más precisa y eficiente de los cultivos',
  'Las soluciones de agricultura de precisión mejoran la gestión de los recursos naturales y la sostenibilidad',
  'La tecnología de almacenamiento y conservación mejora la calidad y la vida útil de los alimentos',
  'La inteligencia artificial y la robótica transforman la recolección de frutas y verduras',
  'La tecnología de cultivos hidropónicos reduce el uso de agua y aumenta la productividad',
  'Las soluciones de análisis de datos impulsan la toma de decisiones en la agricultura de precisión',
  'La agricultura sin suelo ofrece soluciones innovadoras para la producción de alimentos en espacios limitados',
  'La tecnología blockchain y las soluciones de trazabilidad mejoran la transparencia en la cadena de suministro de alimentos',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
