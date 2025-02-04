let currentConferenceType = ""; 

window.onload = function () {
    if (currentConferenceType === "") {
        showHomeSection(); // Show the home content initially
    } else {
        showConferenceList(currentConferenceType); // Show the previously clicked conference list
    }
};

// Event listeners for navigation
document.getElementById("home-link").addEventListener("click", function () {
    showHomeSection();
});

document.getElementById("about-link").addEventListener("click", function () {
    hideHomeSection();
    showAboutSection();
    hideConferenceList();
});

document.getElementById("national-link").addEventListener("click", function () {
    hideHomeSection();
    hideAboutSection();
    showConferenceList("national");
});

document.getElementById("international-link").addEventListener("click", function () {
    hideHomeSection();
    hideAboutSection();
    showConferenceList("international");
});

// Show the Home content
function showHomeSection() {
    hideAboutSection();
    hideConferenceList();
    document.getElementById("home-content").style.display = "block";
}

// Hide the Home content
function hideHomeSection() {
    document.getElementById("home-content").style.display = "none";
}

// Show the Conference list (National or International)
function showConferenceList(type) {
    const conferenceList = document.getElementById("conference-list");
    const list = document.getElementById("list");
    list.innerHTML = ""; // Clear previous list

    const nationalConferences = [
        { name: "National AI Summit - 2025", link: "https://2025.hci.international/" },
        { name: "Data Science National Conference", link: "https://www.mldm.de/index.php" },
        { name: "Machine Learning Workshop", link: "https://isair.site/submission/" }
    ];

    const internationalConferences = [
        { name: "International Conference on Machine Learning (ICML) 2025", link: "https://icml.cc" },
        { name: "Conference on Neural Information Processing Systems (NeurIPS) 2025", link: "https://nips.cc" },
        { name: "International Conference on Learning Representations (ICLR) 2025", link: "https://iclr.cc" },
        { name: "IEEE International Conference on Computer Vision (ICCV) 2025", link: "https://iccv2025.org" },
        { name: "International Conference on Robotics and Automation (ICRA) 2025", link: "https://icra2025.org" },
        { name: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2025", link: "https://cvpr2025.thecvf.com" },
        { name: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD) 2025", link: "https://kdd.org" },
        { name: "International Conference on Machine Learning and Data Mining (MLDM) 2025", link: "https://mldm.de" },
        { name: "International Conference on Statistical Learning and Data Science (SLDS) 2025", link: "https://slds.org" },
        { name: "International Joint Conference on Artificial Intelligence (IJCAI) 2025", link: "https://ijcai.org" },
        { name: "International Conference on Web Search and Data Mining (WSDM) 2025", link: "https://wsdm-conf.org" },
        { name: "International Conference on Blockchain Technology and Applications (ICBTA) 2025", link: "https://icbta2025.org" },
        { name: "International Conference on Artificial Intelligence (ICAI) 2025", link: "https://iaria.org/conferences2025/ICAI.html" },
        { name: "ACM International Conference on Intelligent Virtual Agents (IVA) 2025", link: "https://iva2025.org" },
        { name: "International Conference on Cognitive Computing (ICCC) 2025", link: "https://iccc2025.org" },
        { name: "International Conference on Knowledge Discovery and Machine Learning (KDML) 2025", link: "https://kdml.org" },
        { name: "International Symposium on Artificial Intelligence and Robotics (ISAIR) 2025", link: "https://isair2025.org" },
        { name: "International Conference on Statistical Modeling and Data Analytics (SMDa) 2025", link: "https://smdaconf.com" },
        { name: "International Conference on Data Mining and Machine Learning (DML) 2025", link: "https://dml2025.org" },
        { name: "Data Science Conference 2025", link: "https://datascienceconf.org" },
        { name: "International Conference on Data Science and Engineering (ICDSE) 2025", link: "https://icdse2025.org" },
        { name: "International Conference on Computational Statistics (COMPSTAT) 2025", link: "https://compstat2025.org" },
        { name: "IEEE International Conference on Computational Intelligence (CI) 2025", link: "https://ci2025.org" },
        { name: "International Conference on Cloud Computing (CloudCom) 2025", link: "https://cloudcom2025.org" },
        { name: "IEEE International Conference on High-Performance Computing (HiPC) 2025", link: "https://hipc.org" },
        { name: "International Conference on Software Engineering (ICSE) 2025", link: "https://icse2025.org" },
        { name: "IEEE International Conference on Big Data Computing (BigDataCom) 2025", link: "https://bigdatacom2025.org" },
        { name: "International Conference on Cyber Security (ICCS) 2025", link: "https://iccs2025.org" },
        { name: "Global Blockchain Summit 2025", link: "https://blockchainsummit2025.org" },
        { name: "IEEE International Conference on Smart Cities (SmartCities) 2025", link: "https://smartcities2025.org" },
        { name: "International Conference on Internet of Things (IoT 2025)", link: "https://iot2025.org" },
        { name: "International Conference on Machine Learning and Data Science (MLDS) 2025", link: "https://mlds2025.org" },
        { name: "International Conference on Intelligent Engineering Systems (IES) 2025", link: "https://ies2025.org" },
        { name: "International Conference on Quantum Computing and Engineering (QCE) 2025", link: "https://qce2025.org" }
    ];


    let selectedConferences = type === "national" ? nationalConferences : internationalConferences;

    selectedConferences.forEach(conf => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = conf.name;
        a.href = "#"; // Prevent default link behavior for now
        a.target = "_self"; // Open link in the same tab
        a.classList.add("conference-link"); // Styling class

        // Add an event listener to open the conference link
        a.addEventListener("click", function () {
            window.open(conf.link, "_self"); // Open the link in the same tab
        });

        li.appendChild(a);
        list.appendChild(li);
    });

    conferenceList.style.display = "block"; // Show the conference list
}


// Show the About section
function showAboutSection() {
    document.getElementById("about").style.display = "block";
}

// Hide the About section
function hideAboutSection() {
    document.getElementById("about").style.display = "none";
}

// Hide the Conference List section
function hideConferenceList() {
    document.getElementById("conference-list").style.display = "none";
}


// Function to go back to the previous content
function goBack() {
    hideBackButton();
    if (currentConferenceType === "national") {
        showConferenceList("national");
    } else if (currentConferenceType === "international") {
        showConferenceList("international");
    } else {
        showHomeSection();
    }
}
// Search functionality for conference list
function searchFunction() {
    let searchTerm = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#list li");

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
