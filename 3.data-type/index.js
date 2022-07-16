var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary === octal);
console.log(octal === hex);
// 자바스크립트는 숫자타입을 실수로 처리한다.
console.log(1 === 1.0);
console.log(4 / 2);
console.log(3 / 2);

console.log(10 / 0);
console.log(10 / -0);
console.log(1 * "string");

var template = `<ul>
    <li><a href="#">home</a></li>
</ul>
`;
console.log(template);

var first = "Ung-mo";
var last = "Lee";

console.log(`my nam is ${first} ${last}`);
