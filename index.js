const id = document.getElementById("note-title");
const content = document.getElementById("note-content")

// ^^ grabbing our necessary elements

let arr = []; // this is where ill store notes (for test cases)

content.addEventListener("input", () => {
    if (content.value !== "") {
        arr.push(content.value);
        console.log("pushed") // test case
        console.log(arr) // test case
    }
})