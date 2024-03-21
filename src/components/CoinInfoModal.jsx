import { Flex, Tag, Typography, Divider } from 'antd';

export default function CoinInfoModal({ coin }) {
	return (
		<>
			<Flex align='center'>
				<img
					src={coin.icon}
					alt={coin.name}
					style={{ width: 40, marginRight: 10 }}
				/>
				<Typography.Title level={2} style={{ margin: 0 }}>
					({coin.symbol}){coin.name}
				</Typography.Title>
			</Flex>
			<Divider style={{ textAlign: 'left' }}>
				<Typography.Paragraph>
					<Typography.Text strong>1 hour: </Typography.Text>
					<Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
						{coin.priceChange1h}%
					</Tag>
					<Typography.Text strong>1 hour: </Typography.Text>
					<Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
						{coin.priceChange1d}%
					</Tag>
					<Typography.Text strong>1 hour: </Typography.Text>
					<Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
						{coin.priceChange1w}%
					</Tag>
				</Typography.Paragraph>
				<Typography.Paragraph>
					<Typography.Text strong>Price : </Typography.Text>
					<Tag>{coin.price.toFixed(2)} $</Tag>
				</Typography.Paragraph>
				<Typography.Paragraph>
					<Typography.Text strong>Price Btc : </Typography.Text>
					<Tag>{coin.priceBtc.toFixed(2)} $</Tag>
				</Typography.Paragraph>
				<Typography.Paragraph>
					<Typography.Text strong>Capitalization : </Typography.Text>
					<Tag>{coin.marketCap.toFixed(2)} $</Tag>
				</Typography.Paragraph>
				{coin.contractAddress && (
					<Typography.Paragraph>
						<Typography.Text strong>Contract address : </Typography.Text>
						<Tag>{coin.contractAddress}</Tag>
					</Typography.Paragraph>
				)}
			</Divider>
		</>
	);
}
