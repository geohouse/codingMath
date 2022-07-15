import { Vector } from "./vector.js";

let v1 = new Vector(10, 5);
console.log(v1);
console.log(v1.x);
console.log(v1.y);

console.log(v1.getAngle());
console.log(v1.getLength());

v1.setAngle(Math.PI / 6);
v1.setLength(100);

console.log(v1.x);
console.log(v1.y);

let v2 = new Vector(3, 4);
let v3 = v1.add(v2);

console.log(v3);

console.log("Gussy!!");
