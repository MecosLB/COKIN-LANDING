(() => {
    const toggleBtn = document.querySelector('#toggleBtn'),
        sidebar = document.querySelector('#sidebar');
    let isOpen = false;

    const add = (className) => {
        toggleBtn.classList.add(className);
    };

    const remove = (className) => {
        toggleBtn.classList.remove(className);
    };

    const ACTIONS = {
        true: add,
        false: remove,
    };

    document.addEventListener('DOMContentLoaded', (e) => {
        // MOBILE SIDEBAR
        const tlSidebar = new gsap.timeline({ paused: true });

        tlSidebar.to(sidebar, {
            right: 0,
            ease: 'easeInOut'
        }, 0.25)
            .reverse();

        toggleBtn.addEventListener('click', () => {
            if (!isOpen) {
                isOpen = true;
                tlSidebar.reversed(!isOpen);
                ACTIONS[isOpen]('open');
            } else {
                tlSidebar.reverse();
                isOpen = false;
                ACTIONS[isOpen]('open');
            }
        });
    });
})();