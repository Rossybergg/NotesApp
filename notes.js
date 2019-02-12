function NotesHolder() {
  var notes = [];

  function preview() {
    text = "";
    for (i = 0; i < notes.length; i++) {
      text += '<a href="">' + notes[i].substr(0, 20) + '...</a>';
    }

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

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function hideNewNote() {
  var container = document.getElementById("note_id");
  var image = document.getElementById("image");
    image.style.display = "block";
    container.style.display = "none";

}

function showNewNote() {
  var container = document.getElementById("note_id");
  var image = document.getElementById("image");
    image.style.display = "none";
    container.style.display = "block";

}

// function hide(){
// var div = document.getElementById('div_id');
// div.style.visibility = 'hidden';
// } function that should run after preview (or with show) to make sure the the text entry box dissapears


web_noteholder = new NotesHolder;
hideNewNote();
