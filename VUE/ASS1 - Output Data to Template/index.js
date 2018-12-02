new Vue({
	el: '#exercise',
	data: {
		name: 'Bruno',
		age: 20,
		img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
	},
	methods: {
		randNumb: function() {
			return Math.random() * 100;
		}
	}
});