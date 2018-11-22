# Conduite de projet - Tâches du sprint 2

| ID | Tâche | Difficulté | User Story associée | Durée de réalisation (en jours/homme) | Avancement | Développeur |
|:--:|:-----:|:----------:|:-------------------:|:-------------------------------------:|:----------:|:-----------:|
| 1 | Implémenter le fichier "listProj.html" qui décrit la structure de l'affichage de la liste non-ordonnée (sans numéro de ligne) des projets. | 2 | 3 | 0.5 | DOING | François |
| 2 | Implémenter le fichier "listProj.js" qui permet de récupérer la liste des projets depuis la base de données via la fonction "getAllProjects()" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "listProj.html". | 2 | 3 | 0.5 | DOING | François |
| 3 | Implémenter le fichier "propProj.html" qui décrit la structure de l'affichage des propriétés d'un projet, c'est-à-dire un champ "Nom". | 2 | 4 | 0.5 | DOING | François |
| 4 | Implémenter le fichier "propProj.js" qui permet de donner un nom à un projet via le champ "Nom" de la page "propProj.html" et de l'ajouter dans la base de données via la fonction "createProject(String name)" du fichier "query.js". Après avoir fini, il y a une redirection vers la page "listProj.html". | 3 | 4 | 0.5 | DOING | François |
| 5 | Implémenter le fichier "backlog.html" qui décrit la structure de l'affichage du backlog d'un projet via une liste non-ordonnée (sans numéro de ligne). | 2 | 6 | 0.5 | DOING | Maxime |
| 6 | Implémenter le fichier "backlog.js" qui permet de récupérer le backlog d'un projet depuis la base de données via la fonction "getProjectBacklog(String name)" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "backlog.html". | 2 | 6 | 0.5 | DOING | Maxime |
| 7 | Implémenter le fichier "formBacklog.html" qui décrit la structure de l'affichage des champs à remplir d'une User Story, c'est-à-dire les champs "Description", "Difficulté" et "Priorité".| 2 | 7 | 0.5 | DOING | Maxime |
| 8 | Implémenter le fichier "formBacklog.js" qui permet d'ajouter ou de modifier une User Story via les champs de la page "formBacklog.html" puis d'appliquer les changements via les fonctions "addUserStory(String projectName, String description, int difficulte, String priorite)" et "updateUserStory(String projectName, int US_ID, String description, int difficulté, String priorite)" du fichier "query.js", et d'ajouter ses éléments dans le DOM de la page "backlog.html". Après avoir fini, il y a une redirection vers la page "backlog.html". | 3 | 7-8 | 1 | DOING | Maxime |
| 9 | Créer un fichier "query.js" qui est composé des fonctions permettant d'interagir avec le serveur, telles que "getAllProjects()", "createProject(String name)", "getProjectBacklog(String name)", "addUserStory(String projectName, String description, int difficulte, String priorite)" et "updateUserStory(String projectName, int US_ID, String description, int difficulté, String priorite)". | 1 | 3-4-6-7-8 | 0.5 | DONE | Charles |
| 10 | Implémenter le fichier "query.js". | 3 | 3-4-6-7-8 | 1 | DOING | Charles |
| 11 | Implémenter le fichier "server.js" qui sert de back-end à l'application. Il permet de gérer les interactions entre la base de données et les requếtes : il exécute les requêtes que le fichier "query.js" lui envoie, et retourne au format JSON les données récupérées sur la base de données. | 5 | / | 2 | DOING | François |
| 12 | Créer un fichier "cdp.db" qui permet d'enregistrer toutes les informations. Il est composé de 2 collections : "Projet(int ID, String nom)" et "User_Story(int ID, int ID_projet, String description, int difficulté, String priorité)". | 1 | / | 0.5 | DONE | Charles |
| 13 | Implémenter le fichier "cdp.db". | 2 | / | 0.5 | DONE | Charles |
| 14 | Implémenter le fichier "index.html" qui correspondra à notre page web d'entrée au site. Cette page contiendra seulement un bouton redirigeant vers la page listant les projets (listProj.html). | 1 | / | 0.5 | DOING | François |
| 15 | Ecrire le test pour pouvoir voir la liste des projets. | 3 | 3 | 1 | DOING | Maxime |
| 16 | Jouer le test précédent. | 1 | 3 | 0.5 | TODO | Maxime |
| 17 | Ecrire le test pour pouvoir créer un nouveau projet. | 3 | 4 | 1 | DOING | Maxime |
| 18 | Jouer le test précédent. | 1 | 4 | 0.5 | TODO | Maxime |
| 19 | Ecrire le test pour accéder au BackLog d'un projet. | 3 | 6 | 1 | DOING | Maxime |
| 20 | Jouer le test précédent. | 1 | 6 | 0.5 | TODO | Maxime |
| 21 | Ecrire le test pour ajouter une User Story à un projet. | 3 | 7 | 1 | TODO | François |
| 22 | Jouer le test précédent. | 1 | 7 | 0.5 | TODO | François |
| 23 | Ecrire le test pour modifier ou supprimer une User Story. | 3 | 8 | 1 | TODO | Charles |
| 24 | Jouer le test précédent. | 1 | 8 | 0.5 | TODO | Charles |
| 25 | Ajouter et configurer Travis sur Github, afin d'avoir des tests entièrements automatisés. | 2 | / | 1 | DONE | François |
