import { STAT_INFO } from '../../core/constants';
import CarrerSection from '../../shared/components/carrer-timeline/carrer-section/carrer-section.component';
import { CarrerTimelineProvider } from '../../shared/components/carrer-timeline/contexts/carrer-timeline.context';
import { DashboardTitle } from '../../shared/components/dashboard/';
import ActiveSkillSection from '../../shared/components/dashboard/active-skill-section/active-skill-section.component';
import CareerSummary from '../../shared/components/dashboard/career-summary/career-summary.component';
import SelfIntroCard from '../../shared/components/dashboard/self-intro-card/self-intro-card.component';
import SkillDistribution from '../../shared/components/dashboard/skill-distribution/skill-distribution.component';
import StatCard from '../../shared/components/dashboard/stat-card/stat-card.component';

const DashboardPage = () => {
	return (
		<>
			<div className="pt-24 pb-12 px-4 min-h-screen bg-slate-950 text-slate-200 font-sans">
				<div className="max-w-7xl mx-auto space-y-6">
					<DashboardTitle></DashboardTitle>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{STAT_INFO.map((stat, index) => {
							return (
								<StatCard
									key={stat.titleKey}
									titleKey={stat.titleKey}
									value={stat.value}
									icon={stat.icon}
									color={stat.color}
									delay={0.1 * index}></StatCard>
							);
						})}
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<SelfIntroCard></SelfIntroCard>
						<CareerSummary></CareerSummary>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<CarrerTimelineProvider>
							<CarrerSection></CarrerSection>
						</CarrerTimelineProvider>
						<SkillDistribution></SkillDistribution>
					</div>
					<ActiveSkillSection></ActiveSkillSection>
				</div>
			</div>
		</>
	);
};

export default DashboardPage;
