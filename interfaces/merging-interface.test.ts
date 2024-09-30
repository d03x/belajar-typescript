import {test,expect} from "bun:test";
interface User {
    name: string
}
interface User {
    age: number
}

const user1: User = {
    name: 'Agus',
    age: 22
}
test('Object attribute value',()=>{
    expect(user1.age).toBe(22);
})