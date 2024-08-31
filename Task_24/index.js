let Card = `
<li class="cards">
    <div class="div">
        <input type="text" class="head" placeholder="Konteyner adını daxil edin:">
    </div>
    <button class="Button_2">
        <p>+</p>
    </button>
</li>`;

document.getElementsByClassName("Button")[0].addEventListener("click", function(){

    let container = document.getElementsByClassName("main_container")[0];
    

    container.insertAdjacentHTML('beforeend', Card);


    let cards = document.getElementsByClassName("cards");
    let lastCard = cards[cards.length - 1];

    
    lastCard.querySelector(".Button_2").addEventListener("click", function(){
        lastCard.insertAdjacentHTML('beforeend', Properties);
    });
});

let Properties = `
<div class="text">
    <p class="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
