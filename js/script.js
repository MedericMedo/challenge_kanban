$(document).ready(function() {

  $(".example").TimeCircles({
    time: {
      Days: { show: false },
      Hours: { show: false },
      Minutes: { color: "#C0C8CF" },
      Seconds: { color: "#C0C8CF" }
    },
    start: false,
  });

  $(".example.stopwatch").TimeCircles();
  $(".start").click(function(){ $(".example.stopwatch").TimeCircles().start(); });
  $(".stop").click(function(){ $(".example.stopwatch").TimeCircles().stop(); });


  $("#button-ajouter").click(function() {
    var recupSaisie = $("#saisie").val();
    var creationLi = $("<li>").appendTo(".colone1 ul");
    var creationBouton = $("<button>").appendTo(creationLi);
    var maTache = $(creationBouton).html(recupSaisie);
    var creationSup = $("<button><i class='fa fa-trash'></i></button>").appendTo(creationLi);

    $(creationSup).click(function(){
      $(creationLi).remove();
    });

    $(maTache).click(function(){
      var creationH2 = $("<h2 id='tacheEnCours'>").appendTo(".colone2");
      var creationBoutonFaire = $("<button>A faire</button>").appendTo(".colone2");
      var creationBoutonFait = $("<button>Fait</button>").appendTo(".colone2");
      var maTache2 = $(creationH2).html(recupSaisie);
      $(creationLi).remove();

      $(creationBoutonFaire).click(function(){
        var recupTacheEncours = $("#tacheEnCours").html();
        var creationLi = $("<li>").appendTo(".colone1 ul");
        var creationBouton = $("<button>").appendTo(creationLi);
        var maTache = $(creationBouton).html(recupTacheEncours);
        var creationSup = $("<button><i class='fa fa-trash'></i></button>").appendTo(creationLi);
        $(creationH2).remove();
        $(creationBoutonFait).remove();
        $(creationBoutonFaire).remove();
      });

      $(creationBoutonFait).click(function(){
        var creationLiFait = $("<li>").appendTo(".colone3 ul");
        $(creationLiFait).html(recupSaisie);
        $(creationH2).remove();
        $(creationBoutonFait).remove();
        $(creationBoutonFaire).remove();
      });

    });

  });

});
