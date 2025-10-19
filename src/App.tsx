import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';

function App() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white scroll-smooth'>
			{/* ====== Navigatsiya Paneli ====== */}
			<Navigation />

			{/* ====== Asosiy Kontent ====== */}
			<main className='pt-20'>
				{/* Hero (Rasm va Intro) */}
				<HeroSection />

				{/* Men haqimda bo‘lim */}
				<AboutSection />

				{/* Loyihalar */}
				<ProjectsSection />

				{/* Ko‘nikmalar */}
				<SkillsSection />

				{/* Aloqa */}
				<ContactSection />
			</main>

			{/* ====== Footer ====== */}
			<Footer />
		</div>
	);
}
export default App;
