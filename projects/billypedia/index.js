/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
         $('#section-bio').css('background','linear-gradient(to bottom right, #ff9999 28%, #cc0099 100%');
        $('div').css('color', 'white' );
        $('div').css('font-family','georgia,serif');
        $('div').css('border-radius', '2px');
        $('div').css('padding', '2px');
        $('#section-praise').css('background', 'linear-gradient(to top right, #ff9999 28%, #cc0099 100%');
        $('body').css('background', 'linear-gradient(to bottom, #ff9999 0%, #9900cc 100%');
        $('#sidebar').css('background', 'linear-gradient(to top left, #ff99ff 52%, #990099 82%');
        $('#section-quotes').css('background', 'linear-gradient(to bottom left, #ff9999 28%, #cc0099 100%');
        $('#all-contents').css('background-color','pink');
        $('#sidebar').css('background-color','#ba7ab5');
        $('#heading').css('background-color', '#ba7ab5');
        $('nav').css('background', 'linear-gradient(to top, #cc99ff 28%, #ff66cc 100%');
        $('main').css('background','linear-gradient(to bottom right, #ffccff 40%, #cc0099 82%');
        
        $('h2').css('color','purple');
        $('h2').css('text-align', 'center');
       
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        
        //Creating Top Records section//
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            let $topRated = $('<li>').attr('class', 'list-top-rated').text(recording.title);
            
            $topRated.appendTo('#list-top-rated');
            $topRated.append($('<li>').text(recording.year).css('list-style-position', 'inside'));
        });
        
        
        //creates recordings recordsSection//
         var $recordsSection =$('<section>').addClass('recordings').attr('id', 'recordsSection');
        $('#sidebar').append($recordsSection);
        
        function makeList(content){
            var $list = $('<ul>');
            _.forEach(content, function(recording){
                $('<li>').text(recording.title).attr('class', 'title').appendTo($list);
                $('<li>').text('Artist: ' + recording.artist).attr('class', 'artist').appendTo($list);
                 $('<li>').text('Release: ' + recording.release).attr('class', 'release').appendTo($list);
                 $('<li>').text("Year: " + recording.year).attr('class', 'year').appendTo($list);
            });
            return $list;
        }
     
    
        
      
      
      
       var recordings = data.discography.recordings;
        $('#sidebar').append(makeList(recordings));
        
       //indenting//
      $('.artist').css('list-style-position' ,"inside");
        $('.release').css('list-style-position' ,"inside");
        $('.year').css('list-style-position' ,"inside");
        
        
     
      //attaches pics to top rated and general recordings//
      $('#section-top-rated').prepend($('<img>').attr('src', 'images/album/voice-in-the-night.jpg').attr('id', 'top-rated-img'));
      $('#recordsSection').prepend($('<img>').attr('src','images/album/eastern-rebellion.jpg').attr('id', 'recordings-img'));
      
      
      //changes billy pic on click//
      $('#image-container').css('min-height', '360px');
      $('#image-container').css('min-width', '25%');
    
        let counter = 0;
        $( '#image-billy').click(function() {
            counter++;
            if(counter === 4){
                counter = 0;
            }
            $('#image-billy').fadeOut(0);
          $('#image-billy').attr('src', data.images.billy[counter]).css('border', 'dashed').css('border-top-color', '#aa60ea').css('border-bottom-color', '#d775ef')
          .css('border-left-color', '#ed34a0').css('border-right-color', '#7134bc');
          $('#image-billy').fadeIn();
        });
        
        
        //gave id to top rated list//
        $('#list-top-rated li').each(function(i){
            $(this).attr('id', 'ltr'+(i+1));
        });
       
        
        //change picture top rated pic on click//
     $( '#ltr1').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[0].art);   
          });  
          
        
      $( '#ltr3').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[1].art);   
          });   
          
   $( '#ltr5').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[2].art);   
          });   
    
     $( '#ltr7').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[3].art);   
          });      
        
     $( '#ltr9').click(function() {
        $('#top-rated-img').attr('src' , data.discography.topRated[4].art);   
          });    
          
          
        
        //gave id to recordings title list (added class earlier)//
        $('.title').each(function(i){
            $(this).attr('id', 'rec'+(i+1));
        });
          
          
    //adding pic for clicks//
    
     $( '#rec1').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[0].art);   
          });  
          
        
      $( '#rec2').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[1].art);   
          });   
          
   $( '#rec3').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[2].art);   
          });   
    
     $( '#rec4').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[3].art);   
          });      
        
     $( '#rec5').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[4].art);   
          });   
          
    $( '#rec6').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[5].art);   
          });     
 
    $( '#rec7').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[6].art);   
          });      
   
    $( '#rec8').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[7].art);   
          });
          
    $( '#rec9').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[8].art);   
          });
        
     $( '#rec10').click(function() {
        $('#recordings-img').attr('src' , data.discography.recordings[9].art);   
          });  
          
          
          
          //table
var riderStuff = data.rider;      
var createTable = function(riderStuff){
    var createRow = function(object){
        var $row = $("<tr>");
        var $instrument = $("<td>").text(object.type);
        var $description = $("<td>").text(object.desc);
        $row.append($instrument);
        $row.append($description);
        return $row;
    };
    var $table = $("<table>");
    var $rows = riderStuff.map(createRow);
    $table.append($rows);
    return $table;
};        
createTable(riderStuff).appendTo("#sidebar").attr('id','rider'); 
$('#rider').css('border','double');
$('#rider').css('color', '#a60a5a');
$('#rider').prepend($('<h4>').text('Billy\'s Rider').attr('id','riderHeader')).prepend($('#rider'));

          
$('h3').css('color', '#65053f').css('text-align', 'center');     
          
  $('#section-bio').css('color', '#703e57'); 
   $('#section-praise').css('color', '#703e57');  
    $('#quotes').css('color', '#703e57');         
          
        
        
    $('#riderHeader').css('text-align', 'center');  
    $('#header-top-rated').css('color', '#65053');
        
      $('#header-top-rated').css('color', '#65053f');
        
          
          
          
          
        // YOUR CODE ABOVE HERE //
     
     
     
    

      
    })
    
    
    .fail(function() { console.log('getJSON on discography failed!'); });
});


