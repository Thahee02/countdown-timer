$("document").ready(function () {
  $("#startBtn").click(function () {
    function countdownTimer() {
      // Today Date
      let currentDate = new Date();

      // Seperate Date
      let getDate = $("#inputDate").val();
      let inputYear = new Date(getDate).getFullYear();
      let inputDate = new Date(getDate).getDate();
      let inputMonth = new Date(getDate).getMonth();
      inputMonth += 1;

      let expectDate = new Date(`${inputMonth} ${inputDate} ${inputYear}`);

      // Seperate Dates
      seperateSecons = expectDate - currentDate;

      outDay = Math.floor(seperateSecons / 1000 / 60 / 60 / 24);
      outHour = Math.floor((seperateSecons / 1000 / 60 / 60) % 24);
      outMin = Math.floor((seperateSecons / 1000 / 60) % 60);
      outSec = Math.floor((seperateSecons / 1000) % 60);

      outDay = outDay < 10 ? "0" + outDay : outDay;
      outHour = outHour < 10 ? "0" + outHour : outHour;
      outMin = outMin < 10 ? "0" + outMin : outMin;
      outSec = outSec < 10 ? "0" + outSec : outSec;

      if(outSec > 0){
        $(".separator").addClass("animate-pulse");

        // set Timer Elements
        $("#days").text(outDay);
        $("#hours").text(outHour);
        $("#minutes").text(outMin);
        $("#seconds").text(outSec);
      }   
      else{
        $('#days').text('00');
        $('#hours').text('00');
        $('#minutes').text('00');
        $('#seconds').text('00');
      }   
    }

    setInterval(countdownTimer, 1000);


    // if ((inputDate.val() + 1) > (currentDate.getDate())) {
    //   setInterval(countdownTimer, 1000);
    // } else {
    //   alert("Enter a valid date");
    // }
  });

  //   $("#stopBtn").click(function () {
  //     // set Timer Elements
  //     $('#days').text('00');
  //     $('#hours').text('00');
  //     $('#minutes').text('00');
  //     $('#seconds').text('00');
  //   });
});

// 1000ms = 1s
// 60s = 1m
// 60m = 1h
// 24h = 1d
