var todayDate= function(){
    var date = moment().format("MM-DD-YYYY");
    $("#currentDay").append(date.toString());
}

for (let i = 9; i <= 17; i++) {
    console.log(localStorage.getItem(i))
    $('#'+i).text(localStorage.getItem(i))
}

var passTimeColour = function() {
    $("textarea").each(function(){
        var currentEvent = $(this).attr("id");
        var currentTime = moment().hour();
        if (currentTime == currentEvent){
            $(this).css('background-color', '#ff6961')
        }else if(currentEvent < currentTime){
            $(this).css('background-color', '#d3d3d3')
        }else if(currentEvent > currentTime){
            $(this).css('background-color', '#77dd77')
        }
    })
}

var saving = function(){
    $(".saveBtn").click(function(event){
        console.log(event.target);
        hour = $(event.target).prev().attr("id")
        task = $(event.target).prev().val().trim()
        console.log("hour:", hour, 
                    "task:", task);
        
         localStorage.setItem(hour, task);
    });
}


todayDate();

passTimeColour();

saving();