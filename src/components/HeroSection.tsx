import profile from '../assets/profile.jpg';
function HeroSection() {
	return (
		<section
			id='home'
			className='flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 max-w-6xl mx-auto'
		>
			<div className='text-center md:text-left space-y-5 md:w-1/2'>
				<h2 className='text-4xl md:text-5xl font-bold'>
					Salom 👋, men <span className='text-cyan-400'>Sirojbek Muxtorov</span>
				</h2>
				<p className='text-slate-400 text-lg'>
					Full-stack dasturchiman — Next.js, NestJS va zamonaviy texnologiyalar yordamida tezkor,
					ishonchli va chiroyli web ilovalar yarataman.
				</p>
				<a
					href='#contact'
					className='inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-medium px-6 py-3 rounded-xl transition-colors'
				>
					Menga bog‘lanish
				</a>
			</div>

			<div className='mb-10 md:mb-0 md:w-1/3'>
				<img
					src={profile}
					alt='Sirojbek Muxtorov'
					className='rounded-full shadow-lg border-4 border-cyan-400/40'
				/>
			</div>
		</section>
	);
}

export default HeroSection;
