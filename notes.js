function NotesHolder() {
  var notes = [];

  function preview() {
    text = "<ul>";
    for (i = 0; i < notes.length; i++) {
      text += '<a href="">' + notes[i].substr(0, 19) + '</a>';
    }
    text += "</ul>";

    document.getElementById("demo").innerHTML = text;
  }

  function add(string) {
    notes.push(string);
  }

  function show(string) {
    for (i = 0; i <= notes.length; i++){
      if (notes.includes(string))
      {return notes[i]}
    }
  }

  return {notes: notes, preview: preview, add: add, show: show}

}

function getText() {
  return text = document.getElementById("newNoteText").value;
}

function clearTextBox() {
  document.getElementById("newNoteText").value = "";
}

// function hide(){
// var div = document.getElementById('div_id');
// div.style.visibility = 'hidden';
// } function that should run after preview (or with show) to make sure the the text entry box dissapears


web_noteholder = new NotesHolder
