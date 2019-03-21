---
date: 2019-03-21T20:40:54.000Z
public: true
title: Fish
---

Variable
--------

```
    set -l myVariable myValue
```

Start ssh-agent
---------------

<https://github.com/tuvistavie/fish-ssh-agent>

<https://gist.github.com/gerbsen/5fd8aa0fde87ac7a2cae>

<http://blog.joncairns.com/2013/12/understanding-ssh-agent-and-ssh-add/>

Usage
-----

```
    # Starts the web-based configuration interface
    fish_config
```

Configure
---------

```
    export EDITOR="nano"
    export FIREFOX_BIN="/Applications/Firefox.app/Contents/MacOS/firefox"
    export BROWSER=$FIREFOX_BIN
    python -c 'import webbrowser; webbrowser.open("http://www.mkdocs.org")'
```

Abbreviation
------------

<https://fishshell.com/docs/current/commands.html>

Change default
--------------

```
    chsh -s /usr/local/bin/fish
```

Universal Variables
-------------------

```
    set -Ux EDITOR 'mcedit  --colors "editnormal=default,black:normal=default,black"'


    -x is causing the specified environment variable to be exported to child processes.
```