import { Layout, Select, Space, Button, Flex } from 'antd';
import { useEffect, useState } from 'react';
import { useCrypto } from '../../context/crypto-context';

const headerStyle = {
	width: '100%',
	textAlign: 'center',
	height: 60,
	padding: '1rem',
	display: 'flex',
	justifyContent: 'space-between',
	alightItems: 'center',
	// background: 'white',
};
const handleChange = (value) => {
	console.log(`selected ${value}`);
};

export default function AppHeader() {
	const { select, setSelect } = useState(false);
	const { crypto } = useCrypto();

	useEffect(() => {
		const keypress = (event) => {
			if (event.key === '/') {
				setSelect(true);
			}
		};
		document.addEventListener('keypress', keypress);
		return () => document.removeEventListener('keypress', keypress);
	}, []);

	function handleSelect(value) {
		console.log(value);
	}
	return (
		<Layout.Header style={headerStyle}>
			<Select
				style={{
					width: '350px',
				}}
				open={select}
				onSelect={handleSelect}
				onClick={() => setSelect((prev) => !prev)}
				value='press/to open'
				optionLabelProp='label'
				options={crypto.map((coin) => ({
					label: coin.name,
					value: coin.id,
					icon: coin.icon,
				}))}
				optionRender={(option) => (
					<Space>
						<img
							style={{ width: 20 }}
							src={option.data.icon}
							alt={option.data.label}
						/>
						{option.data.label}
					</Space>
				)}
			/>
			<Flex gap='small' wrap='wrap'>
				<Button type='primary'>Add Asset</Button>
			</Flex>
		</Layout.Header>
	);
}
