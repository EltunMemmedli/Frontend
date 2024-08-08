let sira = [];

for (let i = 0; i < 5; i++) {
    let user = {
        ID: prompt("ID daxil et:"),
        name: prompt("Adınızı daxil et:"),
        lastname: prompt("Soyadınızı daxil et:"),
        Department: prompt("Şöbə daxil et:"),
        Salary: prompt("Maaşı daxil et:")
    };
    
    if (user.Department === 'IT') { 
        sira.push(user); 
    }
}

console.log(sira);
