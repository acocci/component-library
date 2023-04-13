import { isArray } from 'lodash';
import { useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { ICharts } from '../charts.types';

import { sansSerifFontFamily } from '../../../fonts';
import { defaultChartColors } from '../charts.styles';

const BarGraph = ({ colors = defaultChartColors, data, showLegend = true }: ICharts) => {
  const keys = useMemo(
    () => isArray(data) && Object.keys(data[0]).filter(item => item !== 'name'),
    [data],
  );

  return (
    <>
      {keys && (
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              bottom: 0,
              left: 0,
              right: 30,
              top: 20,
            }}
            style={{ fontFamily: sansSerifFontFamily }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {showLegend && <Legend />}
            {keys.map((item, index) => (
              <Bar key={item} dataKey={item} fill={colors[index]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default BarGraph;
