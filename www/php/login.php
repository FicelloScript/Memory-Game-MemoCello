<?php 
session_start();
// Vérifie si on a les informations et les mettre dans la base de donnée
if(isset($_POST['uname']) && 
   isset($_POST['pass'])){

    include "../db_conn.php";

    $uname = $_POST['uname'];
    $pass = $_POST['pass'];

    $data = "uname=".$uname;
    
    // Erreur si un des champs est vide
    if(empty($uname)){
    	$em = "Pseudonyme requis";
    	header("Location: ../login.php?error=$em&$data");
	    exit;
    }else if(empty($pass)){
    	$em = "Mot de passe requis";
    	header("Location: ../login.php?error=$em&$data");
	    exit;
    }else {

    	$sql = "SELECT * FROM users WHERE username = ?";
    	$stmt = $conn->prepare($sql);
    	$stmt->execute([$uname]);

      if($stmt->rowCount() == 1){
          $user = $stmt->fetch();

          $username =  $user['username'];
          $password =  $user['password'];
          $fname =  $user['fname'];
          $id =  $user['id'];
          $pp =  $user['pp'];

          if($username === $uname){ //Vérifie si le pseudonyme est correct
             if(password_verify($pass, $password)){ //Vérifie si le mot de passe est correct
                 $_SESSION['id'] = $id;
                 $_SESSION['fname'] = $fname;
                 $_SESSION['pp'] = $pp;

                 header("Location: ../main.html");
                 exit;
             }else {
               $em = "Mot de passe ou Pseudonyme incorrect !";
               header("Location: ../login.php?error=$em&$data");
               exit;
            }

          }else {
            $em = "Mot de passe ou Pseudonyme incorrect !";
            header("Location: ../login.php?error=$em&$data");
            exit;
         }

      }else {
         $em = "Mot de passe ou Pseudonyme incorrect !";
         header("Location: ../login.php?error=$em&$data");
         exit;
      }
    }


}else {
	header("Location: ../login.php?error=error");
	exit;
}
