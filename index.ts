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
