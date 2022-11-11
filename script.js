let maxSize = 600;
shapes = [];

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.div = $("#shapeContainer").append($('<div class="shape"></div>'));
  }
}

class Circle extends Shape {
  constructor(height, width, radius) {
    super(height, width);
    this.radius = radius;
  }
}
class Triangle extends Shape {
  constructor(height, width) {
    super(height, width);
  }
}
class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);
  }
}
