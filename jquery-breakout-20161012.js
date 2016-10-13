// jQuery is a Javascript library :D

$(document).ready(function(){
  headerLinkListener(".login_link");
  headerLinkListener(".register_link");
  headerFormSubmitListener("#register_new_user_form");
  headerFormSubmitListener("#login_user_form");
  headerFormSubmitListener("#logout_user_form");
  doSomeCrazyStuff();
})

var generateRandomColor = function() {
  var num = Math.floor((Math.random() * 4) + 0);
  switch (num) {
    case 0:
      return "green"
      break;
    case 1:
      return "red"
      break;
    case 2:
      return "pink"
      break;
    case 3:
      return "orange"
      break;
    default:
      return "blue";
  }
}

// tie event listeners to elements that are static to the webpage

var doSomeCrazyStuff = function() {
  // 1. Generate jQuery object for each "h1" that is a child of a "div"
  // listenings for h1s at the beginning of the document
  $("div > h1").on("mouseover", function (event) {
    targetElement = $(this);
    targetElement.css('color',generateRandomColor());
  });
}

// REFACTORED doSomeCrazyStuff:

var doSomeCrazyStuff = function() {
  $("div").on("mouseover", "h1", function (event) {
    // event variable can be messed with - in this case, it's a MouseEvent object. you can change it around in the function
    // good pattern: whenever you enter a function, pull out "this" so that you aren't just guessing what "this" is at any given time
    targetElement = $(this);
    targetElement.css('color',generateRandomColor());
  });
}

// $("div").on("mouseover", "div", ...)
// this ties event listeners to all divs, instead of all h1s that live under divs

var setupHeaderForm = function(response) {
  var targetParentListener = $("#header_login_register_div");
  targetParentListener.empty();
  targetParentListener.append(response);
};


var headerLinkListener = function(link_class_name) {
  $("#header_container").on("click", link_class_name, function(event){
    event.preventDefault();
    var form_id_name = $(this);
    $.ajax({
      method: "GET",
      url: link.attr('href')
      // ...

    })
    .done(function(response){
      setupHeaderForm(response);

    .fail(function(response){
        alert("Failed to access " + lin.attr('href'));
      })
    })
  })
}

var headerFormSubmitListener = function(form_id_name) {
  $("#header_container").on("submit", "#login_user_form", function (event)) {

    event.preventDefault();

    var form_id_name = $( this );

    $.ajax({
      method: form_id_name.attr('method'),
      url: form_id_name.attr('action'),
      data: form_id_name.serialize()
    })

    .done( function(response){
      setupHeaderForm(response);
    })

    .fail(function(response){
      alert("Failed to " + form_id_name.attr('method') + "to" + form_id_name.attr('action'));
    });
  }
}

// AJAX is not a jQuery thing - it's a Javascript thing
// if we use partials, we can use AJAX to show which partials show up on the page

// CONTROLLER CODE for LinkListener

get '/users/new/?' do 
  // !!!
  // request.xhr? == false if not an AJAX call
  // request.xhr? == true if an AJAX call
  // !!!
  erb :'/users/_new.html', layout: !request.xhr?
end
