let users = [];

let userCount = prompt("Please insert tho count of users:")


for(let i = 0; i < userCount; i++) {

    while(true) {

        let user_name = prompt(`Please insert your name (User ${i+1}):`);
        let user_lastname = prompt(`Please insert your lastname (User ${i+1}):`);
        let user_age = prompt(`Please insert your age (User ${i+1}):`);


        const nameRegex = /^[a-zA-Z]+$/;
        const ageRegex = /^\d+$/;

    
        if(user_name && user_lastname && user_age) {
            users[i] = [user_name, user_lastname, user_age];
            break;
        }
    }

}

console.log(users);


for (let i = 0; i < users.length; i++) {

    let counter = 0;

    console.log(`User ${i+1}:
                    Name: ${users[i][counter++]} 
                    Lastname: ${users[i][counter++]}
                    Age: ${users[i][counter++]}
                `);
}






let greater_age = 0;

for (let i = 0; i < users.length; i++) {
    
    if (greater_age < users[i][2]) {
        greater_age = users[i][2];
    }
}

console.log("The greater age is: " + greater_age);






let lower_age = users[0][2];

for (let i = 0; i < users.length; i++) {
    
    if (lower_age > users[i][2]) {
        lower_age = users[i][2];
    }
}

console.log("The lower age is: " + lower_age);






for (let i = 0; i < users.length; i++) {

    let counter = 0;

    console.log(`User ${i+1}:
                    Name: ${users[i][counter++]} 
                    Lastname: ${users[i][counter++]}
                    Age: ${users[i][counter++]},
                    Life stages: ${(users[i][2] < 18) ? "Kid" : (users[i][2] < 30) ? "Adult" : "Old"}
                `);
}