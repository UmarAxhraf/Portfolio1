// /* global bootstrap: false */

// (function () {
//   "use strict";

//   // Tooltip and popover demos
//   document.querySelectorAll(".tooltip-demo").forEach(function (tooltip) {
//     new bootstrap.Tooltip(tooltip, {
//       selector: '[data-bs-toggle="tooltip"]',
//     });
//   });

//   document
//     .querySelectorAll('[data-bs-toggle="popover"]')
//     .forEach(function (popover) {
//       new bootstrap.Popover(popover);
//     });

//   document.querySelectorAll(".toast").forEach(function (toastNode) {
//     var toast = new bootstrap.Toast(toastNode, {
//       autohide: false,
//     });

//     toast.show();
//   });
// })();

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

$(".animated-progress span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    1000
  );
  $(this).text($(this).attr("data-progress") + "%");
});
