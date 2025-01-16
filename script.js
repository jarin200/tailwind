let currentIndex = 0;
const items =document.querySelectorAll('.reviews-carousel');

function showSlide (index){
    
    items.forEach((item, i)=>{
        item.classList.remove('active');
        if(index === i){
            item.classList.add('active');
        }
    })
    document.querySelector('.carousel-inner').style.transform = 
    `translateX(-${index * 100}%)`;
};
function prevSlide(){
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}
function nextSlide(){
    currentIndex = (currentIndex +1) % items.length
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);






















// let currentIndex = 0;
// const items = document.querySelectorAll('.reviews-carousel');

// function showSlide(index) {
//     items.forEach((item, i) => {
//         item.classList.remove('active');
//         if (i === index) {
//             item.classList.add('active');
//         }
//     });
//     document.querySelector('.carousel-inner').Style.transform = 
//     `translateX(-${index * 100}%)`;
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % items.length;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + items.length) % items.length;
//     showSlide(currentIndex);
// }

// // Automatic slide every 5 seconds
// setInterval(nextSlide, 1000);