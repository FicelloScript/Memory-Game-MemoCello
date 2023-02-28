<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Connexion</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
</head>
<body>
    <div class="d-flex justify-content-center align-items-center vh-100">
    	
    	<form class="shadow w-450 p-3" 
    	      action="php/login.php" 
    	      method="post">

    		<h4 class="display-4  fs-1">Connexion</h4><br>
    		<?php if(isset($_GET['error'])){ ?><!-- Alerte dans le cas ou il y a une erreur -->
    		<div class="alert alert-danger" role="alert">
			  <?php echo $_GET['error']; ?>
			</div>
		    <?php } ?>

		<!-- Champs texte formulaire bootstrap -->
		  <div class="mb-3">
		    <label class="form-label">Pseudonyme</label>
		    <input type="text" 
		           class="form-control"
		           name="uname"
		           value="<?php echo (isset($_GET['uname']))?$_GET['uname']:"" ?>">
		  </div>

		  <div class="mb-3">
		    <label class="form-label">Mot de passe</label>
		    <input type="password" 
		           class="form-control"
		           name="pass"
				   id = "pass">
				   <img src="images/oeilFerme.png" id="afficher" onclick="afficherMdp()" style='width: 50px; padding-top: 5px; cursor: pointer'>

		  </div>
		<!-- Fin Champs texte formulaire bootstrap -->

		  
		  <button type="submit" class="btn btn-primary">Connexion</button>
		  <a href="index.php" class="link-secondary">Inscription</a>
		</form>
    </div>
	<script>
		e = true;
		function afficherMdp() {
			if(e) {
				document.getElementById("pass").setAttribute("type","text");
				document.getElementById("afficher").src="images/oeilOuvert.png";
				e = false;
			} else {
				document.getElementById("pass").setAttribute("type","password");
				document.getElementById("afficher").src="images/oeilFerme.png";
				e = true;
			}
		}
	</script>
</body>
</html>