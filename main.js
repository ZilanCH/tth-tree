// Post-Daten - hier können neue Posts hinzugefügt werden
const posts = [
    {
        id: 1,
        title: "Willkommen bei TTH-Projects!",
        date: "2024-01-15",
        content: "Wir freuen uns, euch in unserer Gaming-Community begrüßen zu dürfen! Hier findet ihr alles rund um gemeinsame Gaming-Sessions, spannende Projekte und eine tolle Gemeinschaft.",
        tags: ["Community", "Gaming", "Willkommen"]
    },
    {
        id: 2,
        title: "Neue Gaming-Session: Minecraft Survival",
        date: "2024-01-20",
        content: "Am Wochenende starten wir eine neue Minecraft Survival-Session! Wer Lust hat mitzumachen, meldet sich einfach in unserem Discord. Baut mit uns die ultimative Base!",
        tags: ["Minecraft", "Survival", "Event"]
    },
    {
        id: 3,
        title: "Discord Server Updates",
        date: "2024-01-25",
        content: "Unser Discord Server hat neue Kanäle bekommen! Schaut vorbei und entdeckt die neuen Voice-Channels für verschiedene Games sowie unseren erweiterten Community-Bereich.",
        tags: ["Discord", "Update", "Server"]
    }
];

// Funktion zum Rendern der Posts
function renderPosts() {
    const postsContainer = document.getElementById('postsContainer');
    
    if (posts.length === 0) {
        postsContainer.innerHTML = '<div class="no-posts">Noch keine Posts vorhanden.</div>';
        return;
    }

    // Posts nach Datum sortieren (neueste zuerst)
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    postsContainer.innerHTML = sortedPosts.map(post => `
        <div class="post-card">
            <h3 class="post-title">${post.title}</h3>
            <div class="post-date">
                <i class="fas fa-calendar-alt"></i>
                ${new Date(post.date).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </div>
            <p class="post-content">${post.content}</p>
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Floating Particles Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    createParticles();
});

// Smooth Scrolling für interne Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
