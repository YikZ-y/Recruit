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
      data: ['北京','上海','深圳','杭州','广州','成都','南京','无锡','武汉','珠海']
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
		35.26,41.08,33.63,29.90,28.40,23.10,33.57,14.29,25.60,37.50
      ]
    }
  ]
};

		 myChart4.setOption(option4);
})