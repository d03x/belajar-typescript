
import { describe, expect, test } from "bun:test"

interface User {
    name: string,
    email: string,
    age: number
}
type D = keyof User;

function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
}
function pluck<T, K extends keyof T>(object: T[], key: K): T[K][] {
    return object.map((value) => value[key]);
}
describe("keyoftest", function () {
    test("keyof get name", function () {
        const user: D = "name";
        expect(user).toBe("name");
    });
    test("Not Key OF", function () {
        //@ts-ignore
        const user: D = "abri";
        expect(user != "name").toBeTrue()
    });
    test("Get value from object by key name", () => {
        const data: User = {
            name: "DADAN",
            age: 22,
            email: "dadan@gmail.com"
        }
        const value = getValue(data, "name");
        expect(value).toBe("DADAN")
    })
    test("Pluck data from key array", () => {
        const data: User[] = [
            { name: "Andriansyah", age: 1, email: 'ea' },
            { name: "ari", age: 2, email: 'test' },
        ];
        const ages = pluck(data, 'age');
        expect(ages).toBeArray();
    });
    test('keyof2', function () {
        type AD = { [n: number]: boolean, [data: string]: any };
        type D = keyof AD;
        const d : D = 10;
        expect(d).toBe(10);
    })

})