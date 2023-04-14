import { isArray } from 'lodash';
import { useMemo } from 'react';
import {
  Area,
  CartesianGrid,
  AreaChart as ChartType,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';


import { sansSerifFontFamily } from '../../../fonts';
import { defaultChartColors } from '../charts.styles';
import { ICharts } from '../charts.types';

const AreaChart = ({ colors = defaultChartColors, data, showLegend = true }: ICharts) => {
  const keys = useMemo(
    () => isArray(data) && Object.keys(data[0]).filter(item => item !== 'name'),
    [data],
  );

  return (
    <>
      {keys && (
        <ResponsiveContainer>
          <ChartType
            width={500}
            height={400}
            data={data}
            margin={{
              bottom: 0,
              left: 0,
              right: 30,
              top: 10,
            }}
            style={{ fontFamily: sansSerifFontFamily }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {showLegend && <Legend />}
            {keys.map((item, index) => (
              <Area
                key={item}
                type="monotone"
                dataKey={item}
                stackId="1"
                stroke={colors[index]}
                fill={colors[index]}
              />
            ))}
          </ChartType>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default AreaChart;
