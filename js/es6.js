class Car {
  constructor(brand, type, speed){
    this.brand = brand;
    this.type = type;
    this.speed = speed;
  }
  run(){
    console.log('run'+ this.speed)
  }
  back(){  //普通函数
    return 'car能后退';
  }
}
//类的继承
class Bus extends Car {
  constructor(brand, type, speed){
    super(brand, type, speed);  //调用了父类的构造函数
    this.brand = brand;
    this.type = type;
    this.speed = speed;
  }
  who(){
    console.log(this.brand);
  }
  back(){
    console.log(super.back());
  }
}

let car1 = new Car('bm', 'suv', 100);
console.log(car1.brand);
car1.run();

let bus1 = new Bus('比亚迪', '电动客车', 80);
console.log(bus1.brand);
console.log(bus1.type);
console.log(bus1.speed);
bus1.run();
bus1.back();
bus1.who();

