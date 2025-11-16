let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined,
};

document.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

function Circle(x, y, dx, dy, speed) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.speed = speed;
  this.radius = Math.floor(Math.random() * 60);
  this.colors = ["#61109faa", "#dc0e0e9d", "#fe6344a0"];

  const color = this.colors[Math.floor(Math.random() * this.colors.length)];
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.strokeStyle = color;
    c.fillStyle = color;
    c.fill();
    c.stroke();
  };

  this.update = function () {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx;
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0)
      this.dy = -this.dy;

    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;

    const distance = Math.hypot(mouse.x - this.x, mouse.y - this.y);
    if (distance < 200) {
      if (this.radius < 50) this.radius += 1;
    } else if (this.radius > 10) {
      this.radius -= 1;
    }

    this.draw();
  };
}

let numberOfCircle = 500;
let circles = [];

for (let i = 0; i < numberOfCircle; i++) {
  let x = Math.random() * (window.innerWidth - 100) + 50;
  let y = Math.random() * (window.innerHeight - 100) + 50;
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;
  let speed = 1;
  let circle = new Circle(x, y, dx, dy, speed);
  circles.push(circle);
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (let circle of circles) {
    circle.update();
  }

  requestAnimationFrame(animate);
}

animate();
