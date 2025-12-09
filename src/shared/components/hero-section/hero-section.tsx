import { motion } from 'framer-motion';
import { ChevronDown, Github, LayoutDashboard, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
	const navigate = useNavigate();
	return (
		<>
			<section className="relative isolate min-h-screen flex items-center justify-center pt-16 overflow-hidden">
				{/* Background Elements */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
					<motion.div
						animate={{
							x: [0, 30, 0],
							y: [0, -30, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]"
					/>
					<motion.div
						animate={{
							x: [0, -40, 0],
							y: [0, 40, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 1,
						}}
						className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"
					/>
				</div>
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
					<div className="space-y-6 max-w-3xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
							<span className="text-primary-400 font-medium text-sm">Open to Opportunities</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
							Senior Frontend <br className="hidden md:block" />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
								System Architect
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
							Specializing in high-performance web applications, complex system migrations (Vue to
							Angular), and bridging the gap between Frontend, IOT, and DevOps.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
							<motion.button
								onClick={() => navigate('/dashboard')}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-bold transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2">
								<LayoutDashboard size={20} />
								Open Dashboard
							</motion.button>
							<div className="flex gap-4">
								<motion.a
									href="https://github.com"
									target="_blank"
									rel="noreferrer"
									whileHover={{ scale: 1.1, backgroundColor: '#334155' }}
									whileTap={{ scale: 0.95 }}
									className="p-3.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
									aria-label="GitHub">
									<Github size={20} />
								</motion.a>
								<motion.a
									href="mailto:example@email.com"
									whileHover={{ scale: 1.1, backgroundColor: '#334155' }}
									whileTap={{ scale: 0.95 }}
									className="p-3.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
									aria-label="Email">
									<Mail size={20} />
								</motion.a>
							</div>
						</motion.div>
					</div>

					{/* Tech Stack Marquee (Static representation for simplicity) */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="mt-20 pt-10 border-t border-slate-800/50 w-full">
						<p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
							Core Technologies
						</p>
						<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 font-medium">
							{[
								'Angular',
								'Vue.js',
								'React',
								'TypeScript',
								'RxJS',
								'Docker',
								'Tailwind',
								'WebSocket',
							].map((tech, index) => (
								<motion.span
									key={tech}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + index * 0.1 }}
									whileHover={{ color: '#38bdf8', y: -2 }}
									className="transition-colors cursor-default">
									{tech}
								</motion.span>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="absolute bottom-8 text-slate-500">
					<ChevronDown size={24} />
				</motion.div>
			</section>
		</>
	);
};

export default Hero;
