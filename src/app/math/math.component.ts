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
    this.num1 = Math.ceil(Math.random() * (4 * this.level)) + (4 * (this.level - 1));
    this.num2 = Math.ceil(Math.random() * (4 * this.level)) + (4 * (this.level - 1));
    this.operator = '+';
  }

  checkAnswer(){
    this.correct = this.givenAnswer === this.num1 + this.num2;
    this.checked = true;
    this.score += this.correct ? 1 : 0;
    if(this.score && this.score % 4 === 0){
      this.level += 1;
    }
  }

}
