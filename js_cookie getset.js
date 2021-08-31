function btn1() {
    let usernamekey1 = document.getElementById("one").value;
    let usernamevalue1 = document.getElementById("two").value;
    document.cookie = usernamekey1 + "=" + usernamevalue1;
    alert("cookie has been added");
}

function btn2() {

    let usernamekey1 = document.getElementById("one").value;
    let set = document.getElementById("set");
    let uu = document.getElementById("three").value;
    if (uu == usernamekey1) { set.innerHTML = document.getElementById("two").value; } else
        set.innerHTML = `Inavlid key`;
}




function btn3() {
    let name = document.getElementById("four").value;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    alert("cookie has been deleted");
}

// function btn2() {
//     let cname = document.getElementById("three").value;
//     let name = cname + "=";
//     let ca = document.cookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             document.write(c.substring(name.length, c.length));
//         }
//     }
//     document.write("");
// }