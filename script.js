const app = new Vue({
  el: '#app',

  data: {
    newNote : '',

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
    },

    deleteNote(index) {
      this.notes.splice(index, 1)
    },

    addNote(text) {
      if(text !== ''){
        this.notes.push({text, done : false});
        this.newNote = '';
      }
    }

  }
})