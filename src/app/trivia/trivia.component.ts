import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../question';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css'],
})
export class TriviaComponent implements OnInit {
  public questions$: Observable<Question[]>;

  public correctAnswers = 0;

  public currentQuestionIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  public onQuestionAnswered(isCorrect: boolean): void {
    this.currentQuestionIndex++;
    if (isCorrect) this.correctAnswers++;
  }
}
