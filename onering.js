window.members = [
  {
    name: "siqu",
    url: "https://siqu.neocities.org/",
    description: "",
  },
  {
    name: "oiwa",
    url: "https://oiwa.neocities.org/",
    description: "tramontane",
  },
]

customElements.define(
  "one-ring",
  class extends HTMLElement {
    constructor() {
      super().attachShadow({ mode: "open" })
    }
    connectedCallback() {
      let members = window.members
      let currentIndex = members.findIndex((member) => window.location.href.includes(member.url))
      this.shadowRoot.innerHTML =
        currentIndex === -1
          ? `<b>You aren't a part of the One Webring (yet).</b>`
          : `<div>
        <a href="${members.at(currentIndex - 1).url}">&larr;</a> <a href="${
              members.at((currentIndex + 1) % members.length).url
            }">&rarr;</a>
        </div>`
    }
  }
)
