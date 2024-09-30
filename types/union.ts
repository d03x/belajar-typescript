interface People {
    status : 'sudah nikah' | 'belum nikah',
    //....
};
//tidak akan error
const People1 : People = {
    status : 'sudah nikah'
}
//akan error: Type '"Cerai"' is not assignable to type '"sudah nikah" | "belum nikah
const People2 : People = {
    //@ts-ignore
    status : 'Cerai'
}