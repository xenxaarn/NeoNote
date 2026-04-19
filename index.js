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

// grabbing the title to then save and act as the unordered lists title:
const ul_title = document.getElementById("note-title")
const notes_list = document.getElementById("notes-list"); // grab the notes-list unordered list element, to which then we will append each note from the storage array as an <li> element in the unordered list


document.getElementById("Clear-btn").addEventListener("click", () => {
    ul_title.value = "";
    content.value = "";
    console.log("note cleared") // test
});


let storage = []; // storing our notes here (different from the arr array which is used for logging every key stroke made by the user)

let same; // small logic ill add to make sure the same title doesn't exist when the user makes a new note

let title;
let content2;


save_btn.addEventListener("click", () => {
    if (ul_title.value !== same) {
        if (content.value !== "") { // only save if the content text isn't empty
            storage.push(content.value)
            console.log(storage) // testing purposes
            2
            same = ul_title.value;
            // inner spam elements to hold the <li> elements title (note title)
            const inner_sp = document.createElement("span")
            inner_sp.innerText = ul_title.value;

            title = ul_title.value;
            content2 = content.value;

            const li = document.createElement("li"); // create the element to append to the unordered list (this is to test my solution)
            li.classList.add("note-item") // setting the className to this as the css will pick it up and apply the styles needed
            const unique_id = "abc-" + Date.now();
            inner_sp.id = unique_id
            li.id = unique_id
            li.appendChild(inner_sp)
            notes_list.appendChild(li)
            console.log("code reached") // test case

            // for referencing the current note
            let current = null;

            const note_title = ul_title.value;
            const note_content = content.value;

            li.addEventListener("click", () => {
                console.log("new code reached") // test case
                window.alert("switched to note", note_title)
                ul_title.value = note_title;
                content.value = note_content;

                current = li;
            });


            const delete_btn = document.getElementById("delete-btn")
            // delete btn logic
            delete_btn.addEventListener("click", () => {
                console.log("delete code reached") // testing again
                if (current) {
                    notes_list.removeChild(current)
                    current = null; // make it back to null after removing from note_list
                    ul_title.value = "";
                    content.value = "";
                    window.alert("deleted note")
                }
            });


        }
    }

    // checking if values are nil
    if (content.value == "" || ul_title.value == "") {
        window.alert("content/title cant be empty.")
    }
});

// too ez