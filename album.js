class Album {
  //your code here
  constructor (id, name, artists) {
    this.album_id = id;
    this.name = name;
    this.artists = artists;
    this.tracks = [];
  }

  durationMin(){
    let total_ms = 0;
    this.tracks.forEach((track) => {
    //  album += `Song Name: ${track.title}, Duration: ${track.duration_ms}\n`
    total_ms += +track.duration_ms;
  });
    let minutes = total_ms/60000;
    return minutes.toFixed(2);
  }
  summary() {
    let albumsummary = "";
    albumsummary += `Name: ${this.name}\n`;
    albumsummary += `Artist(s): ${this.artists}\n`;
    albumsummary += `Duration (min.): ${this.durationMin()}\n`;
    albumsummary += "Tracks: \n";
    this.tracks.forEach((track) => {
      albumsummary += `- ${track.title}\n`;
    });
    return albumsummary;
  }
}

module.exports = Album;
