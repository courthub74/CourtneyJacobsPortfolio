// Time to iterate through the 'centers' class for center class
// query all 'centers'
const centers = document.querySelectorAll('.centers');

// options for centers
const optionscenters = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

// observer for centers
const observercenters = new IntersectionObserver(function(entries, observercenters){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("center");
        // so it doesn't repeat
        observercenters.unobserve(entry.target)
    });
}, optionscenters);

// iterate through the circles and pass it through the observer for circles
centers.forEach(center => {
    observercenters.observe(center);
});


// Time to iterate through the 'tops' class for top class
// query all 'tops'
const tops = document.querySelectorAll('.tops');
console.log(tops);

// options for tops
const optionstops = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

// observer for tops
const observertops = new IntersectionObserver(function(entries, observertops){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("top");
        // so it doesn't repeat
        observertops.unobserve(entry.target)
    });
}, optionstops);

// iterate through the circles and pass it through the observer for circles
tops.forEach(top => {
    observertops.observe(top);
});

// Time to iterate through the 'lefts' class for top class
// query all 'lefts'
const lefts = document.querySelectorAll('.lefts');

// options for lefts
const optionlefts = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

// observer for lefts
const observerlefts = new IntersectionObserver(function(entries, observerlefts){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("left");
        // so it doesn't repeat
        observerlefts.unobserve(entry.target)
    });
}, optionlefts);

// iterate through the circles and pass it through the observer for circles
lefts.forEach(left => {
    observerlefts.observe(left);
});


// Time to iterate through the 'rights' class for top class
// query all 'rights'
const rights = document.querySelectorAll('.rights');

// options for rights
const optionrights = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

// observer for rights
const observerrights = new IntersectionObserver(function(entries, observerrights){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("right");
        // so it doesn't repeat
        observerrights.unobserve(entry.target)
    });
}, optionrights);

// iterate through the circles and pass it through the observer for circles
rights.forEach(right => {
    observerrights.observe(right);
});



// SOCIALS AND SKILLS
const observerleftone = new IntersectionObserver(function(entries, observerleftone){
    // The stuff
});