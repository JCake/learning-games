import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spelling',
  templateUrl: './spelling.component.html',
  styleUrls: ['./spelling.component.scss']
})
export class SpellingComponent implements OnInit {

level = 0;
  words = [
    ['cat','dog','mom','dad','in','on','you','his','her','bat','sad','mad'],
    ['six','five','more','word','long','wash','open','sit','let','pig','glad'],
  ['love','hug','talk','yell','child','home','tree', 'jump', 'sell', 'sun', 'said'],
 ['school', 'people', 'smart', 'chore', 'choose', 'mother', 'father', 'brick', 'date','tooth'],
  ['phone','black','truck','about','these','first','they','thing','stuck','mind','people','mug'],
  ['block','wig','other','wood','words','roof','luck','who','with','what','shell'],
  ['four','bright','warm','nerves','animal','because','fight','germ','another','listen','pride','disk'],
  ['citizen','color','stamp','little','again','corn','eggs','house','length','height'],
  ['close','person','particle','taught','pond','city','point','pencil','laundry','highest','compare','group']];
  toSpell;
  spoke;
  spelledWord;
  correct;
  checked;
  score = 0;

  voice = 0;

    ngOnInit(){
    }

  play(){
    let voices = window.speechSynthesis.getVoices();
    this.checked = false;
    if(!this.spoke){
      this.spelledWord = '';
      if(this.score > 0 && this.score % 5 === 0 && this.level < this.words.length - 1){
        this.level++;
      }
      const wordsForLevel = this.words[this.level];
      this.toSpell = wordsForLevel[Math.floor(Math.random() * wordsForLevel.length)];
    } else {
      this.voice = (this.voice + 1) % 6;
      if(this.voice === 2){ // Skip this bad one
        this.voice = 3;
      }
    }

    const utterThis = new SpeechSynthesisUtterance(this.toSpell);
    if(voices){
      utterThis.voice = voices[this.voice];
    }
    window.speechSynthesis.speak(utterThis);
    this.spoke = true;


  }

  check() {
    if(!this.checked){
      this.correct = (this.spelledWord && this.spelledWord.trim().toLowerCase() === this.toSpell);
      this.score += this.correct ? 1 : 0;
      this.checked = true;
      this.spoke = false;
    }
  }
}
