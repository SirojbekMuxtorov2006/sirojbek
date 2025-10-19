import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
	title: string;
	description: string;
	tags: string[];
	image: string;
	link: string;
	github?: string;
}

const projects: Project[] = [
	{
		title: 'Blog CMS',
		description:
			'Markdown asosidagi blog tizimi: admin panel, CRUD, responsive dizayn va SEO uchun optimallashtirilgan frontend.',
		tags: ['Next.js', 'Typescript', 'shadcnui', 'TailwindCSS'],
		image: '/blog.jpg',
		link: 'https://sirojbek-blog.vercel.app/',
		github: 'https://github.com/SirojbekMuxtorov2006/blog-cms',
	},
	{
		title: 'CRM',
		description: 'Mijozlar bilan ishlashni boshqaruvchi CRM loyihasi.',
		tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
		image: '/crm.jpg',
		link: 'https://sirojbek-crm.vercel.app/dashboard',
		github: 'https://github.com/SirojbekMuxtorov2006/tabel-app',
	},
	{
		title: 'Shop',
		description: 'Online shop loyihasi — mahsulotlar, savat va to‘lov tizimi bilan.',
		tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
		image: '/shop.jpg',
		link: 'https://sirojbek-shop.vercel.app/',
		github: 'https://github.com/SirojbekMuxtorov2006/tabel-app',
	},
];

function ProjectsSection() {
	return (
		<section
			id='projects'
			className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/40 border-t border-slate-700/40'
		>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
					🚀 Loyihalarim
				</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col'
						>
							{/* Project Image */}
							<div className='relative aspect-video overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									loading='lazy'
									className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60'></div>
							</div>

							{/* Project Info */}
							<div className='flex flex-col flex-grow p-6 space-y-4'>
								<h3 className='text-xl sm:text-2xl font-semibold text-white'>{project.title}</h3>
								<p className='text-slate-300 text-sm sm:text-base leading-relaxed'>
									{project.description}
								</p>

								{/* Tags */}
								<div className='flex flex-wrap gap-2'>
									{project.tags.map(tag => (
										<span
											key={tag}
											className='px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs sm:text-sm border border-cyan-500/20'
										>
											{tag}
										</span>
									))}
								</div>

								{/* Links */}
								<div className='flex flex-wrap gap-4 pt-4 mt-auto'>
									<a
										href={project.link}
										target='_blank'
										rel='noopener noreferrer'
										aria-label='Live Demo'
										className='inline-flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300'
									>
										Live Demo <ExternalLink size={16} />
									</a>

									{project.github && (
										<a
											href={project.github}
											target='_blank'
											rel='noopener noreferrer'
											aria-label='GitHub Repository'
											className='inline-flex items-center gap-2 bg-slate-700/40 hover:bg-slate-700/60 border border-slate-600/50 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300'
										>
											GitHub <ExternalLink size={16} />
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProjectsSection;
