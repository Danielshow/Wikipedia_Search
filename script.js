$(document).ready(function() {
  $("#search").on("click", function() {
    let searchItem = $("#txt_name").val();
    if (searchItem == "") {
      $(".new").html("<h3>Enter a Valid Search Parameter<h3>");
      $("#form").css("background", "white");
      $("#form").css("margin-top", "0px");
      $("#form").css("position", "relative");
      $(".dan").hide();
    } else {
      $("#form").css("background", "white");
      $("#form").css("margin-top", "0px");
      $("#form").css("position", "relative");
      $(".dan").hide();
      searchme(searchItem);
    }
  });
});

$("#txt_name").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
    $("#search").click();
  }
});

function searchme(searchparam) {
  $.ajax({
    //url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=dan&utf8=&callback=JSON_CALLBACK",
    url:
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchparam +
      "&limit=10&namespace=0&format=json&callback=JSON_CALLBACK",
    type: "GET",
    dataType: "jsonp",
    success: function(data) {
      let titleList = data[1];
      let titleContent = data[2];
      let titleUrl = data[3];
      var htmlStr = "";
      for (let i = 0; i < titleList.length; i++) {
        htmlStr +=
          "<h3><a href = " +
          titleUrl[0] +
          " target= -blank >" +
          titleList[i] +
          "</a></h3><hr><br/>" +
          titleContent[0];
        $(".new").html(htmlStr);
      }
    },
    error: function() {
      $(".new").html(
        "<h2> Word Not Found </h2><br/> <li> Enter another word </li>"
      );
    }
  });
}
