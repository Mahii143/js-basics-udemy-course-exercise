console.log('hello world!');
let obj = {
    name: "mahir",
    age: 21,
    obj2: {
        name: 'abc',
        fun: function () {
            console.log('hellooo');
            return 'function called';
        },
        obj3: {
            name: 'mahiii'
        }
    }
};
obj.obj2.fun();
console.log('obj: ', obj.obj2.fun());

obj.obj2.obj3.name = 'kalyan'


obj['newitem'] = 'this is new item';
let key = 'newitem2';
obj[key] = 'this is new item 2'; //dynamic way
console.log(obj);


let user = {
    name: 'mahir',
    age: 21
};

let student = { ...obj }; //Object.assign(user);

user.name = 'usman';

console.log(student)


let colors = ['red', 'green', 'blue']
for (let color of colors) {
    console.log(color);
}

let std = {
    name: 'mahir',
    age: 21
};

for (let key in std) {
    console.log(key, std[key]);
}


if (true) { var a = 10; }
// var a = 20;
console.log(a);


// Factory Functions

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log(`circle of radius ${this.radius} drawn`);
        }
    }
}

const circle1 = createCircle(5);
console.log(circle1)
circle1.draw();


// Constructor functions

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log(`circle of radius ${this.radius} drawn`);
    }
}

const circle2 = new Circle(10);
console.log(circle2)
circle2.draw();


const Cir = new Function('radius', `
    this.radius = radius;
    this.draw = function () {
        console.log('circle of radius ' + this.radius + ' drawn');
    }`
);

const c1 = new Cir(100);
console.log(c1);
c1.draw();

console.log(Circle.call({},1));
console.log(Circle.apply({},[1]));

