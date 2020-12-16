/*


DEFINITION OF THE VARIABLES AND THE OBJECTS

*/

const price = document.querySelector(".dish__description h2");
const name = document.querySelector(".dish__description h3");
const description = document.querySelector(".dish__description p");
const orderNow = document.querySelector(".dish__description button");

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




//array index
let contentSelector = 0;

//boolean for colors control
let isOrange = true;

//define variables for spinning
let spin = 0.0;


/*

START OF FUNCTIONS

*/

//button right On click
const turnRight = document.querySelector(".arrow__right");
turnRight.addEventListener("click", (event) => {
    contentSelector++;
    if (contentSelector == dishes.length) contentSelector = 0;

    spinRight();
    changeContent(contentSelector);
    animateContent();
    changeColors();
});

//button left on click
const turnLeft = document.querySelector(".arrow__left");
turnLeft.addEventListener("click", (event) => {
    if (contentSelector != 0) contentSelector--;
    else {
        contentSelector = dishes.length - 1;
    }
    spinLeft();
    animateContent();
    changeContent(contentSelector);
    changeColors();
});

function spinRight() {
    const wheel = document.querySelector(".spinner__wheel");
    let slice = 45;
    spin += slice;
    wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
}

function spinLeft() {
    const wheel = document.querySelector(".spinner__wheel");
    let slice = 45;
    spin -= slice;
    wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
}

function changeColors() {
    const container = document.querySelector(".spinner__background");
    if (isOrange == true) {
        container.classList.add("bg--green");
        turnRight.classList.add("btn--green");
        turnLeft.classList.add("btn--green");
        price.style.color = "#54bf29";
        orderNow.classList.add("btn--green");
        isOrange = false;
    } else {
        container.classList.remove("bg--green");
        turnRight.classList.remove("btn--green");
        turnLeft.classList.remove("btn--green");
        price.style.color = "#ff922c";
        orderNow.classList.remove("btn--green");
        isOrange = true;
    }
}

function changeContent(contentSelector) {

    switch (contentSelector) {
        case 0:
        case 3:
            price.innerHTML = firstDish.price;
            name.innerHTML = firstDish.name;
            description.innerHTML = firstDish.description;
            mealImg.src = firstDish.smallImage;
            mealImg.alt = firstDish.name;
            break;
        case 1:
        case 4:
        case 6:
            price.innerHTML = secondDish.price;
            name.innerHTML = secondDish.name;
            description.innerHTML = secondDish.description;
            mealImg.src = secondDish.smallImage;
            mealImg.alt = secondDish.name;
            break;
        case 2:
        case 5:
        case 7:
        case 8:
            price.innerHTML = thirdDish.price;
            name.innerHTML = thirdDish.name;
            description.innerHTML = thirdDish.description;
            mealImg.src = thirdDish.smallImage;
            mealImg.alt = thirdDish.name;
            break;
    }
}

function animateContent() {
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

    mealImg.animate(dishAnimate, 500);
    price.animate(textAnimate, 500);
    name.animate(textAnimate, 500);
    description.animate(textAnimate, 500);
    orderNow.animate(textAnimate, 500);
}

const dishes = document.querySelectorAll(".spinner__meal");

//define the center for the elements on the spinner
const center = {
    x: parseFloat(getComputedStyle(dishes[0]).left), //take the distance from the left
    y: parseFloat(getComputedStyle(dishes[0]).top), ////take the distance from the top
};

// define the variables needed for positioning
let newAngle = 0.0;
let newX = 0.0;
let newY = 0.0;

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

function dishesOnTheWheel(dish, i) {
    const images = [
        "url('assets/images/webp/dishOne.webp')",
        "url('assets/images/webp/dishTwo.webp')",
        "url('assets/images/webp/dishThree.webp')",
    ];
    switch (i) {
        case 0:
        case 3:
        case 6:
            dish.style.backgroundImage = images[1];
            break;
        case 1:
        case 4:
        case 7:
            dish.style.backgroundImage = images[2];
            break;
        case 2:
        case 5:
        case 8:
            dish.style.backgroundImage = images[0];
            break;
    }
}