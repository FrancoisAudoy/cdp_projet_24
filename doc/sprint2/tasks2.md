# Conduite de projet - Tâches du sprint 2

| ID | Tâche | Difficulté | User Story associée | Durée de réalisation (en jours/homme) | Avancement | Développeur |
|:--:|:-----:|:----------:|:-------------------:|:-------------------------------------:|:----------:|:-----------:|
| 1 | Implémenter le fichier "listProj.html". | 2 | 3 | 0.5 | DOING | François |
| 2 | Implémenter le fichier "listProj.js". | 2 | 3 | 0.5 | DOING | François |
| 3 | Implémenter le fichier "propProj.html". | 2 | 4 | 0.5 | DOING | François |
| 4 | Implémenter le fichier "propProj.js". | 3 | 4 | 0.5 | DOING | François |
| 5 | Implémenter le fichier "backlog.html". | 2 | 6 | 0.5 | DOING | Maxime |
| 6 | Implémenter le fichier "backlog.js". | 2 | 6 | 0.5 | DOING | Maxime |
| 7 | Implémenter le fichier "formBacklog.html". | 2 | 7 | 0.5 | DOING | Maxime |
| 8 | Implémenter le fichier "formBacklog.js" | 3 | 7-8 | 1 | DOING | Maxime |
| 9 | Créer un fichier "query.js" qui est composé des fonctions permettant d'interagir avec le serveur, telles que "getAllProjects()", "createProject(String name)", "getProjectBacklog(String name)", "addUserStory(String projectName, String description, int difficulte, String priorite)" et "updateUserStory(String projectName, int US_ID, String description, int difficulté, String priorite)". | 1 | 3-4-6-7-8 | 0.5 | DONE | Charles |
| 10 | Implémenter le fichier "query.js". | 3 | 3-4-6-7-8 | 1 | DOING | Charles |
| 11 | Implémenter le fichier "server.js". | 5 | / | 2 | DOING | François |
| 12 | Créer un fichier "cdp.db" qui permet d'enregistrer toutes les informations. Il est composé de 2 collections : "Projet(int ID, String nom)" et "User_Story(int ID, int ID_projet, String description, int difficulté, String priorité)". | 1 | / | 0.5 | DONE | Charles |
| 13 | Implémenter le fichier "cdp.db". | 2 | / | 0.5 | DONE | Charles |
| 14 | Implémenter le fichier "index.html". | 1 | / | 0.5 | DOING | François |
| 15 | Ecrire le test pour pouvoir voir la liste des projets. | 3 | 3 | 1 | TODO | Maxime |
| 16 | Jouer le test précédent. | 1 | 3 | 0.5 | TODO | Maxime |
| 17 | Ecrire le test pour pouvoir créer un nouveau projet. | 3 | 4 | 1 | TODO | Maxime |
| 18 | Jouer le test précédent. | 1 | 4 | 0.5 | TODO | Maxime |
| 19 | Ecrire le test pour accéder au BackLog d'un projet. | 3 | 6 | 1 | TODO | Maxime |
| 20 | Jouer le test précédent. | 1 | 6 | 0.5 | TODO | Maxime |
| 21 | Ecrire le test pour ajouter une User Story à un projet. | 3 | 7 | 1 | TODO | François |
| 22 | Jouer le test précédent. | 1 | 7 | 0.5 | TODO | François |
| 23 | Ecrire le test pour modifier ou supprimer une User Story. | 3 | 8 | 1 | TODO | Charles |
| 24 | Jouer le test précédent. | 1 | 8 | 0.5 | TODO | Charles |
| 25 | Ajouter et configurer Travis sur Github, afin d'avoir des tests entièrements automatisés. | 2 | / | 1 | TODO | François |
