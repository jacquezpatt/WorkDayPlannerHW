var timeEl = $("#currentDay");
var currentTime;
clockUpdater();
loadData();
var clock = setInterval(clockUpdater, 1000)


function clockUpdater(){
    currentTime = moment();
    timeEl.text(currentTime);
    checkTimeBlock();
}
function checkTimeBlock(){
    var currentHour = currentTime.hours();
    var timeBlock = $(".time-block");
    for(var i = 0; i < timeBlock.length; i++){
        var block = timeBlock[i];
        if(parseInt(block.id.split("-")[0]) < currentHour){
            $(block).addClass("past");
        }
        else if(parseInt(block.id.split("-")[0]) === currentHour){
            $(block).removeClass("past");
            $(block).addClass("present");
        }
        else{
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
}
$(".saveBtn").on("click", saveClick);
function saveClick(event){
    var text = $(event.target).siblings(".description").val();
    var time = $(event.target).parent().attr("id");

    if(text === "")
        alert("Type text into the field to save it on the calendar")
    else{
        localStorage.setItem(time, text);
        alert("Task has been saved");
    }

}
function loadData(){ 
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
    $('#18 .description').val(localStorage.getItem('18'));
    $('#19 .description').val(localStorage.getItem('19'));
    $('#20 .description').val(localStorage.getItem('20'));
    $('#21 .description').val(localStorage.getItem('21'));
}