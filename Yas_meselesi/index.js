let ages = parseInt(prompt("Write your age: "));

switch (true) {
    case (ages < 18):
        console.log("You are a kid");
        break;

    case (ages >= 18 && ages <= 30):
        console.log("You are a teenager");
        break;

    case (ages > 30 && ages <= 60):
        console.log("You are an adult");
        break;
    
    case (ages > 60):
        console.log("You are old");
        break;

    default:
        console.log("Invalid input");
        break;
}
