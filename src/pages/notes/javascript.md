---
date: 2018-11-02T21:07:23.000Z
public: true
title: javascript
---

The Modern Javascript Tutorial
------------------------------

<https://javascript.info/>
<https://javascript.info/async-await>
elearning--

CLI
===

wowcup is a node command line application written in TypeScript using oclif (a Node.JS Open CLI Framework).
-----------------------------------------------------------------------------------------------------------

<https://github.com/codeaholicguy/wowcup>

Node.js Open CLI Framework. Built with 💜 by Heroku. 
<https://oclif.io>

Learn
-----

Grasshopper : une app signée Google pour apprendre à coder en JavaScript

<https://www.silicon.fr/grasshopper-une-app-signee-google-pour-apprendre-a-coder-en-javascript-206789.html?inf_by=574eec032ad0a13c55b7db25>

Static typing
-------------

Is there support for static typing in ECMAScript 6 or 7?

<https://stackoverflow.com/questions/22407765/is-there-support-for-static-typing-in-ecmascript-6-or-7>

JavaScript ES7 Function Bind Syntax
-----------------------------------

<https://blog.jeremyfairbank.com/javascript/javascript-es7-function-bind-syntax/>

    // Binding a function to a context
    let log = ::console.log;

Looks dying 
<https://github.com/tc39/proposal-bind-operator/issues/24>

Pipeline operator
-----------------

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator>

    const double = (n) => n * 2;
    const increment = (n) => n + 1;

    // without pipeline operator
    double(increment(double(double(5)))); // 42

    // with pipeline operator
    5 |> double |> double |> increment |> double; // 42

Static types in JavaScript
==========================

Why static types in Javascript? — Preethi Kasireddy
<https://jamstack.org/resources/>

async
-----

Was recommended as reading... Let see

<https://davidwalsh.name/async-await>

    (async () => {

        await ask()
        ...

    })()

Compile JS to binary - NectarJS
-------------------------------

CODE EVERYTHING, EVERYWHERE, IN JAVASCRIPT

<http://nectarjs.com/>
<https://github.com/NectarJS/nectarjs/blob/master/ROADMAP.md>
Seems still a work in progress

Looks promising I must say. We can potentially code on mobile device.

Compile JS to binary - Pkg
--------------------------

Package your Node.js project into an executable

<https://github.com/zeit/pkg>

Compile JavaScript? Really?
---------------------------

<https://hackernoon.com/javascript-compilation-epoch-ebfb7b5bb664>

enclosejs
---------

EncloseJS is deprecated. Its author now works on pkg

Next features
-------------

<https://github.com/tc39/proposals> <https://prop-tc39.now.sh/>
<https://ecmascript-daily.github.io/>

A Case Study In Robotics With Node.js
-------------------------------------

<http://joedevelops.com/2017/01/13/case-study-robotics-node-js/>

Immutability in JavaScript using Redux
--------------------------------------

const initialState = Immutable(\[]) // create immutable array via
seamless-immutable
<https://www.toptal.com/javascript/immutability-in-javascript-using-redux>

Binding different this scope to ES6 => function operator
--------------------------------------------------------

When using the function keyword, the rules binding this are fairly straight
forward.

Either the invoking call sets this (be it through .call, .apply or JavaScript
setting this when the function is called as a method) or this gets a well-known
value:

*   In normal mode, this will be the window object.

*   In strict mode, this will be undefined.

*   With **arrow functions**, the rule is even simpler.

There is no this keyword. (nor arguments, or a few others)

Which means that, inside an arrow function, this is always bound to the outside
context, because that is where this comes from. So, in summary: When using arrow
functions, the value of this always comes from the outside context.

<http://stackoverflow.com/questions/33284596/binding-different-this-scope-to-es6-function-operator>

Front-end Hyperpolyglot <http://jeffcarp.github.io/frontend-hyperpolyglot/>

<https://dreamdom.github.io/speechrec.html>

Sleep function
--------------

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

Quick Tip: Stop Writing Loops and Start Thinking with Maps
----------------------------------------------------------

    var mixedEmails = ['JOHN@ACME.COM', 'Mary@FooBar.com', 'monty@spam.eggs'];

    function downcase(str) {
      return str.toLowerCase();
    }

    var validData = mixedEmails.map(downcase);

<http://www.sitepoint.com/quick-tip-stop-writing-loops-start-thinking-with-maps/>

Top JavaScript Frameworks, Libraries and Tools and When to Use Them
-------------------------------------------------------------------

<http://www.sitepoint.com/top-javascript-frameworks-libraries-tools-use/>

JavaScript of the Future
------------------------

Asynchronous functions in ES7" Presented by Mariusz Kierski
<https://air.mozilla.org/mariusz_kierski/>

An introduction for new programmers
-----------------------------------

JavaScript For Cats <http://jsforcats.com/\#strings>

ECMAScript 6 compatibility table harmony
----------------------------------------

<http://kangax.github.io/compat-table/es6/>
<http://kangax.github.io/compat-table/es5/>

Loop
----

Since ES5, you can use the built-in forEach method:

    myArray.forEach(function (index, value) {
      console.log(index, value);
    });

    for (var index in myArray) {    // don't actually do this
      console.log(myArray[index]);
    }

The mighty for-of loop (ES6)

unlike forEach(), it works with break, continue, and return

    for (var value of myArray) {
      console.log(value);
    }

Building a Zero Framework Manifesto
-----------------------------------

<https://andywalpole.me/\#!/blog/142134/2015-the-end-the-monolithic-javascript-framework>

ECMAScript 6 and Destructuring Assignment
-----------------------------------------

function today() { return { d: 6, m: 2, y: 2013 }; } var { m: month, y: year } =
today(); // month = 2, year = 2013

<http://ariya.ofilabs.com/2013/02/es6-and-destructuring-assignment.html>

Docco
-----

    install -g docco
    docco src

Annotated Source Code As Documentation, With Docco
--------------------------------------------------

<http://jashkenas.github.io/docco/>
<https://lostechies.com/derickbailey/2011/12/14/annotated-source-code-as-documentation-with-docco/>

// This Is A Header // ----------------     // This is a normal comment, that
will become part of the // annotations after running through the Docco tool. Use
this // space to describe the function or other code just below // this comment.
For example: // // The `DoSomething` method does something! It doesn't take any
// parameters... it just does something.   function DoSomething(){ // and by the
way, this will show up // in the docco file, too. :) alert("I'm doing
something!"); }

Promise
-------

The promise object is used for deferred and asynchronous computations. A promise
can be pending, fulfilled, rejected, and settled.
<http://www.programwitherik.com/6-new-features-of-es6/>

[asdf](https://rawgit.com/hirokiosame/search.js/master/index.html)

    export default class Poll {

        /**
         * Load
         */
        load(url) {

            // Return a new promise.
            return new Promise(function(resolve, reject) {

                // Do the usual XHR stuff
                var request = new XMLHttpRequest();
                request.open('GET', url);

                request.onload = function() {
                    // This is called even on 404 etc
                    // so check the status
                    if (request.status -- 200) {

                        // Transform the response to JSON
                        let response = JSON.parse(request.response);

                        // Resolve the promise with the response text
                        resolve(response);
                    }
                    else {
                        // Otherwise reject with the status text
                        // which will hopefully be a meaningful error
                        reject(Error(request.statusText));
                    }
                };

                // Handle network errors
                request.onerror = function() {
                    reject(Error("Network Error"));
                };

                // Make the request
                request.send();
            });
        }

    }

JavaScript Standard Style — One Style to Rule Them All
------------------------------------------------------

<https://github.com/feross/standard> (looks to be stared many time)

Why I don't use the javascript "new" keyword
--------------------------------------------

*   compréhensible
    <https://blog.liip.ch/archive/2014/10/09/why-i-don-t-use-the-javascript-new-keyword.html>

Drag & Drop
-----------

<http://blog.dockphp.com/post/78640660324/cross-browser-drag-and-drop-interface-development-using>

Book (very interesting!)
------------------------

<http://read.humanjavascript.com/ch06-models.html>

7 Patterns To Refactor JavaScript Applications: Policy Objects (very interesting)
---------------------------------------------------------------------------------

<http://journal.crushlovely.com/post/89978453593/7-patterns-to-refactor-javascript-applications-query>

Frictionless browser package management
---------------------------------------

<http://jspm.io/> Guy Bedford: Package Management for ES6 Modules [JSConf2014]
<https://www.youtube.com/watch?v=szJjsduHBQQ&feature=youtu.be>

remoteStorage
-------------

An open protocol for per-user storage

<http://remotestorage.io/>

JavaScript Promises
-------------------

There and back again

<http://www.html5rocks.com/en/tutorials/es6/promises/>

Helping you select an MVC framework
-----------------------------------

<http://todomvc.com/>

Vous pouvez trouver sur ce lien la spécification des promises
<https://github.com/slightlyoff/Promises> (polyfill inside). Cette présentation
sera suivie d'une table ronde sur NodeJS, la production et les outils existants.
Nous aborderons les différentes approches : • approche
basique <https://github.com/nodejitsu/forever> • approche
prometteuse <https://github.com/Unitech/pm2> • une autre approche ; • approche
Nginx.

Source:
<http://linuxfr.org/news/la-troisieme-rencontre-de-la-communaute-javascript-de-lille-jeudi-25-juillet-2013>

\## <http://jsfiddle.net/ExFnE/1/>

AMD loader pour un code JavaScript organisé et performant (avec Curl)
---------------------------------------------------------------------

<http://ippon.developpez.com/tutoriels/javascript/amd-loader-code-javascript-organise-performant/?utm_source=twitterfeed&utm_medium=twitter\#LVII>

/\*\* Extend string adding "format" method. This simulate PHP sprintf function
\* \* "hello {0}".format("world") \* \* will output "Hello World" \* \* @type
{Function} \*/ String.prototype.format = String.prototype.f = function () { var
s = this, i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;

};

Unveil.js
---------

Lightway version of Lazy Load with support for serving  
high-resolution images to devices with retina displays

<http://luis-almeida.github.io/unveil/>

<https://www.sencha.com/blog/toward-modern-web-apps-with-ecmascript-6/>

Traceur Compiler
----------------

Traceur is a compiler that takes ECMAScript Edition 6 (ES6) (including classes,
generators, destructuring and much more) and compiles it down to regular
Javascript (ECMAScript Edition 5 [ES5]) that runs in your browser.

<https://github.com/google/traceur-compiler>

OOP In JavaScript: What You NEED to Know
----------------------------------------

<http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/>

MODERN WORKFLOWS FOR MODERN WEBAPPS
-----------------------------------

<http://yeoman.io/>

AMD - Asynchronous Module Definition (AMD)
------------------------------------------

This page talks about the design forces and use of the Asynchronous Module
Definition (AMD) API for JavaScript modules, the module API supported by
RequireJS. There is a different page that talks about general approach to
modules on the web.

Simple javascript toast notifications
-------------------------------------

<http://codeseven.github.com/toastr/>

A data persistence library
--------------------------

    •   http://www.breezejs.com/  <--- use this one?
    •   http://amplifyjs.com/
    •   http://reclinejs.com/
    •   https://github.com/zefhemel/persistencejs

<http://stackoverflow.com/questions/13239204/a-data-persistence-library-for-angularjs>

Observer Pattern
----------------

<http://oziks.fr/2011/09/pattern-observer-javascript/>

Chosen
------

Chosen is a JavaScript plugin that makes long, unwieldy select boxes much more
user-friendly. It is currently available in both jQuery and Prototype flavors.
<http://harvesthq.github.com/chosen/>

Use jQuery to extract data from HTML lists and table
----------------------------------------------------

<http://encosia.com/use-jquery-to-extract-data-from-html-lists-and-tables/>

A simple but powerful library for building data applications in pure Javascript and HTML.
-----------------------------------------------------------------------------------------

<http://reclinejs.com/>

Twitter Bootstrap UI extension for ReclineJS (Table, Search Box, Paginator) — Read more
---------------------------------------------------------------------------------------

<https://github.com/cosminnicula/ReclineTwitterBootstrapGridView>

bower - THE BROWSER PACKAGE MANAGER
-----------------------------------

html, css, and javascript <http://twitter.github.com/bower/>

Component
---------

<https://github.com/component/component> <http://component.io/>

Articles • building a date picker component • original component blog post  
Bower Component Ender Jam Volo License MIT MIT MIT MIT MIT/New BSD Appeared Sep
2012 Aug 2012 Apr 2011 May 2012 Oct 2010 Package Registry Server Wiki npm Server
GitHub Module Pattern CommonJS CommonJS AMD AMD/CommonJS compatible

<http://dailyjs.com/2013/01/28/components/>

Powerful run-time Component System for structuring HTML5-based Rich Clients
---------------------------------------------------------------------------

<http://componentjs.com/>

URI parsing
-----------

<https://github.com/derek-watson/jsUri> <https://github.com/medialize/URI.js/>

ajax proxy: A PHP AJAX Proxy with Cookie Support
------------------------------------------------

<https://github.com/hugeinc/ajax-proxy>
<http://codefury.net/2010/06/ajax-proxy-a-php-ajax-proxy-with-cookie-support/>

Ready.js
--------

<https://github.com/dsimard/ready.js/wiki/Configuration-options>
<http://www.javascriptkata.com/2010/10/28/ready-js-prepare-your-javascript-for-production/>
<https://github.com/dsimard/ready.js/tree/>

JASMINE
-------

Mocha
-----

<http://visionmedia.github.com/mocha/>

Unit Testing Improvements in ReSharper 7 (Jasmine Support)
----------------------------------------------------------

The previous version of ReSharper has shipped with support for the QUnit
JavaScript test framework.
<http://blogs.jetbrains.com/dotnet/2012/07/unit-testing-improvements-in-resharper-7/>

USING STRICT MODE
-----------------

<http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/>

Quizz
-----

<http://ajaxian.com/archives/think-you-know-javascript-try-this-quiz>
<http://perfectionkills.com/javascript-quiz/>
<http://dmitrysoshnikov.com/ecmascript/the-quiz/>

LITERAL DECLARATION
-------------------

Another inline way of defining an object is via literal notation. Supported in
JavaScript1.2 and above, it's a more robust form of creating an object on the
fly: <http://javascriptkit.com/javatutors/oopjs.shtml>

TOOLS JAVASCRIPT INDENT CODE
----------------------------

<http://jsbeautifier.org/>

CODING GUIDE LINES - CGL
------------------------

<http://javascript.crockford.com/code.html>

SNIPPETS
--------

### Encapsulation ###

\\$(function(){

});

MENU NAVIGATION
---------------

<http://ajaxian.com/archives/great-javascript-and-css-menu-libraries>

GENERATOR !!! ALL KINDS
-----------------------

<http://www.smashingmagazine.com/2006/11/09/online-generators/>

75 (Really) Useful JavaScript Techniques
----------------------------------------

<http://www.smashingmagazine.com/2008/09/11/75-really-useful-javascript-techniques/>

JAVASCRIPT TECHNIC
------------------

<http://ejohn.org/blog/degrading-script-tags/>

POLL SONDAGE
------------

<http://blog.yvesduteil.com/blog/index.php/2008/07/27/marcellesi-solu-mai-lalbum/>

CREER BOUTON CREATE BUTTON
--------------------------

<http://ajaxian.com/archives/i-like-big-targets>
<http://mediabeez.ws/mediaBeez/permalink.php?tag=buttonAnimated\#{%27g%27:[{%27did%27:%27action=viewArticle&target=buttonAnimated&language=1788%27}],%27w%27:[{%27app%27:%27article%27,%27win%27:%27article.mbArticle%27}]}>

<http://ajaxian.com/archives/yet-another-web-20-button-generator>

PATTERN - WIDGET
----------------

<http://developer.yahoo.com/ypatterns/index.php>

PROCESSING
----------

*   un petit jeu <http://ejohn.org/blog/processingjs-tower-defense/>

*   Processing is an open source programming language for people who want to
    work with images, animation, and interactions.
    <http://blog.wired.com/monkeybites/2008/05/new-javascript.html>
    <http://processing.org/>

JAVASCRIPT ORM
--------------

<http://ajaxian.com/archives/joose-expands-with-new-orm>

LES DIFFERENTES VERSION DE JAVASCRIPT DANS LES BROWSER
------------------------------------------------------

<http://ejohn.org/blog/versions-of-javascript/>

AJAX MANAGER
------------

*   jQuery <http://www.protofunc.com/scripts/jquery/ajaxManager/>

COMBOBOX DROPDOWN MENU SELECT
-----------------------------

*   avec jquery <http://abeautifulsite.net/notebook/62>
    <http://abeautifulsite.net/notebook_files/62/demo/jqueryMultiSelect.html>
    (live demo)

*   avec jquery <http://www.givainc.com/labs/mcdropdown_jquery_plugin.htm>

*   edition avec prototype, pas complètement 100%
    <http://ajaxian.com/archives/prototype-new-cheat-sheet-and-in-place-editor>

LIST BOX MANY-TO-MANY SELECTOR MULTIPLE SELECTION BOX - MULTIPLE COMBO BOX
--------------------------------------------------------------------------

*   avec jquery <http://www.ryancramer.com/journal/entries/select_multiple/>

\|item1 \| \\&lt;- \|item1 \|
-----------------------------

\| \| \* \|item2 \|  
\| \| \| \|  
\| \| \| \|                  

<http://www.saturnasoftware.com/index.php/home/M2MSelector> bonne ergonomie :
offre un petit filtre dans la colonne de droite, double clique ou drag and drop
pour passer des éléments de droite à gauche. Il est possible de placer des image
dans la liste et de réordonner la liste par drag and drop.

Une recherche sur la thématique du multiple selection box a été faite entre le
31.03.08 et le 01.04.08. Il s'est avéré que l'extension M2MSelector est codée
avec Mootools et qu'il est très difficile de mélanger JQuery et Mootols, sauf si
on s'y prend dès le début.

Je relève également qu'il y a plusieurs manières de gérer l'affichage. La
technique du M2MSelector est de fournir un objet javascript comme source de
données, puis de générer le DOM dynamiquement. A peser les avantages /
inconvénients d'une telle démarche par rapport au HTML. (rapidité
d'exécution...) J'ai fait un petit "lab" <http://localhost/lab/tmp.html> pour
extraire le code nécessaire et étudier son fonctionnement. A noté, qu'il y a un
embryon de projet jquery ici :
<http://code.google.com/p/jquery-decorated/wiki/Documentation>

Pour des questions de rapidité de développement, je suis parti sur une solution
HTML et attachement des événements javascript.

le 02.04.08

WEBDAV
------

<http://ajaxian.com/archives/javascript-webdav-client>

TOOLS GENERATION
----------------

<http://iframe.in/>

*   uframe like iframe : avec ASP
    <http://ajaxian.com/archives/uframe-div-meets-iframe>

*   un autre exemple
    <http://ajaxian.com/archives/purple-include-transclusions-you-know-you-want-them>
    <http://codinginparadise.org/hypertext/purple-include/tests/main.html>

21 MUST HAVE SCRIPTS
--------------------

Scripts for various Javascript libraries, mainly jQuery, MooTools, and Prototype
<http://labs.iamkoa.net/2008/01/23/21-must-have-scripts-for-your-favorite-javascript-library-jquery-mootools-prototype/>

TRUNCATE
--------

jTruncate provides simple yet customizable truncation for text entities in your
web page. <http://jmar777.blogspot.com/2008/02/jtruncate-in-action.html>

RESIZE A BOX ACCORDING TO THE FONT
----------------------------------

<http://www.webdesignerwall.com/demo/expandable-box/>

HISTORY BACK FUNCTION
---------------------

<http://dshistory.googlecode.com/svn/tags/v1-beta1/examples/demo.html>

LOADING
-------

*   image de background <http://www.ajaxload.info/>

<http://ajaxian.com/archives/busyjs-loading-indicators-with-canvas>
<http://www.netzgesta.de/busy/>

<http://thecodecentral.com/2008/01/17/a-yui-loading-panel-widget>

FTP
---

<https://fit.jupiterit.com/>

STAR RATING RATE
----------------

*   avec jquery <http://plugins.learningjquery.com/half-star-rating/>
    <http://www.fyneworks.com/jquery/star-rating/>

JS TREE
-------

*   avec jQuery, très bien <http://abeautifulsite.net/notebook_files/58/demo/>

*   tres bien
    <http://ajaxian.com/archives/jstree-jquery-based-javascript-tree-component>

PRELOAD IMAGE
-------------

<http://ajaxian.com/archives/preloading-images-with-jquery>

COLOR PICKER
------------

*   @link html.memo

*   jquery <http://acko.net/dev/farbtastic>

SERVEUR SERVER
--------------

<http://nodejs.org/>

Sortie de Node.js 0.4.0
-----------------------

<http://linuxfr.org/2011/02/12/27858.html>

2011 is year of the Server-Side JavaScript
------------------------------------------

<http://labnotes.org/2010/12/29/2011-is-year-of-the-server-side-javascript/>

Développer votre webapp mobile avec Wink
----------------------------------------

<http://wink.developpez.com/tutoriels/javascript/developper-votre-webapp-mobile-avec-wink/>

*   performance <http://ajaxian.com/archives/aptana-jaxer-benchmarks>

*   test form
    <http://ajaxian.com/archives/form-access-control-via-jquery-and-jaxer>

*   template engine <http://ejohn.org/blog/javascript-micro-templating/>
    <http://ajaxian.com/archives/onionml-server-side-javascript-layout-engine>

*   avec Rhino
    <http://ajaxian.com/archives/rhino-on-rails-javascript-mvc-on-the-server>

CLAUSURE
--------

<http://www.javascriptkit.com/javatutors/closures2.shtml>

XMLHTTPREQUEST CROSS SITE
-------------------------

<http://ejohn.org/blog/cross-site-xmlhttprequest/>

ERLANG AND JAVASCRIPT
---------------------

<http://ajaxian.com/archives/erjs-erlang-in-javascript>

PROTOTYPE
---------

<http://ajaxian.com/archives/packing-down-prototype>

OVERLAODING SURCHARGE
---------------------

<http://ejohn.org/blog/javascript-method-overloading/>

PDF SHARING
-----------

<http://ejohn.org/blog/easy-pdf-sharing/>

LOADER
------

<http://ajaxian.com/archives/jsloader-on-demand-javascript-libraries>
<http://jsloader.com/>
<http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml>

SYNTHESE FRAMEWORK CSS JS
-------------------------

*   comparatif framework
    <http://ajaxian.com/archives/thinking-about-the-difference-between-frameworks>

<http://ajaxian.com/archives/monthly-ajaxian-roundup-for-august-2007-css-frameworks-and-the-reboot-of-top-frameworks>

LANGUAGE SYNTAX
---------------

<http://arstechnica.com/journals/linux.ars/2007/08/27/javascript-for-all-ages?foo>

TIME DATE DATE PICKER DATEPICKER
--------------------------------

*   avec jQuery (original)
    <http://www.dator.fr/13-scripts-open-souces-pour-vos-applications-e-commerce/>

*   time picker avec horloge <http://www.nogray.com/time_picker.php>
    <http://ajaxian.com/archives/a-new-spin-on-the-datepicker-control>

*   librairie <http://ejohn.org/blog/javascript-pretty-date/>

time var time = new Date() time = new Date() - time;

*   mettre les fichiers en cache
    <http://ajaxian.com/archives/cachefilenet-central-javascript-library-urls>

LOOP IMAGE MAGNIFIER
--------------------

<http://ajaxian.com/archives/loupejs-magnifier-component>
<http://ajaxian.com/archives/tjpzoom-3-more-image-zooming>
<http://ajaxian.com/archives/popbox-a-javascript-image-magnifier>

BOOK LIVRE FORMATION
--------------------

*   ensemble de function pour comprendre les mécanismes en Javascript
    <http://osteele.com/talks/ajaxian-2008/samples/>

*   book online <http://eloquentjavascript.net/contents.html>
    <http://ajaxian.com/archives/eloquent-javascript>

*   de John Resig
    <http://www.amazon.fr/exec/obidos/search-handle-url?_encoding=UTF8&search-type=ss&index=books-fr-intl-us&field-author=John%20Resig>

*   en français (attendre version js 2.0 ?)
    <http://www.oreilly.fr/catalogue/2841774155>
    <http://www.oreilly.com/catalog/jscript5/?CMP=BAC-O9C813484961>

*   sous forme de FAQ <http://javascript.developpez.com/faq/>
    <http://javascript.developpez.com/sources/>

*   tous les cours
    <http://www.misfu.com/static/Javascript/sommaire_javascript.html>
    <http://www.misfu.com/telecharger-cours-et-tutoriaux-informatique.html>

*   un autre cours de genève ;)
    <http://tecfa.unige.ch/guides/tie/html/js-intro/js-intro.html>

*   explication du DOM avec exemple
    <http://sergep.developpez.com/tutoriels/javascript/introduction/>

GALLERY GALERIE
---------------

*   très joli <http://www.dynamicdrive.com/dynamicindex4/simplegallery.htm>

*   lightbox jquery <http://nyromodal.nyrodev.com/>
    <http://buzz.typo3.org/people/ron-hall/article/the-year-of-the-lightbox/>

*   une qui ressemble a eco_gal <http://www.tine20.org/>

*   support 5 media <http://stickmanlabs.com/lightwindow/>

*   avec jquery (very smooth) <http://fancy.klade.lv/>

*   caroulsel gallery, spécial
    <http://www.piksite.com/carousel.us/carousel.us.php>

*   galerie soignée <http://www.no-margin-for-errors.com/projects/prettyPhoto/>

*   très, très sympa <http://www.electricprism.com/aeron/slideshow/>

*   sympa <http://www.huddletogether.com/projects/lightbox/>

*   proof of concept with canvas
    <http://ajaxian.com/archives/photo-collages-with-canvas>

*   fancyzoom <http://www.cabel.name/draft1/2008/02/fancyzoom-10.html>

*   toute simple <http://enlargeit.timos-welt.de/english/index.php>

*   jQuery, manque le escp + flèche droite gauche
    <http://www.no-margin-for-errors.com/projects/prettyPhoto/>

*   une autre sympa <http://www.mobyko.com/gallerydemo/mobykogallery/index.php>

*   image transition <http://ajaxorized.com/image-transition-manager/>

*   encore un joli lightbox complet (vidéo - form etc..)
    <http://www.nickstakenburg.com/projects/lightview/>

*   joli lightbox <http://www.nickstakenburg.com/projects/lightview/>

*   resemble à eco_gal <http://www.e2interactive.com/e2_photo_gallery/>

*   permet de faire des cadre autour d'une image <http://www.fotonotes.net/>

*   lightning très sympa <http://www.phatfusion.net/multibox/>

*   manque les flèches <http://www.cabel.name/2008/02/fancyzoom-10.html>

*   avec jquery, plugin cycle <http://malsup.com/jquery/cycle/>

*   excellente <http://vikjavev.no/highslide/>
    <http://www.huddletogether.com/projects/lightbox2/>
    <http://orangoo.com/labs/GreyBox/> <http://jquery.com/demo/thickbox/>
    <http://codylindley.com/Javascript/264/jtip-a-jquery-tool-tip>
    <http://ajaxian.com/archives/ajax-javascript-galleries-slideshows-and-effects-redux>
    \## DESIGN PATTERN
    <http://www.webreference.com/programming/javascript/ncz/column5/>

REGEXP
------

<https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions>

var re = /d(b+)(d)/ig; var result = re.exec("cdbBdbsbz");

var re = new RegExp("ab+c"); var result = re.exec("cdbBdbsbz");

TIMER
-----

var timer = setTimeout("ma_fonction()", delai); clearTimeout(timer);

SE DÉCLENCHE À INTERVALLES RÉGULIERS. var timer = setInterval("ma_fonction()",
delai); clearInterval(timer); #clearInterval appliqé à setInterval() :

MANIPULER DATE
--------------

*   libraire inétressante
    <http://ajaxian.com/archives/helpful-javascript-date-operations>


    var myDate=new Date()
    myDate.setFullYear(2010,0,14)

    And in the following example we set a Date object to be 5 days into the future:

    var myDate=new Date()
    myDate.setDate(myDate.getDate()+5)

    getDate() (rechercher le jour du mois)
    getDay() (rechercher le jour de la semaine)
    getHours() rechercher la partie heures de l'heure)
    getMinutes() (rechercher la partie minutes de l'heure)
    getMonth() (rechercher le mois)
    getSeconds() (rechercher la partie secondes de l'heure)
    getTime() (rechercher l'heure)
    getTimezoneOffset() (rechercher le décalage horaire avec l'heure locale)
    getYear() (rechercher l'année)
    parse() (rechercher le nombre de millièmes de secondes depuis le 1/1/1970)
    setDate() (fixer le jour du mois) 
    setHours() (fixer la partie heures de l'heure)
    setMinutes() (fixer la partie minutes de l'heure)
    setSeconds() (fixer la partie secondes de l'heure)
    setTime() (int)
    setYear() (fixer l'année)
    toGMTString() (convertir le moment au format GMT)
    toLocaleString() (convertir le moment au format local)
    UTC(year,month,day,hours,minutes,seconds,ms) 
    * (rechercher le nombre de millièmes de secondes entre le 1/1/1970 et un moment donné)

MANIPULER ARRAY
---------------

*   à la manière de PHP (array_diff - array_flip etc...)
    <http://kevin.vanzonneveld.net/techblog/article/phpjs_licensing/>

<http://fr.selfhtml.org/javascript/objets/array.htm>

    tableaux associatifs (tableaux avec des chaînes de caractères comme clé)
    employe[1]=new Array()
    employe[1]["nom"] = "Amora";
    employe[1]["prenom"] = "Celeste";

    Méthodes:

    concat() (concaténer des tableaux)
    join() (transformer un tableau en chaîne de caractères)
    pop() (effacer le dernier élément d'un tableau)
    push() (ajouter de nouveaux éléments à un tableau)
    reverse() (inverser l'ordre des éléments)
    shift() (retirer le premier élément d'un tableau)
    slice() (extraire une partie d'un tableau)
    splice() (effacer et ajouter des éléments)
    sort() (trier un tableau)
    unshift() ((insérer des éléments au début d'un tableau)

MODIFIERS
---------

*   /g enables "global" matching. When using the replace() method, specify this
    modifier to replace all matches, rather than only the first one.

*   /i makes the regex match case insensitive.

*   /m enables "multi-line mode". In this mode, the caret and dollar match
    before and after newlines in the subject string.
