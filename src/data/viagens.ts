export type SectorSlug =
  | 'passeios-ceara'
  | 'excursoes-nordeste'
  | 'turismo-religioso'
  | 'viagens-especiais';

export interface SectorInfo {
  slug: SectorSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  tagline: string;
  description: string;
  heroGradient: string;
  heroImage: string;
  badgeColor: string;
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
  ctaTitle: string;
  ctaText: string;
}

export interface Trip {
  id: string;
  title: string;
  dates: string;
  month: string;
  monthOrder: number;
  duration: string;
  sector: SectorSlug;
  modality: 'Bate-volta' | 'Rodoviário' | 'Aéreo';
  destinationState: string;
  tag?: string;
  featured?: boolean;
  summary: string;
  highlights: string[];
  gradient: string;
  image: string;
}

export const COMPANY = {
  brandName: 'São Bento Turismo',
  legalName: 'São Bento Viagens, Peregrinações & Turismo Ltda.',
  cnpj: '08.322.444/0001-55',
  foundedYear: 2006,
  founders: 'Erivan e Odilene',
  slogan: 'Viajar é com a São Bento Turismo',
  historicalSlogan: 'Trabalhando Para Melhor Servir',
  siteUrl: 'https://saobento.anauedesign.com.br',
  address: 'Rua Coronel Olegário Memória, 2495 — Sapiranga / Edson Queiroz, Fortaleza - CE',
  cep: '60833-045',
  phones: [
    {
      display: '(85) 98711-0452',
      raw: '5585987110452',
      label: 'Atendimento & Reservas 1',
    },
    {
      display: '(85) 98127-5100',
      raw: '5585981275100',
      label: 'Atendimento & Reservas 2',
    },
  ],
};

export function getWhatsAppUrl(message: string, phoneIndex: 0 | 1 = 0): string {
  const phone = COMPANY.phones[phoneIndex]?.raw ?? COMPANY.phones[0].raw;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getTripWhatsAppUrl(trip: Trip, phoneIndex: 0 | 1 = 0): string {
  const msg = `Olá, São Bento Turismo! Quero saber mais sobre o roteiro "${trip.title}" (${trip.dates} - ${trip.month}). Pode me enviar valores, o que está incluso e disponibilidade de vagas?`;
  return getWhatsAppUrl(msg, phoneIndex);
}

export function getTripShareUrl(trip: Trip): string {
  const url = `${COMPANY.siteUrl}/viagem/${trip.id}`;
  const msg = `Olha essa viagem da São Bento Turismo saindo de Fortaleza: *${trip.title}* (${trip.dates} - ${trip.month})! Veja os detalhes aqui: ${url}`;
  return `https://wa.me/?text=${encodeURIComponent(msg)}`;
}

export const SECTORS: Record<SectorSlug, SectorInfo> = {
  'passeios-ceara': {
    slug: 'passeios-ceara',
    title: 'Passeios no Ceará',
    shortTitle: 'Passeios CE',
    eyebrow: 'Litoral e Serra Cearense',
    tagline: 'Bate-voltas e fins de semana saindo de Fortaleza com conforto e praticidade.',
    description:
      'Descubra as praias mais belas e o clima acolhedor das serras do Ceará em excursões organizadas para famílias, casais, amigos e grupos da melhor idade.',
    heroGradient: 'linear-gradient(135deg, #0E4A73 0%, #1B7FC1 60%, #2AA0D8 100%)',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    badgeColor: '#1B7FC1',
    highlights: [
      'Saídas organizadas de Fortaleza com embarque facilitado',
      'Opções de bate-volta (1 dia) e fins de semana completos',
      'Roteiros de praia (Jericoacoara, Fortim, Icapuí, Mundaú) e serra (Guaramiranga e Pacoti)',
      'Acompanhamento próximo da equipe durante todo o passeio',
    ],
    seoTitle: 'Passeios no Ceará saindo de Fortaleza | São Bento Turismo',
    seoDescription:
      'Excursões e bate-voltas saindo de Fortaleza para Jericoacoara, Guaramiranga, Camocim, Fortim, Icapuí, Mundaú e Flecheiras com a São Bento Turismo.',
    ctaTitle: 'Quer organizar um passeio exclusivo pelo Ceará?',
    ctaText:
      'Também montamos saídas fechadas para famílias, empresas, escolas e grupos da melhor idade.',
  },
  'excursoes-nordeste': {
    slug: 'excursoes-nordeste',
    title: 'Excursões pelo Nordeste',
    shortTitle: 'Nordeste',
    eyebrow: 'Feriados, Férias, Réveillon e Carnaval',
    tagline: 'Roteiros rodoviários completos pelos destinos mais desejados do Nordeste.',
    description:
      'Viagens de 3 a 6 dias com roteiro planejado, hospedagem selecionada e a animação de viajar em grupo pelos grandes clássicos nordestinos.',
    heroGradient: 'linear-gradient(135deg, #0B2942 0%, #1B7FC1 55%, #D91E2A 100%)',
    heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    badgeColor: '#0E4A73',
    highlights: [
      'Saídas garantidas em datas comemorativas (Réveillon, Férias e Carnaval)',
      'Combinações inteligentes: praias, serras, piscinas termais e passeios culturais',
      'Destinos no RN, AL, SE, BA, PE, PI e Maranhão',
      'Orientação completa antes do embarque e assistência durante toda a viagem',
    ],
    seoTitle: 'Excursões pelo Nordeste saindo de Fortaleza | São Bento Turismo',
    seoDescription:
      'Excursões em grupo saindo de Fortaleza para Maragogi, Aracaju, São Miguel do Gostoso, Lençóis Maranhenses, Chapada das Mesas, Petrolina e Hotel Thermas.',
    ctaTitle: 'Fale com a nossa equipe e garanta sua vaga',
    ctaText:
      'As excursões de feriados, Réveillon e Carnaval têm vagas limitadas. Consulte as condições de pagamento pelo WhatsApp.',
  },
  'turismo-religioso': {
    slug: 'turismo-religioso',
    title: 'Turismo Religioso & Peregrinações',
    shortTitle: 'Religioso',
    eyebrow: 'Tradição em Romarias desde 2006',
    tagline: 'Roteiros de fé com acolhimento, organização e respeito à espiritualidade de cada grupo.',
    description:
      'As peregrinações fazem parte da nossa essência e da nossa razão social há 20 anos. Levamos fiéis, paróquias e famílias aos principais santuários do Nordeste e do Brasil.',
    heroGradient: 'linear-gradient(135deg, #7F1219 0%, #D91E2A 55%, #1B7FC1 100%)',
    heroImage: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=1200&q=80',
    badgeColor: '#D91E2A',
    highlights: [
      '20 anos de experiência em romarias, circuitos da fé e grupos paroquiais',
      'Atenção especial ao conforto, ritmo de viagem e acolhimento da Melhor Idade (60+)',
      'Roteiros programados para Cimbres, Terra da Misericórdia, Aparecida e Canção Nova',
      'Tradição também em grupos para Canindé, Quixadá, Juazeiro do Norte e Círio de Nazaré',
    ],
    seoTitle: 'Turismo Religioso e Peregrinações saindo de Fortaleza | São Bento Turismo',
    seoDescription:
      'Romarias e peregrinações saindo de Fortaleza para Aparecida, Canção Nova, Frei Galvão, Cimbres e Terra da Misericórdia. 20 anos de tradição.',
    ctaTitle: 'Deseja organizar uma romaria para sua paróquia ou comunidade?',
    ctaText:
      'Preparamos roteiros personalizados para grupos católicos, pastorais, movimentos e associações.',
  },
  'viagens-especiais': {
    slug: 'viagens-especiais',
    title: 'Viagens Especiais & Aéreas',
    shortTitle: 'Especiais & Aéreo',
    eyebrow: 'Roteiros Nacionais, Eventos & Internacionais',
    tagline: 'Experiências marcantes pelo Brasil e América do Sul com logística descomplicada.',
    description:
      'Do turismo cívico e grandes eventos nacionais a pacotes aéreos internacionais como a Tríplice Fronteira, cuidamos de cada detalhe para você viajar tranquilo.',
    heroGradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 55%, #1B7FC1 100%)',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    badgeColor: '#0F172A',
    highlights: [
      'Roteiros aéreos e nacionais com acompanhamento de grupo',
      'Experiências exclusivas em datas históricas e eventos especiais',
      'Orientação completa de documentação, embarque e programação diária',
      'Suporte humano direto pelo WhatsApp antes, durante e após a viagem',
    ],
    seoTitle: 'Viagens Especiais e Pacotes Aéreos saindo de Fortaleza | São Bento Turismo',
    seoDescription:
      'Viagens em grupo saindo de Fortaleza para Foz do Iguaçu, Argentina, Paraguai e roteiros nacionais especiais com a São Bento Turismo.',
    ctaTitle: 'Quer receber o roteiro detalhado dia a dia?',
    ctaText:
      'Chame no WhatsApp para receber a ficha completa de embarque, inclusões e formas de parcelamento.',
  },
};

export const SECTOR_LIST: SectorInfo[] = [
  SECTORS['passeios-ceara'],
  SECTORS['excursoes-nordeste'],
  SECTORS['turismo-religioso'],
  SECTORS['viagens-especiais'],
];

export const TRIPS: Trip[] = [
  // NOVEMBRO 2026
  {
    id: 'guaramiranga-pacoti-nov-2026',
    title: 'Guaramiranga e Pacoti',
    dates: '20 a 22 de Novembro',
    month: 'Novembro 2026',
    monthOrder: 1,
    duration: '3 dias',
    sector: 'passeios-ceara',
    modality: 'Rodoviário',
    destinationState: 'CE',
    tag: 'Feriado da Consciência Negra',
    featured: true,
    summary:
      'Aproveite o feriado no clima ameno do Maciço de Baturité, com mirantes, gastronomia serrana e passeios encantadores em Guaramiranga e Pacoti.',
    highlights: ['Clima de serra', 'Feriado prolongado', 'Ideal para famílias e casais'],
    gradient: 'linear-gradient(135deg, #134E4A 0%, #1B7FC1 100%)',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'camocim-nov-2026',
    title: 'Camocim',
    dates: '27 a 29 de Novembro',
    month: 'Novembro 2026',
    monthOrder: 1,
    duration: '3 dias',
    sector: 'passeios-ceara',
    modality: 'Rodoviário',
    destinationState: 'CE',
    summary:
      'Um fim de semana inesquecível pelo litoral oeste cearense, explorando as belezas naturais, dunas, lagoas e o charme praiano de Camocim.',
    highlights: ['Litoral Oeste do CE', 'Fim de semana completo', 'Saída de Fortaleza'],
    gradient: 'linear-gradient(135deg, #0E4A73 0%, #0284C7 100%)',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },

  // DEZEMBRO 2026
  {
    id: 'pontal-maceio-fortim-dez-2026',
    title: 'Pontal do Maceió — Fortim',
    dates: '05 de Dezembro',
    month: 'Dezembro 2026',
    monthOrder: 2,
    duration: '1 dia',
    sector: 'passeios-ceara',
    modality: 'Bate-volta',
    destinationState: 'CE',
    tag: 'Bate-volta',
    summary:
      'Dia inteiro de descanso e lazer nas falésias e águas tranquilas de Pontal do Maceió, um dos refúgios mais charmosos do litoral leste do Ceará.',
    highlights: ['Passeio de 1 dia', 'Praia charmosa e tranquila', 'Ótimo custo-benefício'],
    gradient: 'linear-gradient(135deg, #0369A1 0%, #38BDF8 100%)',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'jericoacoara-dez-2026',
    title: 'Jericoacoara',
    dates: '11 a 13 de Dezembro',
    month: 'Dezembro 2026',
    monthOrder: 2,
    duration: '3 dias',
    sector: 'passeios-ceara',
    modality: 'Rodoviário',
    destinationState: 'CE',
    tag: 'Mais Procurado',
    featured: true,
    summary:
      'Um dos roteiros mais tradicionais da São Bento Turismo! Curta as lagoas cristalinas, dunas e o pôr do sol inesquecível de Jeri em grupo.',
    highlights: ['Clássico da São Bento', 'Fim de semana em Jeri', 'Acompanhamento em grupo'],
    gradient: 'linear-gradient(135deg, #0C4A6E 0%, #0EA5E9 100%)',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ponta-grossa-icapui-dez-2026',
    title: 'Ponta Grossa — Icapuí',
    dates: '13 de Dezembro',
    month: 'Dezembro 2026',
    monthOrder: 2,
    duration: '1 dia',
    sector: 'passeios-ceara',
    modality: 'Bate-volta',
    destinationState: 'CE',
    tag: 'Bate-volta',
    summary:
      'Conheça as famosas falésias coloridas e a culinária litorânea de Ponta Grossa em Icapuí em um domingo leve e bem organizado.',
    highlights: ['Falésias coloridas', 'Passeio de domingo', 'Embarque em Fortaleza'],
    gradient: 'linear-gradient(135deg, #B45309 0%, #1B7FC1 100%)',
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'canoa-martins-thermas-dez-2026',
    title: 'Canoa Quebrada, Serra do Martins, Praia de Emanuela e Hotel Thermas',
    dates: '17 a 20 de Dezembro',
    month: 'Dezembro 2026',
    monthOrder: 2,
    duration: '4 dias',
    sector: 'excursoes-nordeste',
    modality: 'Rodoviário',
    destinationState: 'CE / RN',
    tag: 'Day Use Thermas',
    summary:
      'Roteiro completo unindo o melhor do litoral e da serra, com parada em Canoa Quebrada, Serra do Martins, Praia de Emanuela e day use nas piscinas termais do Hotel Thermas.',
    highlights: ['Praia + Serra + Termas', 'Day use no Hotel Thermas', '4 dias de roteiro'],
    gradient: 'linear-gradient(135deg, #0E4A73 0%, #1D4ED8 100%)',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'mundau-flecheiras-dez-2026',
    title: 'Mundaú e Flecheiras',
    dates: '19 a 21 de Dezembro',
    month: 'Dezembro 2026',
    monthOrder: 2,
    duration: '3 dias',
    sector: 'passeios-ceara',
    modality: 'Rodoviário',
    destinationState: 'CE',
    summary:
      'Piscinas naturais, encontro do rio com o mar e muita tranquilidade em um fim de semana duplo por duas das praias mais amadas de Trairi.',
    highlights: ['Dois destinos em 1 viagem', 'Piscinas naturais', 'Perfeito para relaxar'],
    gradient: 'linear-gradient(135deg, #0F766E 0%, #1B7FC1 100%)',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'reveillon-2027-thermas',
    title: 'Réveillon 2027: Canoa Quebrada, Serra do Martins, Tibau, Mossoró e Hotel Thermas',
    dates: '30/12 a 02/01',
    month: 'Dezembro 2026',
    monthOrder: 2,
    duration: '4 dias',
    sector: 'excursoes-nordeste',
    modality: 'Rodoviário',
    destinationState: 'CE / RN',
    tag: 'Réveillon 2027',
    featured: true,
    summary:
      'Celebre a virada para 2027 com alegria e segurança! Roteiro especial passando por Canoa Quebrada, Serra do Martins, Praia de Tibau, Mossoró e day use nas piscinas térmicas do Hotel Thermas.',
    highlights: ['Virada de Ano em grupo', 'Piscinas térmicas Hotel Thermas', 'Vagas limitadas'],
    gradient: 'linear-gradient(135deg, #991B1B 0%, #D91E2A 50%, #0E4A73 100%)',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=900&q=80',
  },

  // JANEIRO 2027
  {
    id: 'brasilia-posse-jan-2027',
    title: 'Brasília — Posse Presidencial',
    dates: '03 a 07 de Janeiro',
    month: 'Janeiro 2027',
    monthOrder: 3,
    duration: '5 dias',
    sector: 'viagens-especiais',
    modality: 'Rodoviário',
    destinationState: 'DF',
    tag: 'Evento Especial',
    summary:
      'Participe de um momento histórico na capital federal com a comodidade de viajar em grupo organizado pela São Bento Turismo.',
    highlights: ['Viagem de evento nacional', 'Roteiro pela capital federal', 'Grupo saindo de Fortaleza'],
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)',
    image: 'https://images.unsplash.com/photo-1584974292709-5c2f0619971b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sao-miguel-gostoso-shui-jan-2027',
    title: 'São Miguel do Gostoso e Shui Brasil',
    dates: '08 a 10 de Janeiro',
    month: 'Janeiro 2027',
    monthOrder: 3,
    duration: '3 dias',
    sector: 'excursoes-nordeste',
    modality: 'Rodoviário',
    destinationState: 'RN',
    tag: 'Iniciando o Novo Ano',
    summary:
      'Comece 2027 renovando as energias em São Miguel do Gostoso e no encantador parque ecológico Shui Brasil, no Rio Grande do Norte.',
    highlights: ['Águas cristalinas no Shui Brasil', 'Charme de São Miguel do Gostoso', 'Férias de Janeiro'],
    gradient: 'linear-gradient(135deg, #0E7490 0%, #1B7FC1 100%)',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'aracaju-jan-2027',
    title: 'Aracaju',
    dates: '13 a 17 de Janeiro',
    month: 'Janeiro 2027',
    monthOrder: 3,
    duration: '5 dias',
    sector: 'excursoes-nordeste',
    modality: 'Rodoviário',
    destinationState: 'SE',
    summary:
      'Cinco dias para curtir a Orla de Atalaia, a hospitalidade sergipana, gastronomia típica e passeios imperdíveis em Aracaju.',
    highlights: ['5 dias de viagem', 'Capital acolhedora do Nordeste', 'Ideal para férias em família'],
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #1B7FC1 100%)',
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'maragogi-jan-2027',
    title: 'Maragogi',
    dates: '22 a 24 de Janeiro',
    month: 'Janeiro 2027',
    monthOrder: 3,
    duration: '3 dias',
    sector: 'excursoes-nordeste',
    modality: 'Rodoviário',
    destinationState: 'AL',
    tag: 'Caribe Brasileiro',
    featured: true,
    summary:
      'Encante-se com as águas azul-turquesa e as piscinas naturais do Caribe Brasileiro em uma excursão planejada para aproveitar cada momento.',
    highlights: ['Águas cristalinas em Alagoas', 'Piscinas naturais', 'Fim de semana de verão'],
    gradient: 'linear-gradient(135deg, #0284C7 0%, #0D9488 100%)',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cimbres-terra-misericordia-jan-2027',
    title: 'Cimbres e Terra da Misericórdia',
    dates: '29 a 31 de Janeiro',
    month: 'Janeiro 2027',
    monthOrder: 3,
    duration: '3 dias',
    sector: 'turismo-religioso',
    modality: 'Rodoviário',
    destinationState: 'PE',
    tag: 'Peregrinação',
    featured: true,
    summary:
      'Peregrinação especial ao Santuário de Nossa Senhora das Graças em Cimbres (Pesqueira) e à Terra da Misericórdia, em Pernambuco.',
    highlights: ['Santuário de N. Sra. das Graças', 'Terra da Misericórdia', 'Grupo acolhedor de fé'],
    gradient: 'linear-gradient(135deg, #991B1B 0%, #D91E2A 100%)',
    image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=900&q=80',
  },

  // FEVEREIRO 2027
  {
    id: 'petrolina-juazeiro-carnaval-2027',
    title: 'Petrolina e Juazeiro da Bahia',
    dates: '05 a 10 de Fevereiro',
    month: 'Fevereiro 2027',
    monthOrder: 4,
    duration: '6 dias',
    sector: 'excursoes-nordeste',
    modality: 'Rodoviário',
    destinationState: 'PE / BA',
    tag: 'Carnaval 2027',
    summary:
      'Um Carnaval diferente às margens do Velho Chico! Conheça o Vale do São Francisco, passeios de barco, vinícolas e a cultura de Petrolina e Juazeiro.',
    highlights: ['6 dias no Carnaval', 'Vale do São Francisco', 'Cultura, rio e gastronomia'],
    gradient: 'linear-gradient(135deg, #9A3412 0%, #D91E2A 100%)',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
  },

  // ABRIL 2027
  {
    id: 'foz-iguacu-argentina-paraguai-abr-2027',
    title: 'Foz do Iguaçu, Argentina e Paraguai',
    dates: '17 a 21 de Abril',
    month: 'Abril 2027',
    monthOrder: 5,
    duration: '5 dias',
    sector: 'viagens-especiais',
    modality: 'Aéreo',
    destinationState: 'PR / Internacional',
    tag: 'Pacote Aéreo • 3 Países',
    featured: true,
    summary:
      'Viaje de avião para conhecer uma das 7 Maravilhas da Natureza! Roteiro pela Tríplice Fronteira incluindo Cataratas do Iguaçu, Argentina e Paraguai.',
    highlights: ['Viagem aérea em grupo', 'Brasil, Argentina e Paraguai', 'Cataratas do Iguaçu'],
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1B7FC1 100%)',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80',
  },

  // MAIO 2027
  {
    id: 'circuito-fe-sp-mai-2027',
    title: 'Campos do Jordão, Aparecida, Guaratinguetá, Frei Galvão e Canção Nova',
    dates: '17 a 22 de Maio',
    month: 'Maio 2027',
    monthOrder: 6,
    duration: '6 dias',
    sector: 'turismo-religioso',
    modality: 'Aéreo',
    destinationState: 'SP',
    tag: 'Grande Circuito da Fé',
    featured: true,
    summary:
      'Seis dias emocionantes pelo Vale do Paraíba e Serra da Mantiqueira: Santuário Nacional de Aparecida, Frei Galvão, Canção Nova e o charme de Campos do Jordão.',
    highlights: ['Santuário de Aparecida', 'Canção Nova e Frei Galvão', 'Campos do Jordão incluso'],
    gradient: 'linear-gradient(135deg, #7F1219 0%, #1B7FC1 100%)',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'chapada-das-mesas-mai-2027',
    title: 'Chapada das Mesas — Carolina (MA)',
    dates: '26 a 30 de Maio',
    month: 'Maio 2027',
    monthOrder: 6,
    duration: '5 dias',
    sector: 'excursoes-nordeste',
    modality: 'Rodoviário',
    destinationState: 'MA',
    tag: 'Ecoturismo',
    summary:
      'Cachoeiras de águas cristalinas, poços azulados e paredões impressionantes na Chapada das Mesas, em Carolina do Maranhão.',
    highlights: ['Cachoeiras e poços azuis', '5 dias de natureza', 'Roteiro organizado'],
    gradient: 'linear-gradient(135deg, #065F46 0%, #1B7FC1 100%)',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'parnaiba-lencois-mai-2027',
    title: 'Parnaíba e Lençóis Maranhenses',
    dates: '26 a 30 de Maio',
    month: 'Maio 2027',
    monthOrder: 6,
    duration: '5 dias',
    sector: 'excursoes-nordeste',
    modality: 'Rodoviário',
    destinationState: 'PI / MA',
    tag: 'Rota das Emoções',
    summary:
      'Em maio as lagoas dos Lençóis Maranhenses estão exuberantes! Combine o Delta do Parnaíba com um dos cenários mais deslumbrantes do mundo.',
    highlights: ['Melhor época das lagoas', 'Delta do Parnaíba + Lençóis', '5 dias inesquecíveis'],
    gradient: 'linear-gradient(135deg, #0E4A73 0%, #0EA5E9 100%)',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=900&q=80',
  },
];

export const MONTHS = Array.from(new Set(TRIPS.map((t) => t.month)));

export function getTripsBySector(sector: SectorSlug): Trip[] {
  return TRIPS.filter((t) => t.sector === sector);
}

export function getTripById(id: string): Trip | undefined {
  return TRIPS.find((t) => t.id === id);
}

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Escolha seu destino',
    description:
      'Navegue pelos setores ou pelo calendário 2026/2027 e encontre a viagem que combina com a sua família ou grupo.',
  },
  {
    step: '02',
    title: 'Receba a ficha no WhatsApp',
    description:
      'Clique no botão do roteiro para receber valores atualizados, o que está incluso, formas de pagamento e orientações.',
  },
  {
    step: '03',
    title: 'Confirme sua vaga',
    description:
      'Atendimento humano direto com a equipe da São Bento Turismo para tirar todas as dúvidas e formalizar sua reserva.',
  },
  {
    step: '04',
    title: 'Embarque em Fortaleza',
    description:
      'Você recebe os horários e o ponto de embarque com antecedência e viaja tranquilo com o nosso grupo.',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Como faço para reservar minha vaga em uma excursão?',
    a: 'Basta clicar no botão de WhatsApp do roteiro desejado. Nossa equipe envia a ficha completa da viagem (valores, o que está incluso, formas de pagamento e orientações) e realiza sua reserva com atendimento direto.',
  },
  {
    q: 'De onde saem as excursões da São Bento Turismo?',
    a: 'Todas as nossas saídas partem de Fortaleza (CE), com pontos e horários de embarque informados com antecedência no grupo oficial de cada viagem.',
  },
  {
    q: 'Posso viajar sozinho(a) ou com idosos da família?',
    a: 'Sim! Somos especialistas em formação de grupos desde 2006, com ampla tradição no acolhimento de viajantes individuais, famílias e grupos da Melhor Idade (60+).',
  },
  {
    q: 'Vocês organizam viagens para grupos fechados, paróquias ou empresas?',
    a: 'Sim. Montamos roteiros sob medida para paróquias, romarias, associações, escolas, famílias e grupos corporativos. Fale conosco pelo WhatsApp para solicitar um orçamento personalizado.',
  },
  {
    q: 'Onde posso confirmar os detalhes de pagamento e política de cancelamento?',
    a: 'Antes da confirmação da reserva, enviamos todas as condições vigentes (inclusões, exclusões, parcelamento e regras de remarcação/cancelamento) de forma clara e por escrito.',
  },
];
