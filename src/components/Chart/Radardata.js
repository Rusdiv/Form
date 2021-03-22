export const planetChartData = {
  type: 'radar',
  data: {
    labels: [
      'name1',
      'name2',
      'name3',
      'name4',
      'name5',
      'name6',
      'name7',
    ],
    datasets: [
      {
        label: 'Number of Moons',
        data: [15, 15, 16, 16, 14, 16, 15,],
        backgroundColor: 'rgba(54,73,93,.5)',
        borderColor: '#36495d',
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true
  }
};

export default planetChartData;
