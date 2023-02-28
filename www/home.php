<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['fname'])) { // Vérifie si on a les informations et les mettre dans la base de donnée


include "db_conn.php";
include 'php/User.php';
$user = getUserById($_SESSION['id'], $conn);


 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Profil</title>
    <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <?php if ($user) { ?>
    <div class="d-flex justify-content-center align-items-center vh-100">
    	
    	<div class="shadow w-350 p-3 text-center">
            <!--Affiche la photo de profil de l'utilisateur -->
    		<img src="upload/<?=$user['pp']?>"  
    		     class="img-fluid rounded-circle"> 
            <!--Affiche le Prénom de l'utilisateur -->
            <h3 class="display-4 "><?=$user['fname']?></h3>
            <a href="edit.php" class="btn btn-primary">
            	Modifier le profil
            </a>
             <a href="logout.php" class="btn btn-warning">
                Déconnexion
            </a>
		</div>
    </div>
    <?php }else { 
     header("Location: login.php");
     exit;
    } ?>
</body>
</html>

<?php }else {
	header("Location: login.php");
	exit;
} ?>