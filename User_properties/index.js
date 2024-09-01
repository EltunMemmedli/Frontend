let users = []

let count = prompt("Neçə istifadəçi daxil etmək istəyirsiniz?: ")

for (let i = 0; i < count; i++) {
    
    while(true){

        let user_name = prompt(`Please insert your name (User ${i+1}):`);
        let user_surname = prompt(`Please insert your surname (User ${i+1}):`);
        let user_age = prompt(`Please insert your age (User ${i+1}):`);


        if(user_name && user_surname && parseInt(user_age)){

            users[i] = [user_name, user_surname, user_age]
            break

        }
    }
     
}



for (let i = 0; i < users.length; i++) {

    let counter = 0;

    console.log(`User ${i+1}:
                    Name: ${users[i][counter++]} 
                    Lastname: ${users[i][counter++]}
                    Age: ${users[i][counter++]}
                    Life stages: ${(users[i][2] < 18) ? "Kid" : (users[i][2] < 30) ? "Adult" : "Old"}
                `);
}




//Task 1
let greater_age = 0

for (let i = 0; i < count; i++) {
    
    if(greater_age < users[i][2]){
        greater_age = users[i][2]
    }
    
    
}

console.log(`Greater_age: ${greater_age}`)





//Task 2
let lower_age = users[0][2]

for (let i = 0; i < count; i++) {
    
    if(lower_age > users[i][2]){
        lower_age = users[i][2]
    }

}

console.log(`Lower_age: ${lower_age}`)




