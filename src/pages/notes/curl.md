---
date: 2019-03-21T10:39:13.000Z
public: true
title: curl
---

http Replacement
================

<https://github.com/jkbr/httpie>

Ignore SSL
==========

    curl -k

retourne le code de la page
===========================

curl -sw "%{http_code}\\n" <http://www.perdu.com> -o /dev/null

pr voir une page
================

curl -i "<http://vitrine>"

pr voir les entêtes d'une page
==============================

curl -I "<http://vitrine>"

télécharge directement le fichier
=================================

curl -O "<http://switch.dl.sourceforge.net/sourceforge/typo3/typo3_src-4.2.0RC2.tar.gz>"

Client FTP récursif avec Wget
=============================

<http://www.fourre-tout.com/index.php/2007/03/30/438-client-ftp-recursif-avec-wget/>

Snippet PHP
===========

    $options = array();
    $options[] = "-F archive=@" . $tmpFile;
    $options[] = "-F 'username=" . USERNAME . ";type=text/foo'";
    $commands[] = CURL . " -k -s " . implode(' ', $options). " $host/";

Post form with curl
===================

$result = `curl --silent -XPOST -u '$this->username:$this->password' $api -d '$data'`;