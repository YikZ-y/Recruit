$(function(){
	var myChart3 = echarts.init(document.getElementById('right1'));
	var data = [
	  {
			"name": "1年以下",
		    "value": 6,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "本科	",
		        "value": 4
		    }, {
		        "name": "硕士",
		        "value": 2
		    }]
		}, {
		    "name": "1-3年",
		    "value": 105,
		    "children": [{
		        "name": "不限",
		        "value":1
		    }, {
		        "name": "本科	",
		        "value": 72
		    }, {
		        "name": "硕士",
		        "value": 32
		    }]
		},  {
		    "name": "3-5年",
		    "value": 198,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "本科	",
		        "value": 122
		    }, {
		        "name": "硕士",
		        "value": 76
		    }]
		},
		{
		    "name": "5-10年",
		    "value": 41,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "本科	",
		        "value": 28
		    }, {
		        "name": "硕士",
		        "value": 13
		    }]
		},
		{
		    "name": "10年以上",
		    "value": 1,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "本科	",
		        "value": 1
		    }, {
		        "name": "硕士",
		        "value": 0
		    }]
		},
		{
		    "name": "不限",
		    "value": 95,
		    "children": [{
		        "name": "不限",
		        "value":8
		    }, {
		        "name": "本科	",
		        "value": 60
		    }, {
		        "name": "硕士",
		        "value": 27
		    }]
		},
		{
		    "name": "在校/应届",
		    "value": 1,
		    "children": [{
		        "name": "不限",
		        "value":0
		    }, {
		        "name": "本科	",
		        "value": 0
		    }, {
		        "name": "硕士",
		        "value": 1
		    }]
		}
	];
	var option3 = {
		
		grid: {////图片与容器的距离
		  top: '1%',
		  right: '1%',
		  bottom: '1%',
		  left: '1%',
		  containLabel: true
		},
	  tooltip: {
			    trigger: 'item',
			    axisPointer: {
			    type: 'shadow'
			    },
				
			},
			color: [
		       
				'#ffa7ff',
				'#ff86f9',
				'#f345ff'
		    ],
	  series: {
	    type: 'sunburst',
	    itemStyle: {
			borderColor: '#360051',
			borderRadius: 3,
			borderWidth: 2
	    },
		emphasis: {//设置高亮
		    focus: 'ancestor',
		},
	    data: data,
	    radius: ['20%', '100%'],
	    label: {
			color: '#fff',
			textBorderColor: '#ffa7ff',
			textBorderWidth: 1,
			rotate: 0,
	    },
	    
	  }
	};
	myChart3.setOption(option3);
})
