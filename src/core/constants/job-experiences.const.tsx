import type { JobExperience } from '../interfaces/job-experiences.interface';

export const EXPERIENCE: JobExperience[] = [
	{
		id: 'job1',
		company: '亞古瑞得 (Aggrid)',
		role: 'Frontend Developer',
		period: '2022.07 - Present',
		techStack: ['Vue2', 'Angular', 'Docker', 'Jenkins', 'IndexedDB', 'Web Worker'],
		description: [
			'Shopify 電商前端維護：接手並重構 Vue2 功能模組，導入 Webpack 化模式提升效能。',
			'跨框架遷移 (Vue → Angular)：負責 user dashboard 項目，將 Vue2 專案成功轉換至 Angular，深度理解兩者生命週期差異與架構，降低技術負債。',
			'IOT 產品介面設計：解決螢幕觸控漂移與 OLED 烙印問題，提升裝置穩定性。',
			'架構重構：主導將原本 1000+ 行的程式碼重構至 300 行內，大幅降低耦合度。',
			'Design System：與設計師共同制定 UI/UX 規範，減少重工。',
			'DevOps：使用 Docker Compose 架設 Jenkins CI/CD，包含自動化部署與多平台打包。',
			'效能優化：建立 Web Worker + IndexedDB 機制處理百萬筆資料，降低前端卡頓。',
			'自動化：導入 n8n 自動化流程，同步多語系與產品資料。',
		],
	},
	{
		id: 'job2',
		company: '一通數位',
		role: 'Frontend Web Developer',
		period: '2021.05 - 2022.07',
		techStack: ['Angular', 'Ionic', 'NW.js', 'WebSocket', 'RxJS'],
		description: [
			'微前端架構：維護與開發 Vue 撰寫的註冊流程功能。',
			'期貨交易平台：開發跨平台交易 App (Angular + Ionic + NW.js)，成功上架 App Store 與 Google Play。',
			'即時行情處理：客製化 K 線圖表，利用 WebSocket 解決非同步與斷線重連問題。',
			'流程優化：導入 GTW、Jira 工作流程，提高團隊協作效率與 QA 品質。',
		],
	},
	{
		id: 'job3',
		company: 'CBX Software',
		role: 'Frontend Developer',
		period: '2018.12 - 2021.05',
		techStack: ['Angular', 'Ionic', 'Scrum', 'Gitflow', 'Matomo'],
		description: [
			'開發供應商與零售商平台 (Angular + Ionic)。',
			'實作即時功能：開發聊天系統、檔案傳輸、多步驟表單自動儲存。',
			'效能提升：使用 IntersectionObserver + Infinite Scroll 優化列表效能。',
			'CI/CD 與流程：使用 Gitflow、Scrum，串接 GitLab、SonarQube、Jenkins。',
		],
	},
	{
		id: 'job4',
		company: '佳世達科技 (Qisda)',
		role: 'Frontend Web Developer',
		period: '2017.10 - 2018.12',
		techStack: ['Google Maps API', 'SSE', 'WebSocket', 'IOT'],
		description: [
			'開發 IOT 車聯網平台，整合 Google Map + 即時車況資料。',
			'地圖渲染優化：根據情境選擇 SSE / WebSocket。',
			'客製化地圖：客製化 Google Map 路線呈現，增強使用彈性與品牌識別。',
			'權限控管：後台採用 RBAC 權限架構。',
		],
	},
	{
		id: 'job5',
		company: 'Maxense Inc.',
		role: '前端開發 / 網站設計',
		period: '2014.08 - 2017.09',
		techStack: ['HTML', 'SASS', 'Bootstrap', 'Gulp', 'NodeJS'],
		description: [
			'使用 HAML/SASS/Bootstrap/Gulp 製作政府前後台網站。',
			'建立自製元件模組化系統，降低維護成本。',
			'分享 NodeJS 專案（Websocket 聊天/白板），建立團隊技術交流文化。',
		],
	},
	{
		id: 'job6',
		company: 'XPEC (樂陞科技)',
		role: 'RD',
		period: '2012.06 - 2014.04',
		techStack: ['Unity', 'C#', 'Flash', 'ActionScript3'],
		description: [
			'手機遊戲開發：使用 Flash/Action Script3, Unity/C#。',
			'負責遊戲介面與介面操作邏輯開發。',
		],
	},
];
