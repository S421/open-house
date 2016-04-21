// Vue.js code. Pulling student data from api as well as modal window logic

var app = new Vue({
	el: "#app",
	data: {
	  students: [],
	  currentStudent: [],
	  showModal: false
	},
	ready: function() {
		// on page load, make ajax request for student data
		this.$http.get('https://sheetsu.com/apis/v1.0/23e59b9c')
			.then(function(res) {
				// Randomize students
				this.shuffleArray(res.data);
			});
	},
	methods: {
		openModal: function(index) {
			// Open Modal window and set currentStudent
			this.showModal = true;
			this.$set('currentStudent', this.students[index]);
		},
		shuffleArray: function(array) {
		  	var m = array.length, t, i;

			while (m) {

				i = Math.floor(Math.random() * m--);

				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}

			// Set shuffled array of students as 'students'
			this.$set('students', array);
		},
	}
});