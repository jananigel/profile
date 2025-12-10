import { Code, Github } from 'lucide-react';

const ProjectCard = () => {
	return (
		<>
			<div className="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-300 flex flex-col">
				<div className="p-1 h-1 w-full bg-gradient-to-r from-primary-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

				<div className="p-6 flex-1 flex flex-col">
					<div className="flex justify-between items-start mb-4">
						<div className="p-2 bg-slate-900 rounded-lg text-primary-400 group-hover:text-white group-hover:bg-primary-500 transition-colors duration-300">
							<Code size={20} />
						</div>
						<Github
							size={20}
							className="text-slate-600 group-hover:text-slate-300 transition-colors"
						/>
					</div>

					<h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
						Project Name
					</h3>

					<p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">Description</p>

					<div className="flex flex-wrap gap-2 mt-auto">
						<span className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-900 rounded border border-slate-800">
							Tech 1
						</span>
						<span className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-900 rounded border border-slate-800">
							Tech 2
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
