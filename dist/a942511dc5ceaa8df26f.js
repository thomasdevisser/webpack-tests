import _ from "lodash";
import "./style.css";
import "./main.scss";
import index from "./index.html";

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}!`);
  }

  greet(name) {
    const words = ["Hello", name];
    console.log(_.join(words, " "));
  }
}

const tom = new Person("Tom");
tom.introduce();
tom.greet("Webpack");
console.log("Watching");
