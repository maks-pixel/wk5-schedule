var event = [];

var todayDate= function(){
    var date = moment().format("MM-DD-YYYY");
    $("#currentDay").append(date.toString());
}



var passTimeColour = function() {
    $('.row').each(function(){
        var currentEvent = $(this).attr("id");
        var currentTime = moment().hour();
        if (currentTime == currentEvent){
            $(this).css('background-color', 'red')
        }else if(currentEvent < currentTime){
            $(this).css('background-color', 'grey')
        }else if(currentEvent > currentTime){
            $(this).css('background-color', 'green')
        }
    })
}



todayDate();

passTimeColour();