let user = {
    name : prompt("Adini Daxil et:"),
    lastname : prompt("Soyadini daxail et"),
    age : prompt("Yaini Daxil et:"),
    getYear : function (User_date){
        let Year = new Date().getFullYear(); 
        return Year - this.age;
    }

    

    

}

console.log("Doğum iliniz: " + user.getYear());