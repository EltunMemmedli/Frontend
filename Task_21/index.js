
let users = [];

let count = parseInt(prompt("İstifadəçi sayını daxil edin: "), 10);

for (let i = 0; i < count; i++) {
    while (true) {
        let ID = prompt(`İstifadəçi ID-sini daxil edin (User ${i+1}): `);
        let name = prompt(`İstifadəçi adını daxil edin (User ${i+1}): `);
        let lastname = prompt(`İstifadəçi soyadını daxil edin (User ${i+1}): `);
        let age = prompt(`İstifadəçi yaşını daxil edin (User ${i+1}): `);
        let department = prompt(`Şöbənizi daxil edin (User ${i+1}): `);
        let salary = parseFloat(prompt(`Gəlirinizi daxil edin (User ${i+1}): `));

        // Validate inputs
        if (ID && name && lastname && age && department && !isNaN(salary)) {
            let user = {
                ID: ID,
                name: name,
                lastname: lastname,
                age: age,
                department: department,
                salary: salary
            };
            users.push(user); 
            break;
        } else {
            console.log("Məlumatlar tam deyil!");
        }
    }
}

function İstifadəçi() {
    let Filter_1 = parseFloat(prompt("Gəliri neçənin üstü olsun?: "));

    if (isNaN(Filter_1)) {
        console.log("Düzgün bir rəqəm daxil edin.");
        return;
    }

    for (let user of users) {
        if (user.salary >= Filter_1) {
            console.log(`User ID: ${user.ID}
            Name: ${user.name}
            Lastname: ${user.lastname}
            Age: ${user.age}
            Department: ${user.department}
            Salary: ${user.salary}`);
        }
    }
}

İstifadəçi();


function İstifadəçi_2() {
    let Filter_2 = parseFloat(prompt("Yasi neçənin üstü olsun?: "));

    if (isNaN(Filter_2)) {
        console.log("Düzgün bir rəqəm daxil edin.");
        return;
    }

    for (let user of users) {
        if (user.age >= Filter_2) {
            console.log(`User ID: ${user.ID}
            Name: ${user.name}
            Lastname: ${user.lastname}
            Age: ${user.age}
            Department: ${user.department}
            Salary: ${user.salary}`);
        }
    }
}

İstifadəçi_2();

