<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "office@uroboros.online";
    $subject = "Nowa wiadomość od $name";
    $body = "Imię: $name\nEmail: $email\nWiadomość:\n$message";
    
    $headers = "From: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: index.html?msg=success");  // przekierowuje użytkownika z parametrem
        exit();
    } else {
        echo "Nie udało się wysłać wiadomości. Spróbuj ponownie później.";
    }
} else {
    echo "Nieprawidłowe żądanie.";
}
?>

