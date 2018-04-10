function runScript(e) {
    if (e.keyCode == 13) {
      console.log("me")
    }
}
$(document).ready(function(){
   $("#search").on('click', function(){
      let searchItem = $('#txt_name').val();
      searchme(searchItem)
    /*
    let searchItem = $('#txt_name').val()
    $('#form').css('background', 'white');
    $('#form').css('margin-top', '0px');
    $('#form').css('position', 'relative');
    $('.dan').hide();
    //searchme(searchItem)
    console.log(searchItem);
    */
  }); 
});
 


function searchme(searchparam){
  $.ajax({
    //url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=dan&utf8=&callback=JSON_CALLBACK",
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=api&limit=10&namespace=0&format=json&callback=JSON_CALLBACK",
    type: 'GET',
    dataType: 'jsonp',
    success: function(data){
      console.log("yes");
      /**
      let titleList= data[1];
      let titleContent = data[2];
      let titleUrl= data[3];    
      var htmlStr = ""
    for (let i=0; i < titleList.length; i++){
      htmlStr += "<h3><a href = " +titleUrl[0]+" target= -blank >"+ titleList[i]+"</a></h3><hr><br/>"+titleContent[0];
      $('.new').html(htmlStr)
  }*/
    },
    error: function(){
      console.log("Something went wrong")
    },
   
  });
   
}
