export class GenericClass<T> {
    constructor(public value: T) {}
}

const numberWrapper = (value:number): number[] => {
    return [value]
}

//generic function first <> takes the type as parameter, then value gets T type and returns T type
const genericWrapper = <T>(value: T): T[] => {
    return [value]
}

genericWrapper<string>('Hello')
genericWrapper<number>(80)
genericWrapper<boolean>(false)