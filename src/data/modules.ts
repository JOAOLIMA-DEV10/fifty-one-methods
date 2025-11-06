import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 1,
    title: 'Fundamentos e Conceitos Iniciais',
    description: 'Entenda os princípios básicos dos métodos de treino',
    coverImage: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '1-1', title: 'O que são métodos de treino', videoUrl: 'https://www.youtube.com/embed/Frr6cMXMcEY', duration: '9:58' },
      { id: '1-2', title: 'Aplicabilidade, segurança e erros comuns', videoUrl: 'https://www.youtube.com/embed/GlvL2w-QP7U', duration: '11:31' },
      { id: '1-3', title: 'Volume, intensidade e densidade', videoUrl: 'https://www.youtube.com/embed/V8rmIWlzMwc', duration: '5:00' }
    ]
  },
  {
    id: 2,
    title: 'Princípios Fundamentais do Treinamento',
    description: 'Domine os conceitos essenciais para resultados consistentes',
    coverImage: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '2-1', title: 'Sobrecarga progressiva', videoUrl: 'https://www.youtube.com/embed/RvDDWLW4qls', duration: '5:42' },
      { id: '2-2', title: 'Individualidade biológica', videoUrl: 'https://www.youtube.com/embed/qivHRY5OMYM', duration: '7:01' },
      { id: '2-3', title: 'Adaptação e reversibilidade', videoUrl: 'https://www.youtube.com/embed/nMivPUGJtgk', duration: '8:14' }
    ]
  },
  {
    id: 3,
    title: 'Manipulação de Volume e Intensidade',
    description: 'Ajuste carga, repetições e séries de forma inteligente',
    coverImage: 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '3-1', title: 'Métodos lineares', videoUrl: 'https://www.youtube.com/embed/dMSKFvlqQj0', duration: '8:21' },
      { id: '3-2', title: 'Métodos ondulatórios', videoUrl: 'https://www.youtube.com/embed/Frr6cMXMcEY', duration: '9:58' },
      { id: '3-3', title: 'Método da progressão dupla', videoUrl: 'https://www.youtube.com/embed/MIideTSUk8c', duration: '8:21' }
    ]
  },
  {
    id: 4,
    title: 'Tempo Sob Tensão e Controle da Execução',
    description: 'Controle tempo de contração e movimento',
    coverImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '4-1', title: 'Super Slow', videoUrl: 'https://www.youtube.com/embed/jEoUG957LOI', duration: '5:51' },
      { id: '4-2', title: 'Slow-Fast', videoUrl: 'https://www.youtube.com/embed/USc42ixT7_c', duration: '9:18' },
      { id: '4-3', title: 'Um e Meio (1½)', videoUrl: 'https://www.youtube.com/embed/MIideTSUk8c', duration: '8:21' }
    ]
  },
  {
    id: 5,
    title: 'Intervalos e Densidade de Treino',
    description: 'Manipule pausas e densidade entre séries',
    coverImage: 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '5-1', title: 'Intra-Set Rest', videoUrl: 'https://www.youtube.com/embed/koXyjcR8zlI', duration: '5:54' },
      { id: '5-2', title: 'Agonista-Agonista In Rest', videoUrl: 'https://www.youtube.com/embed/-ABeDwPR508', duration: '6:28' },
      { id: '5-3', title: 'Agonista-Antagonista In Rest', videoUrl: 'https://www.youtube.com/embed/NBn6midDY1A', duration: '10:04' }
    ]
  },
  {
    id: 6,
    title: 'Nível de Treinamento e Aplicabilidade',
    description: 'Adeque o método ao nível do aluno',
    coverImage: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '6-1', title: 'Prescrição para iniciantes', videoUrl: 'https://www.youtube.com/embed/zZlU9VJPVfY', duration: '8:53' },
      { id: '6-2', title: 'Ajustes para intermediários', videoUrl: 'https://www.youtube.com/embed/YXic9ndGqb4', duration: '7:06' },
      { id: '6-3', title: 'Estratégias para avançados', videoUrl: 'https://www.youtube.com/embed/415qqJ-FO7U', duration: '12:36' }
    ]
  },
  {
    id: 7,
    title: 'Séries Compostas (Volume Concentrado)',
    description: 'Aumente intensidade e densidade',
    coverImage: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '7-1', title: 'Bi-Set', videoUrl: 'https://www.youtube.com/embed/znuJeXsUkD4', duration: '3:22' },
      { id: '7-2', title: 'Tri-Set', videoUrl: 'https://www.youtube.com/embed/-0qQVwy9OzI', duration: '10:43' },
      { id: '7-3', title: 'Giant-Set', videoUrl: 'https://www.youtube.com/embed/Frr6cMXMcEY', duration: '9:58' }
    ]
  },
  {
    id: 8,
    title: 'Pré e Pós-Exaustão Muscular',
    description: 'Potencialize recrutamento muscular',
    coverImage: 'https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '8-1', title: 'Pré-Exaustão', videoUrl: 'https://www.youtube.com/embed/t7QDOCY8B6A', duration: '8:25' },
      { id: '8-2', title: 'Pós-Exaustão', videoUrl: 'https://www.youtube.com/embed/xK4ELLoFteE', duration: '6:16' },
      { id: '8-3', title: 'Two Up – One Down', videoUrl: 'https://www.youtube.com/embed/0_ybrWQmMwI', duration: '2:12' }
    ]
  },
  {
    id: 9,
    title: 'Métodos Piramidais e Variações',
    description: 'Manipule volume e intensidade',
    coverImage: 'https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '9-1', title: 'Pirâmide Crescente', videoUrl: 'https://www.youtube.com/embed/wZvWFuTJ4Nk', duration: '5:14' },
      { id: '9-2', title: 'Pirâmide Decrescente', videoUrl: 'https://www.youtube.com/embed/gg_ivt4xpbQ', duration: '1:38' },
      { id: '9-3', title: 'Pirâmide Dupla', videoUrl: 'https://www.youtube.com/embed/gk-8zdUXcpI', duration: '10:15' }
    ]
  },
  {
    id: 10,
    title: 'Métodos Avançados de Progressão',
    description: 'Explore curvas de esforço',
    coverImage: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '10-1', title: 'RRA', videoUrl: 'https://www.youtube.com/embed/Q7KrjIuR3xo', duration: '2:58' },
      { id: '10-2', title: 'Ondulatório (força/hipertrofia)', videoUrl: 'https://www.youtube.com/embed/GZvzK5RM8z4', duration: '9:48' }
    ]
  },
  {
    id: 11,
    title: 'Pausa e Recuperação Ativa',
    description: 'Melhore desempenho intra-séries',
    coverImage: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '11-1', title: 'Rest-Pause', videoUrl: 'https://www.youtube.com/embed/NsDwS8l-ZZA', duration: '6:59' },
      { id: '11-2', title: 'Double Reps', videoUrl: 'https://www.youtube.com/embed/fSVDffrHoSI', duration: '6:18' },
      { id: '11-3', title: 'Isometric Rest', videoUrl: 'https://www.youtube.com/embed/koXyjcR8zlI', duration: '5:54' }
    ]
  },
  {
    id: 12,
    title: 'Repetições Parciais e Controle',
    description: 'Otimize estímulos específicos',
    coverImage: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '12-1', title: 'Repetições Parciais', videoUrl: 'https://www.youtube.com/embed/Wy-l34YllZE', duration: '3:32' },
      { id: '12-2', title: 'R100', videoUrl: 'https://www.youtube.com/embed/mPoWjRS9OvI', duration: '4:16' },
      { id: '12-3', title: 'Decrescente', videoUrl: 'https://www.youtube.com/embed/IIcnqgmsSwQ', duration: '14:40' }
    ]
  },
  {
    id: 13,
    title: 'Volume Extremo',
    description: 'Induza hipertrofia máxima',
    coverImage: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '13-1', title: 'GVT', videoUrl: 'https://www.youtube.com/embed/mgPierUuLeQ', duration: '15:07' },
      { id: '13-2', title: '6/20', videoUrl: 'https://www.youtube.com/embed/hwD_2jsrARY', duration: '3:06' },
      { id: '13-3', title: '21', videoUrl: 'https://www.youtube.com/embed/AKyqKcAyS50', duration: '1:26' }
    ]
  },
  {
    id: 14,
    title: 'Intensidade Máxima',
    description: 'Leve o músculo à falha',
    coverImage: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '14-1', title: 'Drop-Set', videoUrl: 'https://www.youtube.com/embed/hvYOBlDKFcU', duration: '1:27' },
      { id: '14-2', title: 'SST', videoUrl: 'https://www.youtube.com/embed/mgPierUuLeQ', duration: '15:07' },
      { id: '14-3', title: 'FST-7', videoUrl: 'https://www.youtube.com/embed/984kESZskPg', duration: '8:41' }
    ]
  },
  {
    id: 15,
    title: 'Oclusão e Fadiga',
    description: 'Aumente hipertrofia com cargas leves',
    coverImage: 'https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '15-1', title: 'Oclusão Vascular (BFR)', videoUrl: 'https://www.youtube.com/embed/ZI2aCRSehr0', duration: '9:49' },
      { id: '15-2', title: 'Séries Quebradas', videoUrl: 'https://www.youtube.com/embed/M3o54gmQGu8', duration: '8:26' },
      { id: '15-3', title: 'Progressão Dupla', videoUrl: 'https://www.youtube.com/embed/Bbyu8G0lmaA', duration: '8:04' }
    ]
  },
  {
    id: 16,
    title: 'Pico de Contração e Estímulo Neural',
    description: 'Maximize recrutamento muscular',
    coverImage: 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '16-1', title: 'Pico de Contração', videoUrl: 'https://www.youtube.com/embed/TuhwwpM-4O4', duration: '21:08' },
      { id: '16-2', title: 'Isométrico Dinâmico', videoUrl: 'https://www.youtube.com/embed/TuhwwpM-4O4', duration: '21:08' },
      { id: '16-3', title: 'Contração Forçada', videoUrl: 'https://www.youtube.com/embed/6RMto0IVTOY', duration: '10:19' }
    ]
  },
  {
    id: 17,
    title: 'Estratégias Combinadas',
    description: 'Misture técnicas para novos estímulos',
    coverImage: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '17-1', title: 'Bi-Set + Rest-Pause', videoUrl: 'https://www.youtube.com/embed/IyLelcXW93M', duration: '7:31' },
      { id: '17-2', title: 'Pirâmide + Drop-Set', videoUrl: 'https://www.youtube.com/embed/tkfsbZpWrvs', duration: '5:53' },
      { id: '17-3', title: 'Pré-Exaustão + Oclusão', videoUrl: 'https://www.youtube.com/embed/vJCwSGTyz6Y', duration: '6:46' }
    ]
  },
  {
    id: 18,
    title: 'Prescrição Inteligente',
    description: 'Monte treinos personalizados',
    coverImage: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      { id: '18-1', title: 'Estruturação semanal', videoUrl: 'https://www.youtube.com/embed/zq9o1BrNX94', duration: '10:00' }
    ]
  }
];
