import { Layout } from 'antd';
import AppHeader from './components/Layout/AppHeader';
import AppSider from './components/Layout/AppSider';

const headerStyle = {
	textAlign: 'center',
	color: '#fff',
	height: 60,
	paddingInline: 48,
	lineHeight: '64px',
	backgroundColor: '#4096ff',
};
const contentStyle = {
	textAlign: 'center',
	minHeight: 'calc(100vh - 60px)',
	color: '#fff',
	backgroundColor: '#001529',
};

export default function App() {
	return (
		<Layout>
			<AppHeader />
			<Layout>
				<AppSider />
				<Layout.Content style={contentStyle}>Content</Layout.Content>
			</Layout>
		</Layout>
	);
}

