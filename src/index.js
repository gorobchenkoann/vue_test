console.log('app')

var app = new Vue({
  el: '#app',
  data: {
    notes: [
      {
        text: 'Note 1',
        state: false
      },
      {
        text: 'Note 2',
        state: false
      },
      {
        text: 'Note 3',
        state: false
      },
      {
        text: 'Note 4',
        state: false
      },
      {
        text: 'Note 5',
        state: false
      }
    ],
    rest: '',
    newNote: ''
  },
  mounted: function() {
    this.rest = this.notes.length
  },
  methods: {
    removeNote: function(id) {
      this.$delete(this.notes, id)
    },
    changeState: function(id) {
      this.notes[id].state = !this.notes[id].state;
      this.notes[id].state ? this.rest -=1 : this.rest += 1;
    },
    isDone: function(i) {
      return this.notes[i].state ? 'done' : 'undone'
    },
    saveNote: function(note) {
      this.notes.push({text: note, state: 0});
      this.newNote = '';
      this.rest += 1;
    }
  }
});

Vue.component('note', {
  props: [''],
  template: ''
})