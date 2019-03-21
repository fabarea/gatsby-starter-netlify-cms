---
date: 2019-03-21T20:05:40.000Z
public: true
title: Zsh Theme
---

To be installed, once...
========================

Executes commands at the start of an interactive session.
=========================================================


```
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi
```

Customize to your needs...
==========================

```
extract () {
  if [ -f $1 ] ; then
    case $1 in
      _.tar.bz2) tar xvjf $1 ;;
      _.tar.gz) tar xvzf $1 ;;
      _.tar.xz) tar xvJf $1 ;;
      _.bz2) bunzip2 $1 ;;
      _.rar) unrar x $1 ;;
      _.gz) gunzip $1 ;;
      _.tar) tar xvf $1 ;;
      _.tbz2) tar xvjf $1 ;;
      _.tgz) tar xvzf $1 ;;
      _.zip) unzip $1 ;;
      _.Z) uncompress $1 ;;
      _.7z) 7z x $1 ;;
      _.xz) unxz $1 ;;
      _.exe) cabextract $1 ;;
            \*) echo "\`$1': unrecognized file compression" ;;
    esac
  else
    echo "\`$1' is not a valid file"
  fi
}
```

## gather external ip address

```
exip () {
    echo -n "Current External IP: "
    curl -s -m 5 <http://myip.dk> | grep "ha4" | sed -e 's/._ha4">//g' -e 's/&lt;\\/span>._//g'
}
```

determine local IP address
==========================

```
ips () {
    ifconfig | grep "inet " | awk '{ print $2 }'
}

if [ -x /usr/local/bin/gdircolors ]; then
    eval "`/usr/local/bin/gdircolors -b ~/.dircolors`"
fi

export GREP_OPTIONS='--color=auto'
export GREP_COLOR='38;5;202'

export LESS_TERMCAP_mb=$'\\E\[01;31m'       # begin blinking
export LESS_TERMCAP_md=$'\\E\[01;38;5;74m'  # begin bold
export LESS_TERMCAP_me=$'\\E\[0m'           # end mode
export LESS_TERMCAP_se=$'\\E\[0m'           # end standout-mode
export LESS_TERMCAP_so=$'\\E\[38;33;172m'   # begin standout-mode - info box
export LESS_TERMCAP_ue=$'\\E\[0m'           # end underline
export LESS_TERMCAP_us=$'\\E\[04;38;5;172m' # begin underline
export LESS=-r

alias :e="\\$EDITOR"
alias :q="exit"
alias grep="grep --color=auto"
alias takeover="tmux detach -a"

export EDITOR=vim
export GIT_EDITOR=vim
export VISUAL=vim
export PATH=$HOME/bin:/usr/local/bin:$PATH
```

## Set the locale


```
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_CTYPE=en_US.UTF-8
```

## Tmux

```
alias tmux="TERM=xterm-256color tmux"
```