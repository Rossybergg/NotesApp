function displayPreview(object) {
  text = "";
  for (i = 0; i < object.notes.length; i++) {
    text += `<a href="javascript:void(0)" onclick="showExistingNote('${object.notes[i]}')">` + object.preview(object.notes[i]) + '...</a>';
  }
  document.getElementById("demo").innerHTML = text;
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

function fadeIn() {
  document.body.style.opacity = 1;
}

function defaultTheme() {
  document.body.style.backgroundImage = "url('http://files.all-free-download.com//downloadfiles/wallpapers/1600_1200/vista_grass_wallpaper_windows_vista_computers_2735.jpg')";
}

function darkTheme() {
  document.body.style.backgroundImage = "url('https://i.imgur.com/xFfBV22.jpg?1')";
}

function pastelTheme() {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80')";
}


web_noteholder = new NotesHolder;
hideNewNote();
hideExistingNote();
