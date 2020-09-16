function TSButton() {
    var name = "Fred";
    document.getElementById("ts-example").innerHTML = greeter(user);
}
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Fred", "M.", "Smith");
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
//# sourceMappingURL=app.js.map