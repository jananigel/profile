import { EDUCATION } from '../../../../core/constants';
import EducationCard from '../education-card/education-card.component';
import EducationTitle from '../education-title/education-title.component';

const EducationSection = () => {
	return (
		<>
			<section className="py-20 bg-slate-950 border-t border-slate-900">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Title */}
					<EducationTitle></EducationTitle>
					{/* Cards */}
					<div
						className={`grid grid-cols-1 ${EDUCATION.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-4xl mx-auto'} gap-6`}>
						{EDUCATION.map((education, index) => (
							<EducationCard key={education.id} education={education} index={index}></EducationCard>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default EducationSection;
