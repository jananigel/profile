import { DashboardTitle } from '../../shared/components/dashboard/';

const DashboardPage = () => {
	return (
		<>
			<div className="pt-24 pb-12 px-4 min-h-screen bg-slate-950 text-slate-200 font-sans">
				<div className="max-w-7xl mx-auto space-y-6">
					<DashboardTitle></DashboardTitle>
				</div>
			</div>
		</>
	);
};

export default DashboardPage;
