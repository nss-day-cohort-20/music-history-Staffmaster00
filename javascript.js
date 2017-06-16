// Thoughts
// on user submit get elements then .value to a variable inside function

// think i need another level for song and album arrays.

//overcomplicated. add refactored elements for later instead 
// create means to store info in objects that furfill MVP parameters.
// built in properties and methods in javascript .repeat will help with javascript
// Saving code for experimentation
// function addMusic(musicObject, nameBand, albumArray, songArray) {
// 	const musicObject = {
// 		name: nameband,
// 		albums: function addToAlbumArray() {

// 			let getAlbum = document.getElementsById("").value;
// 			let albumArray = [];
// 			albumArray.push(getAlbum);
// 			// return albumArray?;
// 		},
// 		songs: function addToSongArray() {

// 			let getSong = document.getElementsById("").value;
// 			let songArray = [];
// 			songArray.push(getSong);
// 			// return songArray;
// 		}
// }
// }
// console.log("", );


// "Simpler" attempt which ends up being more complicated bc fml
// Eventually will need input for song length, stored options and a filter?
// function runs on add music button?


// need function for swapping html out with relevant obj info from music obj
// based on the filter
// omg


// function addMusic(){
// 	// needs to be called by a button via 
// 	// <input id="clickMe" type="button" value="clickme" onclick="doFunction();" /> 
// 	// from stackoverflow and have an if
// 	//  statement to check for dupes with case method
// 	let inputArtist = document.getElementsById("").value;
// 	let inputAlbum = document.getElementsById("").value;
// 	let inputSong = document.getElementsById("").value;

// 	let bandArray = [];
// 	bandArray.push(inputArtist, inputAlbum, inputSong);

// 		function storeMusic(){
// 		let musicArray =[];
// 		musicArray.push(bandArray);
// 		return musicArray;

// 		};
// 		let storedMusic = storeMusic();
// 		const musicObject = {
// 					music: storedMusic;
// 	};
// };



function addMusic() {
    let newSong = Object.create(null);
    newSong.title = document.getElementById("").value;
    newSong.artist = document.getElementById("").value;
    newSong.album = document.getElementById("").value; // Value does work
    console.log("Did this work, function", newSong);
    return newSong;
};
document.getElementById("addMusic_submit").addEventListener("click", addMusic());

//Seriously Ublock?
