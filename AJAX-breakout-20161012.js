// on document ready
submitNewPoem();
applaudPoem();

// under document ready
var submitNewPoem = function() {
  $("#new-poem-form").on("submit", function(event){

    event.preventDefault();

    var poemForm = $(this);
    var url = poemForm.attr("action");
    var formData = poemForm.serialize();

    var request = $.ajax({
      url: url,
      type: "POST",
      // can be GET, POST, PUT, DELETE
      data: formData
    });

    request.done(function(response) {
      $("#poem-list").prepend("<li class='poem-list-item'>" + response + "</li>");
      poemForm.trigger("reset");
      poemForm.find("input:first").focus();
      $(".errors").remove();
    });

    request.fail(function(response){
      if(!$("section").hasClass("errors")) {
        poemForm.before(response.resposeText);
      }
    });
  });
}

// SOME NOTES:
// instead of .ajax, can do a .post or .get
  // for .get, need #url
  // for .post, need #url and #data
// can also chain methods .done and .fail

// lines 15-34 also can be written:

var config = {
  url: url,
  type: "POST",
  // can be GET, POST, PUT, DELETE
  data: formData
}

$.ajax(config).done(good).fail(bad)

function bad(response) {
  if(!$("section").hasClass("errors")) {
        poemForm.before(response.resposeText);
  }
}

function good(response){
 $("#poem-list").prepend("<li class='poem-list-item'>" + response + "</li>");
    poemForm.trigger("reset");
    poemForm.find("input:first").focus();
    $(".errors").remove();
}

//////////////////////
// CONTROLLER-SIDE //
////////////////////

post "/poems" do
  @poem = Poem.new(params[:poem])

  if @poem.save
    if request.xhr?
      // for whatever reason, we can return strings, but not numbers or ruby objects
      // however, we can convert a ruby object to json and return it that way
      // example: @poem.to_json
      erb: '/poems/_poem', layout: false, locals: {poem: @poem}
    else
      redirect "/poems/#{@poems.id}"
    end
  else
    error handling
  end
end
