function scrollToSection(targetId) {
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
}

export default scrollToSection;