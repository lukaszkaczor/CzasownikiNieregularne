import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Difficulty } from '../Enums/Dificulty';
import { ISettings } from '../Interfaces/ISettings';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  private readonly _key = "settings";
  form: FormGroup;

  constructor(builder: FormBuilder, private router: Router) {
    this.form = builder.group({
      range: ['3'],
      difficulty: ['1'],
      wordsCount: [0, [Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    const settings:ISettings = JSON.parse(localStorage.getItem(this._key));

    if(settings != null){
      this.range.setValue(settings.range)
      this.difficulty.setValue(settings.difficulty)
      this.wordsCount.setValue(settings.wordsCount)
    }
  }

  onSubmit(event: Event){
    event.preventDefault();

    const settings: ISettings ={
      range: this.range.value,
      difficulty: this.difficulty.value,
      wordsCount: this.wordsCount.value
    }

    localStorage.setItem(this._key, JSON.stringify(settings));
    this.router.navigateByUrl('quiz');
  }

  get range() {
    return this.form.get('range');
  }
  set range(val) {
    this.range.setValue(val);
  }

  get difficulty() {
    return this.form.get('difficulty');
  }
  set difficulty(val) {
    this.difficulty.setValue(val);
  }

  get wordsCount() {
    return this.form.get('wordsCount');
  }
  set wordsCount(val) {
    this.wordsCount.setValue(val);
  }
}
