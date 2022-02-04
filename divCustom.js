class divCustom extends HTMLElement {
    titleHTML;
    constructor(){
        super();

        // Création d'une racine fantôme
        const shadow = this.attachShadow({mode: 'open'});

        this.titleHTML = document.createElement("h2");
        this.titleHTML.textContent = "Ma div custom";
        this.titleHTML.setAttribute("color","green");

        const articleHTML = document.createElement("p");
        articleHTML.textContent = "Si vous associez une racine fantôme à un élément personnalisé avec la propriété mode définie à closed, vous ne serez pas autorisé à accéder au DOM fantôme depuis l'extérieur — monElementPerso.shadowRoot retournera null. C'est le cas avec les éléments natifs contenant des DOM fantômes tels que <video>.";

        shadow.appendChild(this.titleHTML);
        shadow.appendChild(articleHTML);
    }

    updateTitle(title){
        this.titleHTML.textContent = title;
    }

    connectedCallback() {
        console.log(this.titleHTML.textContent+' is on fire');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name,oldValue,newValue);

        this.titleHTML.setAttribute(name,newValue);
    }

    static get observedAttributes() {return ['color']; }
};

customElements.define('div-custom', divCustom);