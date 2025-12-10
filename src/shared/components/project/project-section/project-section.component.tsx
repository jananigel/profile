import { PROJECTS } from '../../../../core/constants';
import ProjectCard from '../project-card/project-card.component';
import ProjectTitle from '../project-title/project-title';

const ProjectSection = () => {
	return (
		<>
			<section id="projects" className="py-24 bg-slate-900/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<ProjectTitle></ProjectTitle>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{PROJECTS.map((project, index) => {
							return <ProjectCard project={project} index={index} key={index}></ProjectCard>;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default ProjectSection;
