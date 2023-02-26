// create the intersection observer function
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('section');
        } else {
            entry.target.classList.remove('section');
        }
    });
});

// Query select each section
const sections = document.querySelectorAll('.section');
// Loop through the sections
sections.forEach((el) => observer.observe(el)); 

