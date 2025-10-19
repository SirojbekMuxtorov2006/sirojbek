interface Skill {
	name: string;
	image: string;
	category: string;
}

const skills: Skill[] = [
	// --- Frontend ---
	{ name: 'Next.js', image: '/nextjs.png', category: 'Frontend' },
	{ name: 'React.js', image: '/reactjs.png', category: 'Frontend' },
	{ name: 'Tailwind CSS', image: '/talwindcss.png', category: 'Frontend' },
	{ name: 'Redux Toolkit', image: '/redux.png', category: 'Frontend' },
	{ name: 'shadcn/ui', image: '/shadcn.png', category: 'Frontend' },
	{ name: 'Zustand', image: '/zustand.jpeg', category: 'Frontend' },

	// --- Backend ---
	{ name: 'Node.js', image: '/node.jpeg', category: 'Backend' },
	{ name: 'NestJS', image: '/nest.png', category: 'Backend' },
	{ name: 'Express.js', image: '/express.png', category: 'Backend' },
];

function SkillsSection() {
	const categories = ['Frontend', 'Backend'];

	return (
		<section
			id='skills'
			className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700/40'
		>
			<div className='max-w-6xl mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
					⚙️ Texnologiyalar
				</h2>

				{categories.map(category => (
					<div key={category} className='mb-14'>
						<h3 className='text-2xl font-semibold text-slate-200 mb-8'>{category}</h3>

						<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center'>
							{skills
								.filter(s => s.category === category)
								.map(skill => (
									<div
										key={skill.name}
										className='group flex flex-col items-center bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-28 h-28 justify-center'
									>
										<img
											src={skill.image}
											alt={skill.name}
											className='w-12 h-12 object-contain mb-2 group-hover:scale-110 transition-transform duration-300'
										/>
										<p className='text-slate-300 text-sm'>{skill.name}</p>
									</div>
								))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
export default SkillsSection;
