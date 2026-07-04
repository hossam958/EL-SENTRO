const cards = document.querySelectorAll('.basic, .standard, .vip');
const most =document.querySelector('.most');

const observer = new IntersectionObserver((card) => {
    card.forEach((cardan) => {
    if(cardan.isIntersecting){
        cardan.target.style.opacity="1";
    };
    });
});

    cards.forEach((ncard) => {
     observer.observe(ncard);
});
     observer.observe(most);