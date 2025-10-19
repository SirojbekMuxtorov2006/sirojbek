import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FormData {
	name: string;
	email: string;
	message: string;
}

function ContactSection() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});

	const [isSent, setIsSent] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Yuborilgan forma:', formData);
		setIsSent(true);
		setTimeout(() => setIsSent(false), 3000);
		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<section
			id='contact'
			className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800/40 to-slate-900 border-t border-slate-700/40'
		>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-12 space-y-4'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Keling, bog‘lanamiz!
					</h2>
					<p className='text-slate-300 text-base sm:text-lg max-w-2xl mx-auto'>
						Sizda loyiha yoki taklif bormi? Quyidagi forma orqali menga yozing 👇
					</p>
				</div>

				{/* Form + Contact Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					{/* Contact Form */}
					<div className='bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm'>
						<h3 className='text-xl sm:text-2xl font-semibold mb-6'>📬 Xabar yuborish</h3>
						<form onSubmit={handleSubmit} className='space-y-5'>
							<div>
								<label className='block text-sm font-medium text-slate-300 mb-2'>Ism</label>
								<input
									type='text'
									name='name'
									value={formData.name}
									onChange={handleChange}
									placeholder='Ismingiz'
									required
									className='w-full px-4 py-3 bg-slate-700/40 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm sm:text-base'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium text-slate-300 mb-2'>Email</label>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									placeholder='email@example.com'
									required
									className='w-full px-4 py-3 bg-slate-700/40 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm sm:text-base'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium text-slate-300 mb-2'>Xabar</label>
								<textarea
									name='message'
									value={formData.message}
									onChange={handleChange}
									placeholder='Xabaringizni yozing...'
									rows={4}
									required
									className='w-full px-4 py-3 bg-slate-700/40 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none text-sm sm:text-base'
								/>
							</div>

							<button
								type='submit'
								className='w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95 text-sm sm:text-base'
							>
								{isSent ? '✅ Yuborildi!' : 'Xabarni yuborish'}
							</button>
						</form>
					</div>

					{/* Contact Info Cards */}
					<div className='space-y-6'>
						<div className='bg-slate-800/50 rounded-2xl p-5 sm:p-6 border border-slate-700 hover:border-blue-400/40 transition-all cursor-pointer'>
							<div className='flex items-center gap-4'>
								<Mail className='text-blue-400' size={28} />
								<div>
									<h4 className='text-base sm:text-lg font-semibold'>Email</h4>
									<a
										href='mailto:sirojbekmuxtorov9@gmail.com'
										className='text-slate-300 hover:text-blue-400 transition-colors text-sm sm:text-base break-all'
									>
										sirojbekmuxtorov9@gmail.com
									</a>
								</div>
							</div>
						</div>

						<div className='bg-slate-800/50 rounded-2xl p-5 sm:p-6 border border-slate-700 hover:border-cyan-400/40 transition-all cursor-pointer'>
							<div className='flex items-center gap-4'>
								<Github className='text-cyan-400' size={28} />
								<div>
									<h4 className='text-base sm:text-lg font-semibold'>GitHub</h4>
									<a
										href='https://github.com/SirojbekMuxtorov2006'
										target='_blank'
										rel='noopener noreferrer'
										className='text-slate-300 hover:text-cyan-400 transition-colors text-sm sm:text-base break-all'
									>
										github.com/SirojbekMuxtorov2006
									</a>
								</div>
							</div>
						</div>

						<div className='bg-slate-800/50 rounded-2xl p-5 sm:p-6 border border-slate-700 hover:border-teal-400/40 transition-all cursor-pointer'>
							<div className='flex items-center gap-4'>
								<Linkedin className='text-teal-400' size={28} />
								<div>
									<h4 className='text-base sm:text-lg font-semibold'>LinkedIn</h4>
									<a
										href='https://linkedin.com/in/sirojbekmuxtorov'
										target='_blank'
										rel='noopener noreferrer'
										className='text-slate-300 hover:text-teal-400 transition-colors text-sm sm:text-base break-all'
									>
										linkedin.com/in/sirojbekmuxtorov
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
