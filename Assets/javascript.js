//Do something
// Keep track of window width
let myWindowWidth = window.innerWidth;

window.addEventListener( 'resize', function(event) {

    // If width is the same, assume hiding address bar
    if( myWindowWidth == window.innerWidth ) {
         return;
    }

    // Update the window width
    myWindowWidth = window.innerWidth;

    // Do your thing
    // ...
});