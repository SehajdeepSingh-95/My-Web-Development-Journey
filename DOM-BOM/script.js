document.getElementById("changeTextButton").addEventListener("click", () => {
    document.getElementById("myParagraph").textContent = "Text Changed!";
});

document.getElementById("highlightFirstCity").addEventListener("click", () => {
    document.getElementsByClassName("chai")[0].style.color = "red";
});

document.getElementById("changeOrder").addEventListener("click", () => {
    document.getElementById("coffeeType").textContent = "Espresso";
});

document.getElementById("addNewItem").addEventListener("click", () => {
    document.getElementById("shoppingList").innerHTML += "<li>Tea</li>";
});

document.getElementById("removeLastTask").addEventListener("click", () => {
    document.getElementById("taskList").removeChild(document.getElementById("taskList").lastElementChild);
});

document.getElementById("clickMeButton").addEventListener("click", () => {
    alert("Button Clicked!");
});

document.getElementById("teaList").addEventListener("click", (event) => {
    if (event.target.style.color === "red") {
        event.target.style.color = "white";
    } else {
        event.target.style.color = "red";
    }
});

document.querySelector("#feedbackForm").addEventListener("submit", (event) => {
    event.preventDefault();
    text=document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent += text+"\n";
    document.getElementById("feedbackInput").value = "";
});

document.addEventListener("DOMContentLoaded", () => {
    alert("DOM content loaded");
});

document.querySelector("#toggleHighlight").addEventListener("click", () => {
    if (document.querySelector("#descriptionText").classList.contains("highlight")) {
        document.querySelector("#descriptionText").classList.remove("highlight");
    } else {
        document.querySelector("#descriptionText").classList.add("highlight");
    }
});
