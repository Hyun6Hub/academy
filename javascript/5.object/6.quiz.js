// ! dog, cat, rabbit ...의 객체를 생성해 보세요
// TODO 생성자 함수 : Animal
// TODO 속성 : name, color
// TODO 메소드 : display, eat, sleep
function Animal(name, color, emoji) {
  this.name = name;
  this.color = color;
  this.emoji = emoji;

  this.display = () => {
    console.log(this.emoji);
  };
  this.eat = () => {
    console.log(`${this.emoji} 먹는중..`);
  };
  this.sleep = () => {
    console.log(`${this.emoji} 자는중..`);
  };
}

const dog = new Animal("dog", "brown", "🐶");
const cat = new Animal("cat", "white", "🐱");
const rabbit = new Animal("rabbot", "gray", "🐰");

dog.display();
dog.eat();
dog.sleep();

cat.display();
cat.eat();
cat.sleep();

rabbit.display();
rabbit.eat();
rabbit.sleep();

/* 셋다 출력 */
