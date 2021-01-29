<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
    <meta name="robots"
        content="noindex" />
    <title>Thank you for contacting me!</title>
    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400i|Montserrat&display=swap"
        rel="stylesheet" />
    <?php
header('Content-Type: text/html; charset=utf-8');
$select = $_POST['select'];
$firstname = $_POST['firstname'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = "Emne: $select \n Fra: $firstname \n Email: $email \n Besked: $message";
$recipient ="iam@frontnd.ninja";
$subject ="Frontnd.ninja: $select \n";
$mailheader = "Fra: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "[ thank you ]";
?>
    <style>
    body {
        font-size: 2rem;
        font-family: "Montserrat", sans-serif;
        padding: 4rem 2rem;
        letter-spacing: 2px;
        color: #285d67;
    }

    a {
        text-decoration: none;
    }

    p {
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        color: #285d67;
        margin: 0;
        letter-spacing: 0px;
    }

    div {
        border: none;
        background-color: #ddc9c7;
        width: 6rem;
        text-align: center;
        height: auto;
        padding: 0.5rem 0.5rem;
        border-radius: 5px;
        margin-top: 2rem;
    }

    .letsGo {
        font-size: 0.8rem;
        color: #000000;
        letter-spacing: 0px;

    }

    #extension-is-installed {
        display: none;
    }

    .pulse_button {
        animation: pulse 1s ease-in-out infinite forwards;
    }

    @keyframes pulse {
        from {
            box-shadow: 1px 1px 3px #285d67;
        }

        50% {
            box-shadow: 1px 1px 7px #285d67;
        }

        to {
            box-shadow: 1px 1px 3px #285d67;
        }
    }
    </style>
</head>

<body>
    <br><br>
    <a href="index.html">
        <p class="letsGo">I will get back to you soon!<br><br>Let's go back to the page in the meantime.</p>
        <div class="pulse_button">
            <p>great!</p>
        </div>
    </a>
</body>

</html>