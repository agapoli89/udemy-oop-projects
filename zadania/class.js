// 1
class Car {
    constructor(name, brand, engine, mile, age) {
        this.name = name;
        this.brand =  brand;
        this.engine =  engine;
        this.mile =  mile;
        this.age = age;
    }
    printDetails() {
        const {name, brand, engine, mile, age} = this;

        console.log(`Właściwości obiektu: ${name}, ${brand}, ${engine}, ${mile}, ${age}`);
    }
}

const car1 = new Car("Citroen", "C3", "petrol", 100000, 15);
const car2 = new Car('Opel', "Astra", "disel",50000, 5);
const car3 = new Car("Scoda", "Fabia", "petrol", 20500, 3)
car1.printDetails();
car2.printDetails();
car3.printDetails();

//2

class Enemy {
    constructor(name, speed, attack, posX) {
        this.name = name;
        this.speed = speed;
        this.attack = attack;
        this.posX = posX;
        this.live = 5;
    }
    move() {
        this.posX -= this.speed;
        console.log(`Jestem ${this.name}. Znajduję się na pozycji ${this.posX}`);
    }
    attackEnemy() {
        console.log(`Jestem ${this.name}. Atakuję gracza z pozycji ${this.posX} z siłą: ${this.attack}`);
    }
    hit() {
        this.live--;
        console.log(`Jestem ${this.name}. Mam teraz ${this.live} życia.`);
    }
}

const enemy1 = new Enemy('Baddest', 5, 3, 50);
const enemy2 = new Enemy('Hippest', 15, 7, 63);
enemy1.move();
enemy2.move();
enemy1.move();
enemy1.move();
enemy2.move();
enemy1.attackEnemy();
enemy2.attackEnemy();
enemy2.hit();
enemy2.hit();

// 3

class Slider {
    constructor() {
        this.type = "normal";
        this.slideCount = 5;
        this.currentSlide = 1;
    }
    showSlide() {
        console.log(`Pokazuję slajd ${this.currentSlide}`);
    }
    nextSlide() {
        this.currentSlide++;
        this.showSlide();
    }
    prevSlide() {
        this.currentSlide--;
        this.showSlide();
    }
};

class SliderAnimate extends Slider {
    constructor(...param) {
        super(...param);
        this.type = "animate";
    }
    animate() {
        console.log(`Animuję slajd ${this.currentSlide}`);
    }
    showSlide(...param) {
        super.showSlide(...param);
        this.animate();
    }
}

const normalSlider = new Slider();
const animateSlider = new SliderAnimate();
normalSlider.showSlide();
normalSlider.nextSlide();
normalSlider.prevSlide();
animateSlider.showSlide();
animateSlider.nextSlide();
animateSlider.prevSlide();
animateSlider.animate();


// 4

String.prototype.sortText = function(char) {
    const unsortArray = this.split(char);
    const sortArray = unsortArray.sort();
    const sortString = sortArray.join(char);
    console.log(sortString);
}

"Aga-ma-kota".sortText('-');

// 5

String.prototype.reverse = function() {
    console.log(this.split("").reverse().join(""));
}

"Aga ma kota".reverse();

// 6

Array.prototype.sum = function() {
    /* let sumOfEl = 0;
    this.forEach(el => sumOfEl += el);
    console.log(sumOfEl); */
    return this.reduce((a,b) => a + b);
}

/* const tableWithNumbers = [1,2,3,4];
tableWithNumbers.sum(); */
console.log([1,2,3,4,5].sum());

Array.prototype.sortNr = function() {
    return this.sort((a,b) => a-b);
}

console.log([1,3,6,8,9].sortNr());
