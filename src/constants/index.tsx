import {FaGithub, FaLinkedin, FaInstagram ,FaRegBookmark, FaRegUser } from 'react-icons/fa';
import { IoGridOutline } from 'react-icons/io5';
import type { Project } from '../types';

export const personalInfo = {
	name: 'Eric Gastón Irusta',
	age: 35,
	location: 'Río Cuarto, Córdoba, Argentina',
	occupation: 'Full-Stack Developer',
	overview:
		'Comprometido con el aprendizaje continuo y la implementación de las mejores prácticas en desarrollo web.',
	socialLinks: [
		{
			id: 1,
			name: 'GitHub',
			url: 'https://github.com/ericirusta90',
			icon: <FaGithub size={26} />,
		},
		{
			id: 2,
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/eric-irusta-',
			icon: <FaLinkedin size={26} />,
		},
		{
			id: 3,
			name: 'Instagram',
			url: 'https://www.instagram.com/ericirust4',
			icon: <FaInstagram size={26} />,
		},
	],
	contactEmail: 'ericirusta90@gmail.com',
	phoneNumber: '+543584849988',
	photoSrc: '/foto-perfil.webp',
};

export const tabs = [
	{
		id: 1,
		name: 'Proyectos',
		icon: IoGridOutline,
	},
	{
		id: 2,
		name: 'Experiencia',
		icon: FaRegBookmark,
	},
	{
		id: 3,
		name: 'Habilidades',
		icon: FaRegUser,
	},
];

export const projects: Project[] = [
	{
		id: 1,
		name: 'Administrador de Pacientes de Veterinaria',
		description:
			'Aplicación donde los veterinarios pueden crear una cuenta para poder dar de alta sus pacientes, asi como editarlos y/o borrarlos.',
		technologies: [
			'Node.js',
			'MongoDB',
			'Express',
			'React',
			'Tailwind CSS',
		],
		projectUrl: 'https://apv-frontend-lemon.vercel.app',
		githubUrl: 'https://github.com/ericirusta90/apv-frontend',
		imageSrc: '/apv_3.jpeg',
	},
	{
		id: 2,
		name: 'Bienes Raices',
		description:
			'Sitio donde los visitantes podrán crear su cuenta y comenzar a publicar sus propiedades con descripción e información de la propiedad, mapas y fotografía de la propiedad.',
		technologies: [
			'Node.js',
			'Express',
			'MySQL',
			'Sequelize',
			'Tailwind CSS',
		],
		projectUrl: 'https://biencesraices-node.onrender.com/',
		githubUrl: 'https://github.com/ericirusta90/biencesraices-node',
		imageSrc: '/bienes-raices3.jpeg',
	},
	{
		id: 3,
		name: 'DevTree',
		description:
			'App en donde los usuarios pueden crear su cuenta y añadir enlaces a las redes sociales más populares; Instagram, YouTube, Facebook, etc. Cada usuario puede crear su cuenta y personalizar sus enlaces.',
		technologies: [
			'React',
			'TypeScript',
			'Node.js',
			'MongoDB',
			'Express',
			'Tailwind CSS',
		],
		projectUrl: 'https://ericirusta-devtree.netlify.app/',
		githubUrl: 'https://github.com/ericirusta90/deploy_devtree_frontend',
		imageSrc: '/devtree.jpeg',
	},
	{
		id: 4,
		name: 'CRM - Administrador de Clientes',
		description:
			'Aplicación para la gestión de clientes y productos. Permite registrar, actualizar y eliminar la información. También, facilita la creación de pedidos, proporcionando un listado detallado de los artículos y el precio total de cada pedido.',
		technologies: [
			'React',
			'Node.js',
			'Express',
			'MongoDB'
		],
		projectUrl: 'https://crmclientes.netlify.app/iniciar-sesion',
		githubUrl: 'https://github.com/ericirusta90/crm-frontend',
		imageSrc: '/cmr.jpeg',
	},
	{
		id: 5,
		name: 'Dashboard',
		description:
			'Panel de seguimiento del tiempo donde el usuario puede cambiar entre la visualización de estadísticas diarias, semanales y mensuales',
		technologies: [
			'Tailwind CSS',
			'React',
			'TypeScript',
			'Zustand'
		],
		projectUrl: 'https://dashboard-reporte.vercel.app/',
		githubUrl: 'https://github.com/ericirusta90/dashboard-reporte',
		imageSrc: '/dashboard.jpeg',
	},
	{
		id: 6,
		name: 'Tip Calculator',
		description:
			'Aplicación que permite calcular propinas de manera sencilla y rápida.',
		technologies: [
			'Tailwind CSS',
			'React',
			'TypeScript',
			'Zustand'

		],
		projectUrl: 'https://tip-calculator-iota-ashy.vercel.app/',
		githubUrl: 'https://github.com/ericirusta90/tip-calculator',
		imageSrc: '/tip-calculator.jpeg',
	},
];

export const experience = [
	{
		id: 1,
		position: 'Full-Stack Developer',
		timeRange: 'May 2024 – Ago 2025',
		companyName: 'Independiente',
		companyLocation: 'Río Cuarto, Argentina',
		description:
			'Actualmente, estoy realizando proyectos web para ampliar mis conocimientos tanto en Frontend como en Backend',
		technologiesUsed: [
			'JavaScript',
			'TypeScript',
			'React',
			'MySQL',
			'Node.js',
			'Express',
			'MongoDB',
		],
	},
	{
		id: 2,
		position: 'Oficial Servicios Profesionales',
		timeRange: 'Ago 2021 – Jun 2024',
		companyName: 'Fuerza Aérea Argentina',
		companyLocation: 'Buenos Aires, Argentina',
		description:
			'Oficial destinado en el Departamento de Desarrollo y Mantenimiento de Software de la Dirección de Informática.',
		technologiesUsed: [
			'JavaScript',
			'MySQL',
			'PHP',
			
		],
	},
	{
		id: 3,
		position: 'Administrativo',
		timeRange: 'Dic 2020 – Julio 2021',
		companyName: 'COPESP',
		companyLocation: 'Río Cuarto, Argentina',
		description:
			'A cargo del manejo de un sistema inventarios de materiales y realización de certificaciones de trabajos relacionados con la teléfonia fija.',
		technologiesUsed: [],
	},
	
];

export const skills = [
	{
		id: 1,
		imageSrc: '/react.png',
		technologyName: 'React',
		level: 'Avanzado',
		context: 'Frontend',
		bgColor: '#E1F5FE',
		borderColor: '#81D4FA',
	},/*
	{
		id: 2,
		imageSrc: '/nextjs.png',
		technologyName: 'Next.js',
		level: 'Intermedio',
		context: 'Full-Stack',
		bgColor: '#F5F5F5',
		borderColor: '#BDBDBD',
	},*/
	{
		id: 3,
		imageSrc: '/nodejs.png',
		technologyName: 'Node.js',
		level: 'Avanzado',
		context: 'Backend',
		bgColor: '#E8F5E8',
		borderColor: '#81C784',
	},/*
	{
		id: 4,
		imageSrc: '/nestjs.png',
		technologyName: 'NestJS',
		level: 'Avanzado',
		context: 'Backend',
		bgColor: '#FCE4EC',
		borderColor: '#F48FB1',
	},
	{
		id: 5,
		imageSrc: '/gsap.png',
		technologyName: 'GSAP',
		level: 'Intermedio',
		context: 'Animations',
		bgColor: '#F1F8E9',
		borderColor: '#AED581',
	},*/
	{
		id: 6,
		imageSrc: '/tailwindcss.png',
		technologyName: 'Tailwind CSS',
		level: 'Avanzado',
		context: 'UI/UX',
		bgColor: '#E0F7FA',
		borderColor: '#80DEEA',
	},
	{
		id: 7,
		imageSrc: '/typescript.png',
		technologyName: 'TypeScript',
		level: 'Avanzado',
		context: 'Language',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	{
		id: 8,
		imageSrc: '/javascript.png',
		technologyName: 'JavaScript',
		level: 'Avanzado',
		context: 'Language',
		bgColor: '#FFFDE7',
		borderColor: '#FFF176',
	},/*
	{
		id: 9,
		imageSrc: '/python.png',
		technologyName: 'Python',
		level: 'Intermedio',
		context: 'Backend',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	{
		id: 10,
		imageSrc: '/rust.png',
		technologyName: 'Rust',
		level: 'Básico',
		context: 'Systems',
		bgColor: '#FFF3E0',
		borderColor: '#FFCC80',
	},
	{
		id: 11,
		imageSrc: '/flutter.png',
		technologyName: 'Flutter',
		level: 'Intermedio',
		context: 'Mobile',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	{
		id: 12,
		imageSrc: '/vuejs.png',
		technologyName: 'Vue.js',
		level: 'Intermedio',
		context: 'Frontend',
		bgColor: '#E8F5E8',
		borderColor: '#A5D6A7',
	},
	{
		id: 13,
		imageSrc: '/graphql.png',
		technologyName: 'GraphQL',
		level: 'Intermedio',
		context: 'API',
		bgColor: '#FCE4EC',
		borderColor: '#F8BBD9',
	},
	{
		id: 14,
		imageSrc: '/docker.png',
		technologyName: 'Docker',
		level: 'Intermedio',
		context: 'DevOps',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	{
		id: 15,
		imageSrc: '/aws.png',
		technologyName: 'AWS',
		level: 'Intermedio',
		context: 'Cloud',
		bgColor: '#FFF8E1',
		borderColor: '#FFCC02',
	},
	{
		id: 16,
		imageSrc: '/firebase.png',
		technologyName: 'Firebase',
		level: 'Avanzado',
		context: 'Backend',
		bgColor: '#FFF8E1',
		borderColor: '#FFD54F',
	},*/
	{
		id: 17,
		imageSrc: '/mongodb.png',
		technologyName: 'MongoDB',
		level: 'Avanzado',
		context: 'Database',
		bgColor: '#E8F5E8',
		borderColor: '#A5D6A7',
	},
	{
		id: 18,
		imageSrc: '/mysql.png',
		technologyName: 'MySQL',
		level: 'Intermedio',
		context: 'Database',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},/*
	{
		id: 19,
		imageSrc: '/unity.png',
		technologyName: 'Unity',
		level: 'Básico',
		context: 'Game Dev',
		bgColor: '#FAFAFA',
		borderColor: '#E0E0E0',
	},
	{
		id: 20,
		imageSrc: '/csharp.png',
		technologyName: 'C#',
		level: 'Básico',
		context: 'Language',
		bgColor: '#E8F5E8',
		borderColor: '#A5D6A7',
	},
	{
		id: 21,
		imageSrc: '/storybook.png',
		technologyName: 'Storybook',
		level: 'Intermedio',
		context: 'UI Tools',
		bgColor: '#FCE4EC',
		borderColor: '#F8BBD9',
	},
	{
		id: 22,
		imageSrc: '/fastapi.png',
		technologyName: 'FastAPI',
		level: 'Intermedio',
		context: 'Backend',
		bgColor: '#E0F2F1',
		borderColor: '#80CBC4',
	},
	{
		id: 23,
		imageSrc: '/elasticsearch.png',
		technologyName: 'Elasticsearch',
		level: 'Básico',
		context: 'Search',
		bgColor: '#E0F7FA',
		borderColor: '#80DEEA',
	},*/
];
