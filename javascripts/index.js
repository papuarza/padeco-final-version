$(document).ready(function(){
      let language = "";
      checkLanguage();
      function checkLanguage() {
        var userLang = navigator.language || navigator.userLanguage;
        currentLanguage = userLang.substring(0,2);
        if (currentLanguage === "es") {
          language = "spanish";
        } else {
          language = "english";
          $("#selected-language").html('<img src="./images/usa.svg" alt=""><p>English</p>')
          updateLanguage();
        }
      }
      $( ".arrow-description" ).click(function(e) {
        // $(this).parent().next().toggle();
      });
      $(".language-selector").click(function(e) {
        $("#selected-language").toggle();
        var currentStyle = $("#menu-language")[0].style.display;
        if(currentStyle == "flex") {
          $("#menu-language").css("display", "none");
        } else {
          $("#menu-language").css("display", "flex");
        }
      });
      $("#menu-language").click(function(e) {
        $("#selected-language").html($($(e.target).parent()[0]).html());
        language = $($(e.target).parent()[0]).attr("id");
        updateLanguage();
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

      function updateLanguage() {
        if(language === "english") {
          $('.footer-text').html(english.footer.text);
          $('#menu-filosofia').html(english.menu.filosofia);
          $('#menu-canal').html(english.menu.canalOffline);
          $('#menu-where').html(english.menu.dondeOfrecer);
          $('#menu-clientes').html(english.menu.clientes);
          $('#menu-contactar').html(english.menu.contact);
          $('#header-text').html('Specialists<br><strong><span id="typed">creating</span></strong><br> companies sales channel.');
          messageText = english.landingHeader.array;
          $('#header-button').html(english.landingHeader.button);
          $('#feature-1').html(english.features.feature1);
          $('#feature-2').html(english.features.feature2);
          $('#feature-3').html(english.features.feature3);
          $('#ecommerce-description').html(english.ecommerce.text);
          $('#amazon-text').html(english.ecommerce.amazon);
          $('#manomano-text').html(english.ecommerce.manomano);
          $('#service-features-title').html(english.ecommerce.question);
          $('#service-features-title-1').html(english.ecommerce.features[0].title);
          $('#service-features-title-2').html(english.ecommerce.features[1].title);
          $('#service-features-title-3').html(english.ecommerce.features[2].title);
          $('#service-features-title-4').html(english.ecommerce.features[3].title);
          $('#service-features-description-1').html(english.ecommerce.features[0].description);
          $('#service-features-description-2').html(english.ecommerce.features[1].description);
          $('#service-features-description-3').html(english.ecommerce.features[2].description);
          $('#service-features-description-4').html(english.ecommerce.features[3].description);
          $('#traditional-title').html(english.offline.title);
          $('#traditional-description-1').html(english.offline.description1);
          $('#traditional-description-2').html(english.offline.description2);
          $('#traditional-step-1').html(english.offline.steps[0]);
          $('#traditional-step-2').html(english.offline.steps[1]);
          $('#traditional-step-3').html(english.offline.steps[2]);
          $('#traditional-step-4').html(english.offline.steps[3]);
          $('#traditional-step-5').html(english.offline.steps[4]);
          $('#where-title').html(english.world.title);
          $('#where-text').html(english.world.description);
          $('#filosofia-title').html(english.philosophy.title);
          $('#filosofia-description-1').html(english.philosophy.description1);
          $('#filosofia-description-2').html(english.philosophy.description2);
          $('#clients-title').html(english.clients.title);
          $('#clients-text').html(english.clients.description);
        } else {
          location.reload();
        }
      };

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
