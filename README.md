# Conduite de projet - BackLog

| ID | User Story | Difficulté | Priorité |
|:--:|:-----------:|:----------:|:--------:|
| 1 | En tant que développeur, je souhaite pouvoir me créer un compte afin de pouvoir interagir avec l'application. Pour cela, à partir de la page de login, je clique sur le bouton "Créer un compte", qui renvoie vers un formulaire demandant nom, prénom, adresse e-mail et mot de passe. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Tous les champs sont obligatoires. Le bouton "Annuler" redirige vers la page de login et le bouton "Sauvegarder" redirige soit vers la liste de mes projets si c'est validé, soit vers le formulaire s'il y a un problème. | 2 |  |
| 2 | En tant que développeur, je souhaite pouvoir m'identifier afin de pouvoir interagir avec l'application. Pour cela, à partir de la page de login, je peux entrer mon identifiant et mon mot de passe. Si c'est validé, alors je suis redirigé vers la liste de mes projets. Sinon, je reste sur la page de login. | 1 |  |
| 3 | En tant que développeur, je souhaite pouvoir voir la liste des projets auxquels je suis associé après m'être connecté. Pour cela, après la phase de login, je suis redirigé vers une page qui liste les projets auxquels je suis associé. | 1 |  |
| 4 | En tant que développeur, je souhaite pouvoir créer un nouveau projet en cliquant sur le bouton "Créer projet" sur la page de la liste des projets. Ce bouton redirige vers la page de propriétés du projet qui permet de définir un nom de projet. Définir le nom du projet est obligatoire. | 2 |  |
| 5 | En tant que développeur, je souhaite pouvoir ajouter d'autres développeurs à un projet. Pour cela, à partir de la page de propriétés du projet, je peux ajouter des comptes de développeurs déjà inscrits à l'application dans un tableau. Les développeurs ajoutés auront alors les mêmes droits que moi, c'est-à-dire un droit de modification sur tout ce qu'il est possible de modifier. | 1 |  |
| 6 | En tant que développeur, je souhaite pouvoir accéder au BackLog d'un projet. Pour cela, je clique sur le projet sur la page de la liste de mes projets, et je suis redirigé vers la page de son BackLog. | 1 |  |
| 7 | En tant que développeur, je souhaite pouvoir ajouter une User Story à un projet, en cliquant sur le bouton "+" sur la page de BackLog du projet. Ce bouton redirige vers un formulaire composé de 6 champs : "ID", "Description", "Difficulté", "Priorité", "Sprint" et "Tâches" (décrivant l'avancée des tâches). Seuls les champs "ID" et "Description" sont obligatoires. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Le bouton "Annuler" redirige vers la liste des User Stories non-modifiée. Le bouton "Sauvegarder" redirige soit vers la liste des User Stories si c'est validé, soit vers le formulaire s'il y a un problème. | 2 |  |
| 8 | En tant que développeur, je souhaite pouvoir modifier ou supprimer une User Story d'un projet, en cliquant sur le bouton "Modifier" ou "Supprimer" à côté de la User Story. Le bouton "Modifier" redirige vers le même formulaire que l'ajout d'User Story, mais pré-rempli avec les informations déjà enregistrées. | 1 |  |
| 9 | En tant que développeur, je souhaite pouvoir accéder à la liste des sprints d'un projet. Pour cela, à partir de la page de BackLog du projet, je clique sur le bouton "Sprints" qui redirige vers la page listant les sprints. | 1 |  |
| 10 | En tant que développeur, je souhaite pouvoir ajouter un sprint à un projet. Pour cela, à partir de la page de la liste des sprints, je clique sur le bouton "+". Les sprints ne sont composés que d'un identifiant. Il n'y a donc pas besoin de passer par un formulaire à remplir pour ajouter un sprint : le bouton "+" ajoute directement un nouveau sprint en lui attribuant automatiquement un identifiant. | 1 |  |
| 11 | En tant que développeur, je souhaite pouvoir accéder à la liste des tâches d'un sprint. Pour cela, à partir de la page de la liste des sprints, je clique sur la ligne du sprint souhaitée et je suis redirigé vers la page de la liste des tâches de ce sprint. | 1 |  |
| 12 | En tant que développeur, je souhaite pouvoir ajouter une tâche dans un sprint. Pour cela, à partir de la page de la liste des tâches du sprint, je clique sur le bouton "+" sur la page. Ce bouton redirige vers un formulaire composé de 6 champs : "ID", "Description", "Difficulté", "Priorité", "User Story" (ID de la User Story associée) et "Durée de réalisation (j/h)". Seuls les champs "ID", "Description" et "User Story" sont obligatoires. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Le bouton "Annuler" redirige vers la liste des tâches non-modifiée. Le bouton "Sauvegarder" redirige soit vers la liste des tâches si c'est validé, soit vers le formulaire s'il y a un problème. | 2 |  |
| 13 | En tant que développeur, je souhaite pouvoir modifier ou supprimer une tâche d'un sprint. Pour cela, à partir de la liste des tâches du sprint, je clique sur le bouton "Modifier" ou "Supprimer" à côté de la tâche. Le bouton "Modifier" redirige vers le même formulaire que l'ajout de tâche, mais pré-rempli avec les informations déjà enregistrées. | 1 |  |
| 14 | En tant que développeur, je souhaite pouvoir accéder à la liste des releases d'un projet (les releases sont composées de leur nom avec numéro de version et de leur horodatage). Pour cela, à partir de la page de BackLog du projet, je peux cliquer sur le bouton "Releases" qui mène à une page listant les releases du projet. | 1 |  |
| 15 | En tant que développeur, je souhaite pouvoir ajouter une release à un projet. Pour cela, à partir de la page listant les releases de ce projet, je peux cliquer sur le bouton "+" qui redirige vers un formulaire composé de 2 champs : "Nom" et "Horodatage". Tous les champs sont obligatoires. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Le bouton "Annuler" redirige vers la liste des releases non-modifiée. Le bouton "Sauvegarder" redirige soit vers la liste des releases si c'est validé, soit vers le formulaire s'il y a un problème. | 2 |  |
| 16 | En tant que développeur, je souhaite pouvoir modifier ou supprimer une release d'un projet, en cliquant sur le bouton "Modifier" ou "Supprimer" à côté de la release. Le bouton "Modifier" redirige vers le même formulaire que l'ajout de release, mais pré-rempli avec les informations déjà enregistrées. | 1 |  |
| 17 | En tant que développeur, je souhaite pouvoir accéder au planning d'un sprint. Pour cela, à partir de la page de la liste des tâches d'un sprint, je peux cliquer sur le bouton "Planning" qui me redirige vers la page du planning. | 1 |  |
| 18 | En tant que développeur, je souhaite pouvoir ajouter une ligne au planning d'un sprint. Pour cela, à partir de la page du planning d'un sprint, je clique sur le bouton "+" sur la page. Ce bouton redirige vers un formulaire composé de 5 champs : "ID tâche", "Développeur", "Date", "Heure de début" et "Heure de fin". Seul le champ "ID tâche" est obligatoire. Je peux ensuite cliquer sur "Sauvegarder" pour enregistrer les informations ou "Annuler" pour ne rien enregistrer. Le bouton "Annuler" redirige vers le planning non-modifié. Le bouton "Sauvegarder" redirige soit vers le planning si c'est validé, soit vers le formulaire s'il y a un problème. | 2 |  |
| 19 | En tant que développeur, je souhaite pouvoir modifier ou supprimer une ligne de planning d'un sprint, en cliquant sur le bouton "Modifier" ou "Supprimer" à côté de la ligne de planning. Le bouton "Modifier" redirige vers le même formulaire que l'ajout de ligne, mais pré-rempli avec les informations déjà enregistrées. | 1 |  |
| 20 | En tant que développeur, je souhaite pouvoir accéder à un tableau d'avancement des tâches. Pour cela, à partir de la page d'un sprint, je clique sur le bouton "Avancement des tâches". Ce bouton me redirige vers nun tableau composé de 3 colonnes : "TODO", "DOING" et "DONE". Par défaut, toutes les tâches du sprint sont dans la colonne "TODO" sous la forme de leur identifiant. | 2 |  |
| 21 | En tant que développeur, je souhaite pouvoir changer le statut d'une tâche dans le tableau d'avancement des tâches d'un sprint. Pour cela, à partir de la page de ce tableau, je clique sur une tâche : un menu déroulant s'affiche et propose les choix "TODO", "DOING" et "DONE". En cliquant sur l'un de ces choix, la tâche est déplacée dans la colonne correspondante du tableau. | 1 |  |
| 22 | En tant que développeur, je souhaite pouvoir générer une Burndown Chart d'un sprint. Depuis la page du tableau d'avancement des tâches d'un sprint, je peux cliquer sur le bouton "Chart" qui va afficher la Burndown Chart par-dessus le contenu actuel de la page et l'assombrir. Il est possible de quitter l'affichage de la Burndown Chart grâce à un bouton "Retour" ou à un appui sur la touche Echap du clavier. La Burndown Chart est générée à partir de la liste de ces tâches et de la date de complétion de celles terminées. | 2 |  |
