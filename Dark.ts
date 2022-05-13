export class Dark{
    constructor(public spell: string, public type?: string){
        this.type = type !== undefined ? type : 'Dark'
    }
}