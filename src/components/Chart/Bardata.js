export const planetChartData = {
  type: 'bar',
  data: {
    labels: [
      'name1',
      'name2',
      'name3',
      'name4',
      'name5',
      'name6',
      'name7',
      'name8',
      'name9',
      'name10'
    ],
    datasets: [
      {
        label: 'Number of Moons',
        data: [10, 47, 1, 2, 79, 82, 27, 14, 32, 48, 123],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true
  }
};

export default planetChartData;
