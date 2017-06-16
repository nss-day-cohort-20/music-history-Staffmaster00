var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log("song", songs);

songs.unshift("Help I'm Alive - by Metric on the album Fantasies");
songs.push("Young Blood - by The Naked and the Famous on the album Passive Me, Aggressive You");

for (i = 0; i < songs.length; i++){
songs[i] = songs[i].replace(">", "-").replace("*", "").replace("@", "").replace("(","").replace("!","");;
document.getElementById("showcase").innerHTML += 
			`<div class="Display">
                ${songs[i]}
            </div>`
};

