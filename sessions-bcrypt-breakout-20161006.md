# Comments about Sessions/Cookies

* sessions allow for retaining state in a stateless environment
  * server doesn't retain any information about the client*

* sessions // cookies

* sessions are maintained on the server side, cookies local

# Some Sample Code

```ruby
class User < ActiveRecord::Base
    has_many :bicycles

    include BCrypt

    # additional methods to user class

    def password
      @password ||= Password.new(password_hash)
    end

    def password=(new_pw)
      @password = Password.create(new_pw)
      self.password_hash = @password
    end
  end
```

```ruby
post '/sessions/login/?' do
  @user = User.find_by(email)

  if @user && password authenticated
    session[:id] = @user.id
    erb :'restricted session'
  else
    @errors = "Email & Password not found"
    redirect to login
  end
end
```

# Max's setup for code for sessions

## session views:

* partial for login form

## session controller:

* NEW

```ruby
get '/sessions/login/?' do
  erb :'sessions/_login.html'
end
``` 

* CREATE

Nothing here because he took it down before I could process it, but basically this will be a post used to log someone in

* DELETE

```
delete '/sessions/logout' do 
  sesion[:id] = nil
  erb :'/headers/_header_links.html'
end
```

# Random Comments

* p out session to see what's goin on under da hood
* user controller is pure RESTful
* erb can have layout options, if you don't want the default layout to be displayed on your erb page

# Passion Project Reqs
* framework
* user authentication
* external API
* deployed (heroku)
* memoization `X ||= Y` is equivalent to: evaluate X if it's not falsey. If it is, then evaluate Y
  * purpose: Y is usually computationally intensive
  * for bCrypt in password method: I already have the value @password set up, so don't do BCrypt stuff on the right
  * http://stackoverflow.com/questions/995593/what-does-or-equals-mean-in-ruby
* BCrypt is to Ruby as some other encryption algorithm is to other languages
* never store passwords as plain text in database - only store password_hash or encrypted_password
