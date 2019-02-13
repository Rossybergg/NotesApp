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
