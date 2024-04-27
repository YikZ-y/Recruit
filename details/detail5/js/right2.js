//导入数据
$(function(){
// 基于准备好的dom，初始化echarts实例
        var myChart4 = echarts.init(document.getElementById('right2'));
//配置数据
option4 = {
  color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(255, 170, 255, 1.0)'
              },
              {
                offset: 1,
                color: 'rgba(170, 170, 255, 1.0)'
              }
            ],
            false
  ),
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {////图片与容器的距离
    top: '4%',
    right: '1%',
    bottom: '2%',
    left: '1%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
	  axisLine: {
	    show: true,
	    lineStyle: {
	      color: '#CEDDF2'
	    }
	  },
      // prettier-ignore
      data: ['北京','深圳','上海','杭州','广州','成都','武汉','南京','西安','重庆']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '薪资',
      position: 'left',
      alignTicks: true,
	  splitLine: { show: false } ,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#CEDDF2'
        }
      },
      axisLabel: {
        formatter: '{value}K'
      }
    }
  ],
  series: [
    {
      name: '薪资（K）',
      type: 'bar',
      data: [
        31.33,29.15,26.41,28.16,18.67,19.67,19.3,18.04,18.41,16.35
      ]
    }
  ]
};

		 myChart4.setOption(option4);
})