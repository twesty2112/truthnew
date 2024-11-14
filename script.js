<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Breaking news and latest updates.">
    <title>Breaking News - America</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Header -->
    <header id="header">
        <div class="container">
            <h1>America's Breaking News</h1>
            <nav>
                <ul>
                    <li><a href="#politics">Politics</a></li>
                    <li><a href="#latest-updates">Latest Updates</a></li>
                    <li><a href="#tech">Technology</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Breaking News Ticker -->
    <div id="breaking-news" class="breaking-news">
        <p>Breaking: Wildfires continue to spread on the West Coast. More details...</p>
    </div>

    <!-- Main content with articles -->
    <main>
        <article id="politics" class="news-item">
            <h2>President Announces New Economic Plan</h2>
            <p class="read-time">Estimated reading time: <span id="read-time-1">5 minutes</span></p>
            <img class="lazy-load" data-src="images/politics.jpg" alt="Politics image">
            <p>In a bid to boost job growth and improve the economy, President Joe Biden unveiled a new economic initiative aimed at investing in American infrastructure and clean energy...</p>
        </article>

        <article id="latest-updates" class="news-item">
            <h2>Massive Wildfires Continue to Ravage the West Coast</h2>
            <p class="read-time">Estimated reading time: <span id="read-time-2">6 minutes</span></p>
            <img class="lazy-load" data-src="images/latest-updates.jpg" alt="Latest updates image">
            <p>Thousands of families have been displaced as wildfires in California, Oregon, and Washington State continue to spread, with emergency services working tirelessly to combat the flames...</p>
        </article>

        <article id="tech" class="news-item">
            <h2>Apple Launches New iPhone Model with Groundbreaking Features</h2>
            <p class="read-time">Estimated reading time: <span id="read-time-3">4 minutes</span></p>
            <img class="lazy-load" data-src="images/technology.jpg" alt="Technology innovations image">
            <p>Apple's latest iPhone release promises major upgrades, including a more powerful processor, enhanced camera capabilities, and longer battery life...</p>
        </article>
    </main>

    <footer>
        <p>&copy; 2024 Breaking News America</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>