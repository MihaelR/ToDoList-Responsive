//check off todos by clicking
$("ul").on("click", "li", function(){         //run when clicked li inside ul
    //if li is grey turn it black
    if ($(this).css("color")==="rgb(128, 128, 128)"){
        $(this).css({
        color:"black",
        textDecoration:"none"
        });
    }
    //else turn it gray
    else{ 
        $(this).css({
        color:"gray",
        textDecoration:"line-through"
        });
    }
});

//click x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });                              //parent() removes(fades) whole li
    event.stopPropagation();            //stops bubble effect
});

//add new todo
$("input[type='text']").keypress(function(event){
    if(event.which===13){               //which===13, check if you press enter
    //new todo text from input
    var todoText = $(this).val();
    $(this).val("");                   //empty val when u click enter
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }

});

//plus sign
$(".fa-plus").click(function(){

    $("input[type='text']").fadeToggle();
});


