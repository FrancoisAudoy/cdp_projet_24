# Conduite de projet - Tâches du sprint 1

| ID | Tâche | Difficulté | User Story associée | Durée de réalisation (en jours/homme) | Avancement | Développeur |
|:--:|:-----:|:----------:|:-------------------:|:-------------------------------------:|:----------:|:-----------:|
| 1 | Créer un fichier "docker-compose.yml" qui permet de configurer le docker. | 1 | / | 0.5 | TODO | Charles |
| 2 | Implémenter le fichier "docker-compose.yml". | 5 | / | 2 | TODO | Charles |
| 3 | Créer un fichier "listProj.html" qui décrit la structure de l'affichage de la liste non-ordonnée (sans numéro de ligne) des projets. | 1 | 3 | 0.5 | TODO | François |
| 4 | Implémenter le fichier "listProj.html". | 2 | 3 | 0.5 | TODO | François |
| 5 | Créer un fichier "listProj.js" qui permet de récupérer la liste des projets depuis la base de données via la fonction "getAllProjects()" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "listProj.html".  | 1 | 3 | 0.5 | TODO | François |
| 6 | Implémenter le fichier "listProj.js". | 2 | 3 | 0.5 | TODO | François |
| 7 | Créer un fichier "propProj.html" qui décrit la structure de l'affichage des propriétés d'un projet, c'est-à-dire un champ "Nom". | 1 | 4 | 0.5 | TODO | François |
| 8 | Implémenter le fichier "propProj.html". | 2 | 4 | 0.5 | TODO | François |
| 9 | Créer un fichier "propProj.js" qui permet de donner un nom à un projet via le champ "Nom" de la page "propProj.html" et de l'ajouter dans la base de données via la fonction "createProject(String name)" du fichier "query.js". Après avoir fini, il y a une redirection vers la page "listProj.html". | 1 | 4 | 0.5 | TODO | François |
| 10 | Implémenter le fichier "propProj.js". | 3 | 4 | 0.5 | TODO | François |
| 11 | Créer un fichier "backlog.html" qui décrit la structure de l'affichage du backlog d'un projet via une liste non-ordonnée (sans numéro de ligne). | 1 | 6 | 0.5 | DONE | Maxime |
| 12 | Implémenter le fichier "backlog.html". | 2 | 6 | 0.5 | TODO | Maxime |
| 13 | Créer un fichier "backlog.js" qui permet de récupérer le backlog d'un projet depuis la base de données via la fonction "getProjectBacklog(String name)" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "backlog.html". | 1 | 6 | 0.5 | DONE | Maxime |
| 14 | Implémenter le fichier "backlog.js". | 2 | 6 | 0.5 | TODO | Maxime |
| 15 | Créer un fichier "formBacklog.html" qui décrit la structure de l'affichage des champs à remplir d'une User Story, c'est-à-dire les champs "Description", "Difficulté" et "Priorité". | 1 | 7 | 0.5 | DONE | Maxime |
| 16 | Implémenter le fichier "formBacklog.html". | 2 | 7 | 0.5 | TODO | Maxime |
| 17 | Créer un fichier "formBacklog.js" qui permet d'ajouter ou de modifier une User Story via les champs de la page "formBacklog.html" puis d'appliquer les changements via les fonctions "addUserStory(String projectName, String description, int difficulte, String priorite)" et "updateUserStory(String projectName, int US_ID, String description, int difficulté, String priorite)" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "backlog.html". Après avoir fini, il y a une redirection vers la page "backlog.html". | 1 | 7-8 | 0.5 | DONE | Maxime |
| 18 | Implémenter le fichier "formBacklog.js" | 3 | 7-8 | 1 | TODO | Maxime |
| 19 | Créer un fichier "query.js" qui est composé des fonctions permettant d'interagir avec le serveur, telles que "getAllProjects()", "createProject(String name)", "getProjectBacklog(String name)", "addUserStory(String projectName, String description, int difficulte, String priorite)" et "updateUserStory(String projectName, int US_ID, String description, int difficulté, String priorite)". | 1 | 3-4-6-7-8 | 0.5 | TODO | Charles |
| 20 | Implémenter le fichier "query.js". | 3 | 3-4-6-7-8 | 1 | TODO | Charles |
| 21 | Créer un fichier "server.js" qui sert de back-end à l'application. Il permet de gérer les interactions entre la base de données et les requếtes : il exécute les requêtes que le fichier "query.js" lui envoie, et retourne au format JSON les données récupérées sur la base de données. | 1 | / | 0.5 | TODO | François |
| 22 | Implémenter le fichier "server.js". | 5 | / | 2 | TODO | François |
| 23 | Créer un fichier "cdp.db" qui permet d'enregistrer toutes les informations. Il est composé de 2 collections : "Projet(int ID, String nom)" et "User_Story(int ID, int ID_projet, String description, int difficulté, String priorité)". | 1 | / | 0.5 | TODO | Charles |
| 24 | Implémenter le fichier "cdp.db". | 2 | / | 0.5 | TODO | Charles |
| 25 | Ecrire le test pour pouvoir voir la liste des projets. | 3 | 3 | 1 | TODO | Maxime |
| 26 | Jouer le test précédent. | 1 | 3 | 0.5 | TODO | Maxime |
| 27 | Ecrire le test pour pouvoir créer un nouveau projet. | 3 | 4 | 1 | TODO | Maxime |
| 28 | Jouer le test précédent. | 1 | 4 | 0.5 | TODO | Maxime |
| 29 | Ecrire le test pour accéder au BackLog d'un projet. | 3 | 6 | 1 | TODO | Maxime |
| 30 | Jouer le test précédent. | 1 | 6 | 0.5 | TODO | Maxime |
| 31 | Ecrire le test pour ajouter une User Story à un projet. | 3 | 7 | 1 | TODO | François |
| 32 | Jouer le test précédent. | 1 | 7 | 0.5 | TODO | François |
| 33 | Ecrire le test pour modifier ou supprimer une User Story. | 3 | 8 | 1 | TODO | Charles |
| 34 | Jouer le test précédent. | 1 | 8 | 0.5 | TODO | Charles |
