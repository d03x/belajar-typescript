import { test, expect } from "bun:test";
import Bun from "bun"
import pluck from "./example";
test("Pluck Function Test", () => {
    interface Data {
        name: string,
        age: number,
    }
    const data: Data[] = [
        { name: "Hadi", age: 15 },
        { name: "abdul", age: 20 }
    ];
    const ages = pluck(data, 'age');
    expect(Bun.deepEquals(ages, [15, 20])).toBeTrue();
});