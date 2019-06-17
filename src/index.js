console.log('app')

var app = new Vue({
  el: '#app',
  data: {
    notes: [
      {
        text: 'Note 1',
        state: 0
      },
      {
        text: 'Note 2',
        state: 0
      },
      {
        text: 'Note 3',
        state: 0
      },
      {
        text: 'Note 4',
        state: 0
      },
      {
        text: 'Note 5',
        state: 0
      }
    ]
  },
  methods: {
    removeNote: function(id) {
      this.$delete(this.notes, id)
    },
    changeState: function(id) {
      this.notes[id].state = !this.notes[id].state;
    },
    isDone: function(i) {
      return this.notes[i].state ? 'done' : 'undone'
    }
  }
});