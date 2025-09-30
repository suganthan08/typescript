function fullname(firstname: string, secondname?: string): string {
    return secondname ? `${firstname} ${secondname}` : firstname;
}
console.log(fullname("jhon"));
console.log(fullname("jhon", "wick"));