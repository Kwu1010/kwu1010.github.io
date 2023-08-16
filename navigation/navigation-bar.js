function loadNavigationBar() {
    const navigationBar = `
        <div class="navigation-bar">
            <h1 class="logo">Kevin Wu</h1>
            <nav>
                <ul>
                    <li><a href="/home/index.html">Home</a></li>
                    <li><a href="/about/about_me.html">About Me</a></li>
                    <li><a href="/404/404.html">Projects</a></li>
                    <li><a href="https://github.com/kwu1010">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/kevin-wu-667a50266/">LinkedIn</a></li>
                    <li><a href="/contact/contact_me.html">Contact Me</a></li>
                </ul>
            </nav>
        </div>
        `;
    document.getElementById('navigation-bar').innerHTML = navigationBar;
}
loadNavigationBar();