document.addEventListener("DOMContentLoaded", () => Announce.init());

$(document).ready(function () {
  window.addEventListener("message", function (event) {
   if (event.data.type == "notification") {
      Notification.show(event.data.msg, event.data.duration);
    } else if (event.data.type == "announce") {
      Announce.show(event.data.msg, event.data.duration);
    }
  });
});


