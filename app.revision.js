/* <!-- A Smarter Way to Learn JavaScript -->*/

// alert("hello,world");
// alert("hello,world");
// alert(`hello,world`);

// console.clear();

// console.log("hello,world");
// confirm("hello,world");

// let a = "age";
// console.log(typeof a, "---age");

// let b = "umbrella";
// console.log(b, "---b");

// let num = 45 + 5;
// console.log(num, "---num");

// let age = 19;
// console.log(typeof age, "----age");

// let $num = 100 / 5;
// console.log($num);

// let _height = 5.7;
// console.log(_height);

// let 123age = 100;
// console.log(123age);

// let num1 = 20;
// let num2 = 5;
// let numResult = num1 * num2;
// console.log(numResult);

// let fareedAge = 19;
// let saeedAge = 32;
// console.log(fareedAge, saeedAge);

// let num = 12;
// num++;
// console.log(num);
// num--;
// console.log(num);
// ++num;
// console.log(num);
// --num;
// console.log(num);

// let num = 20;
// let concat = num + 200;
// console.log(concat);

// let number = 20;
// let result = number++;
// result++;
// console.log(result);

// let bodmas = 2 + 3 * 7;
// console.log(bodmas);

// let num = (1 + 4) * 10;
// console.log(num, "--num");

// let naam = "fareed ";
// let age = "19";
// console.log(age);
// let education = " matriculation";
// let concat = naam + age + education;
// console.log(concat, "---concat");

// let pro = +prompt("Enter SomEthing Numbers !","Number");
// console.log(pro);

// let userName = prompt("Enter UserName !");
// let userEducation = prompt("Enter userEducation !");
// let userExperience = prompt("Enter userExperience !");
// let submit = userName + " " + userEducation + " " + userExperience;
// alert(submit);

// let x = prompt("Where does the Pope live?", "Enter carryMail !");
// if (x === "carryMail") {
//   alert("Congrats !");
// }

// let userName = prompt("Enter userName !", "Enter JackSon !");
// let userAge = +prompt("Enter userAge !", "Enter userAge 1-to-20");
// if (userName === "JackSon") {
// }
// if (userAge <= 20) {
//   alert(
//     "Name: " + userName + " userAge: " + userAge + " Thanks For Submitting !"
//   );
// }

// let userName = prompt("Enter userName !");
// let userAge = +prompt("Enter userAge !");

// if (userName === "") {
//   alert("Please Enter Name !");
// }
// if (userAge >= 18 && userAge <= 27) {
//   console.log(
//     "Name: " + userName + " Age: " + userAge
//   );
// }

/*Comparison Operators */

// console.log(
//   5 === "5"
// ); /*value & datatype dono same honi vhaye hai */ /*output(false)*/
// console.log(5 == "5"); /*value same honi chaye bs /output(true)*/

// console.log(
//   5 !== 10
// ); /* agra data type same nhi hai toh true hai or value same nhi toh true hai output(true) */

// console.log(
//   "12" != "2"
// ); /* value same hogi toh false dedegha datatypes say koi matlab nhi hai ! output(true) */

// console.log(
//   2 > 4
// ); /* pehle wale value dosri wali value say bari honi chaye hai output(false)*/

// console.log(
//   5 < 1
// ); /*pehle wali value dosri wali value say choti honi chaye hai output(false)*/

// let x = prompt("Enter Default Name !", "JackSon");

// if (x === "JackSon") {
//   alert("yes you are a eligible !");
// } else {
//   alert("you are not a eligible !");
// }

// let userName = prompt("Enter Default Name !", "rafeeqKhan");
// if (userName === "rafeeqKhan") {
//   alert("Congrats !");
// }
// if (userName !== "rafeeqKhan") {
//   alert("Please enter the default value !");
// }

// let x = prompt("Enter Default Value !", "jackSon");
// let correct = "jackSon";
// let score = 10;
// if (x === correct) {
//   alert("Congrats !");
// } else {
//   score--;
//   alert("Incoreect !");
// }

// let statements = prompt("Enter Default Value !", "Jack");
// let correctAnswer = "Jack";
// if (statements === correctAnswer) {
//   alert("Congrats !");
// } else if (statements === "Running") {
//   alert("Wrong Answer But Close !");
// } else {
//   alert("InCorrect !");
// }

// let weights = +prompt("Enter Weights ____ ?");
// let time = +prompt("Enter Seconds ______ ?");

// if (weights > 300 && time < 6) {
//   alert("Come to try out !");
// } else {
//   alert("Come to our cookout !");
// }

// let weights = +prompt("Enter Weights _____ ?");
// let time = +prompt("Enter Seconds ____ ?");
// let age = +prompt("Enter Age ___ ?  ");
// let gender = prompt("Enter Gender ____ ?");

// if (weights >= 300 && time <= 6 && age >= 17 && gender === "male") {
//   alert("Come to try out !");
// } else {
//   alert("Come to our cookout !");
// }

// let sat = +prompt("Enter sat _______ ?");
// let gpa = +prompt("Enter gpa ______ ?");
// let sport = prompt("Enter Sports _____- ?");

// let avg = 1;
// let reni = 3.5;
// let game = "football";

// if (sat > avg || gpa < reni || sport === "game") {
//   alert("Welcome to Bubba State!");
// } else {
//   alert("Have you looked into appliance repair?");
// }

/* Conditions */

// && Condition// (agar dono value true hovi toh && condition chaleghi ?) (and)
// || Condition// (agar dono mai say 1 bhi chal ghayi toh || condition chal jayeghi ?) (or)
// !! Condition// (agar dono mai say koi bhi nhi chale toh yai chal jyeghi ?) (not)

// let x = +prompt("Enter _______ ?", "Y-Code");
// let a = +prompt("Enter _______ ?", "B-Code");
// let c = +prompt("Enter _______ ?", "D-Code");

// let y = 1221;
// let b = 2112;
// let d = 1122;

// let h = "Correct ,Code !";

// let f = "Wrong , Code !";

// // if ((x === y || a === b) && c === d) {
// //   alert(h);
// // } else {
// //   alert(f);
// // }

// if (x === y) {
//   if (a === b) {
//     alert(h);
//   } else if (c === d) {
//     alert(h);
//   } else {
//     alert(f);
//   }
// } else {
//   alert(f);
// }

// Arrays //

// var city0 = "Atlanta";
// var city1 = "Baltimore";
// var city2 = "Chicago";
// var city3 = "Denver";
// var city4 = "Los Angeles";
// var city5 = "Seattle";

// console.log("Welcome " + city3);

// let array = ["Atlanta", "Seattle", "Los Angeles", "Denver", "Baltimore"];

// console.log("Welcome to: " + array[2]);

// let pets = [];
// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard";
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";
// console.log(pets);

// pets.pop();
// pets.push("fish", "shark");
// console.log(pets);
// pets.shift();
// pets.unshift("loin", "tiger");
// console.log(pets);
// pets.splice(5, 1, "turtel");
// console.log(pets);
// let dummyPets = pets.slice(0, 3);
// console.log(dummyPets);

// (pop() /*last Element deleted)
//(push() /*last Element adding multiple no limiting)
// (shift() /*first Element deleted)
//(unshift() /*first Element adding multiple no limiting)
//(splice() /*startNum ,deletecount , multipleAdding)
//(slice() /*startNum ,endNumber NewArray[] miljayeghi)

// ForLoop ///

// for (let index = 0; index < 100; index++) {
//   console.log(index);
// }

// let value = prompt("Enter Cities _________ ?");
// let arrayOfValue = [
//   "Lahore",
//   "Karachi",
//   "Punjab",
//   "GilgitBaltistan",
//   "KhyperPukhtoonKhwa",
//   "Peshawar",
//   "Balochistan",
//   "Sindh",
// ];

// // if (value === arrayOfValue[0]) {
// //   alert("It's one of the cleanest cities");
// // } else if (value === arrayOfValue[1]) {
// //   alert("It's one of the cleanest cities");
// // } else if (value === arrayOfValue[2]) {
// //   alert("It's one of the cleanest cities");
// // } else if (value === arrayOfValue[3]) {
// //   alert("It's one of the cleanest cities");
// // } else if (value === arrayOfValue[4]) {
// //   alert("It's one of the cleanest cities");
// // } else if (value === arrayOfValue[5]) {
// //   alert("It's one of the cleanest cities");
// // } else if (value === arrayOfValue[6]) {
// //   alert("It's one of the cleanest cities");
// // } else if (value === arrayOfValue[7]) {
// //   alert("It's one of the cleanest cities");
// // } else {
// //   alert("It's not on the list");
// // }

// for (let i = 0; i < arrayOfValue.length; i++) {
//   if (value === arrayOfValue[i]) {
//     alert("It's one of the cleanest cities");
//     break;
//   } else {
//     alert("It's not on the list");
//     break;
//   }
// }

// let matching = "no";

// for (let i = 0; i < arrayOfValue.length; i++) {
//   if (value === arrayOfValue[i]) {
//     matching = "yes";
//     alert("It's one of the cleanest cities");
//     break;
//   }
//   if ((matching === "no")) {
//     alert("It's not on the list");
//     break;
//   }
// }

// // let matching = false;

// // for (let i = 0; i < arrayOfValue.length; i++) {
// //   if (value === arrayOfValue[i]) {
// //     matching = true;
// //     alert("It's one of the cleanest cities");
// //     break;
// //   }
// //   if (matching === false) {
// //     alert("It's not on the list");
// //     break;
// //   }
// }

// ForLoopNested//

// let fName = ["fareed", "saeed", "umer", "waleed", "ajab", "azaan", "humza"];
// let lName = ["khan", "gul", "zaman", "pathan", "afghan", "kabul", "afridi"];
// let fullName = [];
// for (let i = 0; i < fName.length; i++) {
//   for (let j = i; j < i + 1; j++) {
//     fullName.push(fName[i] + lName[j]);
//   }
// }
// console.log(fullName);

// let value = prompt("Enter Cities _________ ?");

// cityCheck = prompt("Enter Your City _______ ?");

// let arrayOfValue = [
//   "lahore",
//   "karachi",
//   "punjab",
//   "gilgitBaltistan",
//   "khyperPukhtoonKhwa",
//   "peshawar",
//   "balochistan",
//   "sindh",
// ];
// for (let i = 0; i < arrayOfValue.length; i++) {
//   if (cityCheck === arrayOfValue[i]) {
//     alert("Its One Of Cleanest Cities !");
//     break;
//   } else {
//     alert("Its not on the list !");
//     break;
//   }
// }

// let c = prompt("Enter LowerCase !");
// c = c.toLocaleUpperCase();
// console.log(c);

// let c = prompt("Enter UpperCase  !");
// c = c.toLowerCase();
// console.log(c);

// let month = prompt("Enter Month Name !");
// let monthSM = month.slice(0, 3);
// console.log(monthSM);

// let cityCheck = prompt("Enter _______ ?");

// let firstCh = cityCheck.slice(0, 1);
// console.log(firstCh);
// let secondCh = cityCheck.toLowerCase();
// let thirdCh = cityCheck.toUpperCase();
// console.log(secondCh + thirdCh);
// let fourthCh = cityCheck.length;
// console.log(fourthCh);

// let month = prompt("Enter Month Name !");

// let charIf = month.length;
// if (charIf > 3) {
//   let monthAbbre = month.slice(0, 3);
//   console.log(monthAbbre);
// }

// let userName = prompt("Enter Month Name !");

// // let numChar = userName.length;

// for (let i = 0; i < userName.length; i++) {
//   if (userName.slice(i, i + 2) === "  ") {
//     alert("No Double Space Allow !");
//     break;
//   }
//   console.log(userName);
// }

// let ind = "My Name is jackSon Gul is great Boy !";

// console.log(ind.indexOf("F"));
// console.log(ind.lastIndexOf("i"));

// let character = "my first character !";
// console.log(character.slice(0, 6));
// console.log(character.charAt("19"));
// console.log(character.length);

// let text = prompt("Enter Characters !");
// for (let i = 0; i < text.length; i++) {
//   if (text.charAt(i) === "!") {
//     alert("Exclamation point found!");
//     break;
//   }
// }

// let replacing = "my name is farEEd is  Gul !";
// console.log(replacing.replace("farEEd Gul !", "fareed gul ?"));
// console.log(replacing.slice(0, 17));
// console.log(replacing.charAt("6"));
// console.log(replacing.length);
// console.log(replacing.indexOf("E"));
// console.log(replacing.lastIndexOf("E"));
// console.log(replacing.replaceAll("is", "an"));

// let roundingNum = +prompt("Enter Your Round Numbers !");
// // roundingNum = Math.round(roundingNum);
// // roundingNum=Math.ceil(roundingNum);
// roundingNum = Math.floor(roundingNum);
// console.log(roundingNum);

// let random = Math.random();
// let bigNum = random * 6;
// let improved = Math.ceil(bigNum);
// console.log(improved);

// let str = 200 + " rivers";
// console.log(str);

// let far = 200 - "duck";
// console.log(far);

// let pro = +prompt("Enter ______ ?");
// let improved = pro + " duck";

// console.log(improved);

// let num = +prompt("Enter Your ParseInt !");
// let improvement = parseInt(num);
// console.log(improvement);

// let num = +prompt("Enter Your ParseInt !");
// let improvement = parseFloat(num);
// console.log(improvement);

// let number = prompt("Enter ______ ?");

// let improve = parseInt(number);
// console.log(improve);

// let numbers = +prompt("Enter Numbers !");
// let improve = toString(numbers);
// console.log(typeof improve,"----improve Value");

// let myNum = +prompt("Enter ______ ?");
// let controlling = myNum.toFixed(3);
// console.log(controlling);

// let num = prompt("Enter ________ ?");
// let dummyNum = toString(num);
// if (dummyNum.charAt(dummyNum.length - 1) === "5") {
//   dummyNum = dummyNum.slice(0, dummyNum.length - 1) + "6";
// }
// prettyNum = num.toFixed(3);
// console.log(prettyNum);

// let date = new Date();
// console.log(date);
// // date.getDate();
// // console.log(date,"--today date");
// // date.getDay();
// // console.log(date,"---today day");

// let rightNow = date.getFullYear();
// console.log(rightNow);

// let currentDate = new Date();
// let weekDays = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// let today = weekDays[currentDate.getDay()];
// console.log(today);

// let weekDays = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// let date = new Date();
// let now = date.getDay();
// let improved = weekDays[now];
// console.log(improved);

// let date = new Date();
// let a = date.getDay();
// console.log(a);
// let b = date.getMonth();
// console.log(b);
// let c = date.getDate();
// console.log(c);
// let d = date.getFullYear();
// console.log(d);
// let e = date.getHours();
// console.log(e);
// let f = date.getMinutes();
// console.log(f);
// let g = date.getSeconds();
// console.log(g);
// let h= date.getMilliseconds();
// console.log(h);
// let i = date.getTime();
// console.log(i);

// let date = new Date();
// console.log(date);
// let futureDate = new Date("01 31 2050");
// console.log(futureDate);

// let doomDate = date.getTime();
// console.log(doomDate);

// let futureDoomDate = futureDate.getTime();
// console.log(futureDoomDate);

// let msDiff = Math.floor((futureDoomDate / 1000) * 60 * 60 * 24);
// console.log(msDiff);

// let userBdDate = new Date();
// userBdDate.setDate(+prompt("Enter Your Born Day !"));
// userBdDate.setMonth(+prompt("Enter Your Born Month !"));
// userBdDate.setFullYear(+prompt("Enter Your Born Year !"));
// console.log(userBdDate);

// function tellTime() {
//   let newDate = new Date();
//   let hours = newDate.getHours();
//   let min = newDate.getMinutes();
//   alert("this is hours: " + hours + " this is minutes: " + min);
// }
// tellTime();

// function passingData(fName, lname) {
//   let fullName = fName + lname;
//   alert(fullName);
// }
// passingData(
//   prompt("Enter Your First Name !"),
//   prompt("Enter Your Last Name !")
// );

// function subjects(math, cs, eng) {
//   let sum = math + cs + eng;
//   return sum;
// }
// function percentage(tt) {
//   let per = (tt / 300) * 100;
//   console.log(per);
// }
// let total =  subjects(
//   +prompt("Enter Your Mathematics Marks !"),
//   +prompt("Enter Your Cs Marks !"),
//   +prompt("Enter Your English Marks !")
// );
// percentage(total);

// function subjects(math, cs, eng, phy, islam) {
//   let allSub = math + cs + eng + phy + islam;
//   let per = (allSub / 500) * 100;
//   return per;
// }
// let totalPercentage = subjects(
//   +prompt("Enter Mathematics Marks !"),
//   +prompt("Enter Cs Marks !"),
//   +prompt("Enter English Marks !"),
//   +prompt("Enter physics Marks !"),
//   +prompt("Enter Islamic Marks !")
// );
// alert("Your Percentage is: " + totalPercentage.toFixed(3));

// function example() {
//     if (true) {
//         var x = 10;  // Function-scoped
//         let y = 20;  // Block-scoped
//         const z = 30; // Block-scoped
//     }
//     console.log(x); // ✅ Works because `var` is function-scoped
//     // console.log(y); // ❌ Error: y is not defined (block-scoped)
//     // console.log(z); // ❌ Error: z is not defined (block-scoped)
// }

// example();

// let global = "i am global !";
// function myFunc() {
//   console.log(global);
// }
// myFunc();
// console.log(global,"-------global");

// const global = "i am global !";
// function myFunc() {
//   console.log(global);
// }
// myFunc();
// console.log(global,"-------global");

// function myFunc() {
//   let sub = "iam local";
// }
// myFunc();

// function mySecondFunc() {
//   console.log(sub);
// }
// mySecondFunc();

// function clearnceGlobalvslocal() {
//   if (true) {
//     var x = "iam var iam function scope !";
//     let y = "iam let iam blocked scope !";
//     const z = "iam const iam blocked scope !";
//   }
//   console.log(x); /*iam var iam global scoped*/
//   //   console.log(y); let blocked Scoped?
//   //   console.log(z); const blocked scoped?
// }
// clearnceGlobalvslocal();

// let dayOfWeek = prompt("Enter last 3 week days !");

// if (dayOfWeek === "saturday" || dayOfWeek === "sunday") {
//   alert("Whoopee!");
// } else if (dayOfWeek === "friday") {
//   alert("TGIF!");
// } else {
//   alert("Shoot me now!");
// }

// switch (dayOfWeek) {
//   case "sunday":
//     alert("Whoopee!");
//     break;
//   case "saturday":
//     alert("Whoopee !");
//     break;
//   case "friday":
//     alert("TGIF!");
//     break;
//   default: {
//     alert("Shoot me now !");
//   }
// }

// let userReact = +prompt("Enter ZipCode  WeekDays !");
// let array = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

// switch (userReact) {
//   case 1:
//     alert("today is: " + array[0]);
//     break;
//   case 2:
//     alert("today is: " + array[1]);
//     break;
//   case 3:
//     alert("today is: " + array[2]);
//     break;
//   case 4:
//     alert("today is: " + array[3]);
//     break;
//   case 5:
//     alert("today is: " + array[4]);
//     break;
//   case 6:
//     alert("today is: " + array[5]);
//     break;
//   case 7:
//     alert("today is: " + array[6]);
//     break;
//   default: {
//     alert("Error your code !");
//   }
// }

// while loop //

// let index = 0;
// while (index < 100) {
//   index++;
//   console.log(index);
// }

// let userCheck = prompt("Enter Cricketer List ___ ?");
// let arrayCricketer = [
//   "babarAzam",
//   "shahidAfridi",
//   "shaheenAfridi",
//   "naseemShah",
//   "zamanKhan",
//   "younusKhan",
// ];

// while (userCheck === arrayCricketer.length) {
//     if (arrayCricketer.includes(userCheck)) {
//         alert(userCheck + " is on the list .");
//     } else {
//         alert("its not on the list !");
//     }
//     arrayCricketer++;
// }

// for (let i = 0; i < arrayCricketer.length; i++) {
//   if (userCheck === arrayCricketer[i]) {
//     alert(userCheck + " is on the list .");
//     break;
//   } else {
//     alert("its on the list !");
//     break;
//   }
// }

// if (arrayCricketer.includes(userCheck)) {
//   alert(userCheck + " is in the list !");
// } else {
//   alert("its not on the list !");
// }

// let i = 1;
// do {
//  console.log(i);
//   i++;
// } while (false);

// placing Script //

// scripts.js
// coreJS.js
// main-code.js
// main_code.js
// main.code.js

// Commenting/

/*for (let i = 0; i < 100; i++) {
  console.log(i);
}*/

// Events chapter 45 /

// function myCalling() {
//   alert("hello,world !");
// }

// Events chapter 46 button /

// function myGreet(message = "hello,fareed") {
//   alert("this is the: " + message);
// }

// Events chapter 47 mouse  /

// function expand() {
//   document.getElementById("loris").style.color = "blue";
//   document.getElementById("loris").innerHTML = "iam expanding paragraph";
// }

// Events chapters 48 fields //

// function focusing() {
//   document.getElementById("form").style.backgroundColor = "black";
//   document.getElementById("form").style.color = "white";
// }

// function bluring() {
//   document.getElementById("form").style.backgroundColor = "white";
//   document.getElementById("form").style.color = "black";
// }

// function myCalling() {
//   let doc = document.getElementById("email").value;
//   if (doc.trim() === "") {                 /*Used .trim() to remove leading and trailing spaces before checking if it's empty.// Improved alert messages for better readability.
//     alert("please enter the fields !");
//   } else {
//     alert("thankyou for submitting !");
//   }
// }

// <!-- chapter 50    Setting field values -->

// function fillCity() {
//   let zip_Input = document.getElementById("zip").value;
//   let city_Output;
//   switch (zip_Input) {
//     case "100":
//       city_Output = "lahore";
//       break;
//     case "200":
//       city_Output = "karachi";
//       break;
//     case "300":
//       city_Output = "islamabad";
//       break;
//     case "400":
//       city_Output = "peshawar";
//       break;
//     case "500":
//       city_Output = "balochistan";
//       break;
//     default: {
//       city_Output = "this is wrong zip code !";
//     }
//   }
//   document.getElementById("city").value = city_Output;
// }

// chapter 51 Reading and setting paragraph text

// function expandPara() {
//   let expandingPara =
//     "Slow lorises are a group of several species of trepsirrhine primates which  make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of  distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have severalSlow lorises have a toxic bite, a rare trait among mammals.";
//   document.getElementById("para").innerHTML = expandingPara;
//   document.getElementById("para").style.color = "black";
//   document.getElementById("para").style.fontFamily="monospace"
// }

// function clicking() {
//   let doc =
//     "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li> <li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
//   document.getElementById("styling").innerHTML = doc;
// }

// function cheap() {
//   document.getElementById("content").innerHTML = "Hello,Fareed";

// }

// function cheaping() {
//   document.getElementById("content").innerHTML = "Hello,World";
// ;
// }

// <!-- chapter 52 Manipulating images and text -->

// function clicking() {
//   document.getElementById("image").style.display = "none";
// }

// function makeInvisible() {
//   document.getElementById("head").className = "heading";
// }

// function myScript() {
//   document.getElementById("head").className = "styling2";
// }

// <!-- chapter 53 Swapping images -->

// function swapPic() {
//   document.getElementById("swapPicture").src = "laptop-1839876_640.jpg";
// }

// <!-- chapter 54 Swapping images and setting classes -->

// function changeStyle() {
//   let chng = document.getElementById("form");
//   chng = chng.className = "jumbo";
// }

// function bluring() {
//   let chng = document.getElementById("form");
//   chng = chng.className = "normal";
// }

//  chapter 55 Setting styles//

// function settingField() {
//   // document.getElementById("image").style.display = "none";
//   // document.getElementById("image").style.visibility = "hidden";
//   // document.getElementById("image").style.cssFloat = "right";
//   // document.getElementById("image").style.margin = "100px 100px 100px 100px ";
// }

// chapter 56 Target all elements by tag name//

// function targeting() {
//   let target = document.getElementById("myDiv");
//   let tEl = target.getElementsByTagName("p");
//   //   console.log((tEl[2].innerHTML = "hello best city"));
//   // }
//   for (let i = 0; i < tEl.length; i++) {
//     tEl[i].style.fontFamily = "monospace";
//   }
// }
// targeting();

// chapter 57 Target some elements by tag name//

// function targeting() {
//   let target = document.getElementById("table");
//   let tEl = target.getElementsByTagName("td");

//   for (let i = 0; i < tEl.length; i++) {
//     tEl[i].style.backgroundColor = "pink";
//   }
// }
// targeting();

// <!-- chapter 58 The DOM// -->

// chapter 59 The DOM: // Parents and children

// <!-- chapter 60 The DOM: Finding children -->

// function doming() {
//   let myDiving = document.getElementById("myDiv");
//   let p = myDiving.childNodes[1];
//   console.log(p);
// }
// doming();

//  chapter 61 Junk artifacts and nodeType

// function junk() {
//   // let div1 = document.getElementById("myDiv");
//   let div2 = document.getElementById("yourDiv");
//   // let checkDiv1 = div1.firstElementChild;
//   // let checkDiv1 = div1.lastElementChild;
//   // let checkDiv1 = div1.childNodes[5];
//   // console.log(checkDiv1);
//   // let secondDiv = div2.childNodes;
//   // let secondDiv = div2.parentElement;
//   // let p = div2.childNodes[2];
//   let p = div2.childNodes[1];
//   let check = p.parentNode;
//   console.log(check, p.nodeType);
//   // console.log(secondDiv);
// }
// junk();

//  chapter 62 More ways to target elements

// function MoreTarget() {
//   let myTable = document.getElementById("table");
//   let fRow = document.getElementById("1stRow");
//   let sRow = document.getElementById("2ndRow");
//   // let tableChild = myTable.childNodes[1];
//   // console.log(tableChild.nodeType);
//   // let rowCheck = fRow.parentNode;
//   // console.log(rowCheck);
//   let rowChecking = sRow.childNodes[0];
//   console.log(rowChecking.nodeType);
// }
// MoreTarget();

// <!-- chapter 63 The DOM: Getting a target's name -->

// function getting() {
//   let parentEl = document.getElementById("myDiv");
//   let elements = parentEl.lastElementChild;
//   console.log(elements.nodeName.toLowerCase());

//   // let target = elements.nextSibling;
//   // console.log(target.nodeValue);
//   // console.log(elements.nodeType);
//   // console.log(elements.nodeName);
//   // console.log(elements.nodeValue);
// }

// getting();

// chapter 64 The DOM: Counting elements

// function counting() {
//   let ulParent = document.getElementById("list");
//   let childList = ulParent.childNodes[1];
//   // console.log(childList);
//   // for (let i = 0; i < childList.length; i++) {
//   //   if (childList[i].innerHTML === "") {
//   //     childList[i].innerHTML = "ComingSoon!";
//   //   }
//   // }
//   // console.log(childList.nodeName.toLowerCase());
// }

// counting();

// <!-- chapter 65 The DOM: Attributes -->

// function attri() {
//   let mydiv = document.getElementById("div");
//   // let attring = mydiv.hasAttribute("style");
//   // let attring = mydiv.hasAttribute("class");
//   // console.log(attring);
//   // let  childAttri = document.getElementById('para');
//   // console.log(childAttri.hasAttribute("id"));
//   // let checkDiv = mydiv.getAttribute("class");
//   // console.log(checkDiv);
//   let myAttri = mydiv.setAttribute("class", "divStyle");
//   console.log(myAttri);
// }

// attri();

// chapter 66 The DOM: Attribute names and values

// function attriName() {
//   // let parentTable = document.getElementById("table");
//   // let checking = parentTable.childNodes;
//   // let checking = parentTable.attributes;
//   // let checking = parentTable.children;
//   // console.log(checking.length);
//   let y = document.getElementById("row1");
//   let z = y.childNodes[1].nextSibling
//   console.log(z.nodeName.toLowerCase());
// }

// attriName();

// chapter 67 The DOM: Adding nodes

// function create() {
//   let myDiv = document.getElementById("creating");
//   myDiv.setAttribute("class", "divStyle");
//   let addEl = document.createElement("p");
//   let addText = document.createTextNode("iam adding element !");

//   myDiv.appendChild(addEl);
//   addEl.appendChild(addText);
// }
// create();

// chapter 68 The DOM: Inserting nodes

// function iserting() {
//   let myDiv = document.getElementById("insert");
//   myDiv.setAttribute("class", "divStyle");
//   let addEl = document.createElement("h1");
//   let addText = document.createTextNode("iam heading!");
//   myDiv.appendChild(addEl);
//   addEl.appendChild(addText);
// }
// iserting();

// function insert() {
//   let x = document.getElementById("insert");
//   let y = x.childNodes[3];
//   let z = x.removeChild(y);
//   console.log(z);
// }
// insert();

// function insert() {
//   let createEl = document.createElement("p");
//   let checkQua = createEl.insertBefore("createEl");
//   console.log(checkQua);
// }
// insert();

// function insert() {
//   // let create = document.createElement("h1");
//   // let createText = document.createTextNode("I am Paragraph!");
//   // create.appendChild(createText);
//   let create = "hello,iam good boy!";
//   let myDiv = document.getElementById("parentDiv");
//   myDiv.insertAdjacentText("afterbegin", create);

//   // myDiv.appendChild(create);
//   // create.appendChild(createText);

//   // let target = document.getElementById("parentDiv");
//   // target.insertBefore(createText, target.childNodes[0]);
// }

// insert();

let obj = {
  fName: "fareed",
  lName: "gul",
  education: "1st Year",
  experience: "frontend developer",
};

for (const key in obj) {
  console.log(obj[key]);
}
