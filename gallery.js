let slideIndex = 0; // Initialize slideIndex

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let captions = document.getElementsByClassName("caption");

    // Hide all slides and captions
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captions[i].style.display = "none";
    }

    // Increment slideIndex and reset if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and caption
    slides[slideIndex - 1].style.display = "block";
    captions[slideIndex - 1].style.display = "block";

    // Call showSlides() again after 5 seconds
    setTimeout(showSlides, 1000); // Change slide every 5 seconds
}

// Call showSlides() initially
showSlides();
