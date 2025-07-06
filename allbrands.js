new Vue({
el: '#app',
})

new Vue({
el: '#app2',
})

new Vue({
el: '#app3'

});
//Vue Component Registration
Vue.component('quantity', {
  template: `
    <div class="quantity-toggle">
      <button @click="decrement()">&mdash;</button>
      <input type="text" :value="quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
  `,
  data () {
    return {
      quantity: 0
    }
  },
  
  methods: {
    increment () {
      this.quantity++
    },
    
    decrement () {
      if(this.quantity === 0) {
        alert('Error: Product Quantity Cannot Be Less Than Zero')
      } else {
        this.quantity--
      }
    }
  }
});
 
new Vue({
    el: '#amount'
  })
  
  new Vue({
    el: '#amount2'
  })
  
  new Vue({
    el: '#amount3'
});