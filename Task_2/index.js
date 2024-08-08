var name_1 = prompt("Adinizi Daxil Edin:")
var lastname_1 = prompt("Soyadiniz Daxil Edin:")
var age_1 = prompt("Yadinizi Daxil Edin")
var name_2 = prompt("Adinizi Daxil Edin:")
var lastname_2 = prompt("Soyadiniz Daxil Edin:")
var age_2 = prompt("Yadinizi Daxil Edin")
var name_3 = prompt("Adinizi Daxil Edin:")
var lastname_3 = prompt("Soyadiniz Daxil Edin:")
var age_3 = prompt("Yadinizi Daxil Edin")


let users = [
    [name_1, lastname_1, age_1],
    [name_2, lastname_2, age_2],
    [name_3, lastname_3, age_3]
]

 for (j=0; j<users.length; j++){
     for(k=0; k<users[j].length; k++){
         if(users[k][2]>users[k+1][2] && users[k][2]>users[k+1][2]){
                 console.log(users[k][2])
         }

         else if(users[k+1][2]>users[k][2] && users[k+1][2]>users[k+2][2]){
             console.log(users[k+1][2])
         }
        else{
             console.log(users[k+2][2])
         }
     } 
 }


 




