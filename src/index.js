import members from "./members"
import { html, render } from "lit-html"
import "@shoelace-style/shoelace/dist/components/carousel/carousel.js"
import "@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js"
import shoelaceTheme from "@shoelace-style/shoelace/dist/themes/dark.styles.js"
const shoelaceCSS = new CSSStyleSheet()
shoelaceCSS.replaceSync(shoelaceTheme)

window.members = members
const IMAGE_BASE_PATH = "https://cdn.jsdelivr.net/gh/rasselasxyz/onering"

const nonMember = () => html`<b>You aren't a part of the One Ring (yet).</b>`

const ring = (members, currentIndex) => html`<div class="one-ring">
  <a class="title" href="https://siqu.neocities.org/onering.html">
    <img src=${IMAGE_BASE_PATH + "/assets/ring.png"} />
    <h2>The One Ring</h2>
  </a>
  <sl-carousel
    style="--aspect-ratio: 3/2; padding-top: 10px;"
    class="carousel"
    pagination
    navigation
    loop
  >
    ${members.map(
      (m) =>
        html`<sl-carousel-item style="position: relative;">
          <img alt=${m.name} src=${IMAGE_BASE_PATH + `/assets/screenshots/${m.name}.jpg`} />
          <a
            href=${m.url}
            style="height: 100%; width: 100%; display: block; position: absolute; inset: 0;"
          ></a>
          <small>${m.description}</small>
        </sl-carousel-item>`
    )}
  </sl-carousel>
</div>`

const styles = () => html`<style>
  .one-ring {
    font-family: "Jersey 10", system-ui;
    font-weight: 400;
    font-style: normal;
    color: inherit;
    display: block;
    text-align: center;
  }
  .carousel::part(navigation-button) {
    padding: 0;
  }
  .one-ring {
    max-width: 350px;
  }

  .one-ring h2 {
    font-size: 40px;
  }

  .one-ring .title {
    display: flex;
    text-decoration: none;
    color: inherit;
    gap: 0 10px;
    align-items: center;
    justify-content: center;
    height: 32px;
  }

  .one-ring .title img {
    height: 32px;
    width: 32px;
    display: block;
  }
</style>`

let href = "https://fonts.googleapis.com/css2?family=Jersey+10&display=swap"
let linkFont = html`<link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href=${href} rel="stylesheet" />`

customElements.define(
  "one-ring",
  class extends HTMLElement {
    constructor() {
      let hasFont = document.querySelector(`link[href="${href}"]`)
      if (!hasFont) render(linkFont, document.head)
      super().attachShadow({ mode: "open" })
      this.shadowRoot.adoptedStyleSheets = [shoelaceCSS]
    }
    connectedCallback() {
      let members = window.members
      let currentIndex = members.findIndex((member) => window.location.href.includes(member.url))
      let view = currentIndex === -1 ? nonMember() : ring(members, currentIndex)
      let wrapper = html`${linkFont}${styles()}${view}`
      render(wrapper, this.shadowRoot)
      let carousel = this.shadowRoot.querySelector("sl-carousel")
      setTimeout(() => carousel?.goToSlide(currentIndex, "auto"), 50)
    }
  }
)
