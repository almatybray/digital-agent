import React from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '../../components/card/Card';

export default function FirstChart() {
  const chartData = {
    labels: ['11.11', '12.11', '13.11', '14.11', '15.11', '16.11', '17.11', '18.11'],
    datasets: [
      {
        label: 'Поз.',
        backgroundColor: '#3ec25f',
        barThickness: 16,
        data: [85, 55, 35, 62, 28, 16, 35, 10, 5],
      },
      {
        label: 'Нег.',
        backgroundColor: '#df443a',
        barThickness: 16,
        data: [10, 31, 46, 28, 38, 72, 40, 15],
      },
      {
        label: 'Нейт.',
        backgroundColor: '#3a9bdf',
        barThickness: 16,
        data: [15, 22, 28, 34, 45, 12, 26, 5],
      },
    ],
  };

  return (
    <Card
      type="large"
      title="График настроения граждан"
      tabs={['1 день', '7 дней', '1 мес.', '3 мес.', '1 год']}
    >
      <Bar data={chartData} />
    </Card>
  );
}
