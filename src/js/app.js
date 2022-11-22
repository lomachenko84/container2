
export class ErrorRepository {
    constructor() {
        this.map = new Map();
        this.map.set(404, "does not have")
    }
    translate(code) {
        if (this.map.has(code)) {
            return this.map.get(code)
        } 
        return 'Unknown error'
    }
}