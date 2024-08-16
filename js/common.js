const tabsPaths = [
    {
        index: '../index.html',
        projects: '../tabs/projects.html',
        resume: '../tabs/resume.html',
        blog: '../tabs/blog.html'
    },
    {
        index: 'index.html',
        projects: 'tabs/projects.html',
        resume: 'tabs/resume.html',
        blog: 'tabs/blog.html'
    }
];

function setupTabs(isIndex, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error('Container not found:', containerSelector);
        return;
    }

    const headerSection = document.createElement('div');
    const paths = tabsPaths[isIndex];
    const htmlContent = `
        <header>
            <nav>
                <ul class="nav-links">
                    <li><a href="${paths.index || ''}">Home</a></li>
                    <li><a href="${paths.projects || ''}">Projects</a></li>
                    <li><a href="${paths.resume || ''}">Resume</a></li>
                    <li><a href="${paths.blog || ''}">Blog</a></li>
                </ul>
            </nav>
        </header>
    `;

    headerSection.innerHTML = htmlContent;
    container.appendChild(headerSection);
}