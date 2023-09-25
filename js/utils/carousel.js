export function dragableCarousel() {

    const wrapper = document.querySelector('.course-wrapper');
    const carousel = document.querySelector('.carousel');
    const arrowBtns = document.querySelectorAll('.course-wrapper i');
    const firstCardWidth = carousel.querySelector('.course').offsetWidth;
    const carouselChildren = [...carousel.children];

    let isDragging = false, startX, startScrollLeft;
    let timeoutId;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    //Insert copies of the last few courses to beginning of carousel for infinite scrolling
    carouselChildren.slice(-cardPerView).reverse().forEach(c => {
        carousel.insertAdjacentHTML("afterbegin", c.outerHTML);
    });

    //Insert copies of the first few courses to beginning of carousel for infinite scrolling
    carouselChildren.slice(0, cardPerView).reverse().forEach(c => {
        carousel.insertAdjacentHTML("beforeend", c.outerHTML);
    });

    arrowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragging = ((e) => {
        if (!isDragging) return; //if isDragging is false return from here
        //Update the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX -startX);
    });

    const dragStart = ((e) => {
        isDragging = true;
        carousel.classList.add('dragging');
        //Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    });

    const dragStop = ((e) => {
        isDragging = false;
        carousel.classList.remove('dragging');
    });

    const infiniteScroll = (() => {
        //If the carousel is at the beginning, scroll to the end
        if (carousel.scrollLeft === 0) {
            carousel.classList.add('no-transition');
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove('no-transition');
        }
        //If the carousel is at the end, scroll to the end
        else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add('no-transition');
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove('no-transition');
        }

        clearTimeout(timeoutId);
        if (!wrapper.matches(':hover')) autoPlay();
    });

    const autoPlay = (() => {
        if (window.innerWidth < 768) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    });
    autoPlay();

    carousel.addEventListener('mousemove', dragging);
    carousel.addEventListener('mousedown', dragStart);
    document.addEventListener('mouseup', dragStop);
    carousel.addEventListener('scroll', infiniteScroll);
    wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    wrapper.addEventListener('mouseleave', autoPlay);

}