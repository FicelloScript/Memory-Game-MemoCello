<?php 

if(isset($_POST['fname']) && 
   isset($_POST['uname']) &&  
   isset($_POST['pass'])){

    include "../db_conn.php";

    $fname = $_POST['fname'];
    $uname = $_POST['uname'];
    $pass = $_POST['pass'];

    $data = "fname=".$fname."&uname=".$uname;
    
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
      // hashing the password
      $pass = password_hash($pass, PASSWORD_DEFAULT);

      if (isset($_FILES['pp']['name']) AND !empty($_FILES['pp']['name'])) {
         
         
         $img_name = $_FILES['pp']['name'];
         $tmp_name = $_FILES['pp']['tmp_name'];
         $error = $_FILES['pp']['error'];
         
         if($error === 0){
            $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
            $img_ex_to_lc = strtolower($img_ex);

            $allowed_exs = array('jpg', 'jpeg', 'png');
            $username = $_POST['username'];

            if(in_array($img_ex_to_lc, $allowed_exs)){
               $new_img_name = uniqid($uname, true).'.'.$img_ex_to_lc;
               $img_upload_path = '../upload/'.$new_img_name;
               move_uploaded_file($tmp_name, $img_upload_path);

               //TEST
               // if(!isset($_FILES['pp']['name']) OR empty($_FILES['pp']['name'])) {
               //    $default_img_name = "pdpdefault.jpg";
               //    $img_upload_path = '../upload/'.$default_img_name;
               
               //    // Insert into Database       
                 
               // $sql = "INSERT INTO users(fname, username, password, pp) 
               //      VALUES(?,?,?,?)";
               //    $stmt = $conn->prepare($sql);
               //    $stmt->execute([$fname, $uname, $pass, $default_img_name]);
               // }
               //TEST

               // Insert into Database
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