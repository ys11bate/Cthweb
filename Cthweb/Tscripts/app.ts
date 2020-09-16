function TSButton() {
    let name: string = "Fred";
    document.getElementById("ts-example").innerHTML = greeter(user);
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Fred", "M.", "Smith");




//フェードイン関数 ▼
function tfadein(musicID) {
    var media = document.getElementById(musicID);
    var vl = media;
    //if (vl < 1.0) {
    //    media.volume = Math.ceil((vl + 0.1) * 10) / 10;
    //    setTimeout("fadein()", 200);
    //}
}



//function Tfeedout() {
//    var vl = media.volume;
//    if (vl > 0) {
//        media.volume = Math.floor((vl - 0.1) * 10) / 10;
//        setTimeout("fadeout()", 200);
//    }
//}