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

const images1 = [
    { src: '../media/projects/frisme_demo-day.jpg', caption: 'Final Demo Day' },
    { src: '../media/projects/frisme_under-the-hood.jpg', caption: 'Under the Hood' },
    { src: '../media/projects/frisme_bbg-io-testing.jpg', caption: 'IO Testing' },
    { src: '../media/projects/frisme_405-demo.jpg', caption: 'PoC Demo Day' },
    { src: '../media/projects/frisme_proof-of-concept.jpg', caption: 'PoC' }
];

const skills1 = [
    { name: 'C', value: 10 },
    { name: 'Embedded Development', value: 10 },
    { name: 'Mechanical Design', value: 10 }
];