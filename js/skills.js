const projects = [
    {
        name: 'FrisMe - Automated Frisbee Launcher',
        date: 'Jan. 2024 - Sep. 2024',
        videoUrl: 'https://www.youtube.com/embed/xaikjXwYxQ4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales diam ac ex fringilla pulvinar. Maecenas pretium, justo nec auctor malesuada, sapien mauris porttitor dolor, in accumsan velit diam ut arcu. Sed sit amet bibendum nibh, id rhoncus nunc. Ut iaculis id ante vitae lobortis. Integer non posuere sem. Integer pulvinar consequat aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi faucibus blandit augue quis consectetur.',
        images: [
            { src: '../media/projects/frisme_demo-day.jpg', caption: 'Final Demo Day' },
            { src: '../media/projects/frisme_under-the-hood.jpg', caption: 'Under the Hood' },
            { src: '../media/projects/frisme_bbg-io-testing.jpg', caption: 'IO Testing' },
            { src: '../media/projects/frisme_405-demo.jpg', caption: 'PoC Demo Day' },
            { src: '../media/projects/frisme_proof-of-concept.jpg', caption: 'PoC' }
        ],
        skills: [
            { name: 'C', value: 10 },
            { name: 'Embedded Development', value: 10 },
            { name: 'Mechanical Design', value: 10 }
        ],
        githubRepo: 'https://github.com/jmateo27/FrisMe'
    },
    {
        name: 'Spot-A-Bone',
        date: 'Oct. 2022 - Dec. 2022',
        videoUrl: 'https://www.youtube.com/embed/N_a7jBxSQI0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales diam ac ex fringilla pulvinar. Maecenas pretium, justo nec auctor malesuada, sapien mauris porttitor dolor, in accumsan velit diam ut arcu. Sed sit amet bibendum nibh, id rhoncus nunc. Ut iaculis id ante vitae lobortis. Integer non posuere sem. Integer pulvinar consequat aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi faucibus blandit augue quis consectetur.',
        images: [
            { src: '../media/projects/frisme_demo-day.jpg', caption: 'Final Demo Day' },
            { src: '../media/projects/frisme_under-the-hood.jpg', caption: 'Under the Hood' },
            { src: '../media/projects/frisme_bbg-io-testing.jpg', caption: 'IO Testing' },
            { src: '../media/projects/frisme_405-demo.jpg', caption: 'PoC Demo Day' },
            { src: '../media/projects/frisme_proof-of-concept.jpg', caption: 'PoC' }
        ],
        skills: [
            { name: 'C', value: 6 },
            { name: 'Embedded Development', value: 10 },
            { name: 'Mechanical Design', value: 2 }
        ],
        githubRepo: 'https://github.com/jmateo27/FrisMe'
    }
    // Add more projects as needed
];

function displayImages(images, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.innerHTML = ''; // Clear existing content

        images.forEach(image => {
            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';

            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.caption;

            const caption = document.createElement('div');
            caption.className = 'caption';
            caption.textContent = image.caption;

            imageItem.appendChild(img);
            imageItem.appendChild(caption);

            container.appendChild(imageItem);
        });
    } else {
        console.error('Container not found:', containerSelector);
    }
}

function addSkill(name, value, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        const item = document.createElement('div');
        item.className = 'skills-item';
        
        const skillName = document.createElement('span');
        skillName.className = 'skill-name';
        skillName.textContent = name;
        
        const skillValue = document.createElement('span');
        skillValue.className = 'skill-value';
        skillValue.textContent = `+${value}`;
        
        item.appendChild(skillName);
        item.appendChild(skillValue);
        container.appendChild(item);
    } else {
        console.error('Container not found:', containerSelector);
    }
}

function displayProject(project, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error('Container not found:', containerSelector);
        return;
    }

    const projectSection = document.createElement('div');
    projectSection.className = 'project-section';

    let htmlContent = `
        <div class="heading-container">
            <h1>${project.name || ''}</h1>
            <p class="project-date">${project.date || ''}</p>
        </div>
    `;

    if (project.videoUrl) {
        htmlContent += `
            <div class="video-preview">
                <iframe class="responsive-iframe" src="${project.videoUrl}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
    }

    if (project.description) {
        htmlContent += `
            <div class="project-subsection">
                <h2>Description</h2>
                <p style="text-indent: 2em;">${project.description}</p>  
            </div>
        `;
    }

    if (project.images && project.images.length > 0) {
        htmlContent += `
            <div class="project-subsection">
                <h2>Highlights</h2>
                <div class="image-gallery" id="imageGallery${project.name.replace(/\s/g, '')}"></div>
            </div>
        `;
    }

    if (project.skills && project.skills.length > 0) {
        htmlContent += `
            <div class="project-subsection">
                <h2>Skills Improved</h2>
                <div class="skills-list" id="skillsList${project.name.replace(/\s/g, '')}"></div>
            </div>
        `;
    }

    if (project.githubRepo) {
        htmlContent += `
            <div style="text-align: center">
                Check out the GitHub repo <a href="${project.githubRepo}" target="_blank" rel="noopener noreferrer">here</a>.
            </div>
        `;
    }

    projectSection.innerHTML = htmlContent;
    container.appendChild(projectSection);

    // Display images if any
    if (project.images && project.images.length > 0) {
        displayImages(project.images, `#imageGallery${project.name.replace(/\s/g, '')}`);
    }

    // Display skills if any
    if (project.skills && project.skills.length > 0) {
        project.skills.forEach(skill => {
            addSkill(skill.name, skill.value, `#skillsList${project.name.replace(/\s/g, '')}`);
        });
    }
}

function displayAllProjects(projects, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error('Container not found:', containerSelector);
        return;
    }

    // Clear any existing content
    container.innerHTML = '';

    // Loop through each project and display it
    projects.forEach(project => displayProject(project, containerSelector));
}