#Conduite de projet - Tâches du sprint 1

| ID | Tâche | Difficulté | User Story associée | Durée de réalisation | Avancement |
|:--:|:-----:|:----------:|:-------------------:|:--------------------:|:----------:|
| 1 | Créer un fichier "docker-compose.yml" qui permet de configurer le docker. |  | / |  | TODO |
| 2 | Implémenter le fichier "docker-compose.yml". |  | / |  | TODO |
| 3 | Créer un fichier "listProj.html" qui décrit la structure de l'affichage de la liste non-ordonnée (sans numéro de ligne) des projets. |  | 3 |  | TODO |
| 4 | Implémenter le fichier "listProj.html". |  | 3 |  | TODO |
| 5 | Créer un fichier "listProj.js" qui permet de récupérer la liste des projets depuis la base de données via la fonction "getAllProjects()" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "listProj.html".  |  | 3 |  | TODO |
| 6 | Implémenter le fichier "listProj.js". |  | 3 |  | TODO |
| 7 | Créer un fichier "propProj.html" qui décrit la structure de l'affichage des propriétés d'un projet, c'est-à-dire un champ "Nom". |  | 4 |  | TODO |
| 8 | Implémenter le fichier "propProj.html". |  | 4 |  | TODO |
| 9 | Créer un fichier "propProj.js" qui permet de donner un nom à un projet via le champ "Nom" de la page "propProj.html" et de l'ajouter dans la base de données via la fonction "createProject(String name)" du fichier "query.js". Après avoir fini, il y a une redirection vers la page "listProj.html". |  | 4 |  | TODO |
| 10 | Implémenter le fichier "propProj.js". |  | 4 |  | TODO |
| 11 | Créer un fichier "backlog.html" qui décrit la structure de l'affichage du backlog d'un projet via une liste non-ordonnée (sans numéro de ligne). |  | 6 |  | TODO |
| 12 | Implémenter le fichier "backlog.html". |  | 6 |  | TODO |
| 13 | Créer un fichier "backlog.js" qui permet de récupérer le backlog d'un projet depuis la base de données via la fonction "getProjectBacklog(String name)" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "backlog.html". |  | 6 |  | TODO |
| 14 | Implémenter le fichier "backlog.js". |  | 6 |  | TODO |
| 15 | Créer un fichier "formBacklog.html" qui décrit la structure de l'affichage des champs à remplir d'une User Story, c'est-à-dire les champs "Description", "Difficulté" et "Priorité". |  | 7 |  | TODO |
| 16 | Implémenter le fichier "formBacklog.html". |  | 7 |  | TODO |
| 17 | Créer un fichier "formBacklog.js" qui permet d'ajouter ou de modifier une User Story via les champs de la page "formBacklog.html" puis d'appliquer les changements via les fonctions "addUserStory(String projectName, String description, int difficulte, String priorite)" et "updateUserStory(String projectName, int US_ID, String description, int difficulté, String priorite)" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "backlog.html". Après avoir fini, il y a une redirection vers la page "backlog.html". |  | 7-8 |  | TODO |
| 18 | Implémenter le fichier "formBacklog.js" |  | 7-8 |  | TODO |
| 19 | Créer un fichier "query.js" qui est composé des fonctions permettant d'interagir avec la base de données, telles que "getAllProjects()", "createProject(String name)", "getProjectBacklog(String name)", "addUserStory(String projectName, String description, int difficulte, String priorite)" et "updateUserStory(String projectName, int US_ID, String description, int difficulté, String priorite)". |  | 3-4-6-7-8 |  | TODO |
| 20 | Implémenter le fichier "query.js". |  | 3-4-6-7-8 |  | TODO |
| 21 | Créer un fichier "server.js"  |  | / |  | TODO |
| 22 | Implémenter le fichier "server.js" |  | / |  | TODO |
| 23 | Créer un fichier "cdp.db" qui permet d'enregistrer toutes les informations. Il est composé de 2 collections : "Projet(int ID, String nom)" et "User Story(int ID, int ID_projet, String description, int difficulté, String priorité)". |  | / |  | TODO |
| 24 | Implémenter le fichier "cdp.db". |  | / |  | TODO |
| 25 | Ecrire le test pour pouvoir voir la liste des projets. |  | 3 |  | TODO |
| 26 | Jouer le test précédent. |  | 3 |  | TODO |
| 27 | Ecrire le test pour pouvoir créer un nouveau projet. |  | 4 |  | TODO |
| 28 | Jouer le test précédent. |  | 4 |  | TODO |
| 29 | Ecrire le test pour accéder au BackLog d'un projet. |  | 6 |  | TODO |
| 30 | Jouer le test précédent. |  | 6 |  | TODO |
| 31 | Ecrire le test pour ajouter une User Story à un projet. |  | 7 |  | TODO |
| 32 | Jouer le test précédent. |  | 7 |  | TODO |
| 33 | Ecrire le test pour modifier ou supprimer une User Story. |  | 8 |  | TODO |
| 34 | Jouer le test précédent. |  | 8 |  | TODO |
