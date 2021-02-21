export class Model {
  user;
  items:Array<todoItem>

  constructor() {
    this.user = 'Emre Gündoğdu';
    this.items = [
      new todoItem("Spor Yapmak",true),
      new todoItem("Kahvaltı Yapmak",false),
      new todoItem("Sinemaya Gitmek",false),
      new todoItem("Kodlama Çalışmak",true),
      new todoItem("Araştırma Yapmak",true)
    ];
  }
}
export class todoItem{
  description;
  action;
  constructor(description:string,action:boolean) {
    this.description = description;
    this.action = action;
  }

}

