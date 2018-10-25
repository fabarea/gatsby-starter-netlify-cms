---
public: true
---

To be installed, once...
========================

Executes commands at the start of an interactive session.
=========================================================

Authors:
========

Sorin Ionescu <mailto:sorin.ionescu@gmail.com>
==============================================

Source Prezto.
==============

if \[[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

Customize to your needs...
==========================

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

gather external ip address
==========================

exip () {
	echo -n "Current External IP: "
	curl -s -m 5 <http://myip.dk> | grep "ha4" | sed -e 's/._ha4">//g' -e 's/&lt;\\/span>._//g'
}

determine local IP address
==========================

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

Set the locale
==============

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_CTYPE=en_US.UTF-8

Tmux
====

alias tmux="TERM=xterm-256color tmux"

Completion
==========

fpath=(/usr/local/share/zsh-completions $fpath)

zstyle show completion menu if 2 or more items to select
========================================================

zstyle ':completion:_' menu select=2
zstyle ':completion:_:default' list-colors ${(s.:.)LS_COLORS}

format autocompletion style
===========================

zstyle ':completion:_:descriptions' format "%{$fg[green]%}%d%{$reset_color%}"
zstyle ':completion:_:corrections' format "%{$fg[orange]%}%d%{$reset_color%}"
zstyle ':completion:_:messages' format "%{$fg[red]%}%d%{$reset_color%}"
zstyle ':completion:_:warnings' format "%{$fg[red]%}%d%{$reset_color%}"
zstyle ':completion:\*' format "--[ %B%F{074}%d%f%b ]--"

zstyle ':completion:_:_:_:_:_' menu select
zstyle ':completion:_:matches' group 'yes'
zstyle ':completion:_:options' description 'yes'
zstyle ':completion:_:options' auto-description '%d'
zstyle ':completion:\*:default' list-prompt '%S%M matches%s'

zstyle ':completion:_' group-name ''
zstyle ':completion:_' verbose yes

zstyle ':auto-fu:highlight' input white
zstyle ':auto-fu:highlight' completion fg=black,bold
zstyle ':auto-fu:highlight' completion/one fg=black,bold
zstyle ':auto-fu:var' postdisplay $' -azfu-'
zstyle ':auto-fu:var' track-keymap-skip opp
\#zstyle ':auto-fu:var' disable magic-space

zstyle kill menu
================

zstyle ':completion:_:_:kill:_' menu yes select
zstyle ':completion:_:kill:_' force-list always
zstyle ':completion:_:_:kill:_:processes' list-colors "=(#b) #([0-9]#)\*=36=31"

zstyle ssh known hosts
======================

zstyle -e ':completion::_:_:_:hosts' hosts 'reply=(${=${${(f)"$(cat {/etc/hosts,etc/ssh_,~/.ssh/known_}hosts(|2)(N) /dev/null)"}%%[# ]_}//,/ })'

zstyle autocompletion
=====================

zstyle ':auto-fu:highlight' input bold
zstyle ':auto-fu:highlight' completion fg=black,bold
zstyle ':auto-fu:highlight' completion/one fg=white,bold,underline
zstyle ':auto-fu:var' postdisplay $'\\n-azfu-'
zstyle ':auto-fu:var' track-keymap-skip opp

History
=======

zstyle ':completion:_:history-words' stop yes
zstyle ':completion:_:history-words' remove-all-dups yes
zstyle ':completion:_:history-words' list false
zstyle ':completion:_:history-words' menu yes

source ~/.zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

ZSH_HIGHLIGHT_HIGHLIGHTERS=(main brackets pattern cursor)

STYLES
======

Aliases and functions
=====================

ZSH_HIGHLIGHT_STYLES[alias]='fg=068'
ZSH_HIGHLIGHT_STYLES[function]='fg=028'

Commands and builtins
=====================

ZSH_HIGHLIGHT_STYLES[command]="fg=166"
ZSH_HIGHLIGHT_STYLES[hashed-command]="fg=blue"
ZSH_HIGHLIGHT_STYLES[builtin]="fg=202"

Paths
=====

ZSH_HIGHLIGHT_STYLES[path]='fg=244'

Globbing
========

ZSH_HIGHLIGHT_STYLES[globbing]='fg=130,bold'

Options and arguments
=====================

ZSH_HIGHLIGHT_STYLES[single-hyphen-option]='fg=124'
ZSH_HIGHLIGHT_STYLES[double-hyphen-option]='fg=124'

ZSH_HIGHLIGHT_STYLES[back-quoted-argument]="fg=065"
ZSH_HIGHLIGHT_STYLES[single-quoted-argument]="fg=065"
ZSH_HIGHLIGHT_STYLES[double-quoted-argument]="fg=065"
ZSH_HIGHLIGHT_STYLES[dollar-double-quoted-argument]="fg=065"
ZSH_HIGHLIGHT_STYLES[back-double-quoted-argument]="fg=065"

ZSH_HIGHLIGHT_STYLES[default]='none'
ZSH_HIGHLIGHT_STYLES[unknown-token]='fg=red,bold'
ZSH_HIGHLIGHT_STYLES[reserved-word]='fg=green'
ZSH_HIGHLIGHT_STYLES[precommand]='none'
ZSH_HIGHLIGHT_STYLES[commandseparator]='fg=214'
ZSH_HIGHLIGHT_STYLES[history-expansion]='fg=blue'

ZSH_HIGHLIGHT_STYLES[assign]='none'

PATTERNS
========

rm -rf
======

ZSH_HIGHLIGHT_PATTERNS+=('rm -rf \*' 'fg=white,bold,bg=red')

Sudo
====

ZSH_HIGHLIGHT_PATTERNS+=('sudo ' 'fg=white,bold,bg=red')
