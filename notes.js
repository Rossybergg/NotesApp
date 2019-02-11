function NotesHolder() {
  this.notes = [];

  // function add(string) {
  //   notes.push(string);
  // }


}

NotesHolder.prototype.add = function(string) {
  this.notes.push(string);
};
