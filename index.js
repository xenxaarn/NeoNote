const id = document.getElementById("note-title");
const content = document.getElementById("note-content")

// ^^ grabbing our necessary elements

let arr = []; // this is where ill store notes (for test cases)

content.addEventListener("input", () => {
    if (content.value !== "") {
        arr.push(content.value);
    }
})

// second task (appending the saved notes to a section in which the notes will appear)
const save_btn = document.getElementById("save-btn"); // grabbing the save btn

let storage = []; // storing our notes here (different from the arr array which is used for logging every key stroke made by the user)

save_btn.addEventListener("click", () => {
    if (content.value !== "") {
        storage.push(content.value)
        console.log(storage)
    }
});