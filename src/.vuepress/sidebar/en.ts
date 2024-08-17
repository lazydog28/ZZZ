import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Get Start",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: [
        "required.md",
        "deploy.md",
        "configure.md",
        "solve.md"
      ]
    },

    {
      text: "Develop",
      icon: "microchip",
      prefix: "develop/",
      link: "develop/",
      children: [
        "fight.md"
      ]
    },

    {
      text: "Community",
      icon: "message",
      prefix: "community/",
      link: "community/",
      children: [
        "discuss.md",
        "bug.md",
        "problem.md",
        "updatelog.md"
      ]
    },

    {
      text: "Website",
      icon: "message",
      prefix: "website/",
      link: "website/",
      children: [
        "contribute.md",
        "format.md",
        "updatelog.md"
      ]
    }
  ],
});
