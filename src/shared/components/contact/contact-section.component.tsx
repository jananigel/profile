import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { BASE_USER_INFO } from '../../../core/constants';
const ContactSection = () => {
	const { t } = useTranslation('common');
	const footerRole = t('landing_contact_footer_role', { defaultValue: BASE_USER_INFO.title });
	return (
		<>
			<footer id="contact" className="py-12 bg-slate-900/50 border-t border-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						<h2 className="text-2xl font-bold text-white mb-6">{t('landing_contact_title')}</h2>
						<p className="text-slate-400 mb-8 max-w-xl mx-auto">
							{BASE_USER_INFO.isOpenToOpportunities && (
								<strong>{t('landing_contact_open_to_work')} </strong>
							)}
							{t('landing_contact_description')}
						</p>

						<div className="flex justify-center gap-6 mb-8">
							{[
								{ icon: Mail, labelKey: 'landing_contact_email_label', href: `mailto:${BASE_USER_INFO.email}` },
								{ icon: Github, labelKey: 'landing_contact_github_label', href: BASE_USER_INFO.github },
								{ icon: Linkedin, labelKey: 'landing_contact_linkedin_label', href: BASE_USER_INFO.linkedin },
							].map((item, index) => (
								<motion.a
									key={item.labelKey}
									href={item.href}
									target="_blank"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									whileHover={{ scale: 1.1, color: '#38bdf8' }}
									whileTap={{ scale: 0.9 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="flex items-center gap-2 text-slate-300 transition-colors">
									<item.icon size={20} />
									<span>{t(item.labelKey)}</span>
								</motion.a>
							))}
						</div>

						<div className="text-slate-600 text-sm">
							© {new Date().getFullYear()} {BASE_USER_INFO.fullName} - {footerRole}.
							<p>{t('landing_contact_footer_built')}</p>
						</div>
					</motion.div>
				</div>
			</footer>
		</>
	);
};

export default ContactSection;
