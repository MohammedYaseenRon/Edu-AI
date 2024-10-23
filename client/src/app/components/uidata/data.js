// data.js
import { Home, Users, Calendar, BarChart2, Settings, LogOut } from 'lucide-react';

export const teacherNavItems = [
  {
    name: 'Home',
    href: '/teacher',
    icon: Home
  },
  {
    name: 'Quizzes',
    href: '/teacher/quizzes',
    icon: BarChart2
  },
  {
    name: 'Live Classes',
    href: '/teacher/live-classes',
    icon: Users
  },
  {
    name: 'Classroom',
    href: '/teacher/classroom',
    icon: Calendar
  },
];

export const studentNavItems = [
  {
    name: 'Home',
    href: '/student',
    icon: Home
  },
  {
    name: 'Classes',
    href: '/student/classes',
    icon: BarChart2
  },
  {
    name: 'Classroom',
    href: '/student/classroom',
    icon: Users
  },
  {
    name: 'Guidance',
    href: '/student/guidance',
    icon: Calendar
  },
];
