$(document).ready(function(){
   
    $("a.mobile").click(function(){
        $(".sidebar").slideToggle('slow');
    });

    
$(document).ready(function(){

    $('#createPost').click(function(){
        $("#addPage").slideToggle("slow");
    });
    $("#close").click(function(){
        $("#addPage").slideToggle("slow");
    });
    $("#closeModal").click(function(){
        $("#addPage").slideToggle("slow");
    });

    
});

$(document).ready(function(){

    $('#createUser').click(function(){
        $("#addUser").slideToggle("slow");
    });
    $("#close").click(function(){
        $("#addUser").slideToggle("slow");
    });
    $("#closeModal").click(function(){
        $("#addUser").slideToggle("slow");
    });

    
});
