# API Breakout

## what is an API?

* application program interface, set of subroutine definitions, protocols, and tools for building softwares and applications
  (like a module in Ruby, bag of methods)
* defined behaviors of public calls to a programming library

### examples of an API

* you have a library that does a bunch of math
  * arithmetic
  * the *library* is what actually does the work
  * API is the set of calls another programmer can make to leverage expected behavior of library
  * "hey programmer, if you want to add two numbers, include this library and call add(A+B)"

* bCrypt
  * bCrypt is the library
  * the API includes the functions a developer can use to utilize the library (like BCrypt::Password::create)


## different APIs

* library which just gives you info

VS

* RESTful API calls
  * shoot out HTTP request to server
  * server gives back info based on info from call

## what's an API key?

* a unique code passed in by programs calling API to identify the calling program/its developer/its user to the website
* provides security so API knows who's actually creating requests
* whoever's making requests not violating service agreement/bandwidth limits

## Postman

* make RESTful API to API server and displaying raw data stream of result using Postman
* can look at body of API's return in json form (huge stuff)

before trying to use HTTParty or apply any other Ruby etc. to it, use Postman. It's the most straightforward - every successful request, you can label it, save it, play with it, etc.

## HTTParty gem for APIs

* make API calls without a lot of work
* define endpoint
* send characteristics to endpoint
* consume the response from API endpoint
* you can use it to wrap it around any HTTP request, but is most useful for make requests to API

Why use HTTParty: the alternative is to have something in controller/model about HTTP requests for every single API call. This way, just encapsulate all the logic in one class that has the URL, has different options for endpoints

## Hiding your keys (with dotenv)

### Step-by-step

* prior to git init
* first, add .env file to .gitignore in project root or in global .gitignore
  * global git ignore:
  * git config --global core.excludesfile '~/.gitignore'
* add .env file to project root
* add secret key/value pairs to .env file
* add gem 'dotenv' to project Gemfile
* require 'dotenv' in environment.rb
* add Dotenv.load to environment.rb
* access project secrets from .env file ENV['SECRET']
* git add., git commit (ensure .env file is not added to repo)
* git push

### Comments

* .gitignores can be per project or global
* dotenv allows you to make a set of keyvalue pairs that you can reference within your code
* documentation on dotenv GitHub
