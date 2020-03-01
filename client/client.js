
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log("form submitted");

    const name = formData.get("name");
    const content = formData.get("content");

    // Message object sent from the client
    const message = {
        name,
        content
    };
    console.log(message);
});