<?php 
// Vérifie si on a les informations et les mettre dans la base de donnée
if(isset($_POST['fname']) && 
   isset($_POST['uname']) &&  
   isset($_POST['pass'])){

    include "../db_conn.php";

    $fname = $_POST['fname'];
    $uname = $_POST['uname'];
    $pass = $_POST['pass'];

    $data = "fname=".$fname."&uname=".$uname;
	
     // Erreur si un des champs est vide
    if (empty($fname)) {
    	$em = "Full name is required";
    	header("Location: ../index.php?error=$em&$data");
	    exit;
    }else if(empty($uname)){
    	$em = "User name is required";
    	header("Location: ../index.php?error=$em&$data");
	    exit;
    }else if(empty($pass)){
    	$em = "Password is required";
    	header("Location: ../index.php?error=$em&$data");
	    exit;
    }else {

      //Verifie le mot de passe
   //    if (preg_match('/[A-Z]/', $pass) && preg_match('/[0-9]/', $pass) && preg_match('/\W/', $pass)) {
   // Le mot de passe est valide
   //   } else {
   //       $em = "Le mot de passe doit contenir au moins une majuscule, un caractère spécial et un chiffre.";
   //       header("Location: ../index.php?error=$em");
   //       exit;
   //   }
	    
      // Hacher le mot de passe
      $pass = password_hash($pass, PASSWORD_DEFAULT);

      if (isset($_FILES['pp']['name']) AND !empty($_FILES['pp']['name'])) {
         
         
         $img_name = $_FILES['pp']['name'];
         $tmp_name = $_FILES['pp']['tmp_name'];
         $error = $_FILES['pp']['error'];
         
         if($error === 0){
            $img_ex = pathinfo($img_name, PATHINFO_EXTENSION); //Permet de retourner l'extension de l'image
            $img_ex_to_lc = strtolower($img_ex);

            $allowed_exs = array('jpg', 'jpeg', 'png');
            $username = $_POST['uname'];

            if(in_array($img_ex_to_lc, $allowed_exs)){ //Vérifie si l'extension de l'image utiliser est correcte
               $new_img_name = uniqid($uname, true).'.'.$img_ex_to_lc;
               $img_upload_path = '../upload/'.$new_img_name;
               move_uploaded_file($tmp_name, $img_upload_path);

               // Inserer dans la base de donnée
               $sql = "INSERT INTO users(fname, username, password, pp) 
                 VALUES(?,?,?,?)";
               $stmt = $conn->prepare($sql);
               $stmt->execute([$fname, $uname, $pass, $new_img_name]);
               
              header("Location: ../index.php?success=Votre compte à été crée !");
                exit;

            }else {
               $em = "^Vous ne pouvez pas envoyer de fichier de ce type !";
               header("Location: ../index.php?error=$em&$data");
               exit;
            }
         }else {
            $em = "Erreur inconnue !";
            header("Location: ../index.php?error=$em&$data");
            exit;
         }

        
      }else 
      $sql_check = "SELECT username FROM users WHERE username = ?";
      $stmt_check = $conn->prepare($sql_check);
      $stmt_check->execute([$uname]);

      if ($stmt_check->rowCount() > 0) {
      $em = "Pseudonyme deja existant, veuillez en choir un autre ou vous connecter.";
      header("Location: ../index.php?error=$em&$data");
      exit;
      }
      {
	// Envoyer à la base de donnée si les informations sont complètes
       	$sql = "INSERT INTO users(fname, username, password) 
       	        VALUES(?,?,?)";
       	$stmt = $conn->prepare($sql);
       	$stmt->execute([$fname, $uname, $pass]);

       	header("Location: ../index.php?success=Votre compte à bien été crée !");
   	    exit;
      }
    }


}else {
	header("Location: ../index.php?error=error");
	exit;
}