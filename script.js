const app = new Vue({
  el: '#app',

  data: {

    notes: [
      {
        text: 'prendere croccantini',
        done: false,
      },
      {
        text: 'chiamare giorgio',
        done: false,
      },
      {
        text: 'appuntamento dottore',
        done: false,
      },
    ]
  },

  methods: {

    markDone(index) {
      this.notes[index].done = (this.notes[index].done) ? false : true;
    }
    
  }
})