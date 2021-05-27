<?php
require("php/youtube.php");

session_start();

if ($_SESSION["check"] === 'CHECK') {
    if (isset($_SESSION["search"])) {
        $search = $_SESSION["search"];
        $response = youtube($search);
    };
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/reset.css"/>
    <link rel="stylesheet" href="css/responsive.css">
    <script src="https://kit.fontawesome.com/6adecfce0a.js" crossorigin="anonymous"></script>
    <title>zozotube</title>
</head>
<body>
    <main>
        <header>
            <nav id="menu">
                <h1><span class="zozo">Zozo</span><span class="tube">tube</span></h1>
                <ul>
                    <li><i class="fas fa-id-card"></i><a href="index.php" title="Compte">Compte</a></li>
                    <li><i class="fas fa-images"></i><a href="image.html" title="IMAGE">Image</a></li>
                    <li><i class="fas fa-server"></i><a href="forum.html" title="Forum">Forum</a></li>
                    <li><i class="fas fa-user-secret"></i><a href="a_propos.html" title="A PROPOS">A propos</a></li>
                </ul>
                <form action="php/traitement.php" method="post">
                    <label>
                        <input type="input" name="search" required>
                    </label>
                    <i class="fa fa-search"></i>
                </form>
            </nav>
        </header>
        <section class="caroussel">
            <div class="en_tete">
                <h1><span class="zozo">Zozo</span><span class="tube">tube</span></h1>
                <h2>Votre site de streaming !</h2>
            </div>
        </section>
        <section class="page">
            <div class="grille">
                <?php if (isset($response) && !empty($response)):
                    foreach ($response['items'] as $video): ?>
                    <div class="image"></div>
                    <?php endforeach; ?>
                <?php endif;
                session_destroy();?>
            </div>
        </section>
    </main>
    <footer class= "pied_de_page">
    </footer>
    <script type="text/javascript" src="js/menu.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
