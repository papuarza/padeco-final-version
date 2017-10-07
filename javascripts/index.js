$(document).ready(function(){
  $( ".arrow-description" ).click(function(e) {
    // $(this).parent().next().toggle();
  });



      $('.parallax-2').parallax();
      $('.carousel').carousel();
    $('select').material_select();
      $('.modal').modal({
        endingTop: "15%",
      });
      $('.carousel').carousel({fullWidth: true, dist:0});
      setInterval(function () {
        $('.carousel').carousel('next');
      }, 2000);

      currentIndex = 0;
  messageText = ['optimizar', 'crear', 'posicionar', 'maximizar'];
  timeoutId = '';
  stopTimeout = false;
  function addHeaderMessage(){
    var current = document.getElementById("typed").innerHTML;
    var following = current.length;
    var newLetter = messageText[currentIndex][following];
    document.getElementById("typed").innerHTML += newLetter;
    var x = document.getElementById("typed").innerHTML;
    clearTimeout(timeoutId);
    if(following < messageText[currentIndex].length - 1){
        addHeaderMessage();
        } else {
          if(!stopTimeout){
            timeoutId = setTimeout(function(){
              eraseHeaderMessage();
            }, 2500);
          }
      }
    }

    function eraseHeaderMessage(){
        timeoutId = setTimeout(function(){
        var what = document.getElementById("typed");
        var y = what.innerHTML;
        what.innerHTML = y.slice(0, -1);
        clearTimeout(timeoutId);
        if(what.innerHTML.length > 0){
          eraseHeaderMessage();
        } else {
          timeoutId = setTimeout(function(){
            currentIndex++;
            if(currentIndex == messageText.length){
              currentIndex = 0;
              stopTimeout = false;
            }
            addHeaderMessage();
          }, 100);
        }
      }, 100);
    }
  addHeaderMessage();
});
