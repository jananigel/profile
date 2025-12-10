import { motion } from 'framer-motion';
import { Code, Github } from 'lucide-react';

import type { Project } from '../../../../core/interfaces';

interface ProjectData {
	project: Project | undefined;
	index: number;
}

const ProjectCard = ({ project, index }: ProjectData) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.1 }}
				whileHover={{ y: -10 }}
				className="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-300 flex flex-col">
				<div className="p-1 h-1 w-full bg-gradient-to-r from-primary-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

				<div className="p-6 flex-1 flex flex-col">
					<div className="flex justify-between items-start mb-4">
						<div className="p-2 bg-slate-900 rounded-lg text-primary-400 group-hover:text-white group-hover:bg-primary-500 transition-colors duration-300">
							<Code size={20} />
						</div>
						{project?.type === 'Github' && (
							<Github
								size={20}
								className="text-slate-600 group-hover:text-slate-300 transition-colors"
							/>
						)}
					</div>

					<h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
						{project?.title || 'Title'}
					</h3>

					<p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
						{project?.description || 'Description'}
					</p>

					<div className="flex flex-wrap gap-2 mt-auto">
						{project?.techStack.map((techStack) => {
							return (
								<span className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-900 rounded border border-slate-800">
									{techStack}
								</span>
							);
						})}
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default ProjectCard;
