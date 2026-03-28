// JavaScript gallery file
//hover css for gallery image

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.getElementById("closeBtn");


const galleryData=[
    // Energy 
    {
        title:"",
        description:"",

    },
    {
        title:"",
        description:"",
    },
    {
        title:"",
        description:"",
    },
    {
        title:"",
        description:"",
    },
    {
        title:"",
        description:"",
    },
    {
        title:"",
        description:"",
    },

];

// Attach click to all cells

const cells = document.querySelectorAll(".cell");
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        const img = cell.querySelector("img");
        modalImage.src = img.src;
        modalImage.alt = galleryData[index].title;
        modalTitle.textContent = galleryData[index].title;
        modalDescription.textContent = galleryData[index].description;
        modal.classList.add("active");
    });
});

//Function for reset modal part
function resetModalStyle() {
  //reset colors
    modalBody.style.backgroundColor = "";
    modalBody.style.color = "";
    document.getElementById("modalTitle").style.color = "";

    //resetdropdown to default
    document.getElementById("colorScheme").value = "default";
    document.getElementById("fontstyle").value = "default";
}

// Close modal
//close button behave
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    resetModalStyle();
});

//close when click else where
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        resetModalStyle();
    }
});

// Get modal body
const modalBody = document.getElementById("modalBody");

// Create container
const controls = document.createElement("div");
controls.className = "customization-controls";

// Create HTML inside (template literal)
controls.innerHTML = `
<div class="collect-group">
    <div class="control-group">
        <label for="colorScheme">Color Scheme:</label>
        <select id="colorScheme">
            <option value="default">Default</option>
            <option value="Dark green">Dark green</option>
            <option value="Sky-blue">Sky blue</option>
            <option value="Light green">Light green</option>
        </select>
    </div>

    <div class="control-group">
        <label for="fontStyle">Font Style:</label>
        <select id="fontStyle">
            <option value="default">Default</option>
            <option value="serif">Serif</option>
            <option value="sans">Sans-Serif</option>
            <option value="mono">Monospace</option>
        </select>
    </div>
    </div>
`;


// Append to modal
modalBody.appendChild(controls);

// COLOR CHANGE
document.getElementById("colorScheme").addEventListener("change", function () {

    switch (this.value) {
        case "Dark green":
        modalBody.style.backgroundColor = "#0e2e04";
        modalBody.style.color = "#ffffff";
        document.getElementById("modalImage").style.boxShadow =
            "0px 10px 24px rgba(255, 255, 255, 0.47)";
        document.getElementById("modalTitle").style.color = "#ffffff";
        break;

    case "Sky-blue":
        modalBody.style.backgroundColor = "#318fe7";
        modalBody.style.color = "#ffffff";
        document.getElementById("modalImage").style.boxShadow =
            "0px 10px 24px rgba(0, 0, 0, 0.37)";
        document.getElementById("modalTitle").style.color = "#ffffff";

        break;

    case "Light green":
        modalBody.style.backgroundColor = "#52b788";
        modalBody.style.color = "#e3f2fd";
        document.getElementById("modalImage").style.boxShadow =
            "0px 10px 24px rgba(0, 0, 0, 0.37)";
        break;

    default:
        resetModalStyle();

    }
});

// FONT CHANGE
document.getElementById("fontStyle").addEventListener("change", function () {
    switch (this.value) {
        case "serif":
        modalBody.style.fontFamily = "Georgia, serif";
        break;

    case "sans":
        modalBody.style.fontFamily = "Arial, sans-serif";
        break;

    case "mono":
        modalBody.style.fontFamily = "Courier New, monospace";
        break;

    default:
        modalBody.style.fontFamily = "";
    }
});






