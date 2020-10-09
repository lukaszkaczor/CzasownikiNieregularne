import { VerbType } from '../Enums/VerbType';
export class Verb {
  public readonly firstForm: string;
  public readonly secondForm: string;
  public readonly thirdForm: string;
  public readonly translation: string;

  constructor(
    translation: string,
    firstForm: string,
    secondForm: string,
    thirdForm: string
  ) {
    this.translation = translation;
    this.firstForm = firstForm;
    this.secondForm = secondForm;
    this.thirdForm = thirdForm;
  }


  checkValid(verb: string, verbType: VerbType): boolean {
    verb = verb.trim();
 

    switch (verbType) {
      case VerbType.FirstForm:
        return  this.firstForm.toLowerCase() == verb.toLowerCase();

      case VerbType.SecondForm:
        return  this.secondForm.toLowerCase() == verb.toLowerCase();

      case VerbType.ThirdForm:
        return  this.thirdForm.toLowerCase() == verb.toLowerCase();

      default:
        console.error('Invalid verb type');
    }

    // return result
  }
}
