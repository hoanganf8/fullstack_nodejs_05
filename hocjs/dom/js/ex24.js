// var template = document.querySelector("template");

// var root = document.querySelector("#root");

// root.append(template.content);

customElements.define(
  "todo-app",
  class extends HTMLElement {
    connectedCallback() {
      var templateHtml = `<h2 v-length="10" v-show="odd"></h2>`;
      var template = document.createElement("template");
      template.innerHTML = templateHtml;
      var shadow = this.attachShadow({ mode: "open" }); //SHADOW ROOT, this là shadow host
      var templateNode = template.content.cloneNode(true);
      console.dir(templateNode.children[0]);
      var vLength =
        templateNode.children[0].attributes["v-length"]?.nodeValue ?? 0;
      for (var i = 1; i <= vLength; i++) {
        var nodeClone = template.content.cloneNode(true);
        nodeClone.children[0].innerText = `Todo ${i}`;
        var vShow = templateNode.children[0].attributes["v-show"]?.nodeValue;
        if (vShow === "true") {
          shadow.append(nodeClone);
        } else if (vShow === "even" && i % 2 === 0) {
          shadow.append(nodeClone);
        } else if (vShow === "odd" && i % 2 !== 0) {
          shadow.append(nodeClone);
        }
      }
    }
  }
);
