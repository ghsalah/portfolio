import { Github, Linkedin, Mail, Phone, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  external?: boolean;
}

export const socialLinks: SocialLink[] = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/', external: true },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/', external: true },
  { icon: Briefcase, label: 'Projects', href: '#projects' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@.com' },
  { icon: Phone, label: 'Call', href: 'tel:+1234567890' },
];

export const navItems = [
  { name: '', label: 'HOME', index: 0 },
  { name: 'ABOUT', label: 'ABOUT', index: 1 },
  { name: 'PROJECTS', label: 'PROJECTS', index: 2 },
  { name: 'CONTACT', label: 'CONTACT', index: 3 },
];

