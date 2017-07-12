var songNames = ['song1', 'song2', 'song3', 'song4']
var fileNames = ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3']

function toggleSong() {
	var song = document.querySelector('audio'); 
	if(song.paused) {
		song.play();	
	} else {
		song.pause();
	}
}

function addSongNameEventListener(songName, position) {
	var id = "#song" + position;
	
	$(id).on('click', function(event){
		var song = document.querySelector('audio');
		var currentSong = song.src;
		if (currentSong.search(songName) != -1) {
			toggleSong();
		} else {
			song.src = songName; 
			song.play();	
		}

	});

}


for(var i = 0; i < fileNames.length; i++) {
	addSongNameEventListener(fileNames[i], i + 1);
}