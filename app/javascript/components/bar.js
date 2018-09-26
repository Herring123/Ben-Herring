// on page load...
    // moveProgressBar();
    // // on browser resize...
    // $(window).resize(function() {
    //     moveProgressBar();
    // });

    // // SIGNATURE PROGRESS
    // function moveProgressBar() {
    //   console.log("moveProgressBar");
    //     var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    //     var getProgressWrapWidth = $('.progress-wrap').width();
    //     var progressTotal = getPercent * getProgressWrapWidth;
    //     var animationLength = 2500;

    //     // on page load, animate percentage bar to data percentage length
    //     // .stop() used to prevent animation queueing
    //     $('.progress-bar').stop().animate({
    //         left: progressTotal
    //     }, animationLength);
    // }
//   function bars(){
//      $('.progress-wrap').each(function(){
//     percent = $(this);
//     bar = $(this).children('.progress-bar');
//     moveProgressBar(percent, bar);
// });

//   // function bar(){
//   // on browser resize...
//   $(window).resize(function() {
//     $('.progress-wrap').each(function(){
//         percent = $(this);
//         bar = $(this).children('.progress-bar');
//         moveProgressBar(percent, bar);
//     });
//   });

//   // SIGNATURE PROGRESS
//   function moveProgressBar(percent, bar) {
//       var getPercent = (percent.data('progress-percent') / 100);
//       var getProgressWrapWidth = percent.width();
//       var progressTotal = getPercent * getProgressWrapWidth;
//       var animationLength = 1000;

//       // on page load, animate percentage bar to data percentage length
//       // .stop() used to prevent animation queueing
//       bar.stop().animate({
//           left: progressTotal
//       }, animationLength);
//   }
// }

// export {bars};
