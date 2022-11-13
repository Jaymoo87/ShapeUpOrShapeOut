//document.addEventListener(DOMContentLoaded, function () {
//-----Variables-----//
// variable for the container all of the shapes will go into
let shapeContainer = document.getElementById("shapeContainer");
// variable for all of the buttons that will spawn a new shape.
let circleButton = document.getElementById("circleButton");
let squareButton = document.getElementById("squareButton");
let triangleButton = document.getElementById("triangleButton");
let rectangleButton = document.getElementById("rectangleButton");

let radiusInput = document.getElementById("radiusInput");
let sideLengthInput = document.getElementById("squareInput");
let rectangleHeightInput = document.getElementById("rectangleHeightInput");
let rectangleWidthInput = document.getElementById("rectangleWidthInput");
let triangleHeightInput = document.getElementById("triangleHeightInput");
// define and establish maxSize variable
let maxSize = 600;
//creates an array to put the generated shapes into
let arrayOfShapes = [];
let randomValue = (min, max) => Math.floor(Math.random() * (max - min) + min);

//parent class Shape with the shared rules for all child classes.

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;

    /// sets conditions if the value exceeds maxValue
    if (this.height > maxSize && this.height > maxSize) {
      alert("Whoa you think that's gonna fit!?!");
    } else if (this.height > maxSize) {
      alert("That's just too tall. The other shapes will feel inferior.");
    } else if (this.width > maxSize) {
      alert(
        "That's quite the girth! let's try a little less, it's just not gonna fit."
      );
      // if it doesn't meet the conditions that violate the max size this code will run.
    } else {
      // creates a div that for the created shape to go into
      this.div = document.createElement("div");
      // sets the values for the size of each shape
      this.div.style.height = `${this.height}px`;
      this.div.style.width = `${this.width}px`;
      // slaps that div right in the shape container where it belongs
      shapeContainer.appendChild(this.div);
      console.log(this);
      // call the randomLocation() to place each shape div randomly in the shapeContainer.
      this.randomLocation();
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
    //this.height = height;
    this.width = height;
    this.radius = height / 2;
    this.div.classList.add("circle");
  }
}

class Triangle extends Shape {
  constructor(height, width) {
    super(height, width);
    this.div.classList.add("triangle");
    this.div.style.borderBottom = `${this.width}px solid rgb(54, 151, 78, 0.5)`;
    this.div.style.borderRight = `${this.height}px solid transparent`;
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);
    if (this.height === this.width) {
      rectangleHeightInput.value = "";
      rectangleWidthInput.value = "";
      alert("YOU KNOW THIS IS A SQUARE!");
    } else {
      this.div.classList.add("rectangle");
    }
  }
}
class Square extends Shape {
  constructor(height) {
    super(height, height);
    this.width = height;
    this.div.classList.add("square");
    //this.side = side;
  }
  // addSquare() {
  //   this.div(this.height, this.height);
  //   //
  // }
}

circleButton.addEventListener("click", () => {
  new Circle(radiusInput.value * 2);
});

squareButton.addEventListener("click", () => {
  new Square(sideLengthInput.value);
});

rectangleButton.addEventListener("click", () => {
  new Rectangle(rectangleHeightInput.value, rectangleWidthInput.value);
});
triangleButton.addEventListener("click", () => {
  new Triangle(triangleHeightInput.value, triangleHeightInput.value);
});
//});
//randomColor;
