let songs = [{
  id: 1,
  name: 'First song'
}];

let nextSongId = 2;

function addSong(e) {
  // TODO: implement
e.preventDefault();

var songName = document.getElementById("newSongName").value;

if (songName.replace(/\s/g,"").length != 0) {

var obj = {
  id:nextSongId,
  name:songName
}

nextSongId++;
songs.push(obj); 

render();

 }

document.getElementById("newSongName").value = ""; 

}



function deleteSong(song) {
  // TODO: implement

  songs.splice(songs.indexOf(song), 1);

render();
}

function render() {

  const container = document.querySelector('.song-list');

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  songs.forEach(song => {

    const songNameElement = document.createElement('span');

    songNameElement.className = 'song-name';

    songNameElement.innerHTML = song.name;

    const deleteButtonElement = document.createElement('button');

    deleteButtonElement.className = 'delete-song btn btn-danger';

    deleteButtonElement.innerHTML = 'Delete';

    deleteButtonElement.onclick = () => deleteSong(song);

    const songElement = document.createElement('li');

    songElement.className = 'list-group-song song row';

    songElement.appendChild(songNameElement);

    songElement.appendChild(deleteButtonElement);

    container.appendChild(songElement);

  });
  
}

document.querySelector('#addSong').addEventListener('click', addSong);

render();
