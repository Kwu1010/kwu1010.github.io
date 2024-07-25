function loadNavigationBar() {
    const navigationBar = `
        <!-- Nav -->
        <nav id="nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#main" class="scrolly">Projects</a></li>
                <li><a href="https://drive.google.com/drive/folders/1cV781JMM_p601o5ZHFuBjysP5Vs8QKmw?usp=sharing">Resume</a></li>
                <li><a href="#footer" class="scrolly">Contact Me</a></li>
            </ul>
        </nav>`;
    document.getElementById('navigation-bar').innerHTML = navigationBar;
}
loadNavigationBar();