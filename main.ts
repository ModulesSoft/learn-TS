function log(msg: string) {
  console.log(msg);
}
var ms = "hi";
log(ms);

function test() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}

let a;
let b: any;
let c: boolean;
let d: number;
let e: string;
let f: number[];
let g: number[] = [];
let h: any[] = ["a", 2, true, {}, [2, 314, 12]];
let i: object;

enum Color {
  blue,
  red,
  green = "green",
}
console.log(Color.green);

let testString;
testString = "hi";
// let ends = (<string>testString).endsWith("i");
// let ends2 = (testString as string).endsWith("i");
// console.log(ends);
// console.log(ends2);

interface Point {
  x: number;
  y: number;
}

interface Scene {
  frame: () => {};
  timeline: number;
}

function draw(point: Point) {
  console.log(point);
}

let getDistance = (pointA: Point, pointB: Point) => {
  console.log(
    Math.sqrt(
      Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)
    )
  );
};

let myPoint2 = {
  x: 30,
  y: 40,
};

let myPoint = {
  x: 20,
  y: 12,
};

getDistance(myPoint, myPoint2);

function func1(x?: number, y?: number) {}
