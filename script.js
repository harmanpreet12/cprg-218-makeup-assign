// JavaScript for smooth scrolling and external resource links

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add external resource links for each location
    const locations = [
        {
            id: 'location1',
            url: 'https://www.lonelyplanet.com/location1',
            text: 'Learn more about Location 1'
        },
        {
            id: 'location2',
            url: 'https://www.visitlocation2.com',
            text: 'Explore more about Location 2'
        },
        {
            id: 'location3',
            url: 'https://www.explorelocation3.org',
            text: 'Discover Location 3'
        }
    ];

    locations.forEach(location => {
        const section = document.getElementById(location.id);
        if (section) {
            const link = document.createElement('a');
            link.href = location.url;
            link.target = '_blank';
            link.textContent = location.text;
            link.style.display = 'block';
            link.style.marginTop = '10px';
            section.appendChild(link);
        }
    });
});
