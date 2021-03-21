export const planetChartData = {
  type: 'line',
  data: {
    labels: [
      'Mercury',
      'Venus',
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn',
      'Uranus',
      'Neptune'
    ],
    datasets: [
      {
        label: 'Number of Moons',
        data: [0, 0, 1, 2, 79, 82, 27, 14],
        backgroundColor: 'rgba(54,73,93,.5)',
        borderColor: '#36495d',
        borderWidth: 3
      },
    ]
  },
  options: {
    responsive: true,
  }
};

export default planetChartData;
