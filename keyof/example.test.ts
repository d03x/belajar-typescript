import { test, expect } from "bun:test";
import Bun from "bun"
import pluck, { getValue } from "./example";
interface Data {
    name: string,
    age: number,
}
test("Pluck Function Test", () => {

    const data: Data[] = [
        { name: "Hadi", age: 15 },
        { name: "abdul", age: 20 }
    ];
    const ages = pluck(data, 'age');
    expect(Bun.deepEquals(ages, [15, 20])).toBeTrue();
});

test("Get value by key name from object", () => {
    const data: Data = { name: "Hadi", age: 15 };

    const value = getValue(data, 'name');
    expect(value).toBe("Hadi");

})