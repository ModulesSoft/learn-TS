function log(msg) {
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
var a;
var b;
var c;
var d;
var e;
var f;
var g = [];
var h = ["a", 2, true, {}, [2, 314, 12]];
var i;
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color["green"] = "green";
})(Color || (Color = {}));
console.log(Color.green);
var testString;
testString = "hi";
function draw(point) {
    console.log(point);
}
var getDistance = function (pointA, pointB) {
    console.log(Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)));
};
var myPoint2 = {
    x: 30,
    y: 40
};
var myPoint = {
    x: 20,
    y: 12
};
getDistance(myPoint, myPoint2);
