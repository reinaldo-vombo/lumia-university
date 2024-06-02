import { calendar, home, user } from '@/public/icons';

export const content = {
  menus: [
    {
      id: 1,
      name: 'Dashboard',
      icon: home,
      route: '/',
      subItems: [],
    },
    {
      id: 2,
      name: 'Event Managemante',
      icon: calendar,
      route: '/event-managemante',
      subItems: [],
    },
    {
      id: 3,
      name: 'Professores',
      icon: user,
      route: '#',
      subItems: ['All Teachers', 'Add Teachers'],
    },
    {
      id: 3,
      name: 'Cursos',
      icon: user,
      route: '#',
      subItems: ['All Teachers', 'Add Teachers'],
    },
    {
      id: 4,
      name: 'Departamento',
      icon: user,
      route: '#',
      subItems: ['All Teachers', 'Add Teachers'],
    },
  ],
};
