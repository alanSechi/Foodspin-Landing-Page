/*==========================================

DEFINITION OF VARIABLES AND OBJECTS

=============================================*/

const price = document.querySelector(".dish__description h2");
const name = document.querySelector(".dish__description h3");
const description = document.querySelector(".dish__description p");
const orderButton = document.querySelector(".dish__description button");
const dishes = document.querySelectorAll(".spinner__meal");
const turnRight = document.querySelector(".arrow__right");
const turnLeft = document.querySelector(".arrow__left");

const firstDish = {
    name: "Green Goddess Chicken Salad",
    description: "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
    price: "$32",
    bigImage: "assets/images/webp/dishOne.webp",
    smallImage: "assets/images/webp/dishOne.webp"
};

const secondDish = {
    name: "Asian Cucumber Salad",
    description: "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
    price: "$35",
    bigImage: "assets/images/webp/dishTwo.webp",
    smallImage: "assets/images/webp/dishTwo.webp"
};

const thirdDish = {
    name: "Green Goddess Chicken Salad",
    description: "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
    price: "$32",
    bigImage: "assets/images/webp/dishThree.webp",
    smallImage: "assets/images/webp/dishThree.webp"
};


// starting point of the content
let contentCounter = 0;

//boolean for colors control
let isOrange = true;

//define variables for spinning
let spin = 0.0;

//define the center for the elements on the spinner
const center = {
    x: parseFloat(getComputedStyle(dishes[0]).left), //take the distance from the left
    y: parseFloat(getComputedStyle(dishes[0]).top), ////take the distance from the top
};

// define the variables needed for positioning
let newAngle = 0.0;
let newX = 0.0;
let newY = 0.0;


/*=================================

START OF FUNCTIONS

===================================*/

//button right On click

turnRight.addEventListener("click", (event) => {
    contentCounter++;
    if (contentCounter == dishes.length) contentCounter = 0;

    spinRight();
    changeContent(contentCounter);
    contentAnimation();
    orangeGreenSwitch();
});

function spinRight() {
    const wheel = document.querySelector(".spinner__wheel");
    let slice = 45;
    spin += slice;
    wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
}

//button left on click

turnLeft.addEventListener("click", (event) => {
    if (contentCounter != 0) contentCounter--;
    else {
        contentCounter = dishes.length - 1;
    }
    spinLeft();
    contentAnimation();
    changeContent(contentCounter);
    orangeGreenSwitch();
});

function spinLeft() {
    const wheel = document.querySelector(".spinner__wheel");
    let slice = 45;
    spin -= slice;
    wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
}


// colors switcher background, price and buttons

function orangeGreenSwitch() {
    const container = document.querySelector(".spinner__background");
    if (isOrange == true) {
        container.classList.add("bg--green");
        turnRight.classList.add("btn--green");
        turnLeft.classList.add("btn--green");
        price.style.color = "#54bf29";
        orderButton.classList.add("btn--green");
        isOrange = false;
    } else {
        container.classList.remove("bg--green");
        turnRight.classList.remove("btn--green");
        turnLeft.classList.remove("btn--green");
        price.style.color = "#ff922c";
        orderButton.classList.remove("btn--green");
        isOrange = true;
    }

}

//content changer each case is a different dish  

function changeContent(contentCounter) {

    switch (contentCounter) {

        case 0:
            price.innerHTML = firstDish.price;
            name.innerHTML = firstDish.name;
            description.innerHTML = firstDish.description;
            mealImg.src = firstDish.smallImage;
            mealImg.alt = firstDish.name;
            isOrange = false;
            break;

        case 1:
            price.innerHTML = secondDish.price;
            name.innerHTML = secondDish.name;
            description.innerHTML = secondDish.description;
            mealImg.src = secondDish.smallImage;
            mealImg.alt = secondDish.name;
            isOrange = true;
            break;

        case 2:
            price.innerHTML = thirdDish.price;
            name.innerHTML = thirdDish.name;
            description.innerHTML = thirdDish.description;
            mealImg.src = thirdDish.smallImage;
            mealImg.alt = thirdDish.name;
            isOrange = false;
            break;

        case 3:
            price.innerHTML = firstDish.price;
            name.innerHTML = firstDish.name;
            description.innerHTML = firstDish.description;
            mealImg.src = firstDish.smallImage;
            mealImg.alt = firstDish.name;
            isOrange = false;
            break;

        case 4:
            price.innerHTML = secondDish.price;
            name.innerHTML = secondDish.name;
            description.innerHTML = secondDish.description;
            mealImg.src = secondDish.smallImage;
            mealImg.alt = secondDish.name;
            isOrange = true;
            break;

        case 5:
            price.innerHTML = thirdDish.price;
            name.innerHTML = thirdDish.name;
            description.innerHTML = thirdDish.description;
            mealImg.src = thirdDish.smallImage;
            mealImg.alt = thirdDish.name;
            isOrange = false;
            break;

        case 6:
            price.innerHTML = firstDish.price;
            name.innerHTML = firstDish.name;
            description.innerHTML = firstDish.description;
            mealImg.src = firstDish.smallImage;
            mealImg.alt = firstDish.name;
            isOrange = false;
            break;

        case 7:
            price.innerHTML = secondDish.price;
            name.innerHTML = secondDish.name;
            description.innerHTML = secondDish.description;
            mealImg.src = secondDish.smallImage;
            mealImg.alt = secondDish.name;
            isOrange = true;
            break;



    }

}

//animation of the content

function contentAnimation() {
    //Animation keyframes
    let dishAnimate = [
        { transform: "rotate(-45deg)" },
        { transform: "scale(0.5)" },
        { transform: "scale(1)" },
    ];

    let textAnimate = [
        { transform: "scale(1, 1)" },
        { transform: "scale(0.8, 0.8)" },
        { transform: "scale(0.5, 0.5)" },
        { transform: "scale(0.2, 0.5)" },
        { transform: "scale(0, 0)" },
        { transform: "scale(0.2, 0.5)" },
        { transform: "scale(0.5, 0.5)" },
        { transform: "scale(0.8, 0.8)" },
        { transform: "scale(1, 1)" },
    ];

    mealImg.animate(dishAnimate, 600);
    price.animate(textAnimate, 600);
    name.animate(textAnimate, 600);
    description.animate(textAnimate, 600);
    orderButton.animate(textAnimate, 600);
}

//positioning of the images on the wheel using trigonometry

dishes.forEach((dish, i) => {
    const angle = Math.PI / 4.0; //angle of 45 deg on the wheel
    const spinRadius = 280.0; //distance from the center

    newAngle = angle * i;
    nextX = Math.cos(newAngle) * spinRadius;
    nextY = -1.0 * Math.sin(newAngle) * spinRadius;

    dish.style.left = `${center.x + nextX}px`;
    dish.style.top = `${center.y + nextY}px`;

    //add the images of the dishes on the wheel
    dishesOnTheWheel(dish, i);
});



//Function that puts the images on the wheel

function dishesOnTheWheel(dish, i) {
    const images = [
        "url('assets/images/webp/dishOne.webp')",
        "url('assets/images/webp/dishTwo.webp')",
        "url('assets/images/webp/dishThree.webp')",
    ];
    switch (i) {
        case 0:
            dish.style.backgroundImage = images[1];
            break;

        case 1:
            dish.style.backgroundImage = images[2];
            break;

        case 2:
            dish.style.backgroundImage = images[0];
            break;

        case 3:
            dish.style.backgroundImage = images[1];
            break;

        case 4:
            dish.style.backgroundImage = images[2];
            break;

        case 5:
            dish.style.backgroundImage = images[0];
            break;

        case 6:
            dish.style.backgroundImage = images[1];
            break;

        case 7:
            dish.style.backgroundImage = images[2];
            break;


    }
}