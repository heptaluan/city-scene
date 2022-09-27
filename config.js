export const config = {
  maxData: 119 * 1.2,
  radiusAxisData: ['', '', '已复查人数', '高风险人数'],
  seriesData: [
    { value: 0, itemStyle: { color: 'transparent' } },
    { value: 0, itemStyle: { color: 'transparent' } },
    {
      value: 80,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(206, 0, 128, 1)' },
          { offset: 1, color: 'rgba(0, 90, 201, 1)' },
        ]),
      },
    },
    {
      value: 119,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            { offset: 0, color: 'rgba(0, 90, 201, 1)' },
            { offset: 0.9, color: 'rgba(6, 239, 252, 1)' },
            { offset: 1, color: 'rgba(6, 239, 252, 1)' },
          ],
          false
        ),
      },
    },
  ],
}
