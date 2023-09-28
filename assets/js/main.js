gsap.registerPlugin('ScrollTrigger');

(() => {
    document.addEventListener('DOMContentLoaded', (e) => {
        // ANIMATIONS
        // Main - Presentation
        gsap.from('.presentation .container > *', {
            scrollTrigger: {
                trigger: '.presentation',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            stagger: 0.5,
            duration: 0.5,
        });

        // Main - Waiting
        gsap.from('.waiting .top > *', {
            scrollTrigger: {
                trigger: '.waiting .bottom',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            x: 50,
            stagger: 0.5,
            duration: 0.5,
        });

        gsap.from('.waiting .bottom > *', {
            scrollTrigger: {
                trigger: '.waiting .decorator',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            x: -50,
            duration: 0.5,
        });

        // Main - Menu-ad
        gsap.from('.menu-ad .content picture', {
            scrollTrigger: {
                trigger: '.menu-ad .content',
                toggleActions: 'play none none none',
            },
            scale: 0.9,
            duration: 1,
            repeat: 2,
            yoyo: true,
            ease: 'easeInOut',
        });

        const cokinTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.menu-ad .content .btn-brand',
                toggleActions: 'play none none none',
            },
        });

        cokinTl.from('.menu-ad .cokin', {
            y: '50%',
            duration: 1,
            ease: 'elastic',
        });

        cokinTl.from('.menu-ad .dialog', {
            x: '20%',
            y: '20%',
            opacity: 0,
            scale: 1.5,
            duration: 1,
            ease: 'elastic',
        });

        cokinTl.fromTo('.menu-ad .dialog img', {
            rotation: 5,
            scale: 0.8,
            transformOrigin: 'right bottom',
        }, {
            rotation: -5,
            scale: 1,
            repeat: 2,
            duration: 1,
            yoyo: true,
            ease: 'easeInOut',
        });

    });
})();