$(document).ready(function(){

    $(".cuadrado").hide()

    $(".button").on("click", function(e){
        let id = $(e.target).prop("id")
        $(".cuadrado").hide()    
        $("#div"+id).show()
    })

})