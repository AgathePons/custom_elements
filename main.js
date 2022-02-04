const app = {
    init(){
        const customDiv = document.querySelector("div-custom");
        console.log(customDiv);
        console.log(customDiv.shadowRoot);

        const newCustomDiv = document.createElement("div-custom");
        document.body.appendChild(newCustomDiv);

        const newCustomDiv2 = document.createElement("div-custom");
        document.body.appendChild(newCustomDiv2);
        newCustomDiv2.updateTitle("toto");

        newCustomDiv2.setAttribute("color","red");
        newCustomDiv2.setAttribute("color","green");
    }
}

document.addEventListener("DOMContentLoaded",app.init);