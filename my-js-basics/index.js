// be able to set radius
// read only area
// If a circle has a radius of 4, its area is 3.14*4*4=50.24

const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);
