 const setMapCharts = function() {
 	let option = {
 		backgroundColor: '#404a59',
 		title: {
 			text: '模拟迁徙',
 			subtext: '数据纯属虚构',
 			left: 'center',
 			textStyle: {
 				color: '#fff'
 			}
 		},
 		tooltip: {
 			trigger: 'item'
 		},
 		legend: {
 			orient: 'vertical',
 			top: 'bottom',
 			left: 'right',
 			data: ['北京 Top10', '上海 Top10', '广州 Top10'],
 			textStyle: {
 				color: '#fff'
 			},
 			selectedMode: 'single'
 		},
 		geo: {
 			map: 'china',
 			label: {
 				emphasis: {
 					show: false
 				}
 			},
 			roam: true,
 			itemStyle: {
 				normal: {
 					areaColor: '#323c48',
 					borderColor: '#404a59'
 				},
 				emphasis: {
 					areaColor: '#2a333d'
 				}
 			}
 		},
 		series: series
 	}
 }
 
export setMapCharts