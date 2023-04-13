import { isArray } from 'lodash';
import { useMemo } from 'react';
import {
  CartesianGrid,
  LineChart as ChartType,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { ICharts } from '../charts.types';

import { sansSerifFontFamily } from '../../../fonts';
import { defaultChartColors } from '../charts.styles';

const LineChart = ({ colors = defaultChartColors, data, showLegend = true }: ICharts) => {
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
              <Line
                key={item}
                type="monotone"
                dataKey={item}
                stroke={colors[index]}
                activeDot={{ r: 8 }}
              />
            ))}
          </ChartType>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default LineChart;
