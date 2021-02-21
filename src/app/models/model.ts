export class Model {
  user;
  items:Array<todoItem>

  constructor() {
    this.user = 'Emre Gündoğdu';
    this.items = [
      new todoItem("Training",true),
      new todoItem("Breakfast",false),
      new todoItem("Watch a movie",false),
      new todoItem("Coding",true),
      new todoItem("Make research",true)
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

