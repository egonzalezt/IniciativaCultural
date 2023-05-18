import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppRealtimeMetrics.propTypes = {
  title: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  subheader: PropTypes.string,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppRealtimeMetrics({ title, min, max, subheader, chartLabels, ...other }) {
  
  const [chartData1, setChartData1] = useState([{
    x: new Date().getTime(),
    y: Math.floor(Math.random() * (max - min + 1)) + 10,
  }]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData1 = [...chartData1];
      const newDate = new Date().getTime();
      newData1.push({
        x: newDate,
        y: Math.floor(Math.random() * (max - min + 1)) + 10,
      });
      setChartData1(newData1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [chartData1]);

  const chartOptions = {
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      type: 'datetime',
      range: 60000,
    },
    yaxis: {
      max,
      min,
    },
    stroke: {
      curve: 'smooth',
    },
    series: [
      {
        name: 'Data Set 1',
        data: chartData1,
      },
    ],
    legend: {
      show: true,
    },
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart options={chartOptions}
          series={chartOptions.series}
          height={chartOptions.chart.height}
          type={chartOptions.chart.type}
        />
      </Box>
    </Card>
  );
}
