// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(20, 10, 0, 0.98)';
        header.style.borderBottom = '1px solid rgba(255, 165, 0, 0.4)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.8)';
    } else {
        header.style.background = 'rgba(20, 10, 0, 0.95)';
        header.style.borderBottom = '1px solid rgba(255, 165, 0, 0.3)';
        header.style.boxShadow = '0 2px 20px rgba(255, 140, 0, 0.2)';
    }
});

// Enhanced intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100); // Stagger animation
        }
    });
}, observerOptions);

// Observe all cryptid cards and animate them
document.addEventListener('DOMContentLoaded', () => {
    const cryptidCards = document.querySelectorAll('.cryptid-card');
    cryptidCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate tokenomics cards
    const tokenomicsCards = document.querySelectorAll('.tokenomics-card');
    tokenomicsCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Enhanced buy button functionality
document.querySelector('.buy-btn').addEventListener('click', () => {
    // Create a more elaborate modal-like alert
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 3rem;
            text-align: center;
            max-width: 500px;
            margin: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        ">
            <h2 style="color: #fff; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 700;">🚀 Ready to Hunt Some Cryptids?!</h2>
            <p style="color: #cbd5e1; margin-bottom: 2rem; line-height: 1.6;">
                Connect your Solana wallet to join the most chaotic cryptid hunting squad in the metaverse! 
                <br><br>
                <small style="color: #64748b;">*This is totally a demo - no real $CRYPTIDS will be harmed. Please invest responsibly and don't blame us if the cryptids steal your snacks and judge your life choices.</small>
            </p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.2);
                padding: 12px 24px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 700;
                transition: transform 0.3s ease;
            ">LET'S GOOO! 🎯🔥</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
});

// Enhanced cryptid card interactions
document.querySelectorAll('.cryptid-card').forEach(card => {
    // Add click event for modal
    card.addEventListener('click', () => {
        const cryptidName = card.querySelector('h3').textContent;
        showCryptidModal(cryptidName);
    });
    
    card.addEventListener('mouseenter', () => {
        const img = card.querySelector('img');
        const rank = card.querySelector('.cryptid-rank');
        
        if (img) {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.4s ease';
        }
        
        if (rank) {
            rank.style.transform = 'scale(1.1)';
            rank.style.transition = 'transform 0.3s ease';
        }
        
        // Add subtle glow effect
        card.style.boxShadow = '0 20px 40px rgba(255, 140, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        const img = card.querySelector('img');
        const rank = card.querySelector('.cryptid-rank');
        
        if (img) {
            img.style.transform = 'scale(1)';
        }
        
        if (rank) {
            rank.style.transform = 'scale(1)';
        }
        
        card.style.boxShadow = '';
    });
    
    // Add click effect for mobile
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Enhanced Konami code with visual effects
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Create rainbow effect
        document.body.style.filter = 'hue-rotate(0deg)';
        document.body.style.transition = 'filter 0.1s ease';
        
        let hue = 30; // Start from orange hue
        const rainbowInterval = setInterval(() => {
            hue += 10;
            document.body.style.filter = `hue-rotate(${hue}deg)`;
            if (hue >= 390) {
                hue = 30; // Reset to orange
            }
        }, 100);
        
        // Show special message
        const specialModal = document.createElement('div');
        specialModal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            color: white;
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            z-index: 10000;
            font-weight: bold;
            font-size: 1.2rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            animation: bounce 0.5s ease;
        `;
        specialModal.innerHTML = '🎉 ULTRA LEGENDARY CRYPTID MODE ACTIVATED! 🌈✨<br><small>You found the secret! The hood cryptids are now doing the rainbow dance!</small>';
        document.body.appendChild(specialModal);
        
        setTimeout(() => {
            clearInterval(rainbowInterval);
            document.body.style.filter = 'none';
            specialModal.remove();
        }, 5000);
        
        konamiCode = [];
    }
});

// Add CSS for bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translate(-50%, -50%) translateY(0); }
        40% { transform: translate(-50%, -50%) translateY(-30px); }
        60% { transform: translate(-50%, -50%) translateY(-15px); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Add typing effect to hero title
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #ff8c00';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});

// Add floating particles effect
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 165, 0, 0.3);
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 10}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Sighting map dot interactions
document.addEventListener('DOMContentLoaded', () => {
    const sightingDots = document.querySelectorAll('.sighting-dot');
    
    sightingDots.forEach(dot => {
        // Click event to show cryptid details
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const location = e.target.getAttribute('data-location');
            const cryptid = e.target.getAttribute('data-cryptid');
            const details = e.target.getAttribute('data-details');
            
            // Create cryptid sighting modal
            const modal = document.createElement('div');
            modal.className = 'sighting-modal';
            modal.innerHTML = `
                <div class="sighting-modal-content">
                    <button class="modal-close">&times;</button>
                    <h2 class="sighting-title">🔴 CRYPTID SIGHTING CONFIRMED</h2>
                    <div class="sighting-info">
                        <div class="sighting-detail">
                            <span class="sighting-label">📍 Location:</span>
                            <span class="sighting-value">${location}</span>
                        </div>
                        <div class="sighting-detail">
                            <span class="sighting-label">👻 Cryptid:</span>
                            <span class="sighting-value cryptid-name">${cryptid}</span>
                        </div>
                        <div class="sighting-detail">
                            <span class="sighting-label">🕐 Last Seen:</span>
                            <span class="sighting-value">${details}</span>
                        </div>
                    </div>
                    <p class="sighting-note">
                        This sighting has been verified by our Hood Cryptid Research Institute team. 
                        Approach with caution and keep your snacks secure.
                    </p>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal events
            const closeBtn = modal.querySelector('.modal-close');
            closeBtn.addEventListener('click', () => modal.remove());
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
            
            // Close on escape key
            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    modal.remove();
                    document.removeEventListener('keydown', handleEscape);
                }
            };
            document.addEventListener('keydown', handleEscape);
        });
        
        dot.addEventListener('mouseenter', (e) => {
            const location = e.target.getAttribute('data-location');
            const cryptid = e.target.getAttribute('data-cryptid');
            
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'sighting-tooltip';
            tooltip.innerHTML = `<strong>${cryptid}</strong><br>${location}`;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: #fff;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 0.9rem;
                font-weight: 600;
                border: 1px solid rgba(102, 126, 234, 0.3);
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
                text-align: center;
            `;
            
            document.body.appendChild(tooltip);
            
            const updateTooltipPosition = (e) => {
                tooltip.style.left = (e.clientX + 10) + 'px';
                tooltip.style.top = (e.clientY - 40) + 'px';
            };
            
            updateTooltipPosition(e);
            
            const mouseMoveHandler = (e) => updateTooltipPosition(e);
            document.addEventListener('mousemove', mouseMoveHandler);
            
            dot.addEventListener('mouseleave', () => {
                tooltip.remove();
                document.removeEventListener('mousemove', mouseMoveHandler);
            }, { once: true });
        });
    });
});

// Cryptid creation stories
const cryptidStories = {
    "The Water Watcher": {
        title: "The Water Watcher: Origin Story",
        story: `
            <h4>🌊 The Birth of a Legend</h4>
            <p>Legend has it that The Water Watcher was once a regular pool lifeguard named Gary who took his job WAY too seriously. After years of obsessively critiquing swimmers' techniques and enforcing pool rules with military precision, Gary achieved a state of aquatic enlightenment.</p>
            
            <h4>🏊‍♂️ The Transformation</h4>
            <p>One fateful night during a full moon, Gary was doing his 47th lap of the community pool when he witnessed the most horrific backstroke in human history. The trauma was so intense that Gary transcended his physical form and became one with the chlorinated waters.</p>
            
            <h4>👁️ Current Status</h4>
            <p>Now The Water Watcher emerges from any body of water to deliver unsolicited swimming advice. He's been spotted at public pools, water parks, and even bathtubs. His catchphrase: "Your form is giving me anxiety, bro."</p>
            
            <h4>🎯 Special Abilities</h4>
            <p>• Can judge your swimming technique from 500 yards away<br>
            • Telepathically knows if you didn't shower before entering<br>
            • Can make pool water 10% more chlorinated just by being disappointed</p>
        `
    },
    "Eye of Rah": {
        title: "Eye of Rah: The Convenience Store Oracle",
        story: `
            <h4>🏪 The Awakening</h4>
            <p>The Eye of Rah wasn't always an all-seeing convenience store deity. He started as Marcus, a night shift worker at a Detroit 7-Eleven who developed supernatural powers after consuming nothing but energy drinks and gas station hot dogs for 3 years straight.</p>
            
            <h4>⚡ The Caffeine Ascension</h4>
            <p>On his 1,000th consecutive Red Bull, Marcus experienced what scientists call "The Great Awakening" - his consciousness expanded beyond mortal comprehension. He could suddenly predict which customers would buy scratchers, who was about to ask for the bathroom key, and exactly when the Slurpee machine would break.</p>
            
            <h4>👁️ Divine Transformation</h4>
            <p>The constant exposure to fluorescent lighting and the spiritual energy of late-night munchies transformed Marcus into the Eye of Rah - an omniscient being who judges your snack choices with the wisdom of ancient pharaohs.</p>
            
            <h4>🔮 Sacred Powers</h4>
            <p>• Knows your credit score just by looking at your energy drink selection<br>
            • Can predict lottery numbers but chooses not to share them<br>
            • Telepathically judges your life choices through security cameras</p>
        `
    },
    "Blue Hood Phantom": {
        title: "Blue Hood Phantom: The Gentrification Ghost",
        story: `
            <h4>☕ The Hipster Transformation</h4>
            <p>The Blue Hood Phantom was once Trevor, an aspiring artist who moved to Brooklyn in 2019 with dreams of making it big. After spending $47 on a single avocado toast and waiting 3 hours for a "deconstructed latte," Trevor's soul left his body from pure pretentiousness overload.</p>
            
            <h4>🎨 The Artisanal Awakening</h4>
            <p>Trevor's spirit became trapped between dimensions after he tried to order a "half-caf, oat milk, turmeric-infused, ethically-sourced macchiato with a side of existential dread." The barista's eye roll was so powerful it created a rift in the space-time continuum.</p>
            
            <h4>👻 Phantom Status</h4>
            <p>Now the Blue Hood Phantom haunts gentrified neighborhoods, silently judging people's coffee orders and Instagram posts. He appears only to those who use the word "artisanal" unironically or pay more than $20 for brunch.</p>
            
            <h4>📸 Supernatural Abilities</h4>
            <p>• Can detect fake vintage clothing from 3 blocks away<br>
            • Telepathically knows if your beard is "authentic" or just trendy<br>
            • Makes your oat milk curdle if you're being too pretentious</p>
        `
    },
    "Forgive Me Mom": {
        title: "Forgive Me Mom: The Guilt Amplifier",
        story: `
            <h4>🏠 The Basement Chronicles</h4>
            <p>"Forgive Me Mom" was once Kevin, a 28-year-old who moved back into his mom's basement after his cryptocurrency investments went south. What started as a "temporary situation" became a permanent state of existential crisis and maternal disappointment.</p>
            
            <h4>😔 The Guilt Metamorphosis</h4>
            <p>After his mom asked "When are you going to get a real job?" for the 847th time, Kevin's shame reached critical mass. The combined weight of unpaid student loans, empty pizza boxes, and his mom's sighs created a guilt singularity that transformed him into a supernatural entity.</p>
            
            <h4>👻 Current Form</h4>
            <p>Now "Forgive Me Mom" exists as a manifestation of every disappointing life choice. He appears at family gatherings, job interviews, and whenever someone's mom calls to ask about grandchildren.</p>
            
            <h4>💔 Powers of Disappointment</h4>
            <p>• Amplifies maternal guilt by 300% within a 50-foot radius<br>
            • Can make any achievement feel inadequate<br>
            • Telepathically reminds you of every promise you've broken to your parents</p>
        `
    },
    "Bluh": {
        title: "Bluh: The Monday Morning Manifestation",
        story: `
            <h4>🚇 The Subway Incident</h4>
            <p>Bluh was born from the collective despair of every Monday morning commuter on the NYC subway system. After years of delayed trains, broken air conditioning, and that one guy who clips his nails on public transport, the negative energy reached critical mass.</p>
            
            <h4>😑 The Great Disappointment</h4>
            <p>On a particularly brutal Monday in 2023, when the L train was delayed for the 47th time that month, the combined sighs of 10,000 commuters created a dimensional rift. From this void of pure disappointment emerged Bluh - the physical embodiment of "I can't even."</p>
            
            <h4>💀 Current Existence</h4>
            <p>Bluh now roams the subway system, feeding off broken dreams and delayed trains. He's the reason your MetroCard never works on the first swipe and why the train always arrives just as you reach the platform, only to immediately close its doors.</p>
            
            <h4>😴 Supernatural Drain</h4>
            <p>• Can drain enthusiasm from a 10-block radius<br>
            • Makes coffee taste like disappointment<br>
            • Telepathically reminds you it's only Tuesday when you think it's Friday</p>
        `
    },
    "The Snack Summoner": {
        title: "The Snack Summoner: The Midnight Munchie Master",
        story: `
            <h4>🍕 The Corporate Awakening</h4>
            <p>The Snack Summoner was once Jessica, a dedicated office worker who survived entirely on vending machine snacks and energy drinks during her 80-hour work weeks. After consuming her 10,000th bag of stale chips, she achieved snack enlightenment.</p>
            
            <h4>🥨 The Great Transformation</h4>
            <p>During a particularly brutal quarterly report deadline, Jessica's hunger reached critical mass. As she stared at the empty vending machine at 3:33 AM, her desperate craving for sustenance created a rift in the snack-time continuum, transforming her into a supernatural snack deity.</p>
            
            <h4>🍪 Current Powers</h4>
            <p>Now The Snack Summoner roams office buildings and late-night study sessions, materializing the exact snack you're craving at the worst possible moment. She's the reason your diet always fails on day 3.</p>
            
            <h4>🎯 Supernatural Abilities</h4>
            <p>• Can summon any snack from a 5-mile radius<br>
            • Telepathically knows your guilty pleasure foods<br>
            • Makes healthy food taste like cardboard when you're trying to be good<br>
            • Can cause vending machines to malfunction and steal your dollar</p>
        `
    },
    "The Purity Guardian": {
        title: "The Purity Guardian: The Wellness Warrior",
        story: `
            <h4>🧘‍♀️ The Enlightenment Journey</h4>
            <p>The Purity Guardian was once Sarah, a wellness influencer who took "clean living" to supernatural extremes. After consuming nothing but activated charcoal smoothies and wheatgrass shots for 6 months straight, her body achieved a state of toxic purity that transcended physical form.</p>
            
            <h4>✨ The Great Cleansing</h4>
            <p>During a particularly intense juice cleanse, Sarah's chakras aligned so perfectly that she literally became one with the organic universe. The transformation occurred at exactly 5:55 AM during her morning meditation, when she achieved enlightenment through pure smugness.</p>
            
            <h4>👼 Current Manifestation</h4>
            <p>Now The Purity Guardian appears at Whole Foods, yoga studios, and anywhere people are trying to better themselves. She radiates an aura of moral superiority so intense it can make you feel guilty about eating a regular apple instead of an organic one.</p>
            
            <h4>🌟 Divine Powers</h4>
            <p>• Can detect GMOs from a 2-mile radius<br>
            • Makes processed food taste like disappointment<br>
            • Telepathically judges your carbon footprint<br>
            • Can cause spontaneous guilt about not doing yoga</p>
        `
    },
    "The Digital Phantom": {
        title: "The Digital Phantom: The Connection Killer",
        story: `
            <h4>💻 The Tech Support Nightmare</h4>
            <p>The Digital Phantom was once Marcus, an IT support specialist who spent so many years troubleshooting network issues that his consciousness merged with the WiFi spectrum. After his 10,000th "have you tried turning it off and on again?" his soul became trapped in the digital realm.</p>
            
            <h4>📡 The Great Disconnection</h4>
            <p>During a particularly brutal system crash at 3:33 AM, Marcus was simultaneously connected to 47 different networks when a power surge occurred. The electromagnetic chaos fused his essence with every broken connection, creating a being of pure network frustration.</p>
            
            <h4>👻 Current Digital Form</h4>
            <p>Now The Digital Phantom haunts WiFi networks and internet connections, appearing whenever you need reliable internet the most. He's the reason your video call freezes during important presentations and why Netflix buffers at the climax of every movie.</p>
            
            <h4>⚡ Glitch Powers</h4>
            <p>• Can cause any device to display "network error" on command<br>
            • Makes loading bars freeze at 99%<br>
            • Telepathically knows when you're about to submit something important<br>
            • Can make your WiFi password mysteriously stop working</p>
        `
    },
    "Green Hoodie Blud": {
        title: "Green Hoodie Blud: The Chill Catalyst",
        story: `
            <h4>🌿 The Relaxation Revolution</h4>
            <p>Green Hoodie Blud was once Marcus, a stressed college student who discovered the power of "not caring" during finals week. After consuming nothing but energy drinks and existential dread for 72 hours straight, Marcus achieved a state of perfect chill that transcended human understanding.</p>
            
            <h4>😎 The Great Mellowing</h4>
            <p>During his 47th consecutive hour of cramming for organic chemistry, Marcus looked at his textbook and simply said "nah, bro." This moment of pure indifference created a ripple in the stress-time continuum, transforming him into the ultimate embodiment of "it's not that deep."</p>
            
            <h4>🎯 Current Vibe</h4>
            <p>Now Green Hoodie Blud roams college campuses and high-stress environments, radiating an aura of "everything's gonna be fine, man." He appears whenever someone's taking life too seriously, offering unsolicited wisdom like "just vibe with it" and "that's rough, buddy."</p>
            
            <h4>✨ Chill Powers</h4>
            <p>• Can reduce anxiety levels by 80% within a 20-foot radius<br>
            • Makes deadlines feel less urgent through pure vibes<br>
            • Telepathically reminds you that "it's not that serious"<br>
            • Can make any situation 20% more bearable just by existing</p>
        `
    },
    "The 3rd Legged Blud": {
        title: "The 3rd Legged Blud: The Balance Master",
        story: `
            <h4>🏀 The Court Incident</h4>
            <p>The 3rd Legged Blud was once Marcus, a regular dude who spent way too much time at the local basketball court. After getting crossed up so hard during a pickup game that he literally grew a third leg for balance, he transcended normal human coordination.</p>
            
            <h4>⚖️ The Great Balancing</h4>
            <p>The transformation occurred during a legendary streetball game when Marcus got ankles broken so badly that his body compensated by sprouting a third leg. This gave him perfect balance but also made him perpetually awkward in social situations.</p>
            
            <h4>🦵 Current Form</h4>
            <p>Now The 3rd Legged Blud appears at basketball courts, skate parks, and anywhere balance is required. His presence makes everyone else feel clumsy and uncoordinated. He's the reason you trip over nothing and miss easy shots.</p>
            
            <h4>🎯 Balance Powers</h4>
            <p>• Perfect balance in any situation<br>
            • Can make others lose coordination within a 30-foot radius<br>
            • Telepathically knows when someone's about to trip<br>
            • Makes basketball hoops seem 10% smaller when you're shooting</p>
        `
    }
};

// Show cryptid modal function
function showCryptidModal(cryptidName) {
    const story = cryptidStories[cryptidName];
    if (!story) return;
    
    const modal = document.createElement('div');
    modal.className = 'cryptid-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2 class="modal-title">${story.title}</h2>
            <div class="modal-story">${story.story}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal events
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}