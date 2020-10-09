import {Component,OnInit} from '@angular/core';
import {Difficulty} from '../Enums/Dificulty';
import {ISettings} from '../Interfaces/ISettings';
import { FormBuilder, FormGroup} from '@angular/forms';
import { VerbList} from '../Models/VerbList';
import {Verb} from '../Models/Verb';
import { VerbType } from '../Enums/VerbType';
import { Router } from '@angular/router';
import { RangeType } from '../Enums/RangeType';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  formSubmitted = false;
  currentVerb: Verb;
  verbs: Verb[];
  index = 0;
  form: FormGroup;

  firstValid = false;
  secondValid = false;
  thirdValid = false;


  constructor(builder: FormBuilder, private router: Router) {
    this.form = builder.group({
      firstForm: [''],
      secondForm: [''],
      thirdForm: ['']
    })
  }

  ngOnInit(): void {
    const settings: ISettings = JSON.parse(localStorage.getItem('settings'));



    let verbs = [];

    console.log(settings)

    switch(Number(settings.range))
    {
      case RangeType.FirstHalf:
        verbs = VerbList.firstHalf();
        break;

      case RangeType.SecondHalf:
          verbs = VerbList.secondHalf();
          break;

      case RangeType.All:
        verbs = VerbList.all();
        break;

    }
    // console.log(verbs)

    // let verbs = VerbList.firstHalf();

    this.verbs = this.getRandomVerbs(Number(settings.wordsCount), verbs);
    this.currentVerb = this.verbs[this.index];

    console.log(this.verbs.length)
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.formSubmitted = true;
    

    this.firstValid = this.currentVerb.checkValid(this.firstForm.value, VerbType.FirstForm);
    this.secondValid = this.currentVerb.checkValid(this.secondForm.value, VerbType.SecondForm);
    this.thirdValid = this.currentVerb.checkValid(this.thirdForm.value, VerbType.ThirdForm);

    if(this.firstValid && this.secondValid && this.thirdValid)
    {

      if(this.index+1 == this.verbs.length){
        this.exit();
      }else{
        this.index++;
        this.currentVerb = this.verbs[this.index]
        this.formSubmitted = false;
        this.form.reset();
        this.firstValid = false;
        this.secondValid = false;
        this.thirdValid = false;
      }
    }
  }

  exit(){
    this.form.reset();
    this.router.navigateByUrl('**');
  }

  private getRandomVerbs(wordsCount: number, allVerbs:Verb[]): Verb[] {

    wordsCount = (allVerbs.length<wordsCount) ? allVerbs.length : wordsCount; 

    let verbs = [];
    let verb: Verb;

    do {
      verb = allVerbs[this.getRandomInt(0, allVerbs.length)];
      if (!verbs.includes(verb))
        verbs.push(verb)

    } while (verbs.length < wordsCount);

    return verbs;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  get firstForm() {
    return this.form.get('firstForm');
  }
  set firstForm(val) {
    this.firstForm.setValue(val);
  }

  get secondForm() {
    return this.form.get('secondForm');
  }
  set secondForm(val) {
    this.secondForm.setValue(val);
  }

  get thirdForm() {
    return this.form.get('thirdForm');
  }
  set thirdForm(val) {
    this.thirdForm.setValue(val);
  }

}
