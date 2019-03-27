---
date: 2019-03-22T17:12:50.000Z
public: true
title: Docker
---

Performance on Mac
------------------

<https://medium.com/@TomKeur/how-get-better-disk-performance-in-docker-for-mac-2ba1244b5b70>

Step zero: macOS High Sierra

Step one: Download and install the Edge version

Step two: Disk.raw

Restart automatically
---------------------

```
docker update --restart=no my-container
docker update --restart=always my-container
```

The info is in `/var/lib/docker/container//hostconfig.json`

check for RestartPolicy.Name = "always"

Run portainer locally
---------------------

    docker run -d -v "/var/run/docker.sock:/var/run/docker.sock" -p 9000:9000 --name portainer portainer/portainer

Enter container Jungfrau
------------------------

    # Selenium
    docker-compose exec selenium-chrome /bin/bash
    sudo su

    # typo3.local
    docker-compose exec typo3.local su www-data

Dockerizing a Node.js web app
-----------------------------

docker build -t <your username>/node-web-app .
docker images
docker run -p 49160:8080 -d <your username>/node-web-app
docker logs <container id>
docker exec -it <container id> /bin/bash
curl -i localhost:49160

<https://nodejs.org/en/docs/guides/nodejs-docker-webapp/>

draft
=====

A tool for developers to create cloud-native applications on Kubernetes.
<https://github.com/Azure/draft>

How do I reduce the size of Docker.qcow2?
=========================================

<https://docs.docker.com/docker-for-mac/faqs/#/how-do-i-reduce-the-size-of-dockerqcow2>

There is another big ARM surprise
=================================

<http://blog.hypriot.com/post/first-touch-down-with-docker-for-mac/>

Jenkins et Docker, le couple star des équipes DevOps ?
======================================================

<http://www.silicon.fr/jenkins-et-docker-le-couple-star-des-equipes-devops-151117.html>

Docker Engine devient nativement orchestrateur
==============================================

intègre nativement Swarm
<http://www.silicon.fr/docker-engine-nativement-orchestrateur-150887.html>

Docker in Production - IPC 2016
===============================

<http://www.slideshare.net/robertlemke/docker-in-production-ipc-2016>

Containers are not VMs
======================

<https://blog.docker.com/2016/03/containers-are-not-vms/> (comments below)

Many images on the hub however make these mistakes, and I would like to see clear guidelines and best practices for good, clean images. Many have ssh (use docker exec if you really need to), logger daemon (mount /dev/log in your container), cron (run externally please), database instances (run externally please), … built-in. 

My LifeCycle
------------

    docker build -t temp/php --no-cache=true .

Docker Machine
==============

<https://blog.docker.com/2015/05/online-meetup-video-docker-machine-0-2-0/> 

    -> time 25 min it begins
    -> interesting for log stash minute 44

    docker-machine create -d virtual box \
        --swarm \
        --swarm-master \
        --swarm-discovery tocken://123123fdf
        queenbee
        
    docker-machine create -d virtual box \
        --swarm \
        --swarm-discovery tocken://123123fdf
        workerbee0
        
    docker-machine ssh queenbee

    docker-machine env --swarm queenbee

    docker info

    docker ps -a | less -S

Vidéos:
<https://blog.docker.com/2015/04/docker-tutorial-6-dockerfile-part-1/>

<https://blog.docker.com/2015/04/docker-tutorial-5-basic-networking/>
Sur la partie orchestration et gestion, Docker 1.6 embarque les récentes fonctionnalités d’orchestration dévoilées à DockerCon en décembre dernier. Machine, Swarm et Compose. Le premier, Machine, est en version beta et s’adresse aux développeurs et administrateurs systèmes pour passer selon la société de « zero à Docker » avec une seule commande portable sur différentes infrastructures. Swarm, lui aussi en version beta, propose lui de gérer ce déploiement à grande échelle au sein d’un cluster en s’occupant de la planification des tâches. Et enfin, Compose qui donne aux développeurs la capacité de déployer du multi-conteneurs à partir d’un simple fichier déclaratif YAML (Ain’t Markup Language).
<http://www.silicon.fr/docker-engine-1-6-pense-aux-ops-et-officialise-le-client-windows-114275.html>

Edit files in Docker containers
===============================

1.  based on zed but didn't fully worked
    <http://blog.sequenceiq.com/blog/2014/09/24/edit-files-docker/>

2.  Did not test: you find yourself editing nginx config files? Don’t do it, use the great generic nginx appliance from Jeff Lindsay
    <https://github.com/progrium/nginx-appliance>

3.  Other solution from Blog


    docker run -v /usr/local/bin:/target jpetazzo/nsenter
    PID=$(docker inspect --format {{.State.Pid}} htdocs_web_1)
    nsenter --target $PID --mount --uts --ipc --net --pid

<http://blog.docker.com/2014/06/why-you-dont-need-to-run-sshd-in-docker/>

    create an alias
    docker-enter() { PID=$(docker inspect --format {{.State.Pid}} "$@"); nsenter --target $PID --mount --uts --ipc --net --pid;}

Docker Explained: How To Containerize and Use Nginx as a Proxy
==============================================================

<https://www.digitalocean.com/community/tutorials/docker-explained-how-to-containerize-and-use-nginx-as-a-proxy>

OpenVPN on docker
=================

with upstream daemon explained
<https://www.digitalocean.com/community/tutorials/how-to-run-openvpn-in-a-docker-container-on-ubuntu-14-04>

How To Dockerise And Deploy Multiple WordPress Applications On Ubuntu
=====================================================================

* with memory limit
* with different port
* example of reverse proxy in the comments
* question of volumes
<https://www.digitalocean.com/community/tutorials/how-to-dockerise-and-deploy-multiple-wordpress-applications-on-ubuntu>

Docker-gen
==========

docker-gen is a file generator that renders templates using docker container meta-data.

There are three common ways to run docker-gen:

    on the host
    bundled in a container with another application
    separate standalone containers

<https://github.com/jwilder/docker-gen>

Fully integrate containers in your network.
===========================================

<https://github.com/xlucas/docker-flatip#adding_ip>

Access Docker Containers via Internal Ip
========================================

<http://lalyos.github.io/blog/2013/10/06/access-docker-containers-via-internal-ip/>

<http://matthewkwilliams.com/index.php/2015/03/23/shrinking-docker-images/>
Shrinking Docker Images

Persistent volumes with Docker - Data-only container pattern
============================================================

<http://container42.com/2013/12/16/persistent-volumes-with-docker-container-as-volume-pattern/>

difference btw CMD and ENTRYPOINT
=================================

docker run redisimg redis -H something -u toto get key
ENTRYPOINT ["redis", "-H", "something", "-u", "toto"]

docker run redisimg get key

<http://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile>

Exemples
========

Docker based TYPO3 Installation based on composer

<https://github.com/dkd/docker-typo3>

<https://registry.hub.docker.com/u/hbokh/docker-typo3-cms-wheezy/>

<https://registry.hub.docker.com/u/dkdde/typo3/>

<https://registry.hub.docker.com/u/hbokh/docker-typo3-cms/> (with github)
<https://github.com/million12/docker-typo3-flow-neos-abstract> (with github)

What Challenges to Avoid When Migrating to Docker
=================================================

<http://logz.io/migrating-to-docker/>

Virtualization VS containerization
<http://containerz.blogspot.ch/2015/03/virtualization-vs-containerization.html>

A Not Very Short Introduction to Docker
=======================================

<http://anders.janmyr.com/2015/03/a-not-very-short-introduction-to-docker.html>

Your very own server with Docker (talk about coreos, rather use ubuntu server for now)
======================================================================================

<http://erwyn.piwany.com/your-very-own-server-with-docker/>

Hybrid deploy with Docker and Surf
==================================

<http://dimaip.github.io/2015/03/03/hybrid-deploy-with-docker-and-surf/>

<https://registry.hub.docker.com/repos/typo3/>

Peter + Stucki:

*   Micro-service
*   A minimal Ubuntu base image modified for Docker-friendliness - <https://github.com/phusion/baseimage-docker>

Inspect
=======

docker inspect -f "{{ .Config.Image }}" web
docker inspect -f "{{ .HostConfig.Links }}" web

Remove all stopped containers.
==============================

```
docker rm $(docker ps -a -q)
```

Remove all untagged images
==========================

```
docker rmi $(docker images | grep "^<none>" | awk "{print $3}") 
```

Detach / attach
===============

```
docker run -d CONTAINER

docker attach NAME (?)
docker attach --sig-proxy=false NAME 
but I cannot exit it, not with CTRL-C, nor with CTRL-P + CTRL-Q (like suggested in the similar question above)

To recap:
docker run -t -i → can be detached with ^P^Q and reattached with docker attach
docker run -i → cannot be detached with ^P^Q; will disrupt stdin
docker run → cannot be detached with ^P^Q; can SIGKILL client; can reattach with docker attach
```

Port forwarding
===============

You can do it temporarily, using ssh:

boot2docker ssh -L 8000:localhost:8000

or you can set up a permanent VirtualBox NAT Port forwarding:

VBoxManage modifyvm "boot2docker-vm" --natpf1 "tcp-port8000,tcp,,8000,,8000";

<https://github.com/boot2docker/boot2docker/blob/master/doc/WORKAROUNDS.md>

Dockerignore
============

.dockerignore is to prevent files from being added to the initial build context that is sent to the docker daemon when you do docker build, it doesn't create a global rule for excluding files from being created in all images generated by a Dockerfile.

It's important to note that each RUN statement will generate a new image, with the parent of that image being the image generated by the Dockerfile statement above it. Try collapsing your RUN statements into a single one to reduce image size:
RUN librarian-puppet install &&\\

Docker étoffe ses outils d’orchestration des conteneurs
=======================================================

<http://www.silicon.fr/docker-etoffe-ses-outils-dorchestration-des-conteneurs-109535.html>

Docker Networking 101 – The defaults
====================================

<http://www.dasblinkenlichten.com/docker-networking-101/>

PHP-FPM in Docker
=================

<http://blog.famillecollet.com/post/2014/12/11/PHP-FPM-in-Docker>

une roadmap orchestrée pour l’entreprise et les développeurs
============================================================

<http://blog.docker.com/2014/12/announcing-docker-machine-swarm-and-compose-for-orchestrating-distributed-apps/>

<http://www.silicon.fr/docker-une-roadmap-orchestree-pour-lentreprise-et-les-developpeurs-103532.html>

\-> machine
\-> swarm

Docker Machine élargit encore les capacités de portabilité des applications distribuées en facilitant le processus de déploiement des conteneurs sur les différentes infrastructures avec le runtine du moteur de Docker.

Docker Swarm est un service natif de clustering qui fonctionne avec les moteurs Docker, provisionnés par le nouveau service Docker Machine. En programmant automatiquement les charges de travail et l'allocation des ressources des containers, Docker Swarm offre aux utilisateurs une bonne performance et une haute disponibilité, tout en éliminant la gestion manuelle des ressources, qui est inefficace et source d'erreurs. 

Quant au service Docker Compose, il fournit aux développeurs la capacité d'assembler des applications de conteneurs Docker interopérables totalement indépendantes de toute infrastructure sous-jacente, permettant ainsi aux piles d'applications distribuées d'être déployées n'importe où et à n'importe quel moment.

<http://www.developpez.com/actu/78764/Docker-devoile-de-nouvelles-fonctionnalites-d-orchestration-pour-maintenir-et-executer-les-applications-conteneurisees/>

How to Optimize Your Dockerfile
===============================

<http://blog.tutum.co/2014/10/22/how-to-optimize-your-dockerfile/>

Docker Global Hack Day: Fig Demo'd by Daniel Nephin of Yelp
===========================================================

<https://www.youtube.com/watch?v=bYfwFkeeUL4> (example with wreathedocs)

Introduction to Dockerfiles
===========================

<http://formatccolon.com/introduction-to-dockerfiles/?utm_source=Docker+News&utm_campaign=3432c436f6-Docker_Weekly_November_12th_201411_11_2014&utm_medium=email&utm_term=0_c0995b6e8f-3432c436f6-235802529>

A PHP development environment with Docker
=========================================

<http://geoffrey.io/a-php-development-environment-with-docker.html>

Deploying Go servers with Docker
================================

<http://blog.golang.org/docker>

CoreOS se paye Quay.io, un référentiel privé pour les conteneurs Docker
<http://www.silicon.fr/coreos-se-paye-quay-io-referentiel-prive-les-conteneurs-docker-96142.html>

système de packaging qui permet de prendre n’importe quel code source, n’importe quelle application et de l’envelopper, avec toutes ses dépendances, dans un objet unique
<http://www.silicon.fr/docker-google-federe-alliance-anti-aws-96219.html>

JoliCi - Run your TravisCi builds locally
=========================================

<https://github.com/jolicode/JoliCi>

Welcome to the Docker weekly newsletter,
========================================

<http://go.docker.com/webmail/44082/45623285/2bb39b4cceab51f0a385ab0f042a0ce6>

Lessons learned after "Dockerizing" a Rails app.
================================================

<http://danielmartins.ninja/posts/a-week-of-docker.html>

Running Kubernetes Example on CoreOS, Part 1 + 2
<https://coreos.com/blog/running-kubernetes-example-on-CoreOS-part-1>

<https://coreos.com/blog/running-kubernetes-example-on-CoreOS-part-2/>

<https://www.youtube.com/watch?v=tsk0pWf4ipw>

GoogleCloudPlatform/kubernetes
==============================

<https://github.com/GoogleCloudPlatform/kubernetes> concurrent de Orchard

Docker s’offre Orchard Laboratories pour orchestrer les conteneurs
<http://www.silicon.fr/docker-soffre-orchard-laboratories-orchestrer-les-conteneurs-95774.html>

La folie Docker
===============

<http://linuxfr.org/news/la-folie-docker>

<http://ippon.developpez.com/tutoriels/virtualisation/docker-presentation-part-2/>

Terminology
===========

container -> volume
template 

Life cycle
==========

```

docker build --rm -t stucki/typo3server .

docker run -i -t ubuntu:14.04 
docker run -i -t xxxx /bin/bash
docker ps -a

docker-kill-all

docker-clean-containers

docker run -i -t -p 49800:80 -p 49801:6081 stucki/drupal /bin/bash
docker run -i -t -p 8080:80 -p 49801:6081 fudriot/drupal supervisord

docker export
docker commit -a "Author" xxxxx stucki/drupal
docker push stucki/drupal

docker rmi

tail -f /var/log/supervisor/supervisord.log 
```

Alternative as supervisord?
===========================

<http://blog.sequenceiq.com/blog/2014/05/09/building-the-build-environment-with-ansible-and-docker/>

Example:

<https://github.com/ricardoamaro/docker-drupal>

<https://github.com/tutumcloud/tutum-docker-mysql>

Je ne l'ai pas mis dans la news mais notre dernier jouet à la mode c'est Docker, si vous voulez tester du Tuleap dans du Docker c'est:
$> docker run -ti -e VIRTUAL_HOST=localhost -p 80:80 -p 443:443 -p 22:22 -v /srv/docker/pink:/data enalean/tuleap-aio
Plus d'info sur l'index docker
On essaye de documenter nos trouvailles ici sur le blog

<http://www.enalean.com/en/Pack-Tuleap-in-Docker-container-part-1>

<https://index.docker.io/>

<https://hub.docker.com>

<https://registry.hub.docker.com/>

<https://registry.hub.docker.com/repos/stucki/>

How to Manage your Docker Image
===============================

<https://gist.github.com/wsargent/7049221>

<https://portal-hoth.basespace.illumina.com/docs/content/documentation/native-apps/manage-docker-image>

Docker repository
=================

<https://hub.docker.com/account/>

Effortless Docker-in-a-box for unsupported Docker platforms, like the Mac
=========================================================================

<http://fnichol.github.io/dvm/>

```
brew cask install vagrant    --appdir=/Applications
brew cask install virtualbox --appdir=/Applications
```

Quick Install
-------------

Install Docker Mac binary
=========================

```
brew install docker
```

Install dvm
===========

```
brew tap fnichol/dvm
brew install dvm
```

Bring up your Vagrant/Docker VM
===============================

```
dvm up
```

Set a DOCKER_HOST environment variable that points to your VM
=============================================================

```
eval $(dvm env)
```

Run plain 'ol Docker commands right from your Mac
=================================================

```
docker run ubuntu cat /etc/lsb-release
```

Gérer les containers avec Docker
================================

<http://linuxfr.org/news/gerer-les-containers-avec-docker>

SSH HostKeys Plugin for Dokku
Manage hostkeys (for .ssh/known_hosts) to your container environment

<https://github.com/cedricziel/dokku-hostkeys-plugin>

Docker – The Linux container runtime
====================================

<http://docs.docker.io/en/latest/>

Packer
======

What Is Packer?
Packer is an open source tool for creating identical machine images for multiple platforms from a single source configuration. Packer is lightweight, runs on every major operating system, and is highly performant, creating machine images for multiple platforms in parallel. 

<http://www.packer.io/downloads.html>

<https://github.com/datenbetrieb/packer-boxdefinitions>

Index
=====

<https://index.docker.io/search?q=wordpress>

Drupal on Docker
================

<http://robknight.org.uk/blog/2013/05/drupal-on-docker/>

Deploying django using docker
=============================

<http://agiliq.com/blog/2013/06/deploying-django-using-docker/>

Docker 0.3.0 release note, May 6 2013
=====================================

<https://github.com/dotcloud/docker/wiki/Docker-0.3.0-release-note,-May-6-2013>

using vagrant or docker.io for creating isolated env
====================================================

<http://stackoverflow.com/questions/16647069/using-vagrant-or-docker-io-for-creating-isolated-env>

Interestingly, Vagrant and Docker may actually be complimentary. Vagrant can be extended to support different virtualization providers, and it may be possible that Docker is one such provider which gets support in the near future. See <https://github.com/dotcloud/docker/issues/404> for recent discussion on the topic.

==> Pouring docker-1.1.2.mavericks.bottle.tar.gz
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

zsh completion has been installed to:
  /usr/local/share/zsh/site-functions