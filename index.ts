//const myName: string = 'Sergio'

//: string is the TYPE ANNOTATION, there are many types:

/*
string / number / boolean / undefined / null / any (basic ones)
*/

/*let myName = 'Stephen'

myName = 10*/

//this case is TYPE INFERENCE, even if its a let in normal js, its already initialized as a string, cannot change to number
//if it was undeclared, it would be default type any

//INTERFACES IN TypeScript

interface Post {
    title: string;
    daysOld: number;
    published: boolean;
}

//functions in TS are:

const add = (a: number,b: number): number => {
    return a + b
}

const joinString = (a: string, b: string): string => {
    return a + b
}

//Treating objects with TypeScript

const post: { title: string, daysOld: number, published: boolean} = {
    title: 'Latest TS news',
    daysOld: 10,
    published: true
}

const printPost = (postToPrint: { title: string, daysOld: number, published: boolean}) => {
    return `${postToPrint.title} ${postToPrint.daysOld} days old`
}

const anotherPrintPost = (postToPrint: Post) => {
    return `${postToPrint.title} ${postToPrint.daysOld} days old`
}

const otherPost: Post = {
    title: "Oh my god it created by itself",
    daysOld: 0,
    published: false
}

//CLASSES IN TypeScript

class Car {
    public color: string;
    private year: number;

    constructor(color: string, year: number){
        this.color = color
        this.year = year
    }

    drive(){
        console.log('*sonido de motor*' + `color ${this.color}, year: ${this.year}`)
    }
}

//forces types and prevents runtime errors

const myCar = new Car('red', 2000)
myCar.drive()

myCar.color
//myCar.year - gives an error because its private and can only be accessed from within the class
//private and public can also be applied to methods of the class