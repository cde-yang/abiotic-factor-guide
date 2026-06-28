/**
 * Abiotic Factor Guide — Shared JavaScript
 * Handles: navigation, mobile menu, footer injections, AdSense placeholders
 */

// Shared navigation HTML
const NAV_HTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <span style="font-size:1.5rem;">🧬</span> Abiotic Factor Guide
    </a>
    <button class="nav-toggle" onclick="toggleNav()" aria-label="Toggle menu">☰</button>
    <div class="nav-links" id="nav-links">
      <a href="index.html">Home</a>
      <a href="category.html?cat=getting-started">Getting Started</a>
      <a href="category.html?cat=weapons-gear">Weapons & Gear</a>
      <a href="category.html?cat=boss-guides">Boss Guides</a>
      <a href="category.html?cat=crafting">Crafting</a>
      <a href="category.html?cat=tips-tricks">Tips & Tricks</a>
      <a href="about.html">About</a>
    </div>
  </div>
</nav>`;

// Shared footer HTML
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-col">
      <h3>🧬 Abiotic Factor Guide</h3>
      <p style="color:var(--text-secondary);font-size:0.85rem;">The ultimate player-written wiki and strategy guide for Abiotic Factor. Survive the GATE Cascade Research Facility.</p>
    </div>
    <div class="footer-col">
      <h3>Quick Links</h3>
      <a href="category.html?cat=getting-started">Getting Started</a>
      <a href="category.html?cat=weapons-gear">Weapons & Gear</a>
      <a href="category.html?cat=boss-guides">Boss Guides</a>
      <a href="about.html">About This Site</a>
    </div>
    <div class="footer-col">
      <h3>Legal</h3>
      <a href="privacy.html">Privacy Policy</a>
      <a href="sitemap.xml">Sitemap</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Abiotic Factor Guide is a fan-made resource. Game content and assets are property of Deep Field Games. This site is not affiliated with the game developers.</p>
    <p style="margin-top:0.5rem;">&copy; 2025 Abiotic Factor Guide. All rights reserved.</p>
  </div>
</footer>`;

// Inject common UI
(function initCommon() {
  // Inject nav at beginning of body
  const navDiv = document.createElement('div');
  navDiv.innerHTML = NAV_HTML;
  document.body.insertBefore(navDiv.firstElementChild, document.body.firstChild);

  // Inject footer at end of body
  const footerDiv = document.createElement('div');
  footerDiv.innerHTML = FOOTER_HTML;
  document.body.appendChild(footerDiv.firstElementChild);

  // Highlight current page in nav
  setTimeout(() => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      if (a.getAttribute('href') === currentPath) a.classList.add('active');
      else if (currentPath === 'index.html' && a.getAttribute('href') === 'index.html') a.classList.add('active');
    });
  }, 100);
})();

// Mobile nav toggle
window.toggleNav = function() {
  document.getElementById('nav-links').classList.toggle('open');
};

// Ad unit injector
window.insertAd = function(containerId, label) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <!-- AD UNIT: ${label} -->
    <div class="ad-placeholder" data-label="AD: ${label}">
      <!-- Replace with Google AdSense code -->
      <!-- <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
           <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> -->
    </div>
  `;
};

// Format date helper
window.formatDate = function(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};
