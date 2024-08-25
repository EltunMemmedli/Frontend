document.getElementsByClassName("Button")[0].addEventListener("click", function() {
   
    document.getElementsByClassName("cards")[0].style.cssText = "display : block; margin-top : 20px; " ;


    let paragraf = document.getElementsByClassName("head")[0];
    

    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Konteynerə ad verin...";
    nameInput.style.cssText = "margin-top: 10px; margin-bottom: 10px; width : 100%; padding-top : 10px; border : 0px solid white";

  
    paragraf.replaceWith(nameInput);

    document.getElementsByClassName("Button_2")[0].addEventListener("click", function(){
        document.getElementsByClassName("text")[0].style.cssText = "display : block; margin-top : 10px" ;

         
   
        let button = document.getElementsByClassName("Button_2")[0];

        
        document.getElementsByClassName("cards")[0].appendChild(button);
    })

 
   
    let button = document.getElementsByClassName("Button")[0];

    
    document.getElementsByClassName("main_container")[0].appendChild(button);



});