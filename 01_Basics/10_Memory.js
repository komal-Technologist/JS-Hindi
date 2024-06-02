//Stack (Primitive) , Heap (Non-Primitive)
let myyouname = "Komalvalj"

let anothername = myyouname

anothername = "komalupdatechannelname"

console.log(myyouname);
console.log(anothername);

let userone = {
    email : "komal@gail.com",
    upi : "hfgf@sdd"
}

let usertwo = userone;
usertwo.email = "user@google.com"

console.log(userone.email);
console.log(usertwo.email)