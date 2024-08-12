document.getElementById("myForm").addEventListener("submit", function(submit){

    submit.preventDefault();


    const name = document.getElementById("name").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const repeat_Pass = document.getElementById("Repeat_Pass").value;


    if (name === '' || email === '' || password === '' || repeat_Pass === '') {
        alert('Bütün sahələri doldurun!');
        return;
    }


    if (password !== repeat_Pass) {
        alert('Şifrələr uyğun deyil!');
        return;
    }


    while (true) {
        const userConfirmed = confirm("Məlumatları göndərmək istəyirsiniz?");
        if (userConfirmed) {
        
            console.log("Ad:", name);
            console.log("Email:", email);
            console.log("Şifrə:", password);
            console.log('Şifrəni Təkrar Daxil Edin:', repeat_Pass);
            break; 
        } else {
         
            alert("Məlumatlar göndərilmədi. Təkrar yoxlayın.");
            
        }
    }
});