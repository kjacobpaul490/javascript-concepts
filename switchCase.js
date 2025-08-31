function getDoctorsSpecsDescription(docSpec) {
    debugger;
    let text = "";

    switch (docSpec) {
        case  "Dermatology":
            text = "Dermatology is the branch of medicine dealing with the skin.";
            break;
        case "Neurology":
            text = "Neurology specialists care for medical problems of the nervous system.";
            break;
        case  "Oncologist" :
            text = "An oncologist is a physician who specialises in the diagnosis, treatment.";
            break;
        case "Gastroenterology":
            text = "Gastroenterology is another subspecialty of internal medicine.";
            break;
        case "Cardiologist":
            text = "Cardiologists perform various tests, including chest X-rays, cardiac CTs and MRIs.";
            break;
        default:
            text = "Find a doctor"


    }

    document.getElementById("lblDoctorsSpecsDescription").innerHTML = text;
}