
const textInput = document.getElementById("textInput");
const addButton = document.getElementById("addButton");
const contentParagraph = document.getElementById("content");

addButton.addEventListener("click", () => {
    const newText = textInput.value;

    if (newText.trim() !== "") {
        const newLine = document.createElement("br");
        const newContent = document.createTextNode(newText);
        contentParagraph.appendChild(newContent);
        contentParagraph.appendChild(newLine);
        textInput.value = "";
    }
});
