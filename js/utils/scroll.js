export function scrollToSection() {
    const btnMore = document.getElementById('bnn-btn');
    const sctCourse = document.getElementById('sct-course');

    btnMore.addEventListener("click", () => {
        // Scroll to the section with a smooth behavior
        sctCourse.scrollIntoView({ behavior: "smooth" });
    });
}