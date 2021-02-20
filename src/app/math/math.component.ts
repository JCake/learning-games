import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  level = 1;
  num1;
  operator;
  num2;
  givenAnswer;
  correctAnswer;
  checked;
  correct;
  score = 0;

  constructor() { }

  ngOnInit(): void {
    this.giveProblem();
  }

  giveProblem(){
    this.checked = false;
    this.givenAnswer = '';
    if(this.level < 5){
      this.num1 = Math.ceil(Math.random() * (this.level * 3)) + Math.ceil(2 * (this.level - 1));
      this.num2 = Math.ceil(Math.random() * (this.level * 3)) + Math.ceil(2 * (this.level - 1));
      this.operator = '+';
    } else if (this.level < 8){
      this.num1 = Math.ceil(Math.random() * (2 * this.level)) + Math.ceil(Math.random() * (2 * (this.level - 3)));
      this.num2 = Math.ceil(Math.random() * (this.level)) + Math.ceil(Math.random() * (this.level - 3));
      if(this.num1 < this.num2){
        let temp = this.num1;
        this.num1 = this.num2;
        this.num2 = temp;
      }
      this.operator = '-'
    } else if (this.level < 15){
      this.num1 = Math.ceil(Math.random() * (this.level)) + Math.ceil(3 * (this.level - 1));
      this.num2 = Math.ceil(Math.random() * (this.level)) + Math.ceil(3 * (this.level - 1));
      this.operator = '+';
    } else if (this.level < 20){
      this.num1 = Math.ceil(Math.random() * (this.level - 12)) + Math.ceil(Math.random() * (this.level - 15));
      this.num2 = Math.ceil(Math.random() * (this.level - 12)) + Math.ceil(Math.random() * (this.level - 15));
      this.operator = '*';
    } else {
      this.num1 = Math.ceil(Math.random() * (this.level)) + this.level;
      this.num2 = Math.ceil(Math.random() * (this.level)) + this.level;
      const opNum = Math.random();
      if(opNum < 0.3){
        this.operator = '+';
      } else if(opNum < 0.7){
        this.operator = '-';
      } else {
        this.num1 = Math.ceil(this.num1 / 4);
        this.num2 = Math.ceil(this.num2 / 4);
        this.operator = '*';
      }
    }

  }

  checkAnswer(){
    if(this.operator === '+'){
      this.correctAnswer = this.num1 + this.num2;
    } else if (this.operator === '-') {
      this.correctAnswer = this.num1 - this.num2;
    } else {
      this.correctAnswer = this.num1 * this.num2;
    }
    this.correct = this.givenAnswer === this.correctAnswer;
    
    this.checked = true;
    this.score += this.correct ? 1 : 0;
    if(this.score && this.score % 4 === 0){
      this.level += 1;
    }
  }

}
