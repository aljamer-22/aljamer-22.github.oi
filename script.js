document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle navbar visibility
    function toggleNavbar(navCollapse, navbarToggler, show) {
        var bsCollapse = new bootstrap.Collapse(navCollapse, {
            toggle: false
        });
        if (show) {
            bsCollapse.show();
            navbarToggler.setAttribute('aria-expanded', 'true');
        } else {
            bsCollapse.hide();
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    }

    // Function to close the navbar
    function closeNavbar(navCollapse, navbarToggler) {
        toggleNavbar(navCollapse, navbarToggler, false);
    }

    // Navbar toggler click event listener
    document.querySelectorAll('.navbar-toggler').forEach(navbarToggler => {
        var targetNavbar = navbarToggler.getAttribute('data-bs-target');
        var navCollapse = document.querySelector(targetNavbar);

        navbarToggler.addEventListener('click', function () {
            var isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            toggleNavbar(navCollapse, navbarToggler, !isExpanded);
        });
    });

    // Add click event listeners to all nav-links for smooth scrolling and closing navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            var targetId = this.getAttribute('href').substring(1); // Get target section ID
            var targetSection = document.getElementById(targetId); // Find the target section

            if (targetSection) {
                var offsetTop = targetSection.offsetTop - 70; // Adjust as needed
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close the navbar after clicking on a nav-link
            document.querySelectorAll('.navbar-collapse').forEach(navCollapse => {
                var navbarToggler = document.querySelector('[data-bs-target="#' + navCollapse.id + '"]');
                closeNavbar(navCollapse, navbarToggler);
            });
        });
    });
});


//navbar animation
document.addEventListener('DOMContentLoaded', function () {
    const firstNavbar = document.getElementById('first-navbar');
    const secondNavbar = document.getElementById('second-navbar');

    let isSecondNavbarVisible = false;

    function checkNavbarVisibility() {
        const firstNavbarRect = firstNavbar.getBoundingClientRect();
        const firstNavbarBottom = firstNavbarRect.bottom;
        if (firstNavbarBottom < 0 && !isSecondNavbarVisible) {
            showSecondNavbar();
        } else if (firstNavbarBottom >= 0 && isSecondNavbarVisible) {
            hideSecondNavbar();
        }
    }
    function showSecondNavbar() {
        setTimeout(() => {
            secondNavbar.classList.add('navbar-slide-down');
            secondNavbar.style.display = 'block';
            isSecondNavbarVisible = true;
        }, 50);
    }
    function hideSecondNavbar() {
        secondNavbar.classList.remove('navbar-slide-down');
        setTimeout(() => {
            secondNavbar.classList.add('navbar-slide-up');
        }, 50);
        setTimeout(() => {
            isSecondNavbarVisible = false;
            secondNavbar.classList.remove('navbar-slide-up');
            secondNavbar.style.display = 'none';
        }, 300);
    }
    window.addEventListener('scroll', checkNavbarVisibility);
    window.addEventListener('resize', checkNavbarVisibility);
    checkNavbarVisibility();
});

//tooltip
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});

//navbar
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navCollapse = document.getElementById('navbarTop');

    document.addEventListener('click', function (event) {
        var isClickInsideNav = navCollapse.contains(event.target);
        var isClickInsideToggler = navbarToggler.contains(event.target);

        if (!isClickInsideNav && !isClickInsideToggler) {
            var bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
    navbarToggler.addEventListener('click', function () {
        var isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            var bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            navbarToggler.setAttribute('aria-expanded', 'false');
        } else {
            var bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.show();
            navbarToggler.setAttribute('aria-expanded', 'true');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navCollapse = document.getElementById('navbarBottom');

    document.addEventListener('click', function (event) {
        var isClickInsideNav = navCollapse.contains(event.target);
        var isClickInsideToggler = navbarToggler.contains(event.target);

        if (!isClickInsideNav && !isClickInsideToggler) {
            var bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
    navbarToggler.addEventListener('click', function () {
        var isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            var bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            navbarToggler.setAttribute('aria-expanded', 'false');
        } else {
            var bsCollapse = new bootstrap.Collapse(navCollapse, {
                toggle: false
            });
            bsCollapse.show();
            navbarToggler.setAttribute('aria-expanded', 'true');
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Initialize tooltips if needed
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Function to update active nav-link based on scroll position
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('#navbarNav .nav-link');

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100; // Adjust as needed
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY;
            const id = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }

    // Initial call to set active nav-link on page load
    updateActiveNav();

    // Scroll event listener to update active nav-link
    window.addEventListener('scroll', updateActiveNav);

    // Smooth scroll behavior for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Adjust as needed
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});



