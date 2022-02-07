<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "sample@gmail.com"; //enter your email here
        $email_subject = "From $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\n\nMessage: $message\n\nRegards,\n$name";
        $sender = "From: $email";
        if(mail($receiver, $email_subject, $body, $sender)){
            echo "Your message has been sent successfully";
        } else {
            echo "Could not send email. Please try again";
        }
    } else {
        echo "Invalid email address";
    }
} else {
    echo 'Email and message fields cannot be empty';
}