// config/nav.ts
import { NavItem } from '@/types/nav';
import {
  Wrench,
  Thermometer,
  Droplets,
  Zap,
  Shield,
  Factory,
  Utensils,
  Building2,
  ChefHat,
  Calendar,
  Building,
  Hammer,
  Snowflake,
  Users,
} from 'lucide-react';

export const navigationLinks: NavItem[] = [
  {
    title: 'Services',
    href: '/services',
    children: [
      {
        title: 'HVAC Systems',
        href: '/services/hvac',
        description: 'Commercial heating, ventilation, and air conditioning.',
        icon: Thermometer,
      },
      {
        title: 'Chillers',
        href: '/services/chillers',
        description: 'Expert chiller maintenance, repair, and replacement.',
        icon: Droplets,
      },
      {
        title: 'Refrigeration',
        href: '/services/refrigeration',
        description: 'Services for walk-in coolers, freezers, and ice machines.',
        icon: Snowflake,
      },
      {
        title: 'Industrial Piping',
        href: '/services/piping',
        description: 'Custom piping for steam, compressed air, gas, and processes.',
        icon: Wrench,
      },
      {
        title: 'Welding & Fabrication',
        href: '/services/welding',
        description: 'Professional welding and custom fabrication services.',
        icon: Hammer,
      },
      {
        title: 'All Services',
        href: '/services',
        description: 'View our complete range of mechanical services.',
        icon: Users,
      },
    ],
  },
  {
    title: 'Solutions',
    href: '/solutions',
    children: [
      {
        title: 'Planned Maintenance',
        href: '/solutions/maintenance',
        description: 'Proactive programs to prevent breakdowns and extend equipment life.',
        icon: Calendar,
      },
      {
        title: 'Service & Install',
        href: '/solutions/service-install',
        description: 'Complete installation and service solutions for all your mechanical systems.',
        icon: Wrench,
      },
      {
        title: 'Design-Build',
        href: '/solutions/design-build',
        description: 'Custom mechanical solutions designed and built for your needs.',
        icon: Building,
      },
      {
        title: 'Emergency Response',
        href: '/emergency',
        description: '24/7 emergency service to minimize downtime and restore operations.',
        icon: Shield,
      },
      {
        title: 'All Solutions',
        href: '/solutions',
        description: 'View our complete range of strategic mechanical solutions.',
        icon: Users,
      },
    ],
  },
  {
    title: 'Industries',
    href: '/industries',
    children: [
      {
        title: 'Manufacturing',
        href: '/industries/manufacturing',
        description: 'Specialized services for manufacturing facilities and process plants.',
        icon: Factory,
      },
      {
        title: 'Food & Beverage',
        href: '/industries/food-beverage',
        description: 'Critical refrigeration and HVAC for food processing and storage.',
        icon: Utensils,
      },
      {
        title: 'Institutional & Government',
        href: '/industries/institutional',
        description: 'Reliable mechanical services for schools, hospitals, and public facilities.',
        icon: Building2,
      },
      {
        title: 'Commercial Kitchens',
        href: '/industries/commercial-kitchens',
        description: 'Specialized services for commercial kitchens and restaurants.',
        icon: ChefHat,
      },
      {
        title: 'All Industries',
        href: '/industries',
        description: 'View all industries we serve.',
        icon: Users,
      },
    ],
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];