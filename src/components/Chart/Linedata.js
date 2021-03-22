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
        data: [10, 47, 1, 2, 79, 82, 27, 14],
        backgroundColor: 'rgba(54,73,93,.5)',
        borderColor: '#36495d',
        borderWidth: 3
      },
      {
        label: 'Blue',
        data: [1, 12, 6, 23, 34, 72, 26, 1],
        backgroundColor: 'hsla(182, 100%, 51%, 0.563)',
        borderColor: 'hsl(182, 100%, 51%)',
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true
  }
};

export default planetChartData;
