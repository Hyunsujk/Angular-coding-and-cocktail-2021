import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-trivia-question',
  templateUrl: './trivia-question.component.html',
  styleUrls: ['./trivia-question.component.css'],
})
export class TriviaQuestionComponent implements OnInit {
  @Input() public question: Question;

  constructor() {}

  ngOnInit(): void {}
}
