function hello(name : string, date : Date){
    console.log(`Hello ${name} sekarang tanggal ${date.toLocaleDateString()} cerah sekali ya`);
}

hello("Agus",new Date());