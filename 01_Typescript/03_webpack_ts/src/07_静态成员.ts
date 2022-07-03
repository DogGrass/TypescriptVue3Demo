// 静态成员：在类中通过 static 修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员
// 静态成员在使用的时候是通过类名.的这种语法来调用的
(() => {
  // 定义一个类
  class Person {
    // 静态属性
    // 类中默认有一个内置的name属性，所以，此时会出现错误的提示信息
    static name1: string = '广末凉子'

    // 构造函数式不能通过static来进行修饰的
    constructor(name: string) {
      // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
      // this.name1 = name
    }
    // 静态方法
    static sayHi() {
      console.log('口你几哇');

    }
  }

  // 实例化对象
  // const person: Person = new Person('中森明菜')

  // 通过实例对象调用的属性（实例属性）
  // console.log(person.name1);
  // 通过实例对象调用的方法（实例方法）
  // person.sayHi()

  // 通过类名.静态属性的方式来访问该成员数据
  console.log(Person.name1);

  // 通过类名.静态属性的方式来设置该成员数据
  Person.name1 = '原田美枝子'
  console.log(Person.name1);
  
  // 通过类名.静态方法的方式来调用内部的静态的方法 
  Person.sayHi()
  
  
})()