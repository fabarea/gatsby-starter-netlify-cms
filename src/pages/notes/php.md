---
date: 2019-03-22T12:27:23.000Z
public: true
title: PHP
---

## Installation

Voici la commande que j'ai utilisé pour installer php pour qu'il marche avec : 

```
brew install php70 --without-apache --with-homebrew-curl --with-homebrew-openssl --without-snmp --with-fpm --with-mysql --with-postgresql
```

## php.ini

Check where are stored the `php.init

``
php --ini
```

Collection of PSR-15 middlewares
--------------------------------

<https://github.com/middlewares>

Problem with php
----------------

brew switch jpeg 8d
brew switch jpeg 9c

Asynchrone PHP
--------------

<https://github.com/amphp/amp>

<https://github.com/swoole/swoole-src>

Learn PHP
=========

<https://www.youtube.com/playlist?list=PLfdtiltiRHWFD41D_LDomY1Fb-O9MtFqq>

<https://www.youtube.com/user/phpacademy>

ternary operator
================

$resolvedRatio = $possibleRatios ?? '';

REST API based
==============

<http://linuxfr.org/news/api-platform-2-un-cadriciel-pour-creer-des-api-web-hypermedia-en-quelques-minutes>

> Je m’interroge sur les avantages et inconvénient de cette solution vis à vis des autres existants comme restler ou slim.

RESTful Remote Object Proxies with ProxyManager
===============================================

<https://www.sitepoint.com/restful-remote-object-proxies-with-proxymanager/?tw>

Why Reactive Programming is the Evolution of Web Development - PHP Nuclear Reactor package blog
===============================================================================================

<http://www.phpclasses.org/blog/package/9771/post/1-Why-Reactive-Programming-is-the-Evolution-of-Web-Development.html>

Powering Raspberry Pi Projects with PHP
=======================================

<https://www.sitepoint.com/powering-raspberry-pi-projects-with-php/>

PHP7 TUTORIAL - e-learning
==========================

<http://php7-tutorial.com/>

Asynchronous PHP
================

*   Icicle is a PHP library for writing asynchronous code using synchronous coding techniques <https://icicle.io> (more updated)
*   Nuclear Reactor written in PHP. <http://reactphp.org>

httxt2dbm -i mapfile.txt -o mapfile.map

Finite
======

Finite is a state machine library that gives statefulness to your PHP objects by defining a states and transitions graph applicable to these objects. 

                                  Reject
                           |-----------------|
      Transitions          |                 |
                           v    Propose      |       Accept
      States            Draft ----------> Proposed ----------> Accepted

      Properties     * Deletable                              * Printable
                     * Editable

<http://yohan.giarel.li/Finite/>

How to Use PHPbrew and VirtPHP
==============================

Tool: PHPbrew
<http://www.sitepoint.com/use-phpbrew-virtphp/>

> brew install

To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php5_module    /usr/local/opt/php55/libexec/apache2/libphp5.so

The php.ini file can be found in:
    /usr/local/etc/php/5.6/php.ini

✩✩✩✩ PEAR ✩✩✩✩

If PEAR complains about permissions, 'fix' the default PEAR permissions and config:
    chmod -R ug+w /usr/local/Cellar/php55/5.4.30/lib/php
    pear config-set php_ini /usr/local/etc/php/5.4/php.ini

✩✩✩✩ Extensions ✩✩✩✩

If you are having issues with custom extension compiling, ensure that
you are using the brew version, by placing /usr/local/bin before /usr/sbin in your PATH:

      PATH="/usr/local/bin:$PATH"

PHP54 Extensions will always be compiled against this PHP. Please install them
using --without-homebrew-php to enable compiling against system PHP.

✩✩✩✩ PHP CLI ✩✩✩✩

If you wish to swap the PHP you use on the command line, you should add the following to ~/.bashrc,
~/.zshrc, ~/.profile or your shell's equivalent configuration file:

      export PATH="$(brew --prefix homebrew/php/php55)/bin:$PATH"

To have launchd start php56 at login:
    ln -sfv /usr/local/opt/php56/\*.plist ~/Library/LaunchAgents
Then to load php55 now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.php54.plist

A fluent api for the php dom extension
======================================

like jQuery but server side
<http://fluentdom.github.io/>

Understanding OpCache
<http://www.sitepoint.com/understanding-opcache/>

PHP 5.6 and the Splat Operator
==============================

Variadic Functions + Argument Unpacking

<http://www.lornajane.net/posts/2014/php-5-6-and-the-splat-operator>

docopt creates beautiful command-line interfaces
================================================

<https://github.com/docopt/docopt.php>

Exception Best Practices in PHP 5.3
===================================

<http://ralphschindler.com/2010/09/15/exception-best-practices-in-php-5-3>

*   LogicException
*   DomainException
*   InvalidArgumentException
*   LengthException
*   OutOfRangeException
*   OutOfBoundsException
*   OverflowException
*   RangeException
*   UnderflowException
*   UnexpectedValueException

Faker is a PHP library that generates fake data for you
=======================================================

Populating Entities Using an ORM or an ODM
<https://github.com/fzaninotto/Faker>

GENERATOR CLASS
===============

<http://www.lafermeduweb.net/billet/php-object-generator-generez-des-classes-php-5-pretes-a-utilisation-42.html>
\#PHP Object Generator : production d'objets ORM -><http://www.phpobjectgenerator.com/>

ORM
===

<http://ljouanneau.com/blog/2007/10/30/717-pourquoi-jdao>

<http://www.nexen.net/video.php?video=91>

<http://ljouanneau.com/blog/2007/11/29/723-comparatif-des-performances-des-orm-php>

PINQ – querify your datasets – introduction
===========================================

Competitor of ORM
<http://www.sitepoint.com/pinq-querify-datasets-introduction/>

Expressive fixtures generator
=============================

Alice allows you to create a ton of fixtures/fake data for use while developing or testing your project. It gives you a few essential tools to make it very easy to generate complex data with constraints in a readable and easy to edit way, so that everyone on your team can tweak the fixtures if needed.

<https://github.com/nelmio/alice#faker-data>

PHP 5.5
=======

<http://evertpot.com/php-55-released/>

Decoupling applications with Domains Events (inspiring reading!)
================================================================

<http://www.whitewashing.de/2012/08/25/decoupling_applications_with_domain_events.html>
 •  You receive an XML with full users and order representations
 •  You need to update certain user fields
 •  You need to update certain order fields
 •  Some orders require creating accounts in different remote systems
 •  If the user has not confirmed his email yet he should receive an opt-in mail instead.
 •  If the user confirms his opt-in mail, all outstanding remote accounts are created.
You can build all the steps into a single batch processing service. This will be a particularly huge service and in violation of the Single Responsibility principle.

...

Using Assertions for validation (inspiring reading!)
====================================================

<http://www.whitewashing.de/2012/09/04/using_assertions_for_validation.html>

On Taming Repository Classes in Doctrine (inspiring reading)
============================================================

<http://www.whitewashing.de/2013/03/04/doctrine_repositories.html>

Lessons learned: A failed side project (inspiring reading)
==========================================================

<http://www.whitewashing.de/2013/04/06/a_failed_side_project.html>

*   Choosing a scope that allows you to finish a working prototype within 1-2 months is an important key to success.
*   ...

PHP: Determine absolute link URLs
=================================

<http://cweiske.de/tagebuch/php-absolute-link-urls.htm>

The Closure class
=================

Request for Comments
====================

<https://wiki.php.net/rfc>

Autoload and TYPO3
==================

<http://wiki.typo3.org/Autoload>

<http://cweiske.de/tagebuch/typo3-autoloader.htm>

FIND ERROR WITH COMMAND EXEC
============================

$command = sprintf('git ls-remote %s 2>&1', $repository);
exec($command, $tags, $errorCode);
if ($errorCode > 0) {
    $this->systemLogger->log('Git: problem to fetch tags for repository ' . $repository, LOG_INFO);
}

Zend PDF
========

git://github.com/zendframework/ZendPdf.git
<http://stackoverflow.com/questions/12673089/generate-pdf-file-with-zend-framework-2>

PHP 5.4
=======

<http://ilia.ws/files/nena_php54.pdf>

PHP The Right Way.
==================

<http://www.phptherightway.com/>

PHP and Big Data
================

<http://www.silicon.fr/benoit-jacquemont-smile-php-est-devenu-un-vrai-langage-pour-lentreprise-82304.html>

PHP introduit une nouvelle API de gestion des mots de passe, fondée sur l'algorithme de hashage sécurisé Bcrypt
===============================================================================================================

<http://www.developpez.com/actu/47493/PHP-introduit-une-nouvelle-API-de-gestion-des-mots-de-passe-fondee-sur-l-algorithme-de-hashage-securise-Bcrypt/>

    password_hash($password, $algo, $options = array());
    $hash = password_hash($password, PASSWORD_BCRYPT, array("cost" => 10));
    password_verify($password, $hash);

Log on the console
==================

file_put_contents( "php://stderr", "Extracting file '$\_extensionFile'..." );

String manipulation
===================

•   levenshtein() - Calculate Levenshtein distance between two strings
•   metaphone() - Calculate the metaphone key of a string
•   similar_text() - Calculate the similarity between two strings
•   soundex() - Calculate the soundex key of a string

API for the php-parser
======================

<https://github.com/nicodh/php_parser_api/tree/flow3_package>

PHP CONSTANT
============

LF
PHP_EOF

SetEnv variable
===============

SetEnv TYPO3_CONTEXT production
echo $\_SERVER['TYPO3_CONTENT']; 

Mailing Lists
=============

<http://php.net/mailing-lists.php>

ArrayAccess vs ArrayObject
==========================

<http://www.lornajane.net/posts/2011/arrayaccess-vs-arrayobject>

To sum it up: 
    ArrayAccess is an interface
    ArrayObject is an object that implement ArrayAccess and more

Design Pattern ArrayAccess
==========================

Benefits of ArrayAccess Interface in PHP?
-----------------------------------------

<http://stackoverflow.com/questions/4319603/benefits-of-arrayaccess-interface-in-php>

<http://php.net/manual/en/class.arrayaccess.php>

<http://stackoverflow.com/questions/11333531/php-spl-arrayaccess-interface>

<http://www.php.net/~helly/php/ext/spl/interfaceArrayAccess.html> (temp link)

PHP STRTOTIME
=============

strtotime('today') == strtotime('midnight');

$minDate = strtotime('midnight today');
$maxDate = strtotime('midnight tomorrow -1 second');

$minDate = strtotime('today');
$maxDate = strtotime('tomorrow -1 second');

or alternatively
$minDate = mktime(0,0,0);
$maxDate = mktime(11,59,59);

Personal Thoughts On The PSR-3 Log Proposal
===========================================

    •   PSR-0 has standardised autoloading in a practical way. Sure, it does have an evil design flaw (different classes can map to the same file on disk), but in practice it’s not a problem that happens.
        https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
    •   I’d have personally liked to have seen PSR-1 go further, and address method naming in more detail (in particular, that method names should start with a verb), and also address getters/setters and protected vs private.
        https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
    •   I’ve no personal interest in PSR-2, and am philosophically against “layout” coding standards like this. 
        https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md
    •   PSR-3 is a proposed standard (voting has finished, it should appear as an accepted standard when the PSR folks recover from too much Christmas turkey) describing a common logging interface for PHP frameworks.
        link ?

library - A simple stateless production rules engine for PHP 5.3.
=================================================================

<https://github.com/bobthecow/Ruler>

recipes link PHP - FPM
======================

<https://github.com/cocoy/chef-php5-fpm/issues/1>

Installing multiple versions of PHP from source (compile php from source code)
==============================================================================

<http://mark-story.com/posts/view/installing-multiple-versions-of-php-from-source>

En route vers PHP 5.5 : Installation d'une version de test (sous linux)
=======================================================================

<http://blog.pascal-martin.fr/post/php-5.5-installation-version-de-test-linux>

Facebook libère son compilateur PHP just-in-time HipHop Virtual Machine (ou HHVM)
=================================================================================

<http://linuxfr.org/news/facebook-lib%C3%A8re-son-compilateur-php-just-in-time-hiphop-virtual-machine-ou-hhvm>

HipHop VM (video)
<http://thephp.cc/viewpoints/blog/2014/07/hhvm-the-alternative-php-runtime>

Apache Zeta Components - list of feature
========================================

<http://incubator.apache.org/zetacomponents/documentation/trunk.html> (ConsoleTools - Webdav)

PHP 5.3 Object Oriented image manipulation library
==================================================

<https://github.com/avalanche123/Imagine>

Buzz is a lightweight PHP 5.3 library for issuing HTTP requests. REST
=====================================================================

<https://github.com/kriswallsmith/Buzz>

The PHP tool to play with phar
==============================

<http://empir.sourceforge.net/>

<http://www.slideshare.net/helgith/phar-the-php-exe-format>

Strong data typing in PHP, part II: autoboxing and indestructable objects [english version]
===========================================================================================

<http://php.webtutor.pl/index.php/2011/04/13/strong-data-typing-in-php-part-ii-autoboxing-and-indestructable-objects-english-version/>

Useful dump method
==================

<http://philsturgeon.co.uk/news/2010/09/power-dump-php-applications>

HipHOP
======

<http://sebastian-bergmann.de/archives/880-My-Take-on-Facebooks-HipHop-for-PHP.html#content>

<http://sebastian-bergmann.de/archives/894-Using-HipHop-for-Static-Analysis.html#content>

XMP PHP Toolkit v2.0
====================

<http://linuxfr.org/2010/06/17/27014.html>
Vous pourrez donc au sein de votre application PHP5, ouvrir ce genre de fichier, en extraire les métadonnées et les indexer comme vous le voulez.

Compilation détaillée de PHP sous Linux
=======================================

<http://julien-pauli.developpez.com/tutoriels/php/compilation/>

Comment utiliser l'autoconf de son choix pour compiler PHP ?
============================================================

<http://blog.mageekbox.net/?post/2010/10/11/Comment-utiliser-l-autoconf-de-son-choix-pour-compiler-PHP>

Templating Engines in PHP
=========================

<http://fabien.potencier.org/article/34/templating-engines-in-php>

PHP 5.3.0 on Mac OS 10.6 (Snow Leopard)
=======================================

<http://fabien.potencier.org/article/37/php-5-3-0-on-mac-os-10-6-snow-leopard>

The state of YAML in PHP
========================

<http://fabien.potencier.org/article/40/the-state-of-yaml-in-php>

Parsing XML documents with CSS selectors
========================================

<http://fabien.potencier.org/article/42/parsing-xml-documents-with-css-selectors>

SERIALIZE
=========

<http://blog.tanist.co.uk/files/unserialize/index.php>

PHP AND WINDOWS
===============

<http://www.developpez.net/forums/d832538/php/langage/php-5-3-sous-windows-plus-nouveautes-quon-croit/>

CLUSTER FILE SYSTEM ECRIT EN PHP
================================

FineFS is a simple replicated filesystem,can be used for any other usage which needs data replication between machines.

<http://code.google.com/p/finefs/>

<http://linuxfr.org/2009/08/01/25781.html>

PHP LANGUAGE PROGRAMME
======================

<http://unearaigneeauplafond.fr/php-langage-interprete-compile>

ANNOTATION FLOW3
================

<http://www.nexen.net/actualites/php/18830-situation_des_annotations_dans_le_monde_php.php>

TINYURL
=======

<http://web-01.blogspot.com/2008/09/hbergez-tinyurl-sur-votre-propre.html>

PGP GNUPG
=========

<http://www.nexen.net/actualites/php/18603-utiliser_gnupg_avec_php.php>

NOMBRE DE FONCTION PHP
======================

\-> dans les divers... (fonctions internal - fonction user)$x = get_defined_functions(); echo count($x["internal"]);

TRUC ASCTUCES VALEUR PAR DEFAUT
===============================

<http://www.nexen.net/actualites/trucs/18503-valeurs_par_defaut_en_une_passe.php>

FONCTION ANONYME
================

<http://wiki.php.net/rfc/closures>

CAKEPHP CRAWLING LINK
=====================

<http://www.debuggable.com/posts/crawl-google-they-do-the-same-to-you:484ebdeb-bbe8-45fa-ad0f-26b14834cda3>

REFACTORING
===========

<http://www.nexen.net/actualites/php/18190-detecter_les_besoins_de_refactorisation.php>

Guzzle
======

Guzzle is a PHP 5.3+ HTTP client and framework for building RESTful web service clients

<http://guzzlephp.org/index.html>

<http://www.sitepoint.com/guzzle-php-http-client/>

CALENDRIER
==========

require_once dirname(**FILE**) . '/path/to/include.inc.php';require_once **DIR** . '/path/to/include.inc.php';<http://usrportage.de/archives/878-New-magic-constant-in-PHP-5.3.html>

CALENDRIER
==========

<http://www.nexen.net/actualites/web/18130-galerie_de_calendriers.php>

NOWDOCS HEREDOC PHP 5.3
=======================

<http://blog.ulf-wendel.de/?feed=atom>

<http://www.nexen.net/actualites/trucs/18096-nowdocs_debarque_en_php_5.3.php>

\->; nouveauté

<http://www.developpez.net/forums/d637984/php/langage/pensez-php-5-3-a/>

INTERNATIONALISER LOCALISATION LANG
===================================

\-> pr avoir les langues supportéslocale -a-> fonction PHP utile (PECL)
<http://fr2.php.net/manual/en/book.intl.php>

<http://www.nexen.net/actualites/tutorial/comment_internationaliser_votre_application_php.php>

<http://www.nexen.net/actualites/tutorial/16833-nouveau_tutoriel_sur_le_zend_framework_:_zend_locale_et_zend_translate.php>

<http://sourceforge.net/projects/rthree>

<http://sourceforge.net/docman/display_doc.php?docid=51463&group_id=192720->;>; article
<http://micropipes.com/blog/2007/07/26/ten-tips-for-website-localization/>

BUG PHP
=======

\-> utilisation de $\_SERVER non cohérente sur tous les serveur, bug de la galerie ?<http://ljouanneau.com/blog/2008/01/03/740-jelix-10rc2-incoherences-de-php>

XMI GÉNÉRATEUR GENERATOR UML
============================

\-> DE PHP VERS UML (!) analyse du code qui est traduit en XML, puis UML<http://www.nexen.net/actualites/logiciels/17927-phimx_:_php_vers_xmi.php->>; acceleo<http://linuxfr.org/2008/01/21/23592.html>

RATING VOTE
===========

<http://www.masugadesign.com/the-lab/scripts/unobtrusive-ajax-star-rating-bar/http://widgets.rabidlabs.net/ratings/v1.2/>

AUTH
====

\-> équivalent à OpenID <http://oauth.net/>

Using Guzzle with Twitter via Oauth
<http://www.sitepoint.com/using-guzzle-twitter-via-oauth/>

SYSLOG
======

<http://www.moolfreet.com/revuedepresse/post/2007/10/18/Exploiter-Syslog-a-partir-de-PHP>

LIVRE BOOK FORMATION OPTIMISATION
=================================

\-> cours Online
<http://tahe.developpez.com/#LIII>

\-> 10 erreurs courrantes

<http://nettuts.com/articles/are-you-making-these-10-php-mistakes/>
\-> articles
<http://www.phpsolmag.org/prt/view/nos-articles.html->;>; forum
<http://www.developpez.net/forums/f25/php/langage/->;>; good practice
<http://www.phpfour.com/blog/2008/10/02/become-kick-ass-php-ninja-from-newbie-guide-tips/>

\->; programmer avec sécurité (article d'IBM, moyennement compréhensible)
<http://www.ibm.com/developerworks/opensource/library/os-php-secure-apps/index.html>

\->; tutorial avec netbeans (DB + PHP + CSS)
<http://www.netbeans.org/kb/docs/php/wish-list-tutorial-main-page.html>

\->; TUTORIAL
<http://g-rossolini.developpez.com/tutoriels/php/cours/>

\->; eBookDocuments/formation/eBook
\-> les bases PHP ressources HTML
<http://www.nexen.net/actualites/php/18431-les_bases_en_php.php>

<http://www.landofcode.com/php/>

\->; un Wiki sur PHP
<http://hudzilla.org/phpwiki/index.php?title=Main_Page>

\-> formation en ligne
<http://www.lemondeinformatique.fr/actualites/lire-zend-delivre-ses-formations-php-en-ligne-et-en-francais-25485.htmlSourced'information> : # classeur formation# cours HTML - PDF (tutorial) # articles Web (moteur de recherche)# flux RSS# livres (pour des conseils, jeter un oeil sur developpez.com- il y a la collection coffret technique éven.)# video# podcastg

\-> cours php comem
\-> différent flux RSS (cf Firefox 2)
\-> sous forme de FAQ / Question
<http://php.developpez.com/faq/>

<http://php.developpez.com/sources/>

\->; podcast vue d'ensemble de php
<http://www.phpfrance.com/tutoriaux/index.php/2007/12/20/46-le-marche-php-en-france>

\->; podcast développement avec Agile
<http://audiobank.tryphon.org/static/cast/3439.mp3>

<http://feeds.feedburner.com/forumphp2007(il> y en a d'autres mais moins intéressants)

\-> tutorial avancé méthodes magiques avec PHP 5
<http://www.phpfrance.com/tutoriaux/index.php/2006/05/11/43-les-methodes-magiques-avec-php-5#a6>

\->; résumé des conférence ForumPHP2007
<http://afup.org/pages/forumphp2007/resumes.php>

\-> travaux pratique PHP
<http://www.grappa.univ-lille3.fr/~torre/guide.php?id=tpphp>

\->; tutorial online (référence facile)
<http://www.phpsources.org/tutoriels-all.htm>

\->; tutorial MVC
<http://julien-pauli.developpez.com/tutoriels/php/mvc-controleur/>

\->; e-book
<http://www.techotopia.com/index.php/PHP_Essentials>

FRAMEWORK
=========

\-> Article - comparatif
<http://www.karlkatzke.com/php-symfony-vs-zend/>

\-> recueil de framework
<http://www.snook.ca/archives/php/zend_framework_first_impressions/>

<http://www.phpit.net/article/ten-different-php-frameworks/#fr-footnote-3>

<http://www.phpwact.org/php/mvc_frameworks>

<http://www.developpez.net/forums/showthread.php?t=84784&page=4>

<http://www.pradosoft.com/forum/index.php/topic,6264.msg29155.htmlYii?>

<http://www.yiiframework.com/cakephp->>

<http://www.snook.ca/archives/cakephp/jelix?copix> ?parod ?symfony ?
<http://www.phpontrax.com/?blueshoes.orgQcodo...ou> solar ->

<http://www.solarphp.com/ou>

<http://codeigniter.com/ouzend>

<http://julien-pauli.developpez.com/tutoriels/zend-framework/presentation/Avoir> l'évolution de tout ce petit monde "carnassier" comme disait quelque'un ...benchmark ->

<http://paul-m-jones.com/blog/?p=238>
\->

<http://www.nexen.net/actualites/php/premier_benchmark_2007_pour_les_frameworks_php.php3framework> teste
<http://www.ibm.com/developerworks/opensource/library/os-php-fwk2/?S_TACT=105AGX44&S_CMP=TUT#downloads>

DATABASE ABSTRACTION
====================

ressemble a notre mysqdb.php -><http://www.jacwright.com/projects/database/usage> et propel sont deux librairie tres differente dans leur but.propel est ce que tu cherches pour mapper des objets, et utilise sont propre equivalent de adodb, a savoir creole, comme database abstraction layer. (moi perso j'aime bien creole, et je bosse sur des driver creole avec pdo)
=============================================================================================================================================================================================================================================================================================================================================================================

<http://pear.php.net/package/MDB2/http://joseph.randomnetworks.com/archives/2006/04/04/php-database-functions-vs-peardb-vs-adodb/>

<http://www.phpdb.org/>

DESIGN PATTER OBSERVATEUR
=========================

<http://bit.ly/3nzjUY>

API GOOGLE ET YAHOO AVEC PHP
============================

à tester ... celle de google ne marchait pas
<http://classes.scriptsphp.org/article.Rechercher-sur-le-web-avec-les-API-Yahoo-et-Google>

OPEN OFFICE --> XHTML
=====================

à tester ... ancienne page encore basee sur sxw
<http://classes.scriptsphp.org/article.De-OOo-a-Xhtml-via-XSLT>

Open Document PHP : manipulations de document Open Office en PHP
================================================================

<http://sourceforge.net/projects/htprotector>

DATE
====

\-> nouvelle API avec PHP 5.1
ftp://ftp-developpez.com/magazine/DevMag200806.pdf