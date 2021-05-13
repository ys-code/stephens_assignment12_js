//classes
class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

//BIND THE ALBUM ARRAY TO THE DROPDOWN MENU WHEN PAGE LOADED
document.addEventListener("DOMContentLoaded", function()  {
    let albumInfos=[['Album1','Operation Ivy', 'Energy'],
                    ['Album2','Blink 182', 'Dude Ranch'],
                    ['Album3','New Found Glory', 'Sticks and Stones']];
    let albumNames=['Album1','Album2','Album3'];
    let jbox = new Jukebox();
    let select=document.getElementById("albumList");
    for (let i =0; i<albumInfos.length; i++){
        let optElement=document.createElement("option");
        let str=`${albumInfos[i][1]}, ${albumInfos[i][2]}`
        optElement.text=str;
        optElement.value=albumInfos[i][0];
        select.add(optElement);
//CREATE ALBUM CLASS INSTANCE FROM THE ALBUM ARRA
        let newAlbum = new Album (albumInfos[i][1],albumInfos[i][2]);
        jbox.addAlbum(newAlbum);
    }
//ADDEVENTLISTENER TO THE PLAY BUTTON
    let playBtn = document.getElementById("play");
    playBtn.addEventListener("click",function(){
//GET VALUE FROM THE DROPDOWN MENU
//FIND THE ALBUM AND CALLED THE PLAY FUNCTION
    let selectedAlbum=document.getElementById('albumList').value;
    let a = albumNames.indexOf(selectedAlbum);
    jbox.albums[a].play();
    });
//ADDEVENTLISTENER TO THE SHOW BUTTON
    let showBtn = document.getElementById("show");
    showBtn.addEventListener("click",function(){ 
        console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);
    }); 
});
