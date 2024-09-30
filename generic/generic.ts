interface Backpack<Type> {
    add:(obj : Type) =>void;
    get:(obj : Type) => Type;
}

declare const backpack : Backpack<string>;
//error:Argument of type 'number' is not assignable to parameter of type 'string'
const object = backpack.add(20);

backpack.get("Agus")