$(document).ready(function() {
    $('#fullpage').fullpage({
    	anchors: ['news', 'services', 'artists', 'about', 'contact'],
    	menu: '#menu',
    	resize: true, // resize text when window is resized
    	navigation: true,
    	navigationPosition: 'right'
    }); // end fullpage
});
