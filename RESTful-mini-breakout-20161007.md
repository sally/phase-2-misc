[Sinatra MVC Skeleton Reference](https://github.com/kaydenwilliams7/sinatra-mvc-skeleton)

# Overview

## First thing to do when starting a file:

Write down the seven routes

* index
* new
* create
* show
* edit
* update
* destroy

Memorizing these will be helpful, especially when we get to rails.

## Second thing to do:

Build the skeleton of each seven routes.

### Some notes:

* Controllers are for passing information to the view.
  * The controller doesn't do anything except pass info from view to model, and vice versa. It's just a connector! There shouldn't be any real computation or logic inside of the controller.
  * This is what we mean when we say we want "fat models" and "skinny controllers".

# When to nest routes?

Use a nested route when the thing that is nested is dependent upon the thing it's nested inside of.

Good example: Craiglists challenge. A category has many article, and an article belongs to a category - articles can't SURVIVE without the category.

```ruby
get '/categories/:id/articles'
  @category = Category.find(params[:id])
  @category.articles

  erb :'categories/show'
end
```

**Question:** Naming convention for nested variable?
**Answer:** It highly depends on design and judgment. For this particular example, it's technically an `articles/show` page. Typically, you go into the parent's show page for an index page.

# Helpers

Helpers allow you to use a method globally inside of your application.

# Sessions

HTTP and Sinatra in general have no state. The workaround is session. Caching your cookies (in the browser).

# Miscellaneous Notes

* You can't do anything until your associations are set up correctly
