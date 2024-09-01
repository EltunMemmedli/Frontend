let Card = `
<li class="cards">
    <div class="div">
        <input type="text" class="head" placeholder="Konteyner adını daxil edin:">

        <button class="Round_2">

        </button>
    </div>
    <button class="Button_2">
        <p>+</p>
    </button>



</li> 

        
`;

    



document.getElementsByClassName("Button")[0].addEventListener("click", function(){
    let container = document.getElementsByClassName("main_container")[0];
    container.insertAdjacentHTML('beforeend', Card)
    updateRound_2Buttons();

    // "Round" düymələrinə event listener əlavə edən funksiya
    function updateRound_2Buttons() {
        let roundButtons_2 = document.getElementsByClassName("Round_2");
        Array.from(roundButtons_2).forEach(button => {
            button.removeEventListener("click", removeText); // Dəfələrlə listener əlavə olunmasının qarşısını almaq üçün əvvəlcə listeneri sil
            button.addEventListener("click", removeText);
        });
    }

    // "text" divini silən funksiyanı təyin edin
    function removeText() {
        let parentText = this.closest(".cards");
        if (parentText) {
            parentText.remove();
        }
    }
    
    let Button = document.getElementsByClassName("Button")[0];
    document.getElementsByClassName("main_container")[0].appendChild(Button);

    


    let cards = document.getElementsByClassName("cards");
    let lastCard = cards[cards.length - 1];


    let Button_3 = document.getElementsByClassName("Button_2");
    let last_button = Button_3[Button_3.length - 1];


    // let button = lastCard.getElementsByClassName("Button_2");


    // Hər dəfə "Button_2" basıldığında yeni bir "Properties" əlavə et
    lastCard.querySelector(".Button_2").addEventListener("click", function(){
        last_button.insertAdjacentHTML('beforebegin', Properties);
        updateRoundButtons();
    });


    let Button_2 = document.getElementsByClassName("Button_2")[0];
    document.getElementsByClassName("cards")[0].appendChild(Button_2);
});

let Properties = `
<div class="text">

    <div class = "Soz">
        <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        
        <button class = "Round">

        </button>
    </div>

    <div class="img">
        <img src="justify.png" alt="" style="margin-right: 15px;">
        <img src="checkbox.png" alt="">
        <p>4/8</p>
        <img src="attach.png" alt="">
        <p>2</p>
        <img src="comments.png" alt="">
        <p style="margin: 0 20px 0 5px;">4</p>
        <img src="man_1.png" alt="" style="width: 40px; height: 40px; margin-top: -10px;">
   
    </div>
</div>`;


// "Round" düymələrinə event listener əlavə edən funksiya
function updateRoundButtons() {
    let roundButtons = document.getElementsByClassName("Round");
    Array.from(roundButtons).forEach(button => {
        button.removeEventListener("click", removeText); // Dəfələrlə listener əlavə olunmasının qarşısını almaq üçün əvvəlcə listeneri sil
        button.addEventListener("click", removeText);
    });
}

// "text" divini silən funksiyanı təyin edin
function removeText() {
    let parentText = this.closest(".text");
    if (parentText) {
        parentText.remove();
    }
}