function loadNavigationBar() {
    const navigationBar = `
      <div class="navigation-bar">
        <h1 class="logo">Kevin Wu</h1>
        <nav>
          <ul>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    `;
    document.getElementById('navigation-bar').innerHTML = navigationBar;
}
loadNavigationBar();