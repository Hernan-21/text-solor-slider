
$( "#uislider" ).slider({
    range: "max",
    min: 1,
    max: 15,
    value: 1,
    slide: function( event, ui ) {
    $( "#idnumber" ).val( ui.value );
    if( ui.value >= 1 && ui.value <= 5 ) {
        $('.color').css("background-color" , 'green');
        $('body').css("background-color" , '#1e1c34');
    }
    if(ui.value >= 5 && ui.value <= 10 ) {
        $('.color').css("background-color" , 'orange');
        $('body').css("background-color" , '#121127');
    }
    if( ui.value >= 11 && ui.value <= 15 ) {
        $('.color').css("background-color" , 'red')
        $('body').css("background-color" , '#0a0821');
    }
    }
  });
  
  
  $( "#idnumber" ).val( $( "#uislider" ).slider( "value" ) );
  
  
  