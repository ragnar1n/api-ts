export class Kasutaja {
    constructor(
        private uid: number,
        private username: string,
        private password: string,
        private firstname: string,
        private lastname: string,
    ) {}

    get id(){
        return this.uid
    }

    get uName(){
        return this.username
    }

    set uName(newUname:string){
        this.username=newUname
    }

}