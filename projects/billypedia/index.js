/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css('background-color', '#892da8');
        $('div').css('color', 'white' );
        $('div').css('font-family','georgia,serif');
        $('div').css('border-radius', '7px');
        $('div').css('padding', '5px');
        $('#section-praise').css('background-color', '#892da8');
        $('body').css('background-color', '#d674f7')
        $('#sidebar').css('background-color', 'b283c1');
        $('#image-container-billy').css('border', 'dashed').css('border-color', 'pink');
        $('#section-quotes').css('background-color','#892da8')
        $('#all-contents').css('background-color','pink');
        $('#sidebar').css('background-color','#ba7ab5');
        $('#heading').css('background-color', '#ba7ab5');
        $('nav').css('background-color', '#b71d8e');
        $('main').css('background-color', '#a04bbc');
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
     

        
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


