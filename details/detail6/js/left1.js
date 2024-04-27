$(function(){
// 基于准备好的dom，初始化echarts实例
	var dom = document.getElementById('left1');
	var myChart1 = echarts.init(dom, null, {
	  renderer: 'canvas',
	  useDirtyRect: false
	});
	const type = [
		{name:'<12K',value:6},
		{name:'12K~15K',value:13},
		{name:'15K~22K',value:39},
		{name:'22K~30K',value:61},
		{name:'30K~37K',value:101},
		{name:'>37K',value:227}
	]
	const Data = [
		[
			{name:'1年以下',value:1},
			{name:'1-3年',value:3},
			{name:'3-5年',value:1},
			{name:'5-10年',value:0},
			{name:'10年以上',value:0},
			{name:'不限',value:1},
			{name:'在校/应届',value:0}
		],
		[
			{name:'1年以下',value:0},
			{name:'1-3年',value:7},
			{name:'3-5年',value:3},
			{name:'5-10年',value:2},
			{name:'10年以上',value:0},
			{name:'不限',value:0},
			{name:'在校/应届',value:1}
		],
		[
			{name:'1年以下',value:0},
			{name:'1-3年',value:17},
			{name:'3-5年',value:11},
			{name:'5-10年',value:1},
			{name:'10年以上',value:0},
			{name:'不限',value:10},
			{name:'在校/应届',value:0}
		],
		[
			{name:'1年以下',value:3},
			{name:'1-3年',value:13},
			{name:'3-5年',value:33},
			{name:'5-10年',value:6},
			{name:'10年以上',value:0},
			{name:'不限',value:6},
			{name:'在校/应届',value:0}
		],
		[
			{name:'1年以下',value:0},
			{name:'1-3年',value:22},
			{name:'3-5年',value:39},
			{name:'5-10年',value:9},
			{name:'10年以上',value:0},
			{name:'不限',value:31},
			{name:'在校/应届',value:0}
		],
		[
			{name:'1年以下',value:2},
			{name:'1-3年',value:43},
			{name:'3-5年',value:111},
			{name:'5-10年',value:23},
			{name:'10年以上',value:1},
			{name:'不限',value:47},
			{name:'在校/应届',value:0}
		]
	]
	 // 指定图表的配置项和数据
	var option1 = {
		toolbox: {
			feature: {
				restore: { show: true, title: '返回' }
			},
			iconStyle: {
				borderColor: '#aaaaff'
			}
		},
		tooltip: {
		    trigger: 'axis',
		    axisPointer: {
		    type: 'shadow'
		    }
		},
		grid: {
			left: 50,
			right: 20,
			bottom: 40
		},
		xAxis: {
			axisLabel:{
				textStyle:{
				    color: '#ffffff'//字体颜色
				},
				interval: 0,
				rotate: 30,
			},
			axisTick: {
			  alignWithLabel: true
			},
			axisLine: {
			  show: true,
			  lineStyle: {
			    color: '#CEDDF2'
			  }
			},
			data: type.map((a) => a.name)
		},
		yAxis: {
			axisLabel:{
				textStyle:{
				    color: '#ffffff'//字体颜色
				},
			},
			splitLine: { show: false } ,
			alignTicks: true,
			axisLine: {
			  show: true,
			  lineStyle: {
			    color: '#CEDDF2'
			  }
			},
		},
		animationDurationUpdate: 500,
		series: {
			color: '#ffaaff',
			type: 'bar',
			barWidth: '60%',
			barHeight: '80%',
			data: type.map((a) => a.value)
		}
	}
		 
	
	option1 && myChart1.setOption(option1)
	myChart1.on('click', (params) => {
		if (params.name == '<12K') {
		    option1.series = [
		        {
		          data: Data[0].map((a) => a.value)
		        }
		    ]
		    option1.xAxis.data = Data[0].map((a) => a.name)
		}
		if (params.name == '12K~15K') {
		    option1.series = [
		        {
		          data: Data[1]
		        }
		    ]
		    option1.xAxis.data = Data[1].map((a) => a.name)
		}
		if (params.name == '15K~22K') {
		    option1.series = [
		        {
		          data: Data[2]
		        }
		    ]
		    option1.xAxis.data = Data[2].map((a) => a.name)
		}
		if (params.name == '22K~30K') {
		      option1.series = [
		        {
		          data: Data[3]
		        }
		    ]
		    option1.xAxis.data = Data[3].map((a) => a.name)
		}
		if (params.name == '30K~37K') {
		    option1.series = [
		        {
		          data: Data[4]
		        }
		    ]
		    option1.xAxis.data = Data[4].map((a) => a.name)
		}
		if (params.name == '>37K') {
		    option1.series = [
		        {
		          data: Data[5]
		        }
		    ]
		    option1.xAxis.data = Data[5].map((a) => a.name)
		}
		option1 && myChart1.setOption(option1)
	})
	
})
