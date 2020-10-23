$( document ).ready(function() {
    console.log( "worked" );
    $(input[name="cust_nationalID"]).click(function(){
        $(this).prop('type', 'date');

    });
    console.log( "worked" );
});
