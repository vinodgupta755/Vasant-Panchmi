
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showNextSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    // Change slide every 3 seconds
    setInterval(showNextSlide, 3000);

    // Play Background Music Automatically
    const bgMusic = document.getElementById("bg-music");
    document.body.addEventListener("click", () => {
        bgMusic.play();
    });
});
