# Conduite de projet - Tâches du sprint 3

| ID | Tâche | Difficulté | User Story associée | Durée de réalisation (en jours/homme) | Avancement | Développeur |
|:--:|:-----:|:----------:|:-------------------:|:-------------------------------------:|:----------:|:-----------:|
| 1 | Créer un squelette d'application React en parallèle de l'ancienne version client web. | 1 | / | 0.5 | DONE | Charles |
| 2 | Mise à jour du docker-compose du projet pour intégrer l'application React et création du Dockerfile correspondant permettant de créer un conteneur nginx faisant aussi office de reverse proxy. | 2 | / | 0.5 | DONE | Charles |
| 3 | Intégrer à l'application React le fichier "listProj.html" qui décrit la structure de l'affichage de la liste non-ordonnée (sans numéro de ligne) des projets et un bouton "+" situé en dessous de cette liste redirigeant vers "propProj.html". | 2 | 3 | 0.5 | DONE | François |
| 4 | Intégrer à l'application React le fichier "listProj.js" qui permet de récupérer la liste des projets depuis la base de données via la fonction "getAllProjects()" du fichier "query.js", et d'ajouter ses éléments dans la liste définie dans le code de la page "listProj.html". De plus Intégrer à l'application React la fonction "toPropProj" appelée par le bouton "+". | 2 | 3 | 0.5 | DONE | François |
| 5 | Intégrer à l'application React le fichier "propProj.html" qui décrit la structure de l'affichage des propriétés d'un projet, c'est-à-dire un champ "Nom". Le bouton de confirmation du formulaire appelle la fonction "submitProjectName" et le bouton d'annulation appelle la fonction "toListProj". | 2 | 4 | 0.5 | Done | François |
| 6 | Intégrer à l'application React le fichier "propProj.js" qui permet de donner un nom à un projet via le champ "Nom" de la page "propProj.html" et de l'ajouter dans la base de données via la fonction "submitProjectName" qui appelle "createProject(String name)" du fichier "query.js". Après avoir fini, il y a une redirection vers la page "listProj.html". La fonction "toListProj" redirige vers la page "listProj.html" sans effectuer de changement. | 3 | 4 | 0.5 | DONE | François |
| 7 | Intégrer à l'application React le fichier "backlog.html" qui décrit la structure de l'affichage du backlog d'un projet via une liste non-ordonnée (sans numéro de ligne) et un bouton "+" situé en dessous du backlog redirigeant vers "formBacklog.html". | 2 | 6 | 0.5 | DONE | Maxime |
| 8 | Intégrer à l'application React le fichier "backlog.js" qui permet de récupérer le backlog d'un projet depuis la base de données via la fonction "getProjectBacklog(String name)" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "backlog.html". De plus Intégrer à l'application React la fonction "toFormBacklog" appelée par le bouton "+". | 2 | 6 | 0.5 | DONE | Maxime |
| 9 | Intégrer à l'application React le fichier "formBacklog.html" qui décrit la structure de l'affichage des champs à remplir d'une User Story, c'est-à-dire les champs "Description", "Difficulté" et "Priorité". Le bouton de confirmation du formulaire appelle la fonction "submitUserStory" et le bouton d'annulation appelle la fonction "toBacklog". | 2 | 7 | 0.5 | DONE | Maxime |
| 10 | Intégrer à l'application React le fichier "formBacklog.js" qui permet d'ajouter ou de modifier une User Story via les champs de la page "formBacklog.html" puis d'appliquer les changements via les fonctions "submitUserStory" et "updateUserStory" qui appellent respectivement "addUserStory(String projectName, String description, int difficulte, String priorite)" et "updateUserStory(String projectName, int US_ID, String description, int difficulté, String priorite)" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "backlog.html". Après avoir fini, il y a une redirection vers la page "backlog.html". La fonction "toBacklog" redirige vers la page "backlog.html" sans effectuer de changement. | 3 | 7-8 | 1 | DONE | Maxime |
| 11 | Factoriser le fichier "query.js" qui est composé des fonctions permettant d'interagir avec le serveur, telles que "getAllProjects()", "createProject(String name)", "getProjectBacklog(String name)", "addUserStory(String projectName, String description, int difficulte, String priorite)" et "updateUserStory(String projectName, int US_ID, String description, int difficulté, String priorite)". Créer les classes Issue, Task, Sprint, Backlog, Project. | 1 | 3-4-6-7-8 | 0.5 | DONE | Charles |
| 12 | Intégrer à l'application React le fichier "query.js". | 3 | 3-4-6-7-8 | 1 | DONE | Charles |
| 13 | Intégrer à l'application React le fichier "index.html" qui correspondra à notre page web d'entrée au site. Cette page contiendra seulement un bouton redirigeant vers la page listant les projets (listProj.html). | 1 | / | 0.5 | TODO | François |
| 14 | Adapter à React le test pour pouvoir voir la liste des projets. | 3 | 3 | 1 | TODO | Maxime |
| 15 | Jouer le test précédent. | 1 | 3 | 0.5 | TODO | Maxime |
| 16 | Adapter à React le test pour pouvoir créer un nouveau projet. | 3 | 4 | 1 | TODO | Maxime |
| 17 | Jouer le test précédent. | 1 | 4 | 0.5 | TODO | Maxime |
| 18 | Adapter à React le test pour accéder au BackLog d'un projet. | 3 | 6 | 1 | TODO | Maxime |
| 19 | Jouer le test précédent. | 1 | 6 | 0.5 | TODO | Maxime |
| 20 | Adapter à React le test pour ajouter une User Story à un projet. | 3 | 7 | 1 | TODO | François |
| 21 | Jouer le test précédent. | 1 | 7 | 0.5 | TODO | François |
| 22 | Adapter à React le test pour modifier ou supprimer une User Story. | 3 | 8 | 1 | TODO | Charles |
| 23 | Jouer le test précédent. | 1 | 8 | 0.5 | TODO | Charles |
| 24 | Créer le fichier "listSprint.js" qui permet de récupérer la liste des sprints d'un projet depuis l'api REST exposée par le serveur. Les sprints sont représentés par leur identifiant, leur date de début et leur date de fin. Les éléments de cette liste sont affichés dans la fenêtre principale de la SPA. | 2 | ? | 0.5 | TODO | Maxime |
| 25 | Ajouter au fichier "listSprint.js" une fonction permettant d'ajouter un sprint à un projet depuis l'api REST exposée par le serveur. Ajouter un bouton à l'interface permettant d'appeler cette fonction. | 2 | ? | 0.5 | DONE | Maxime |
| 26 | Créer le fichier "formSprint.js" qui permet d'ajouter ou de modifier un sprint à un projet en utilisant l'api REST exposée par le serveur. Les sprints sont représentés par leur identifiant, leur date de début et leur date de fin. Les champs à remplir sont affichés dans la fenêtre principale de la SPA. | 2 | ? | 0.5 | DOING | Maxime |
| 27 | Renommer le fichier "backlog.js" en "listIssues.js" et le modifier afin qu'il permette l'affichage des taches d'un sprint de la même manière que l'affichage du backlog. | 2 | ? | 0.5 | DONE | Maxime |
| 28 | Renommer le fichier "formBacklog.js" en "formIssue.js" et le modifier afin qu'il permette l'ajout ou la modification d'une issue à un sprint de la même manière qu'à un backlog. | 2 | ? | 0.5 | DONE | Maxime |
| 29 | Créer le test pour accéder à la liste des sprints d'un projet. | 2 | ? | 0.5 | TODO | François |
| 30 | Jouer le test précédent.  | 1 | ? | 0.5 | TODO | François |
| 31 | Créer les tests vérifiant l'ajout, la modification et la suppression d'un sprint à un projet.  | 3 | ? | 0.5 | TODO | François |
| 32 | Jouer le test précédent.  | 1 | ? | 0.5 | TODO | François |
| 33 | Créer le test pour accéder à la liste des taches d'un sprint.  | 2 | ? | 0.5 | TODO | François |
| 34 | Jouer le test précédent.  | 1 | ? | 0.5 | TODO | François |
| 35 | Créer les tests vérifiant l'ajout, la modification et la suppression d'une tache dans un sprint.  | 3 | ? | 0.5 | TODO | François |
| 36 | Jouer le test précédent.  | 1 | ? | 0.5 | TODO | François |

