console.log('Jeden decorator.');

function simpleDecorator(consructor : Function){
    console.log('Wywołano funkcję simpleDecorator.');
}

@simpleDecorator
class ClassWithSimpleDecorator{
}


console.log('---------------------------------------');
console.log('Składnia decoratorow.');

let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();

console.log(`instance_1 : ${instance_1}`);
console.log(`instance_2 : ${instance_2}`);


console.log('---------------------------------------');
console.log('Wiele decoratorow.');

function secondDecorator(construct: Function){
    console.log('Wywołano funckje secondDecorator.');
}

@simpleDecorator
@secondDecorator
class ClassWithMultipleDecorators{
}


console.log('---------------------------------------');
console.log('Fabryka decoratorow.');

function decoratorFactory(name: string){
    return function (constructor : Function){
        console.log(`Funckja dekoratora wywołana z parametrem: ${name}`);
    }
}

@decoratorFactory('nazwaTestowa')
@decoratorFactory('kolejnaNazwaTestowa')
class ClassWithDecoratorsFactory{
}


console.log('---------------------------------------');
console.log('Typy ogone');

class Concatenator< T >{
    concatenateArray(inputArray: Array< T >): string{
        let returnString ="";

        for (let i = 0; i < inputArray.length; i++){
            if (i > 0)
                returnString +=",";
            returnString+=inputArray[i].toString();
        }
        return returnString;
    }
}

var stringConcat = new Concatenator<string>();
var numerConcat = new Concatenator<number>();

var stringArray: string[] = ["jeden","dwa","trzy"];
var numberArray: number[] = [1,2,3];
var stringResult = stringConcat.concatenateArray(stringArray);
var numberResult = numerConcat.concatenateArray(numberArray);
//var stringResult2 = stringConcat.concatenateArray(numberArray); => error celowy
//var numberResult2 = numerConcat.concatenateArray(stringArray); => error celowy

class MyClass{
    private _name: string;
    constructor(arg1: number){
        this._name = arg1 + "_MyClass";
    }
    toString(): string{
        return this._name;
    }
}

let myArray: MyClass[] = [
    new MyClass(1),
    new MyClass(2),
    new MyClass(3)];
    
let myArrayConcatentator = new Concatenator<MyClass>();
let myArrayResult = 
    myArrayConcatentator.concatenateArray(myArray);
console.log(myArrayResult);
