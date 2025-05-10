document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-skills");
    const extraSkills = document.querySelectorAll(".extra-skill");
    let expanded = false;

    toggleBtn.addEventListener("click", () => {
        extraSkills.forEach(skill => {
            skill.style.display = expanded ? "none" : "flex";
        });

        toggleBtn.textContent = expanded ? "Show More" : "Show Less";
        expanded = !expanded;
    });
});
