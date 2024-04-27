//导入数据
$(function(){
	var myChart2 = echarts.init(document.getElementById('left2'));
	option2 = {
	  tooltip: {
	    trigger: 'axis',
	    axisPointer: {
	      type: 'cross',
	      crossStyle: {
	        color: '#999'
	      }
	    }
	  },
	  grid: {
	  	left: 50,
	  	right: 25,
	  	bottom: 40
	  },
	  legend: {
	    data: [ '岗位数', '薪资'],
		textStyle:{
		    color: '#ffffff'//字体颜色
		},
	  },
	  xAxis: [
	    {
	      type: 'category',
		  axisLabel:{
		  	textStyle:{
		  	    color: '#ffffff'//字体颜色
		  	},
		  	interval: 0,
		  	
		  },
	      data: ['抖音视界(北京)', '亚信科技(中国)', '京北方信息技术'],
	      axisPointer: {
	        type: 'shadow'
	      }
	    }
	  ],
	  yAxis: [ 
	    {
	      type: 'value',
	      name: '岗位数',
		  nameTextStyle:{
			   color:"#ffffff", 
		   },
	      min: 10,
	      max: 60,
	      interval:10,
	      axisLabel: {
	        formatter: '{value}',
			textStyle:{
			    color: '#ffffff'//字体颜色
			},
	      }
	    },
	    {
	      type: 'value',
	      name: '薪资',
		  nameTextStyle:{
		  			   color:"#ffffff", 
		   },
	      min: 0,
	      max: 50,
	      interval: 10,
	      axisLabel: {
	        formatter: '{value} K',
			textStyle:{
			    color: '#ffffff'//字体颜色
			},
	      }
	    }
	  ],
	  series: [
	    {
			color: '#aaaaff',
	      name: '岗位数',
	      type: 'bar',
	      tooltip: {
	        valueFormatter: function (value) {
	          return value;
	        }
	      },
	      data: [
	        56,13,12
	      ]
	    },
	    {
			color: '#00ffff',
	      name: '薪资',
	      type: 'line',
	      yAxisIndex: 1,
	      tooltip: {
	        valueFormatter: function (value) {
	          return value + 'K';
	        }
	      },
	      data: [41.55, 23.15, 16.875]
	    }
	  ]
	};
	myChart2.setOption(option2);
})