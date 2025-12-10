import Experience from '../../shared/components/experience/experience';
import Hero from '../../shared/components/hero-section/hero-section';
import ProjectSection from '../../shared/components/project/project-section/project-section.component';
import SkillSection from '../../shared/components/skills/skill-section/skill-section';

const LandingPage = () => {
	return (
		<>
			<Hero></Hero>
			<Experience></Experience>
			<SkillSection></SkillSection>
			<ProjectSection></ProjectSection>
		</>
	);
};

export default LandingPage;
