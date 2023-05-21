var age = 50;
var nam = "Max";
var toggle = true;
var empty = null;
var notInitialize = undefined;
// let callback = (a: number) => number;
// callback = (a) => {return 100 + a};
var anything = -20;
anything = "Text";
anything = {};
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
var person = ["Max", 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var page = {
    load: Status.READY,
};
if (page.load === Status.LOADING) {
    console.log("The page is loading");
}
if (page.load === Status.READY) {
    console.log("The page has been loaded");
}
var a;
a = 10;
a = "hello";
var b;
b = "disable";
b = "enable";
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
