$(document).ready(function(){

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    });

    $('#slidetoggle button').click(function(){
        $('#slidetoggle p').slideToggle();
    });
    // put your code for the remaining functions below

    $('#append button').click(function(){
        $('#append p').append(" I just added this.");
    });

    $('#click button').click(function(){
        alert("Handler for .click() called.");
    });

    $('#hide button').click(function(){
        $('#hide p').hide();
    });
    $('#hide #show').click(function(){
        $('#hide p').show();
    });
    $('#toggle button').click(function(){
        $('#toggle p').toggle();
    });
    $('#slidedown button').click(function(){
        $('#slidedown p').slideDown("slow");
    });

    $('#slideup button').click(function(){
        $('#slideup p').slideUp();
    });

    $('#fadein button').click(function(){
        $('#fadein p').fadeIn('slow');
    });

    $('#fadeout button').click(function(){
        $('#fadeout p').fadeOut();
    });

    $('#before button').click(function(){
        $('#before p').before('this comes before all.');
    });

    $('#after button').click(function(){
        $('#after p').after('I forgot to include this.');
    });

    $('#html button').click(function(){
        $('#html p').html('<h1>I just replaced the contents. This is now an h1 tag.</h1>');
    });

    $('#text button').click(function(){
        $('#text p').text('I just changed the text only.');
    });

    $('#attribute button').click(function(){
        var alink = $('#link').attr('href');
        $('#attribute p').text(alink);
    });

    $('#value button').click(function(){
        $('input').val('I just changed the text only.');
    });













});