function AboutSection() {
	return (
		<section
			id='about'
			className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/40 border-t border-slate-700/40'
		>
			<div className='max-w-6xl mx-auto space-y-10'>
				{/* Header */}
				<div className='text-center space-y-3'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Sirojbek Muxtorov
					</h2>
					<p className='text-slate-400 text-sm sm:text-base'>
						📍 Samarqand, Urgut | 📞 +998 90 192 07 55 | ✉️{' '}
						<a
							href='mailto:sirojbekmuxtorov9@gmail.com'
							className='text-cyan-400 hover:underline break-all'
						>
							sirojbekmuxtorov9@gmail.com
						</a>
					</p>
					<div className='flex justify-center gap-4 text-sm sm:text-base'>
						<a
							href='https://github.com/SirojbekMuxtorov2006'
							target='_blank'
							rel='noopener noreferrer'
							className='text-cyan-400 hover:text-cyan-300 transition-colors'
						>
							🌐 GitHub
						</a>
					</div>
				</div>

				{/* Maqsad */}
				<div className='bg-slate-700/40 p-5 sm:p-6 rounded-2xl border border-slate-600/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all'>
					<h3 className='text-xl sm:text-2xl font-semibold mb-3 text-cyan-400'>🎯 Maqsad</h3>
					<p className='text-slate-300 text-sm sm:text-base leading-relaxed'>
						2 yillik <strong>strong junior</strong> tajribaga ega full-stack dasturchiman.
						<br />
						<strong>Next.js</strong> va <strong>NestJS</strong> asosida startup loyihalarda faol
						ishlamoqdaman. Barqaror, optimallashtirilgan va foydalanuvchiga qulay web ilovalar
						yaratishga intilaman. Jamoada ishlash, kod sifati va tizim arxitekturasiga katta e’tibor
						beraman.
					</p>
				</div>

				{/* Texnologiyalar */}
				<div className='bg-slate-700/40 p-5 sm:p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-400/30 transition-all'>
					<h3 className='text-xl sm:text-2xl font-semibold mb-3 text-cyan-400'>
						🧰 Texnologiyalar
					</h3>
					<ul className='grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300 text-sm sm:text-base'>
						<li>
							<strong>Frontend:</strong> Next.js, React.js, Tailwind CSS, Zustand, Redux Toolkit,
							shadcn/ui
						</li>
						<li>
							<strong>Backend:</strong> Node.js, NestJS, Express.js
						</li>
						<li>
							<strong>Database:</strong> PostgreSQL, MongoDB, Prisma, Mongoose
						</li>
						<li>
							<strong>API & Arxitektura:</strong> REST API, Swagger, JWT, Middleware, Modular
							Architecture
						</li>
						<li>
							<strong>DevOps & Tools:</strong> Git, GitHub, Docker, PM2, Vercel, Railway
						</li>
						<li>
							<strong>Qo‘shimcha:</strong> File upload, JWT auth, Responsive UI
						</li>
					</ul>
				</div>

				{/* Tajriba */}
				<div className='bg-slate-700/40 p-5 sm:p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-400/30 transition-all'>
					<h3 className='text-xl sm:text-2xl font-semibold mb-3 text-cyan-400'>🧑‍💻 Tajriba</h3>
					<div className='space-y-3'>
						<h4 className='text-lg sm:text-xl font-semibold text-white'>
							Full-Stack Developer — Startup loyiham
						</h4>
						<p className='text-slate-400 italic text-sm sm:text-base'>
							Masofaviy | 2025-yanvar – hozirgacha
						</p>
						<ul className='list-disc list-inside text-slate-300 text-sm sm:text-base space-y-1'>
							<li>Next.js + NestJS asosida to‘liq web ilova ishlab chiqilmoqda.</li>
							<li>User login/signup, admin panel, CRUD, JWT autentifikatsiya tizimi.</li>
							<li>PostgreSQL + Prisma ORM orqali ma’lumotlar bazasi boshqaruvi.</li>
							<li>Tailwind CSS va shadcn/ui yordamida responsive interfeys.</li>
							<li>Deployment: Vercel, Railway, Docker containerization.</li>
						</ul>
					</div>
				</div>

				{/* Loyihalar */}
				<div className='bg-slate-700/40 p-5 sm:p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-400/30 transition-all'>
					<h3 className='text-xl sm:text-2xl font-semibold mb-3 text-cyan-400'>📂 Loyihalar</h3>
					<ul className='list-disc list-inside text-slate-300 text-sm sm:text-base space-y-2'>
						<li>
							<strong>Startup Web Platform:</strong> User registration, admin dashboard, real-time
							monitoring (Next.js + NestJS + PostgreSQL)
						</li>
						<li>
							<strong>Blog CMS:</strong> Markdown asosidagi blog tizimi, post boshqaruvi, responsive
							dizayn.
						</li>
						<li>
							<strong>Tabel App:</strong> Ishchilar ish vaqti hisoboti, CRUD, JWT autentifikatsiya
							(React + Node.js + MongoDB)
						</li>
					</ul>
				</div>

				{/* Tillar */}
				<div className='bg-slate-700/40 p-5 sm:p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-400/30 transition-all'>
					<h3 className='text-xl sm:text-2xl font-semibold mb-3 text-cyan-400'>🌐 Tillar</h3>
					<ul className='text-slate-300 text-sm sm:text-base space-y-1'>
						<li>🇺🇿 O‘zbek tili — Ona tili</li>
						<li>🇷🇺 Rus tili — Yaxshi</li>
						<li>🇬🇧 Ingliz tili — Texnik darajada (dokumentatsiya o‘qish, yozish)</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
