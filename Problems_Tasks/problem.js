// Problem No. 01

// let userInput = parseInt(prompt("Please Enter Amount."));
// let currentBalance = 10000;

// if (userInput <= 0) {
//     alert("Please enter a valid number.");
// } else if (userInput < 500) {
//     alert(" Can't withdraw less than 500");
// } else if (userInput % 500 !== 0) {
//     alert(" You Entered a Irregular Amount.");
// } else if (userInput > currentBalance) {
//     alert(` Insufficient Balance. Your current balance is ${currentBalance}`);
// } else {
//     currentBalance -= userInput;
//     alert(` Withdrawal Successful! Your remaining balance is ${currentBalance}`);
// }


// Problem No. 02
// let numbersOfHours = parseInt(prompt("Please Enter a Hours of Parking."))
// let fee = 5
// if (isNaN(numbersOfHours) || numbersOfHours <= 2) {
//     alert(`Parking Charge is free Under 2 Hours`)
// } else if (numbersOfHours >= 10) {
//     alert(`if you stay morethan 10 Hours we Charged $50`)
// } else {
//     let charge = numbersOfHours * fee;
//     alert(`The Parking Fees is $${charge}`)
// }

// Problem No. 03

// let carLimit = parseInt(prompt("Please Enter a Speed."))

// if (carLimit <= 60){
//     alert(`Safe Speed`)
// }else if (carLimit <= 80){
//     alert("Warning is been Issued.")
// }else if (carLimit > 81){
//     alert(`We Gonna charge you $10 per km over 80. `)
// }else {
//     alert("Please Enter a Valid Number.")
// }

// Problem No. 04

// function calculateLoan(loanAmount) {
//     let interestRate;
//     if (loanAmount <= 10000) {
//         interestRate = 0.05;
//     } else if (loanAmount <= 50000) {
//         interestRate = 0.07;
//     } else {
//         interestRate = 0.10;
//     }
//     let interest = loanAmount * interestRate;
//     let totalPayback = loanAmount + interest;

//     console.log(`Loan Amount: $${loanAmount}`);
//     console.log(`Interest Rate: ${interestRate * 100}%`);
//     console.log(`Interest: $${interest}`);
//     console.log(`Total Payback: $${totalPayback}`);

// }

// calculateLoan(51000)

// Problem No 05

// let totalMarks = 400;
// let numberOfStudents = 3;

// for (let i = 1; i <= numberOfStudents; i++) {
//     let obtainedMarks = parseInt(prompt(`Enter the Obtained Marks for Student ${i}`));

//     if (isNaN(obtainedMarks)) {
//         alert("Please enter numeric marks.");
//         i--;
//         continue;
//     }

//     if (obtainedMarks > totalMarks) {
//         alert(`Please enter marks under ${totalMarks}, because the total marks is ${totalMarks}`);
//         i--;
//         continue;
//     }

//     let Percentage = (obtainedMarks / totalMarks) * 100;
//     let Grade, Remarks;
//     if (Percentage >= 80) {
//         Grade = "A-one";
//         Remarks = "Excellent";
//     } else if (Percentage >= 70) {
//         Grade = "A";
//         Remarks = "Good";
//     } else if (Percentage >= 60) {
//         Grade = "B";
//         Remarks = "You need to improve";
//     } else {
//         Grade = "Fail";
//         Remarks = "Sorry";
//     }

//     document.write(`<h1>MARK SHEET (Student ${i})</h1>`);
//     document.write(`<h3>Total Marks: ${totalMarks}</h3>`);
//     document.write(`<h3>Marks Obtained: ${obtainedMarks}</h3>`);
//     document.write(`<h3>Percentage: ${Percentage.toFixed(2)}%</h3>`);
//     document.write(`<h3>Grade: ${Grade}</h3>`);
//     document.write(`<h3>Remarks: ${Remarks}</h3><hr>`);
// }


// Problem No. 06

// let totalStudents = 8;
// let failed = 0;
// let passed = 0; //1 // 2//3 

// //2


// for (let i = 1; i <= totalStudents; i++) {
//     let totalScore = Math.floor(Math.random() * 101);

//     if (totalScore >= 50) {
//         // passed = passed + 1

//         passed++;
//         console.log(`Student ${i}: ${totalScore} Pass`);
//     } else {
//         failed++;
//         console.log(`Student ${i}: ${totalScore} Fail`);
//     }
// }

// console.log("Total Passed:", passed);
// console.log("Total Failed:", failed);


// Problem No.07

// let totalSeats = 10;
// let totalRevenue = 0;

// for (let i = 1; i <= totalSeats; i++) {
//     let age = Math.floor(Math.random() * 81);
//     let ticketPrice = 0;

//     if (age <= 12) {
//         ticketPrice = 5; // child
//     } else if (age <= 59) {
//         ticketPrice = 10; // adult
//     } else {
//         ticketPrice = 7; // senior
//     }

//     totalRevenue += ticketPrice;

//     document.write(`<h3>Seat ${i}: Age ${age}, Ticket Price $${ticketPrice}</h3>`);
// }

// Problem No. 08

// let totalBorrowers = 20;
// let totalfee = 0;

// for(i = 1; i <= totalBorrowers; i++){
//     let lateDays = Math.floor(Math.random()*16)
//     let fee = 0;

//     if(lateDays >= 1 && lateDays <= 5){
//         fee = lateDays * 2
//     }else if (lateDays >= 6 && lateDays <= 10){
//         fee = lateDays * 3
//     }else{
//         fee = lateDays * 5
//     }

//     totalfee += fee;

//     console.log(`Borrowers ${i}: ${lateDays} days left -> fee$ ${fee} `);
// }

// console.log("Total Late Fees Collected: $" + totalfee);

// Problem No 09

// let cars = 10;
// let costOfPetrol = 0;

// for (let i = 1; i <= cars; i++) {
//     let liters = Math.floor(Math.random() * 36) + 1;
//     let rate = 0;
//     let fee = 0;

//     if (liters >= 1 && liters <= 20) {
//         rate = 1.2;
//     } else if (liters >= 21 && liters <= 35) {
//         rate = 1.0;
//     } else {
//         rate = 0.8;
//     }

//     fee = liters * rate;
//     costOfPetrol += fee;

//     console.log(`Car ${i}: ${liters} liters x $${rate} per liter = $${fee.toFixed(2)}`);
// }

// console.log(`\nTotal Cost of Petrol Collected: $${costOfPetrol.toFixed(2)}`);


// Questions Section 02

// let userInput = prompt("Please Enter What would you like to Order. (For Example: burger, pizza, drink)");
// userInput = userInput.toLowerCase().split(",");

// let burger = 40;
// let pizza = 50;
// let drink = 10;
// let totalBill = 0;

// document.write(`<h1> Our Menu<br>`)
// document.write("<h2>Burger: $40 <br>");
// document.write("<h2>Pizza: $50 <br>");
// document.write("<h2>Drink: $10 <br>");
// document.write(`<br><h3>Your Ordered: ${userInput.join(", ")}.<br>`);
// document.write(`<br><h1> Our Bill.<br>`);

// for (let i = 0; i < userInput.length; i++) {
//     let item = userInput[i].trim();

//     if (item == "burger") {
//         totalBill += burger;
//     } else if (item == "pizza") {
//         totalBill += pizza;
//     } else if (item == "drink") {
//         totalBill += drink;
//     } else {
//         document.write(`"${item}" is not available.<br>`);
//     }
// }
// document.write(`<h2>Your Total Bill is $${totalBill}.<br>`);

// let vipMember = prompt(`Your a VIP Member or Not, "Yes" or "No".`)
// vipMember = vipMember.toLowerCase()

// if (vipMember === "yes"){
//     totalBill -= 15
//     document.write(`<br><h2>Your order price is $100 You get a 10% Discount.`)
//     document.write(`<br><h2>You are a VIP Member you get a Extra 5% Discount.`)
//     document.write(`<br><h2>NOW Your Total Bill is $${totalBill}.<br>`);
// }

// function discount() {
//     if (totalBill == 100) {
//         totalBill -= 10
//         document.write(`<br><h2>Your order price is $100 You get a 10% Discount.`)
//         document.write(`<br><h2>NOW Your Total Bill is $${totalBill}.<br>`);
//     }
// }

// console.log(discount());

// Question No 02

// document.write(`<h1> Ticket Zone <br>`);
// document.write(`<h2> Normal Ticket price is $12.00<br><br><br>`);

// let age = Math.round(Math.random() * 80) + 1
// let ticketPrice = 12

// if (age <= 12) {
//     document.write(`<h2>Your age is ${age}, You get a 50% Discount<br>`)
//     ticketPrice *= 0.5 
//     document.write(`<h2>Your Ticket Price is $${ticketPrice.toFixed(2)}.00<br>`)
// } else if (age <= 59) {
//     document.write(`<h2>Your age is ${age} You don't get a Dicount, Your Ticket Price is $${ticketPrice}.00<br>`)
// } else {
//     document.write(`<h2>Your age is ${age}, You get a 30% Discount<br>`)
//     ticketPrice *= 0.7
//     document.write(`<h2>Your Ticket Price is $${ticketPrice.toFixed(2)}<br>`)
// }

// // 3D Movie 
// let movie3D = prompt(`Your Movie is 3D, "Yes" or "No".`).toLowerCase()

// if (movie3D === "yes") {
//     document.write(`<h2>You Have to Pay $3.00 Extra Charges for 3D Format.<br>`)
//     ticketPrice += 3;
//     document.write(`<br>Your Final ticket price is $${ticketPrice.toFixed(2)}.00<br>`)

// }

// Question No 03

// let unit = parseInt(prompt(`Please Enter Your Electricity Units.`));
// let bill = 0
// document.write(`<h1>Electricity Bill Calculation 💡</h1>`)

// function unitCalculation() {
//     if (unit <= 100) {
//         bill = unit * 0.50
//         document.write(`<h2>Your Electricity Units ${unit} And charges per unit $0.50 = $${bill.toFixed(2)}`)
//         document.write(`<br><br><br><h1>The Total Bill is $${bill}`)
//     } else if (unit <= 199) {
//         bill = unit * 0.75
//         document.write(`<h2>Your Electricity Units ${unit} And charges per unit $0.75 = $${bill.toFixed(2)}`)
//         document.write(`<br><br><br><h1>The Total Bill is $${bill}`)
//     } else {
//         bill = unit * 1.20
//         bill *= 0.1
//         bill += unit
//         document.write(`<h2>Your Electricity Units ${unit} And charges per unit $1.20 and 10% Tax = $${bill.toFixed(2)}`)
//         document.write(`<br><br><br><h1>The Total Bill is $${bill}`)
//     }
    
// }

// console.log(unitCalculation())

// Question No 05
// let userInput = prompt(`Please Enter Password`)

// function passwordChecker (userInput){
//     const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/gm
//     return regex.test(userInput);
// }
// console.log(passwordChecker(userInput))

// Question No 06

// function discountAmount (price){
//     discount = price * 0.9
//     if (price <= 100){
//         return discount.toFixed(2)
//     }

//     return discountAmount(discount);

// }
// console.log(discountAmount(500));