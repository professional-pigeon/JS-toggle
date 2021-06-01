$(document).ready(function() {
  $("button#modeSwitch").click(function() {
    $("div.box1").removeClass();
    $("body").addClass("darkMode")
    $("div#num3").addClass("darkBox1");
  });
});
