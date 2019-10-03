
// setting height for hero example.
var a = document.getElementById('image1');

    var b = a.height + 'px';


// different methods of initiating a slider
Scrub({
    target: '#slider1',
    height: b,
    handle: true,
    src: ['../HOMEPAGE.png','../HOMEPAGE_Target.png'],
    alt: ['Image number 1 alt','Image number 2 alt']
});

Scrub('#slider2');

Scrub({
    target: '.slider3',
    height: '800px'
});

// Scrub('nonexistent');
