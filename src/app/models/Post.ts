export class Post{
  private _date:Date;
  private _loveIts:number=0;

  constructor(private _title:string, private _content:string){
    this._date = new Date();
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }

  get loveIts(): number {
    return this._loveIts;
  }

  set loveIts(value: number) {
    this._loveIts = value;
  }
}
