$(document).ready(function(){
  createPostListener();
});

var createPostListener = function(){
  $('#posts').on('submit', function(){
  event.preventDefault();

  // console.log("Hit createPostListener");

  var postFormTarget = $(this);
  var address = postFormTarget.attr('action');
  var method = postFormTarget.attr('method');
  var data = postFormTarget.serialize();

  // console.log(postFormTarget);
  // console.log(address);
  // console.log(method);
  // console.log(data);

  var request = $.ajax({
    url: address,
    method: method,
    data: data
  });

  request.done(function(response) {
    // console.log("Successful createPostListener request");
    $('.post-container').append(response);
    postFormTarget.trigger('reset');
    // if we wanted to put it at the top:
    // $('.post-container').prepend(response);
  });

  request.fail(function(response) {
    alert("You fucked it up!");
  });

  })
};

// controller file

post '/posts' do 
  Post.create(title: params[:title],
              username: Faker::Internet.user_name,
              comment_count: rand(1000))
  if request.xhr?
    erb :'partials/_posts', layout: false, locals: {post: @post}
  else 
    redirect '/posts'
  end
end

// make the new article (format copy pasted from index.erb) to append a partial, _posts.erb

// partials go in their own view folder

// DRYing up even more!
// in index.erb, replace repetitive article code with
// <%= erb :'partials/_posts', layout: false, locals: {post: post} %>
// we need the local here because we need to tell the partial file what the variable 'post' is
