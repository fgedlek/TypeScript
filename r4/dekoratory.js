var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('Jeden decorator.');
function simpleDecorator(consructor) {
    console.log('Wywołano funkcję simpleDecorator.');
}
let ClassWithSimpleDecorator = class ClassWithSimpleDecorator {
};
ClassWithSimpleDecorator = __decorate([
    simpleDecorator
], ClassWithSimpleDecorator);
console.log('---------------------------------------');
console.log('Składnia decoratorow.');
let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();
console.log(`instance_1 : ${instance_1}`);
console.log(`instance_2 : ${instance_2}`);
console.log('---------------------------------------');
console.log('Wiele decoratorow.');
function secondDecorator(construct) {
    console.log('Wywołano funckje secondDecorator.');
}
let ClassWithMultipleDecorators = class ClassWithMultipleDecorators {
};
ClassWithMultipleDecorators = __decorate([
    simpleDecorator,
    secondDecorator
], ClassWithMultipleDecorators);
console.log('---------------------------------------');
console.log('Fabryka decoratorow.');
function decoratorFactory(name) {
    return function (constructor) {
        console.log(`Funckja dekoratora wywołana z parametrem: ${name}`);
    };
}
let ClassWithDecoratorsFactory = class ClassWithDecoratorsFactory {
};
ClassWithDecoratorsFactory = __decorate([
    decoratorFactory('nazwaTestowa'),
    decoratorFactory('kolejnaNazwaTestowa')
], ClassWithDecoratorsFactory);
console.log('---------------------------------------');
console.log('Typy ogone');
class Concatenator {
    concatenateArray(inputArray) {
        let returnString = "";
        for (let i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ",";
            returnString += inputArray[i].toString();
        }
        return returnString;
    }
}
var stringConcat = new Concatenator();
var numerConcat = new Concatenator();
var stringArray = ["jeden", "dwa", "trzy"];
var numberArray = [1, 2, 3];
var stringResult = stringConcat.concatenateArray(stringArray);
var numberResult = numerConcat.concatenateArray(numberArray);
//var stringResult2 = stringConcat.concatenateArray(numberArray); => error celowy
//var numberResult2 = numerConcat.concatenateArray(stringArray); => error celowy
class MyClass {
    constructor(arg1) {
        this._name = arg1 + "_MyClass";
    }
    toString() {
        return this._name;
    }
}
let myArray = [
    new MyClass(1),
    new MyClass(2),
    new MyClass(3)
];
let myArrayConcatentator = new Concatenator();
let myArrayResult = myArrayConcatentator.concatenateArray(myArray);
console.log(myArrayResult);
//# sourceMappingURL=dekoratory.js.map