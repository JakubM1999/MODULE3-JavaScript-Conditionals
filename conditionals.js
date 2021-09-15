

//---------Objects in arrays---------//

const arrayOfPeople = [
    {
        name:"Lewes Rallings",
        dateOfBirth: new Date(1974-07-09),
        children:5,
        country:"Afganistan",
        knowsProgramming:false
    },
    {
        name:"Vitia Doohey",
        dateOfBirth:new Date(1998-9-18),
        children:3,
        country:"China",
        knowsProgramming:false
    },
    {
        name:"Marlin Kroneev",
        dateOfBirth:(1,18,1995),
        children:5,
        country:"China",
        knowsProgramming:false
    },
    {
        name:"Fallon Canto",
        dateOfBirth:new Date(1999-11-04),
        children:4,
        country:"China",
        knowsProgramming:true
    },
    {
        name:"Sven Bonas",
        dateOfBirth:new Date(1993-09-30),
        children:5,
        country:"Laos",
        knowsProgramming:false
    }
]


//--------- Age Calculator ---------//

/* first we could find out exactly how old are these people so we know
who is older.      (We don't have to, but I think that it let's you to be sure
                    who is older.)
After calculation now I know that:
Lewes is 46 years old
Vitia is 22 years old
Marlin is 26 years old
Fallon is 22 years old
Sven is 28 years old*/

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1974, 09, 07))) //<--- You can change date of the person here to se they age// 

//-----------Questions-------------//

// 1.Is the first person older than the last person?
const ageOfLewes = arrayOfPeople[0].dateOfBirth;
const ageOfSven = arrayOfPeople[4].dateOfBirth;


console.log("Is Lewes older than Sven? ", (ageOfLewes > ageOfSven)?"Yes":"No")

// 2.Does 2nd person have the same amount of children as the 3rd?
const sameAmountOfKidsVitia = arrayOfPeople[1].children
const sameAmountOfKidsMarlin = arrayOfPeople[2].children

console.log("Does Vitia and Marlin have same amout of kids? ", (sameAmountOfKidsVitia === sameAmountOfKidsMarlin)?"Yes":"No")


// 3. Create a statement that checks if the 1st person and the 4th person both know how to program.
const konwsProgrammingLewes = arrayOfPeople[0].knowsProgramming
const knowsProgrammingFallon = arrayOfPeople[3].knowsProgramming

if (konwsProgrammingLewes === knowsProgrammingFallon){
    console.log("Yay!");
} else {
    console.log("LMGTFY")
}

// 4.Create a statement that checks the 2nd person for their nationality.
const vitiaIsFrom = arrayOfPeople[1].country;

switch(vitiaIsFrom) {
    case "Iceland":
        console.log("hæ")
    break;
    case "Spain":
        console.log("Hola")
    break;
    case "Korea":
        console.log("여보세요")
    break;
    case "China":
        console.log("Hello")
    break;
}

// 5.Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.
const nameLengthVitia = arrayOfPeople[1].name.length;

const result = (nameLengthVitia === 5) ? 'Less than 5 letters' : 'More than 5 letters';

console.log(result);
