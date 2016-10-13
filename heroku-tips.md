# deploying to heroku

_These directions assume that you already have a repository for your passion project up on GH already._

### Step 1: [Sign up](https://signup.heroku.com/)

Confirm your email, enter your app name, etc.

### Step 2: Clone down to local

Clone the repository of your passion project down locally from GH if you haven’t already.

### Step 3: Create a Heroku remote

`heroku git:remote -a <PASSIONPROJNAME>` (you can confirm success of this step by typing `git remote -v`)

If this doesn't work, try `gem install heroku` and try again.

### Step 4: Double check your Gemfile

Make sure your Gemfile includes everything [here](https://github.com/parkyngj/sinatra-mvc-skeleton/blob/master/Gemfile).

It doesn't have to be an exact copy. Just make sure the gems you include in your Gemfile is a superset of the one above.

There are several gems in the above that are included for ease of use, but are not essential for a functional application. I would check against it anyway, just to be safe.

### Step 5: Push to Heroku

`git push heroku <BRANCHNAME>` (BRANCHNAME will likely master)

You may run into some warnings here, but you shouldn’t worry as long as they aren’t errors (especially if they are warnings about Bundler, not declaring your Ruby version, or about Procfile detection)

### Step 6: Run terminal commands to Heroku!

To run terminal commands to your deployed app, you must type

`heroku run <TERMINAL COMMAND>`

For example, to check the Ruby version, you would type `heroku run ruby -v`.

You'll be using the command from step 5, `git push heroku <BRANCHNAME>` to push your work up to Heroku.

----

# database-related commands

The following are some comments about commands involving the database on Heroku.

You won’t ever have to run be `rake db:create` on Heroku. Your database always persists, you can only empty it out and put things in, as far as I know.

* migrating your database: `heroku run rake db:migrate`

* seeding your database (if you have a seed file): `heroku run rake db:seed`

* see what’s up in your Heroku database: `heroku run rake console`

* if you ever need to hard reset your database: `heroku pg:reset DATABASE`

----

# hide yo keys

_Don't forget to hide your keys._ Use dotenv, if you need, etc.

You can use Heroku to hide your keys. Go to Settings > Config Variables to do this.

----

# thanks

Thanks Max, Seba, Michael, and Todd for helping me deploy.

Referenced:

* [Deploying With Git](https://devcenter.heroku.com/articles/git) article on the Heroku Dev Center website
* [Stackoverflow Article](http://stackoverflow.com/questions/4820549/how-to-empty-db-in-heroku) on how to empty the Heroku database

