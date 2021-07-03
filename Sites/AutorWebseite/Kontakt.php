<?php

  $name = $_POST["name"];
  $subject = "Email von Einrad Webseite!";
  $email = $_POST["email"];
  $message = $_POST["message"];

  $mailTo = "EinradRuined@gmail.com";
  $headers = "From: ".$email;
  $txt = "You have received an Email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  
?>