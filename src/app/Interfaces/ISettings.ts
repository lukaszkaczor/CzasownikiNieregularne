import { Difficulty } from '../Enums/Dificulty';
import { RangeType } from '../Enums/RangeType';
export interface ISettings{
    difficulty: Difficulty;
    range: RangeType;
    wordsCount: number;
}