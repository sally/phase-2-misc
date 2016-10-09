[Seba's bash profile](https://gist.github.com/sebabelmar/5efd9c4b2cc8a3879a5ceadc8afb7194#file--gitconfig)

----

```bash
## Git aliases

alias gs="git status"
alias ga="git add"
alias gc="git commit -m"
alias gco="git checkout"
alias gcob="git checkout -b"

## Weblinks

alias slack="open http://sf-bobolinks.slack.com/messages/general"
alias github="open http://github.com"
alias guide="open http://github.com/sf-bobolinks/phase-2-guide"

## Bundle Hax

# alias dbreset="bundle exec rake db:drop db:create"
# alias dbseed="bundle exec rake db:migrate db:seed"
alias dbrs="bundle exec rake db:drop db:create db:migrate db:seed"
alias genmi="bundle exec rake generate:migration"
alias genmo="bundle exec rake generate:model"
alias rcon="bundle exec rake console"
alias bes="be shotgun"

## Misc Shortcuts

alias c="clear"
alias f="open -a Finder ./"
```
