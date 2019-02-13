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
  var existing_note_container = document.getElementById("existing_note_id");
    image.style.display = "none";
    container.style.display = "block";
    existing_note_container.style.display = "none";
    closeNav();
}

function showExistingNote(string){
  var container = document.getElementById("note_id");
    container.style.display = "none";
  var image = document.getElementById("image");
    image.style.display = "none";
  var existing_note_container = document.getElementById("existing_note_id");
  existing_note_container.style.display = "block";
  document.getElementById("existing_note_text_id").innerHTML = string
  closeNav();
}

function hideExistingNote(){
  var existing_note_container = document.getElementById("existing_note_id");
  existing_note_container.style.display = "none";
  var image = document.getElementById("image");
    image.style.display = "block";
}


web_noteholder = new NotesHolder;
hideNewNote();
hideExistingNote();
