// class Student {
//     name = "";
//     age = 0;
//     id = 0;
//     colge = "";
//     constructor(name, age, id, colge) {
//         this.name = name;
//         this.age = age;
//         this.id = id;
//         this.colge = colge;        
//     }
// }
// let student = new Student("ali", 23, 67890, "lmn");
// console.log(student);
// let student1 = new Student("ahmed", 25, 12345, "xyz");
// console.log(student1);

// const office = [
//     {
//         name: "MUSTAFA",
//         address: "NAZIMABAD ROAD",
//         phone: "021-12345678",
//         email: "mustufakhan@example.com",
//         website: "www.mustufakhan.com"
//     },
//     {
//         name: "ALI",
//         address: "GULSHAN",
//         phone: "021-87654321",
//         email: ""
//     }
// ];
// const findPerson = office.find(person => person.name === "ALI");
// console.log(findPerson);    

// const patients = [
//     {
//         name: "Fareed Khan",
//         age: 45,
//         diagnosis: "Hypertension",
//         phone: "555-1234",
//         emergengcyCase: true
//     },
//     {
//         name: "Muhammad ALI",
//         age: 30,
//         diagnosis: "Diabetes",
//         phone: "555-5678",
//         emergengcyCase: false
//     },
//     {
//         name: "Aisha Begum",
//         age: 60,
//         diagnosis: "Arthritis",
//         phone: "555-8765",
//         emergengcyCase: true
//     },
//     {
//         name: "Mustufa Khan",
//         age: 45,
//         diagnosis: "Hypertension",
//         phone: "555-1234",
//         emergengcyCase: true
//     },
//     {
//         name: "Raza Khan",
//         age: 30,
//         diagnosis: "Diabetes",
//         phone: "555-5678",
//         emergengcyCase: false
//     },
//     {
//         name: "Shawana Begum",
//         age: 60,
//         diagnosis: "Arthritis",
//         phone: "555-8765",
//         emergengcyCase: true
//     },
//     {
//         name: "Saleem Khan",
//         age: 45,
//         diagnosis: "Hypertension",
//         phone: "555-1234",
//         emergengcyCase: false
//     },
//     {
//         name: "Umer Patel",
//         age: 30,
//         diagnosis: "Diabetes",
//         phone: "555-5678",
//         emergengcyCase: false
//     },
//     {
//         name: "Nadia Begum",
//         age: 60,
//         diagnosis: "Arthritis",
//         phone: "555-8765",
//         emergengcyCase: true
//     }
// ];

// const doctor = [
//     {
//         name: "Dr. Orange",
//         specialization: "Diabetes",
//         phone: "555-4321",
//         appointment: 0,
//     },
//     {
//         name: "Dr. Yellow",
//         specialization: "Hypertension",
//         phone: "555-6789",
//         appointment: 0,
//     },
//     {
//         name: "Dr. Blue",
//         specialization: "Arthritis",
//         phone: "555-9876",
//         appointment: 0,
//     },
// ];
// const MAX_APPOINTMENTS = 1;

// // return new Array  
// // filter and map 

// function bookAppoinment() {
//     document.write(`<h1>Appointment Booking System:<br>`);
//     patients.forEach(patient => {
//         const assignedDoctor = doctor.find(doc => doc.specialization === patient.diagnosis);
//         const assignedDoctors = doctor.filter(doc => doc.specialization === patient.diagnosis);
//         console.log(assignedDoctor, "find");
//         console.log(assignedDoctors, "filter");
//         if (!assignedDoctor) {
//             document.write(`<h2>No doctor for ${patient.name} (${patient.diagnosis}). <br>`);
//             return;
//         }

//         if (assignedDoctor.appointment < MAX_APPOINTMENTS || patient.emergengcyCase) {
//             assignedDoctor.appointment++;
//             document.write(`<br><h2> @ ${patient.name} assigned to ${assignedDoctor.name} (${patient.diagnosis}) (${patient.emergengcyCase ? "Emergency Case Priority" : "Normal"}). Appointment = ${assignedDoctor.appointment} <br>`);
//         } else {
//             document.write(`<h2><br> > Slots Are Full For ${assignedDoctor.name}. ${patient.name} appointment rejected. <br>`);
//         }
//     });
// }

// bookAppoinment();

// Singaleton Object
// const google = {}
//     google.title = "Google",
//     google.url = "https://www.google.com",
//     google.description =  "Search Engine"
// console.log(google);

// //Object literal 
// const facebook = {
//     title: "Facebook",
//     url: "https://www.facebook.com",
//     description: "Social Media"
// }
// console.log(facebook);

const student = [
    {name: "ali", age: 23, marks: 458},
    {name: "ahmed", age: 25, marks: 345},
    {name: "sara", age: 22,  marks: 234}
]
// console.log(student);
const passedStudents = Object.groupBy(student, student => {
    return student.marks > 350 ? "passed" : "failed";
});

console.log(passedStudents);