const head = document.getElementById("header-container");

head.style.backgroundColor = "green";

const emergencyTasksBG = (color) => {
    const emergencyTasks = document.getElementsByClassName("emergency-tasks");

    emergencyTasks[0].style.backgroundColor = color;
};
emergencyTasksBG("pink");

const emergencyTasksH3 = (color) => {
    const h3EmergencyTasks = document.querySelectorAll(".emergency-tasks h3");

    for (let element in h3EmergencyTasks) {
        h3EmergencyTasks[element].style.backgroundColor = color;
    }
};
emergencyTasksH3("purple");

const noEmergencyTasksBG = (color) => {


};
