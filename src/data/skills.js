import {
  SiJavascript, SiReact, SiVuedotjs, SiAngular,
  SiPhp, SiPython, SiMysql, SiPostgresql, SiNodedotjs,
  SiMongodb, SiDocker, SiKubernetes, SiGit, SiFigma,
  SiLinux
} from 'react-icons/si'
import { FaCode, FaServer, FaTools, FaCloud, FaShieldAlt, FaNetworkWired, FaTerminal } from 'react-icons/fa'

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: FaCode,
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'Sass/SCSS', level: 80 },
      { name: 'JavaScript', level: 88, icon: SiJavascript },
      { name: 'React', level: 85, icon: SiReact },
      { name: 'Vue.js', level: 75, icon: SiVuedotjs },
      { name: 'Angular', level: 70, icon: SiAngular },
      { name: 'Responsive Design', level: 90 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: FaServer,
    color: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-500/30',
    glowColor: 'shadow-green-500/20',
    skills: [
      { name: 'PHP', level: 88, icon: SiPhp },
      { name: 'Python', level: 85, icon: SiPython },
      { name: 'MySQL', level: 85, icon: SiMysql },
      { name: 'PostgreSQL', level: 82, icon: SiPostgresql },
      { name: 'Node.js', level: 80, icon: SiNodedotjs },
      { name: 'REST API', level: 88 }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Other',
    icon: FaTools,
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/30',
    glowColor: 'shadow-orange-500/20',
    skills: [
      { name: 'Git', level: 88, icon: SiGit },
      { name: 'Figma', level: 75, icon: SiFigma },
      { name: 'Docker', level: 80, icon: SiDocker },
      { name: 'AWS', level: 75, icon: FaCloud },
      { name: 'Linux', level: 88, icon: SiLinux },
      { name: 'Networking', level: 85, icon: FaNetworkWired },
      { name: 'Cybersecurity', level: 80, icon: FaShieldAlt },
      { name: 'System Admin', level: 82, icon: FaTerminal },
      { name: 'Kali Linux', level: 78 },
      { name: 'Penetration Testing', level: 75 }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Cloud',
    icon: FaCloud,
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    skills: [
      { name: 'MongoDB', level: 80, icon: SiMongodb },
      { name: 'Docker', level: 80, icon: SiDocker },
      { name: 'Kubernetes', level: 72, icon: SiKubernetes },
      { name: 'VPN Config', level: 85, icon: FaShieldAlt },
      { name: 'MySQL', level: 85, icon: SiMysql },
      { name: 'PostgreSQL', level: 82, icon: SiPostgresql }
    ]
  }
]
