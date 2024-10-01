const user = {
    name : "Wiranto",
    age : 29,
}
//@ts-expect-error
//akan error:Property 'location' does not exist on type '{ name: string; age: number; }'
console.log(user.location);