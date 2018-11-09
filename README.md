# Conduite de projet

[Guide d'installation](installer-guide.md)

## BackLog

| ID | User Story | Difficulté | Priorité |
|:--:|:-----------:|:----------:|:--------:|
| 1 | En tant que développeur, je souhaite pouvoir me créer un compte afin de pouvoir interagir avec l'application. Pour cela, à partir de la page de login, je clique sur le bouton "Créer un compte", qui renvoie vers un formulaire demandant nom, prénom, adresse e-mail et mot de passe. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Tous les champs sont obligatoires. Le bouton "Annuler" redirige vers la page de login et le bouton "Sauvegarder" redirige soit vers la liste de mes projets si c'est validé, soit vers le formulaire s'il y a un problème. | 2 | MOYENNE |
| 2 | En tant que développeur, je souhaite pouvoir m'identifier afin de pouvoir interagir avec l'application. Pour cela, à partir de la page de login, je peux entrer mon identifiant et mon mot de passe. Si c'est validé, alors je suis redirigé vers la liste de mes projets. Sinon, je reste sur la page de login. | 1 | MOYENNE |
| 3 | En tant que développeur, je souhaite pouvoir voir la liste des projets auxquels je suis associé après m'être connecté. Pour cela, après la phase de login, je suis redirigé vers une page qui liste les projets auxquels je suis associé. Les projets sont représentés par leur nom. | 1 | HAUTE |
| 4 | En tant que développeur, je souhaite pouvoir créer un nouveau projet en cliquant sur le bouton "Créer projet" sur la page de la liste des projets. Ce bouton redirige vers la page de propriétés du projet qui permet de définir un nom de projet. Définir le nom du projet est obligatoire. | 2 | HAUTE |
| 5 | En tant que développeur, je souhaite pouvoir ajouter d'autres développeurs à un projet. Pour cela, à partir de la page de propriétés du projet, je peux ajouter des comptes de développeurs déjà inscrits à l'application dans un tableau. Les développeurs ajoutés auront alors les mêmes droits que moi, c'est-à-dire un droit de modification sur tout ce qu'il est possible de modifier. | 1 | MOYENNE |
| 6 | En tant que développeur, je souhaite pouvoir accéder au BackLog d'un projet. Pour cela, je clique sur le projet sur la page de la liste de mes projets, et je suis redirigé vers la page de son BackLog. La page de BackLog est la liste des User Stories du projet, et chaque User Story est représentée par 4 champs : "ID", "Description", "Difficulté" et "Priorité". | 1 | HAUTE |
| 7 | En tant que développeur, je souhaite pouvoir ajouter une User Story à un projet, en cliquant sur le bouton "+" sur la page de BackLog du projet. Ce bouton redirige vers un formulaire composé de 3 champs : "Description", "Difficulté" et "Priorité". Seul le champ "Description" est obligatoire, et l'ID est attribué automatiquement. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Le bouton "Annuler" redirige vers la liste des User Stories non-modifiée. Le bouton "Sauvegarder" redirige soit vers la liste des User Stories si c'est validé, soit vers le formulaire s'il y a un problème. | 2 | HAUTE |
| 8 | En tant que développeur, je souhaite pouvoir modifier ou supprimer une User Story d'un projet, en cliquant sur le bouton "Modifier" ou "Supprimer" à côté de la User Story. Le bouton "Modifier" redirige vers le même formulaire que l'ajout d'User Story, mais pré-rempli avec les informations déjà enregistrées. | 1 | HAUTE |
| 9 | En tant que développeur, je souhaite pouvoir accéder à la liste des sprints d'un projet. Pour cela, à partir de la page de BackLog du projet, je clique sur le bouton "Sprints" qui redirige vers la page listant les sprints. Les sprints sont représentés par leur identifiant, leur date de début et leur date de fin. | 1 | HAUTE |
| 10 | En tant que développeur, je souhaite pouvoir ajouter un sprint à un projet. Pour cela, à partir de la page de la liste des sprints, je clique sur le bouton "+". Ce bouton redirige vers un formulaire composé de 2 champs : "Date de début" et "Date de fin". Les deux champs sont obligatoires, et l'ID est attribué automatiquement. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Le bouton "Annuler" redirige vers la liste des User Stories non-modifiée. Le bouton "Sauvegarder" redirige soit vers la liste des User Stories si c'est validé, soit vers le formulaire s'il y a un problème. | 1 | HAUTE |
| 11 | En tant que développeur, je souhaite pouvoir accéder à la liste des tâches d'un sprint. Pour cela, à partir de la page de la liste des sprints, je clique sur la ligne du sprint souhaitée et je suis redirigé vers la page de la liste des tâches de ce sprint. Les tâches sont représentées par 4 champs : "Description", "Difficulté", "User Story" (ID de la User Story associée) et "Durée de réalisation (j/h)". | 1 | HAUTE |
| 12 | En tant que développeur, je souhaite pouvoir ajouter une tâche dans un sprint. Pour cela, à partir de la page de la liste des tâches du sprint, je clique sur le bouton "+" sur la page. Ce bouton redirige vers un formulaire composé des champs "Description", "Difficulté", "User Story" et "Durée de réalisation". Seuls les champs "Description" et "User Story" sont obligatoires, et l'ID est attribué automatiquement. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Le bouton "Annuler" redirige vers la liste des tâches non-modifiée. Le bouton "Sauvegarder" redirige soit vers la liste des tâches si c'est validé, soit vers le formulaire s'il y a un problème. | 2 | HAUTE |
| 13 | En tant que développeur, je souhaite pouvoir modifier ou supprimer une tâche d'un sprint. Pour cela, à partir de la liste des tâches du sprint, je clique sur le bouton "Modifier" ou "Supprimer" à côté de la tâche. Le bouton "Modifier" redirige vers le même formulaire que l'ajout de tâche, mais pré-rempli avec les informations déjà enregistrées. | 1 | HAUTE |
| 14 | En tant que développeur, je souhaite pouvoir accéder à la liste des releases d'un projet (les releases sont composées de leur nom avec numéro de version et de leur horodatage). Pour cela, à partir de la page de BackLog du projet, je peux cliquer sur le bouton "Releases" qui mène à une page listant les releases du projet. | 1 | HAUTE |
| 15 | En tant que développeur, je souhaite pouvoir ajouter une release à un projet. Pour cela, à partir de la page listant les releases de ce projet, je peux cliquer sur le bouton "+" qui redirige vers un formulaire composé de 2 champs : "Nom" et "Horodatage". Tous les champs sont obligatoires. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Le bouton "Annuler" redirige vers la liste des releases non-modifiée. Le bouton "Sauvegarder" redirige soit vers la liste des releases si c'est validé, soit vers le formulaire s'il y a un problème. | 2 | HAUTE |
| 16 | En tant que développeur, je souhaite pouvoir accéder à un tableau d'avancement des tâches. Pour cela, à partir de la page d'un sprint, je clique sur le bouton "Avancement des tâches". Ce bouton me redirige vers nun tableau composé de 3 colonnes : "TODO", "DOING" et "DONE". Par défaut, toutes les tâches du sprint sont dans la colonne "TODO" sous la forme de leur identifiant. | 2 | HAUTE |
| 17 | En tant que développeur, je souhaite pouvoir changer le statut d'une tâche dans le tableau d'avancement des tâches d'un sprint. Pour cela, à partir de la page de ce tableau, je clique sur une tâche : un menu déroulant s'affiche et propose les choix "TODO", "DOING" et "DONE". En cliquant sur l'un de ces choix, la tâche est déplacée dans la colonne correspondante du tableau. | 1 | HAUTE |
| 18 | En tant que développeur, je souhaite pouvoir générer une Burndown Chart d'un sprint. Depuis la page du tableau d'avancement des tâches d'un sprint, je peux cliquer sur le bouton "Chart" qui va afficher la Burndown Chart par-dessus le contenu actuel de la page et l'assombrir. Il est possible de quitter l'affichage de la Burndown Chart grâce à un bouton "Retour" ou à un appui sur la touche Echap du clavier. La Burndown Chart est générée à partir de la liste de ces tâches et de la date de complétion de celles terminées. | 2 | HAUTE |
