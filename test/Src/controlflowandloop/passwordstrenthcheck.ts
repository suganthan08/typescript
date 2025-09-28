function isStrong(password:string):boolean
{
    const hasuppercase=/[A-Z]/.test(password);
    const haslowercase=/[a-z]/.test(password);
    const hasdigit=/[0-9]/.test(password);
    const hasspecialchar=/[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length>=8 && hasuppercase && haslowercase && hasdigit && hasspecialchar;
}
console.log(isStrong("Aa1@abcd")); // true
console.log(isStrong("weakpass")); // false