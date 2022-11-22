
import { ErrorRepository } from "../app"

test("test errorRep", () => {
    let myClass = new ErrorRepository();
    let myResalt = myClass.translate(404)
    let yourResalt = "does not have"
    expect(myResalt).toBe(yourResalt)
})
test("test errorReposit", () => {
    let myClass = new ErrorRepository();
    let myResalt = myClass.translate(410)
    let yourResalt = "Unknown error"
    expect(myResalt).toBe(yourResalt)
})
