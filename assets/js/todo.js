//check off todos by clicking
$("li").click(function(){
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
$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });          //parent() removes(fades) whole li
    event.stopPropagation();            //stops bubble effect
});