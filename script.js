let maxSize = 600;
let arrayOfShapes = [];
let randomValue = (min, max) => Math.floor(Math.random() * (max - min) + min);

//parent class Shape with the shared rules for all child classes.

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.div = $(`<div class="${this.constructor.name}"></div>`);

    /// sets conditions if the value exceeds maxValue
    if (this.height > maxSize && this.height > maxSize) {
      alert(`Whoa you think that's gonna fit!?!`);
    } else if (this.height > maxSize) {
      alert(`That's just too tall. The other shapes will feel inferior.`);
    } else if (this.width > maxSize) {
      alert(
        `That's quite the girth! let's try a little less, it's just not gonna fit.`
      );
      // if it doesn't meet the conditions that violate the max size
    } else {
      this.div.style.width = `${this.width}px`;
      this.div.style.height = `${this.height}px`;
      $("#shapeContainer").append(this.div);
      arrayOfShapes.push(this);
    }
  }
  //creates a random location to place the new shape div
  randomLocation() {
    this.div.style.top = `${randomValue(this.height, maxSize)}px`;
    this.div.style.left = `${randomValue(this.width, maxSize)}px`;
  }
}
//   describe();

class Circle extends Shape {
  constructor(height) {
    super(height, height);
    this.height = this.width;
    this.radius = height / 2;
  }
}
class Triangle extends Shape {
  constructor(height, width) {
    super(height, width);
  }
}
class Square extends Shape {
  constructor(height, width, side) {
    super(height, width);
    this.side = side;
  }
}
$("#circleButton").click(() => {
  console.log(new Circle(25));
});

//randomColor;
