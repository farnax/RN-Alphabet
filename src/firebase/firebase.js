import database from './configDb.js';
import storage from './configStorage.js';

class Firebase {
  static getImageUrl(fileName) {
    const imagesRef = storage.ref().child('images/');
    const spaceRef = imagesRef.child(fileName + '.png');

    return spaceRef.getDownloadURL().then(url => url);
  }
  
  static getAudioUrl(fileName) {
    const audioRef = storage.ref().child('audio/');
    const spaceRef = audioRef.child(fileName + '.m4a');

    return spaceRef.getDownloadURL().then(url => url);
  }

  static getLetters() {
    return database
      .ref('/letters/')
      .once('value')
      .then(data => {
        let letters = [];
        for (let key in data.val()) {
          letters.push(data.val()[key]);
        }
        return letters;
      });
  }  
}

export default Firebase;