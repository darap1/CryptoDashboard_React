import { Layout, Select, Space, Button, Flex, Modal, Drawer } from 'antd';
import { useEffect, useState } from 'react';
import { useCrypto } from '../../context/crypto-context';
import AddAssetForm from '../AddAssetForm';
import CoinInfoModal from '../CoinInfoModal';

const headerStyle = {
	width: '100%',
	textAlign: 'center',
	height: 60,
	padding: '1rem',
	display: 'flex',
	justifyContent: 'space-between',
	aligtItems: 'center',
	// background: 'white',
};
const handleChange = (value) => {
	console.log(`selected ${value}`);
};

export default function AppHeader() {
	const [select, setSelect] = useState(false);
	const [drawer, setDrawer] = useState(false);

	const [coin, setCoin] = useState(null);
	const [modal, setModal] = useState(false);
	const { crypto } = useCrypto();

	useEffect(() => {
		const keypress = (event) => {
			if (event.key === '/') {
				setSelect((prev) => !prev);
			}
		};
		document.addEventListener('keypress', keypress);
		return () => document.removeEventListener('keypress', keypress);
	}, []);

	function handleSelect(value) {
		setCoin(crypto.find((c) => c.id === value));
		setModal(true);
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
				<Button type='primary' onClick={() => setDrawer(true)}>
					Add Asset
				</Button>
			</Flex>
			<Modal open={modal} onCancel={() => setModal(false)} footer={null}>
				<CoinInfoModal coin={coin} />
			</Modal>
			<Drawer
				title='Add Asset'
				width='600px'
				onClose={() => setDrawer(false)}
				open={drawer}
			>
				<AddAssetForm />
			</Drawer>
		</Layout.Header>
	);
}
