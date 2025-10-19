import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navigation() {
	const [open, setOpen] = useState(false);

	const menu = [
		{ name: 'Bosh sahifa', link: '#home' },
		{ name: 'Men haqimda', link: '#about' },
		{ name: 'Loyihalar', link: '#projects' },
		{ name: 'Ko‘nikmalar', link: '#skills' },
		{ name: 'Aloqa', link: '#contact' },
	];

	return (
		<nav className='fixed top-0 w-full backdrop-blur-lg bg-slate-900/60 border-b border-slate-700/30 z-50'>
			<div className='max-w-6xl mx-auto flex items-center justify-between px-6 py-4'>
				{/* Logo */}
				<h1 className='text-2xl sm:text-3xl font-bold text-cyan-400'>
					Sirojbek<span className='text-white'>.dev</span>
				</h1>

				{/* Desktop Menu */}
				<ul className='hidden md:flex gap-8 text-slate-300'>
					{menu.map(item => (
						<li key={item.name}>
							<a href={item.link} className='hover:text-cyan-400 transition-colors duration-200'>
								{item.name}
							</a>
						</li>
					))}
				</ul>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden text-slate-200 hover:text-cyan-400 transition-colors'
					onClick={() => setOpen(!open)}
					aria-label='Mobil menyuni ochish yoki yopish'
				>
					{open ? <X size={26} /> : <Menu size={26} />}
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			<div
				className={`md:hidden bg-slate-900/95 border-t border-slate-700/40 transition-all duration-300 overflow-hidden ${
					open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<ul className='flex flex-col items-center py-4 space-y-4 text-slate-200'>
					{menu.map(item => (
						<li key={item.name}>
							<a
								href={item.link}
								onClick={() => setOpen(false)}
								className='block px-4 py-2 hover:text-cyan-400 transition-colors duration-200'
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
