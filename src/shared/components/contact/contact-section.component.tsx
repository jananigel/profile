import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

import { BASE_USER_INFO } from '../../../core/constants';
const ContactSection = () => {
	return (
		<>
			<footer id="contact" className="py-12 bg-slate-900/50 border-t border-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						<h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
						<p className="text-slate-400 mb-8 max-w-xl mx-auto">
							{BASE_USER_INFO.isOpenToOpportunities && (
								<strong>I'm currently looking for new opportunities. </strong>
							)}
							Whether you have a question or just want to say hi, my inbox is always open.
						</p>

						<div className="flex justify-center gap-6 mb-8">
							{[
								{ icon: Mail, label: 'Email Me', href: `mailto:${BASE_USER_INFO.email}` },
								{ icon: Github, label: 'GitHub', href: BASE_USER_INFO.github },
								{ icon: Linkedin, label: 'LinkedIn', href: BASE_USER_INFO.linkedin },
							].map((item, index) => (
								<motion.a
									key={item.label}
									href={item.href}
									target="_blank"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									whileHover={{ scale: 1.1, color: '#38bdf8' }}
									whileTap={{ scale: 0.9 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="flex items-center gap-2 text-slate-300 transition-colors">
									<item.icon size={20} />
									<span>{item.label}</span>
								</motion.a>
							))}
						</div>

						<div className="text-slate-600 text-sm">
							© {new Date().getFullYear()} {BASE_USER_INFO.fullName} - {BASE_USER_INFO.title}.
							<p>Built with React & Tailwind.</p>
						</div>
					</motion.div>
				</div>
			</footer>
		</>
	);
};

export default ContactSection;
