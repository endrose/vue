var app = new Vue({
	el:'#app',
	data:{
		message:''
	},
	methods: {
		reverseMessage : function () {

			console.log(this.message=this.message.split('').reverse('').join(''))
		}
	}
});

var app1 = new Vue({
	el:'#app1',
	data: {
		show: false,
		message: 'Hello World!',
		message2:'Hello Vue!',
		int1:1,
		int2:2,
		result: null,
		kilometers:0,
		meters:0
	},
	computed:{
		sum: function()
		{
			return this.int1 + this.int2;
		}
	},
	methods:{
		sumProcess: function (int3)
		{
			return this.result = this.int1 + this.int2 + int3;
		}
	},
	watch: {
		kilometers: function (val)
		{
			this.kilometers = val;
			this.meters = val * 1000;
		},
		meters: function (val)
		{
			this.kilometers = val / 1000;
			this.meters = val;
		}
	}

});

var app2 = new Vue({
	el:'#app2',
	data: {
		message:'',
		textarea:'',
		radiobutton:'',
		checkbox:[],
		select:[]
	},
});


var app3 = new Vue({
	el:'#app3',
	data: {
		imgFile:'assets/img/blockchain.jpg',
		link: 'http://google.com',
		styleFont: 'color: green; font-size:20px'
	}

});

var app4 = new Vue({
	el: '#app4',
	data: {
		message: ''
	},
	methods: {
		showAlert: function()
		{
			alert('This button has been clicked to call method!');
		}
	}
});


var app5 = new Vue({
	el:'#app5',
	data: {
		message: ''

	},
	methods:{
		escKey: function(){
			this.message = 'Your pressing escape key'
		},
		spaceKey: function(){
			this.message = 'Your pressing space  key'
		},
		upKey: function(){
			this.message = 'Your pressing up key'
		},
		downKey: function(){
			this.message = "Your pressing down key"
		},
		aKey: function(){
			this.message = "Your pressing 'a' key"
		}
	}
	
});


var app6 = new Vue({
	el: '#app6',
	data: {
		vehicles: ['Car','Motorcycle','Bike'],
		content:''
	},
	methods: {
		addVehicles: function (){
			this.vehicles.push(this.content);
			this.content = '';
		},
		removeVehicles: function (index){
			this.vehicles.splice(index, 1);
		}
	}
});


var app7 = new Vue({
	el: '#app7',
	data: {
		vehicles: [
				{ type: 'Car', brand: 'Toyota', color: 'Metallic Silver'},
				{ type: 'Motorcycle', brand: 'Honda', color: 'Red'},
				{ type: 'Bike', brand: 'BMX', color: 'Black'}
		],
		object: {
				firstName: 'Jhon',
				lastName: 'Doe',
				age: 30
		}
	}
});


Vue.component('greeting',   {
	template: `
				<div>
					<br>Hello, Vue</br>
					<i>Hello, Vue</i></br>
					<u>Hello, Vue</u>

				</div>
			`
});

Vue.component('button-counter', {
	data: function () {
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++">Clicked Me {{ count }} times</button>'

});
var app8 = new Vue({
	el: '#app8'
	
});
