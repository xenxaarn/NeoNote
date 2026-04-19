// grabbing elements
const content = document.getElementById("note-content");
const save_btn = document.getElementById("save-btn");
const ul_title = document.getElementById("note-title");
const notes_list = document.getElementById("notes-list");
const delete_btn = document.getElementById("delete-btn");
const lock_btn = document.getElementById("lock-note-btn");
const clear_btn = document.getElementById("Clear-btn");

// storage
let storage = [];
let current = null;
let same = null;

// CLEAR BUTTON
clear_btn.addEventListener("click", () => {
    ul_title.value = "";
    content.value = "";
    current = null;
    console.log("note cleared");
});

// SAVE BUTTON
save_btn.addEventListener("click", () => {
    if (ul_title.value === "" || content.value === "") {
        alert("content/title cant be empty.");
        return;
    }

    if (ul_title.value === same) {
        alert("Note with same title already exists.");
        return;
    }

    const unique_id = "note-" + Date.now();

    const note = {
        id: unique_id,
        title: ul_title.value,
        content: content.value,
        locked: false,
        password: null
    };

    storage.push(note);
    same = note.title;

    // create UI element
    const li = document.createElement("li");
    li.classList.add("note-item");
    li.id = unique_id;

    const span = document.createElement("span");
    span.innerText = note.title;

    li.appendChild(span);
    notes_list.appendChild(li);

    // CLICK NOTE
    li.addEventListener("click", () => {
        if (note.locked) {
            const input = prompt("Enter password to unlock:");

            if (input === note.password) {
                ul_title.value = note.title;
                content.value = note.content;
                current = note;
            } else {
                alert("Wrong password!");
            }
        } else {
            ul_title.value = note.title;
            content.value = note.content;
            current = note;
        }
    });

    console.log("Saved:", storage);
});

// DELETE BUTTON
delete_btn.addEventListener("click", () => {
    if (!current) {
        alert("No note selected.");
        return;
    }

    // remove from DOM
    const el = document.getElementById(current.id);
    if (el) el.remove();

    // remove from storage
    storage = storage.filter(n => n.id !== current.id);

    // reset
    current = null;
    ul_title.value = "";
    content.value = "";

    console.log("Deleted. Remaining:", storage);
});

// LOCK BUTTON
lock_btn.addEventListener("click", () => {
    if (!current) {
        alert("No note selected.");
        return;
    }

    if (current.locked) {
        alert("Note is already locked.");
        return;
    }

    const pass = prompt("Set a password:");

    if (!pass) {
        alert("Password cannot be empty.");
        return;
    }

    current.locked = true;
    current.password = pass;

    alert("Note locked successfully.");
});