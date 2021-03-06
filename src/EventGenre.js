import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const EventGenre = ({ events }) => {
	const [data, setData] = useState([]);
	useEffect(() => { setData(() => getData()) }, [events]);

	const getData = () => {
		const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
		const data = genres.map((genre) => {
			const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
			return { name: genre, value: value };
		});
		return data;
	};

	return (
		<ResponsiveContainer height={400}>
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					outerRadius={80}
					fill="#8884d8"
					dataKey="value"
					label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
				>
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}

export default EventGenre;