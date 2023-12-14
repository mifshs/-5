class Car {
    constructor(color, model) {
    this.color = color;
    this.model = model;
    this.direction = "вперед";
    this.position = { x: 0, y: 0 };
    }
    
    goForward() {
    if (this.direction === "вперед") {
    this.position.y++;
    } else if (this.direction === "назад") {
    this.position.y--;
    }
    }
    
    goBackward() {
    if (this.direction === "вперед") {
    this.position.y--;
    } else if (this.direction === "назад") {
    this.position.y++;
    }
    }
    
    turnLeft() {
    if (this.direction === "вперед") {
    this.direction = "влево";
    } else if (this.direction === "влево") {
    this.direction = "назад";
    } else if (this.direction === "назад") {
    this.direction = "вправо";
    } else if (this.direction === "вправо") {
    this.direction = "вперед";
    }
    }
    
    turnRight() {
    if (this.direction === "вперед") {
    this.direction = "вправо";
    } else if (this.direction === "вправо") {
    this.direction = "назад";
    } else if (this.direction === "назад") {
    this.direction = "влево";
    } else if (this.direction === "влево") {
    this.direction = "вперед";
    }
    }
    
    getCurrentPosition() {
    console.log(`Текущее положение машины: x=${this.position.x}, y=${this.position.y}`);
    }
    
    getCurrentDirection() {
    console.log(`Направление движения: ${this.direction}`);
    }
    }
    
    // Создаем экземпляр класса Car
    const car = new Car("красный", "Toyota");
    
    car.goForward();
    car.turnRight();
    car.goForward();
    car.goBackward();
    car.turnLeft();
    
    car.getCurrentPosition();
    car.getCurrentDirection();

