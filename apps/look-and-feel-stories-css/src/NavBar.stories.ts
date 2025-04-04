import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/NavBar/NavBar.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Header/NavBar",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const navBar = document.createElement("nav");
    const list = document.createElement("ul");
    list.className = "af-navbar-container";
    list.role = "menubar";
    list.innerHTML = `
        <li class="af-navbar-item af-navbar-item--active" role="none"><a class="af-navbar-item__link af-navbar-item__link--active" role="menuitem" href=${args.links[0].href}>${args.links[0].label}</a></li>
        <li class="af-navbar-item" role="none"><a class="af-navbar-item__link"  role="menuitem" href=${args.links[1].href}>${args.links[1].label}</a></li>
        <li class="af-navbar-item" role="none"><a class="af-navbar-item__link" role="menuitem" href=${args.links[2].href}>${args.links[2].label}</a></li>
    `;

    navBar.append(list);

    return navBar;
  },
  args: {
    links: [
      {
        label: "MES CONTRATS",
        href: "/mes-contrats",
      },
      {
        label: "MES AVANTAGES",
        href: "/mes-avantages",
      },
      {
        label: "MES DOCUMENTS",
        href: "/mes-documents",
      },
    ],
  },
};
