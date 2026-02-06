import {
  logoElCanton,
  logoNauticoEscobar,
  logoPuertos,
  logoSanAgustin,
  logoSanMatias,
  logoTermasVillaElisa,
} from '@/assets/Logos';
import type { ClientCardInfoProps } from '@/sections/home/types/ClientsGrid.types';

export const clientsMock: ClientCardInfoProps[] = [
  {
    id: '01',
    specialty: 'BARRIO PRIVADO',
    title: 'San Matías',
    description: 'Mantenimiento integral de lagos y espejos de agua en barrio cerrado premium.',
    shortDesc: 'Lagunas cristalinas en barrio privado de lujo.',
    fullDesc:
      'San Matías nos confió el mantenimiento de sus 3 lagunas principales. Implementamos sistemas de oxigenación natural y control biológico que mantienen el agua cristalina todo el año, mejorando significativamente la calidad de vida de los residentes.',
    serviceProvided: 'Sistema de oxigenación natural en 3 lagunas ornamentales',
    testimony:
      '"Transformaron nuestras lagunas. El agua está cristalina y los vecinos disfrutan de un entorno natural impecable. Excelente servicio."',
    image: logoSanMatias.src,
    features: ['Oxigenación natural', 'Mantenimiento mensual', 'Monitoreo continuo'],
  },
  {
    id: '02',
    specialty: 'COUNTRY CLUB',
    title: 'Náutico Escobar',
    description: 'Gestión ecológica de espejos de agua en club náutico de primer nivel.',
    shortDesc: 'Mantenimiento de lagunas en club náutico premium.',
    fullDesc:
      'El Náutico Escobar requería un sistema de mantenimiento que preservara la calidad del agua sin afectar las actividades náuticas. Desarrollamos un protocolo específico que mantiene las lagunas en condiciones óptimas para navegación y pesca deportiva.',
    serviceProvided: 'Mantenimiento especializado compatible con actividades náuticas',
    testimony:
      '"Profesionales de primer nivel. Las lagunas lucen impecables y no interfieren con nuestras actividades deportivas. Muy recomendables."',
    image: logoNauticoEscobar.src,
    features: ['Compatible con navegación', 'Control de algas', 'Agua cristalina'],
  },
  {
    id: '03',
    specialty: 'BARRIO PRIVADO',
    title: 'Puertos del Lago',
    description: 'Recuperación completa de sistema lagunar deteriorado en barrio náutico.',
    shortDesc: 'De lagunas contaminadas a ecosistema saludable.',
    fullDesc:
      'Puertos nos contrató para recuperar su sistema de lagunas que había perdido claridad por años de abandono. En 8 meses restauramos completamente el ecosistema, eliminando sedimentos, oxigenando el agua y reintroduciendo fauna nativa.',
    serviceProvided: 'Restauración ecológica completa y mantenimiento trimestral',
    testimony:
      '"Un trabajo excepcional. Recuperamos nuestras lagunas y ahora son el orgullo del barrio. Los peces volvieron y el agua está transparente."',
    image: logoPuertos.src,
    features: ['Restauración completa', 'Dragado ecológico', 'Reintroducción de fauna'],
  },
  {
    id: '04',
    specialty: 'COUNTRY CLUB',
    title: 'El Cantón',
    description: 'Mantenimiento de lagos ornamentales en country club de golf.',
    shortDesc: 'Lagos cristalinos en campo de golf premium.',
    fullDesc:
      'El Cantón Golf & Resort nos confió el cuidado de sus 8 lagos ornamentales distribuidos en el campo de golf. Implementamos un sistema de filtrado natural que mantiene el agua transparente sin afectar el juego ni la estética del campo.',
    serviceProvided: 'Sistema de filtrado natural en 8 lagos de golf',
    testimony:
      '"La calidad del agua mejoró notablemente. Los socios destacan la belleza de los lagos y hemos reducido costos de mantenimiento."',
    image: logoElCanton.src,
    features: ['Filtrado natural', 'Estética premium', 'Bajo mantenimiento'],
  },
  {
    id: '05',
    specialty: 'HOTEL & SPA',
    title: 'Termas de Villa Elisa',
    description: 'Gestión sustentable de espejos de agua en complejo termal.',
    shortDesc: 'Espejos de agua cristalinos en resort termal.',
    fullDesc:
      'Las Termas de Villa Elisa nos confió el mantenimiento de sus espejos de agua ornamentales. Desarrollamos un sistema que respeta las características termales del lugar, usando solo métodos ecológicos que preservan la biodiversidad local.',
    serviceProvided: 'Mantenimiento ecológico premium con monitoreo remoto',
    testimony:
      '"Excelente trabajo. Los huéspedes destacan la belleza natural del agua y su integración perfecta con el paisaje termal."',
    image: logoTermasVillaElisa.src,
    features: ['Métodos 100% ecológicos', 'Integración paisajística', 'Servicio premium'],
  },
  {
    id: '06',
    specialty: 'BARRIO PRIVADO',
    title: 'San Agustín',
    description: 'Programa integral de mantenimiento de lagunas en barrio cerrado.',
    shortDesc: 'Mantenimiento preventivo de lagunas residenciales.',
    fullDesc:
      'San Agustín nos contrató para un programa de mantenimiento preventivo de sus 2 lagunas principales. Implementamos protocolos de control de calidad del agua que mantienen los espejos de agua en condiciones óptimas durante todo el año.',
    serviceProvided: 'Programa de mantenimiento preventivo mensual',
    testimony:
      '"Muy profesionales. Las lagunas están siempre impecables y el servicio es discreto y eficiente. Estamos muy conformes."',
    image: logoSanAgustin.src,
    features: ['Mantenimiento preventivo', 'Control de calidad', 'Servicio discreto'],
  },
];
