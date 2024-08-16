const projects = [
    {
        name: 'FrisMe - Automated Frisbee Launcher',
        date: 'Jan. 2024 - Sep. 2024',
        videoUrl: 'https://www.youtube.com/embed/xaikjXwYxQ4',
        description: '<strong>SFU Engineering Capstone Project.</strong> Our company, AeroToss, is comprised of six members including: Tony, Laura, Ryan, Sina, Megan and I. The FrisMe is a product that is to be used by Ultimate Frisbee players that are training to catch curved throws better. The system is made up of the following sub-components: the launcher, curve angle adjustment, aim adjustment, machine vision and the user\'s mobile app for controls.<br><br>I worked on embedded system that controls and communicates with these sub-components. The micro-controller that is used is the BeagleBone Green and all embedded controls were written in C. Multi-threading is an important portion of the project that makes it possible with so many systems communicating with eachother. Key concepts from the TCP networking protocol are also used to verify that data is acknowledged. Another big portion I worked on was the electrical design and creation of the system. Power and safety requirements were considered throughout the process.',
        images: [
            { src: '../media/projects/frisme_demo-day.jpg', caption: 'Final Demo Day' },
            { src: '../media/projects/frisme_under-the-hood.jpg', caption: 'Under the Hood' },
            { src: '../media/projects/frisme_bbg-io-testing.jpg', caption: 'IO Testing' },
            { src: '../media/projects/frisme_405-demo.jpg', caption: 'PoC Demo Day' },
            { src: '../media/projects/frisme_proof-of-concept.jpg', caption: 'PoC' }
        ],
        skills: [
            { name: 'C Programming', value: 10 },
            { name: 'Embedded Development', value: 10 },
            { name: 'Mechanical Design', value: 10 }
        ],
        githubRepo: 'https://github.com/jmateo27/FrisMe'
    },
    {
        name: 'Spot-A-Bone',
        date: 'Oct. 2022 - Dec. 2022',
        videoUrl: 'https://www.youtube.com/embed/N_a7jBxSQI0',
        description: '<strong>SFU Embedded and Real Time System Software Project.</strong> Our group is comprised of four members including: Raymond, Sina, Avash and I. Spot-A-Bone is a product that is to be set aside in one\'s home so that they are able to just scan a card with a certain song ',
        images: [
            { src: '../media/projects/spotabone_demo-day.jpg', caption: 'Final Demo Day' },
            { src: '../media/projects/spotabone_setup.jpg', caption: 'Final Setup' },
            { src: '../media/projects/spotabone_nfc.jpg', caption: 'NFC Reader' },
        ],
        skills: [
            { name: 'C Programming', value: 6 },
            { name: 'Embedded Development', value: 10 },
            { name: 'Mechanical Design', value: 2 }
        ],
        githubRepo: 'https://github.com/jmateo27/Spot-a-bone'
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

    // Apply the projects-container class to the container
    container.classList.add('projects-container');

    // Loop through each project and display it
    projects.forEach(project => displayProject(project, containerSelector));
}