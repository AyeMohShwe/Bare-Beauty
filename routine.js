var app = new Vue({
    el: '#app',
    data: {
      showMorning: false
    },
    methods: {
        toggleMorning: function(){
          this.showMorning = !this.showMorning
        }
    }
})
var app = new Vue({
    el: '#app2',
    data: {
      showNight: false
    },
    methods: {
        toggleNight: function(){
            this.showNight = !this.showNight

        }
    }
})
