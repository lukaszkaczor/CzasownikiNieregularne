import { Verb } from './Verb';
export class VerbList {
  public static firstHalf() : Verb[] {
    return [
      new Verb('być', 'be', 'was/were', 'been'),
      new Verb('bić', 'beat', 'beat', 'beaten'),
      new Verb('stawać się', 'become', 'became', 'become'),
      new Verb('zaczynać', 'begin', 'began', 'begun'),
      new Verb('gryźć', 'bite', 'bit', 'bitten'),
      new Verb('dmuchać', 'blow', 'blew', 'blown'),
      new Verb('łamać', 'break', 'broke', 'broken'),
      new Verb('przynosić', 'bring', 'brought', 'brought'),
      new Verb('transmitować, nadawać', 'broadcast', 'broadcast', 'broadcast'),
      new Verb('budować', 'build', 'built', 'built'),
      new Verb('palić się, płonąć', 'burn', 'burnt', 'burnt'),
      new Verb('kupować', 'buy', 'bought', 'bought'),
      new Verb('moć, potrafić', 'can', 'could', '-'),
      new Verb('łapać', 'catch', 'caught', 'caught'),
      new Verb('wybierać', 'choose', 'chose', 'chosen'),
      new Verb('przychodzić, przyjeżdżać', 'come', 'came', 'come'),
      new Verb('kosztować', 'cost', 'cost', 'cost'),
      new Verb('kroić', 'cut', 'cut', 'cut'),
      new Verb('radzić sobie', 'deal', 'dealt', 'dealt'),
      new Verb('robić, czynić', 'do', 'did', 'done'),
      new Verb('rysować', 'draw', 'drew', 'drawn'),
      new Verb('śnić, marzyć', 'dream', 'dreamt', 'dreamt'),
      new Verb('pić', 'drink', 'drank', 'drunk'),
      new Verb('prowadzić samochód', 'drive', 'drove', 'driven'),
      new Verb('jeść', 'eat', 'ate', 'eaten'),
      new Verb('upadać', 'fall', 'fell', 'fallen'),
      new Verb('karmić', 'feed', 'fed', 'fed'),
      new Verb('czuć', 'feel', 'felt', 'felt'),
      new Verb('walczyć', 'fight', 'fought', 'fought'),
      new Verb('znaleźć', 'find', 'found', 'found'),
      new Verb('latać', 'fly', 'flew', 'flown'),
      new Verb('zabraniać', 'forbid', 'forbade', 'forbidden'),
      new Verb('zapominać', 'forget', 'forgot', 'forgotten'),
      new Verb('dostawać/otrzymywać', 'get', 'got', 'got'),
      new Verb('chodzić', 'go', 'went', 'gone'),
      new Verb('rosnąć', 'grow', 'grew', 'grown'),
      new Verb('mieć/posiadać', 'have', 'had', 'had'),
      new Verb('słyszeć', 'hear', 'heard', 'heard'),
      new Verb('chować/ukrywać', 'hide', 'hid', 'hidden'),
      new Verb('uderzać', 'hit', 'hit', 'hit'),
      new Verb('trzymać', 'hold', 'held', 'held'),
      new Verb('ranić/boleć', 'hurt', 'hurt', 'hurt'),
      new Verb('trzymać/zachować', 'keep', 'kept', 'kept'),
      new Verb('wiedzieć/znać', 'know', 'knew', 'known'),
      new Verb('prowadzić', 'lead', 'led', 'led'),
      new Verb('uczyć się', 'learn', 'learnt', 'learnt'),
      new Verb('opuszczać/wyjeżdzać', 'leave', 'left', 'left'),
      new Verb('pożyczać (komuś)', 'lend', 'lent', 'lent'),

    ];
  }

  public static secondHalf() {
    return [
      new Verb('pozwalać', 'let', 'let', 'let'),
      new Verb('leżeć', 'lie', 'lay', 'lain'),
      new Verb('zapalać', 'light', 'lit', 'lit'),
      new Verb('gubić/tracić', 'lose', 'lost', 'lost'),
      new Verb('mieć na myśli/znaczyć', 'mean', 'meant', 'meant'),
      new Verb('robić', 'make', 'made', 'made'),
      new Verb('spotykać', 'meet', 'met', 'met'),
      new Verb('płacić', 'pay', 'paid', 'paid'),
      new Verb('udowodnić/dowieść', 'prove', 'proved', 'proven'),
      new Verb('kłaść', 'put', 'put', 'put'),
      new Verb('czytać', 'read', 'read', 'read'),
      new Verb('jeździć (rowerem, konno)', 'ride', 'rode', 'ridden'),
      // new Verb('', '', '', ''),

    ];
  }

  public static all(){
    return VerbList.firstHalf().concat(VerbList.secondHalf()) ;
  }
}
