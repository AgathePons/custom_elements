# Custom Element

Un custom element est un élément HTML que nous allons pouvoir définir en JavaScript.

## ShadowDOM

Le shadowDOM est le DOM propre à un custom element.
On ne peut y accéder que depuis l'élément.

## Héritage

Les custom elements héritent de HTMLElement.

4 méthodes peuvent en être héritées :

- connectedCallback : appelé lorsque l'élément personnalisé est connecté pour la première fois au DOM du document ;
- disconnectedCallback : appelé lorsque l'élément personnalisé est déconnecté du DOM du document ;
- adoptedCallback : appelé lorsque l'élément personnalisé est déplacé vers un nouveau document ;
- attributeChangedCallback : appelé lorsque l'un des attributs de l'élément personnalisé est ajouté, supprimé ou modifié.

## Liens

https://developer.mozilla.org/fr/docs/Web/Web_Components/Using_custom_elements
https://developer.mozilla.org/fr/docs/Web/Web_Components/Using_shadow_DOM