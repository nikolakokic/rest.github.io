const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    navLinks.forEach((el) => {
        el.addEventListener("click", function () {
            navLinks.forEach((ell) => ell.classList.remove("active"));
            this.classList.add("active");
        });
    });

    /* Toggle Nav */
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        /* Burger Animation */
        burger.classList.toggle("toggle");
    });
};
navSlide();

/* SLIDER */
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const container = document.querySelector(".background-img")
let counter = 0

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
    if (counter === 2) {
        counter = -1
    }
    counter++;
    container.style.backgroundImage = `url(img/rest-${counter}.jpg)`

}

function prevSlide() {
    if (counter === 0) {
        counter = 3
    }
    counter--;

    container.style.backgroundImage = `url(img/rest-${counter}.jpg)`
}

const dot = document.querySelectorAll('.dot')

dot.forEach((el, index) => {
    el.addEventListener("click", function () {
        dot.forEach((ell) => ell.classList.remove("used"))
        this.classList.add('used')
    })
})

/* DOTS SLIDER */

const dotZero = document.querySelector('.dot-zero')
const dotOne = document.querySelector('.dot-one')
const dotTwo = document.querySelector('.dot-two')


dotZero.addEventListener('click', dotZeroFun);
function dotZeroFun() {
    container.style.backgroundImage = `url(img/rest-0.jpg)`
}

dotOne.addEventListener('click', myFun);

function myFun() {
    container.style.backgroundImage = `url(img/rest-1.jpg)`
}

dotTwo.addEventListener('click', dotTwoFun);

function dotTwoFun() {
    container.style.backgroundImage = `url(img/rest-2.jpg)`
}


/* MODAL */

const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active-modal')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal === null) return
    modal.classList.add('active-modal')
    overlay.classList.add('active-overlay')
}

function closeModal(modal) {
    if (modal === null) return
    modal.classList.remove('active-modal')
    overlay.classList.remove('active-overlay')
}

/* FEATURED SECTION */

const slider = document.querySelector('.featured-slider')
const buttons = document.querySelectorAll('.controls li')




buttons.forEach((indicator, ind) => {
    indicator.addEventListener('click', () => {
        document.querySelector('.controls .selected').classList.remove("selected")
        indicator.classList.add("selected")
        slider.style.transform = 'translate(' + (ind) * -25 + '%)';
    })
})

const sectionIndex = 0

/* FEATURED SECTION LIKE BUTTON */

const svg = document.querySelectorAll('.icon');
const number = document.querySelectorAll('#number')



svg.forEach(el => {
    el.addEventListener('click', function (e) {
        const id = e.currentTarget;

        if (id) {
            this.classList.toggle('is-selected')


        }
        if (el.classList.contains('is-selected')) {
            number.forEach(el => {
                el.innerHTML++
            })

        } else {
            number.forEach(el => {
                el.innerHTML--
            })
        }


    })
})




/* if (id.classList.contains('is-selected')) {
    const value = number.innerHTML++
} else {
    const value = number.innerHTML--
} */

