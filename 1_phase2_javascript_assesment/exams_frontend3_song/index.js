let songs = [{
  id: 1,
  name: 'First song'
}];

let nextSongId = 2;

function addSong(e) {
  // TODO: implement
e.preventDefault();

var songName = document.getElementById("newSongName").value;

var obj = {

  id:nextSongId++,
  name:songName

}

songs.push(obj);
 
document.getElementById("newSongName").value = ""; 

render();

console.log(songs);

}

function deleteSong(song) {
  // TODO: implement

  for(i=0; i<songs.length; i++){

     if(songs.indexOf(songs[i]) == 0){

       songs.splice(songs.indexOf(songs[i], 1));

     }
  }

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
