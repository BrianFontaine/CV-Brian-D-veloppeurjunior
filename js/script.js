$(function(){

    $(".navbar a, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

})

$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $(".html")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 85)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $(".css")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 35)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 1;
        $(".JS")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 25)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $(".C")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 45)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $(".PHP")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 5)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $(".WIX")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 30)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 0;
        $(".JQ")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 0)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $(".BS")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 40)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 0;
        $(".AG")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 0)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $(".GIT")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 60)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $(".WP")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 65)
            clearInterval(interval);
    }, 300);
  });

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $(".CS")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress);
        if (current_progress >= 10)
            clearInterval(interval);
    }, 300);
  });
