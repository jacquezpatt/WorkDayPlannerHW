$(".saveBtn").on("click", function() {
var text = $(this).siblings("textarea").val();
var time =$(this).parent().attr("id");
localStorage.setItem(time, text);
});

var today = moment();

$("#textarea-9").val(localStorage.getItem(9));
$("#textarea-10").val(localStorage.getItem(10));
$("#textarea-11").val(localStorage.getItem(11));
$("#textarea-12").val(localStorage.getItem(12));
$("#textarea-13").val(localStorage.getItem(13));
$("#textarea-14").val(localStorage.getItem(14));
$("#textarea-15").val(localStorage.getItem(15));
$("#textarea-16").val(localStorage.getItem(16));
$("#textarea-17").val(localStorage.getItem(17));
$("#textarea-18").val(localStorage.getItem(18));
$("#textarea-19").val(localStorage.getItem(19));
$("#textarea-20").val(localStorage.getItem(20));
$("#textarea-21").val(localStorage.getItem(21));



$("#today").text(today.format("MMM Do, YYYY"));


