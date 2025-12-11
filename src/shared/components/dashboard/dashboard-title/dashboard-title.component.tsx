import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const DashboardTitle = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
				<div>
					<motion.h1
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
						<Activity className="text-primary-500" />
						PORTFOLIO DASHBOARD
					</motion.h1>
					<p className="text-slate-500 font-mono text-sm mt-1">
						STATUS: <span className="text-emerald-500 animate-pulse">ONLINE</span>
					</p>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="flex gap-2 font-mono text-xs text-slate-500">
					<span className="px-2 py-1 bg-slate-900 rounded border border-slate-800"> REACT 18</span>
					<span className="px-2 py-1 bg-slate-900 rounded border border-slate-800">ANGULAR 20</span>
					<span className="px-2 py-1 bg-slate-900 rounded border border-slate-800">VUE 2/3</span>
				</motion.div>
			</div>
		</>
	);
};

export default DashboardTitle;
