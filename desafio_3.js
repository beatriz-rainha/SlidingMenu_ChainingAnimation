// JavaScript Document
//Beatriz_Rainha_up201808104
//desafio_3: criar um sliding menu & chaining animation

console.log ("it's alive");


//check for page ready
$( document ).ready(function() {
	init();
})

function init() {
	console.log("jQuery ready and fully loaded");
}




//função que define o hide/show (slide) do menu quando clica o rato no simbolo do menu
function myToggle() {
	console.log("running mytoggle");
	
    $('.menuHide').toggleClass('show');
    $('.menuTab').toggleClass('active');
}

$('.menuTab').on('click', myToggle);




//função que define o toggle do menu
$('a').on('click', function () {
	console.log ("running click");
	
  $("p").each(function(index, element) {
    if ( $( this ).is("#one") ) {
	$(element).slideToggle(1000);
    } 
	if ( $( this ).is("#two") ){
		$(element).delay(2000).slideToggle(1000);
	} 
	if ( $( this ).is("#three") ){
		$(element).delay(4000).slideToggle(1000);
	}
  });
});




