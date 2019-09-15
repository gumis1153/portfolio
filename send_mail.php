<?php 
if(isset($_POST['dsubmit'])){
    $to = "jakubowski656@gmail.com"; // this is your Email address
    $from = $_POST['demail']; // this is the sender's Email address
    $title = $_POST['dtitle'];
    $subject = "Wiadomość z formularza";
    $subject2 = "Kopia wiadomosci wysłanej do Piotr Jakubowski";
    $message = $from . " napisał:" . "\n\n" . $_POST['dmessage'];
    $message2 = "Dziękuję za wiadomość. Oto kopia Twojej wiadomości " . $from . "\n\n" . $_POST['dmessage'];

    $headers = "Od:" . $from;
    $headers2 = "Do:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Email wysłąny, dziękuję " . $from . ", odpowiem na wiadomość jak najszybciej.";
    header('Location: index.html');
    // You cannot use header and echo together. It's one or the other.
    }
?>