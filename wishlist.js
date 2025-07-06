Vue.component('wish-item', {
  template: '\
    <li>\
      {{ title }}\
      <button class="btn" v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#wish-list-example',
  data: {
    newWishText: '',
    wishes: [
      {
        id: 1,
        title: 'Laneige Sleeping Mask',
      },
      {
        id: 2,
        title: 'Neutrogena Hydrating Boost',
      },
      {
        id: 3,
        title: 'Fresh Facial Cream'
      }
    ],
    nextWishId: 4
  },
  methods: {
    addNewWish: function () {
      this.wishes.push({
        id: this.nextWishId++,
        title: this.newWishText
      })
      this.newWishText = ''
    }
  }
})