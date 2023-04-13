import { Cell, PieChart as ChartType, Pie, ResponsiveContainer, Tooltip } from 'recharts';

import { ICharts } from '../charts.types';

import { sansSerifFontFamily } from '../../../fonts';
import { defaultChartColors } from '../charts.styles';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  percent = 0,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChart = ({ colors = defaultChartColors, data }: ICharts) => (
  <ResponsiveContainer>
    <ChartType width={400} height={400} style={{ fontFamily: sansSerifFontFamily }}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="data"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </ChartType>
  </ResponsiveContainer>
);

export default PieChart;
