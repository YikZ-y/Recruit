$(function(){
    echart_map();
	function echart_map(){
		var myChart5 = echarts.init(document.getElementById("map"));
		// var chartDom = document.getElementById('chart');
		// var myChart = echarts.init(chartDom);
		function showProvince(){
			var geoCoordMap = {
				'北京': [116.23128,40.22077],'深圳': [113.88308,22.55329],'上海': [121.48941,31.40527],
				'广州': [113.27324,23.15792],'杭州': [120.21201,30.2084],'成都': [104.10194,30.65984],
				'武汉': [114.02919,30.58203],'南京': [118.8921,31.32751],'西安': [108.93425,34.23053],
				'重庆': [106.54041,29.40268]
			};
			var data = [
				{name: '北京',value: 106},
				{name: '深圳',value:79},
				{name: '上海',value: 75},
				{name: '杭州',value: 40},
				{name: '广州',value: 36},
				{name: '成都',value: 21},
				{name: '武汉',value: 15},
				{name: '南京',value: 13},
				{name: '西安',value: 11},
				{name: '重庆',value: 10},
				
			];
			var max = 150,
			    min = 1;
			var maxSize4Pin = 100,
			    minSize4Pin = 20;
			var convertData = function (data){
				var res = [];
				for (var i = 0; i < data.length; i++) {
					var geoCoord = geoCoordMap[data[i].name];
					if (geoCoord) {
						res.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value)
						});
					}
				}
				return res;
			};
			myChart5.setOption(option5 ={
				tooltip:{
					trigger: 'item',
					
				},
				geo:{
					zoom:1.2,
					show: true,
					map:'china',
					mapType: 'china',
					label:{
						normal:{
							show : true,
							textStyle:{color:'rgba(255, 170, 255, 0.0)'}
						},
						emphasis:{
							show: true,
							textStyle: {color: '#000000'}
						},
					},
					roam: true,
					itemStyle:{
						normal:{
							borderColor: '#c7bbff',
							borderWidth: 1,
							areaColor: {
							    type: 'radial',
							    x: 0.5,
							    y: 0.5,
							    r: 0.8,
								colorStops:[{
									offset: 0,
									color: 'rgba(255, 170, 255, 0.0)'
								},{
									offset: 0,
									color: '#fde1ff'
								}],
								globalCoord: false
							},
							shadowColor: 'rgba(255, 170, 255, 1.0)',
							shadowOffsetX: -2,
							shadowOffsetY: 2,
							shadowBlur: 10,
						},
						emphasis:{
							areaColor: '#8ce6ff',
							borderWidth: 0
						}
						
					}
				},
				series:[
					{
						name: '岗位',
						type: 'scatter',
						coordinateSystem: 'geo',
						symbol: 'pin',
						symbolSize: function(val){
							var a = (maxSize4Pin - minSize4Pin) / (max - min);
							var b = minSize4Pin - a * min;
							b = maxSize4Pin - a * max;
							return a * val[2] + b;
						},
						encode: {
						    value: 2
						},
						
						label:{
							normal:{
								formatter: '{b}',
								show: true,
								textStyle:{
									color: '#000000',
									fontSize: 10,
								}
							}
						},
						itemStyle:{
							normal:{
								color: '#ff55ff',
							}
						},
						data: convertData(data),
					},	
				]
			});
		}
		showProvince();
		window.addEventListener("resize", function () {
		    myChart5.resize();
		});
	}
});
