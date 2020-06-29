function calcYearsExperience() {
    let yearsExperience = document.getElementById("years-experience");
    let date = new Date;
    let year = date.getFullYear();
    let yearsExperienceString = (year - 2002).toString();
    yearsExperience.innerText = yearsExperienceString;

}

window.addEventListener('DOMContentLoaded', (event) => {
    // alert('DOM fully loaded and parsed');
    calcYearsExperience();
});

