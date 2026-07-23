import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.7.0",
  ssgName: "nextjs",
  nodeVersion: "22",
  devCommand: "npm run dev -- --port {PORT} --hostname 127.0.0.1",
  sidebarButtons: [
    {
      label: "Edit home page",
      type: "model",
      icon: "tools",
      modelName: "Page"
    },
    {
      label: "View home page",
      type: "link",
      icon: "external-link",
      url: "/"
    }
  ],
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/",
          filePath: "content/pages/index.json",
          label: "Home Page",
          labelField: "title",
          fields: [
            { name: "title", type: "string", required: true },
            {
              name: "sections",
              type: "list",
              label: "Sections",
              items: {
                type: "model",
                groups: ["PageSection"]
              }
            }
          ]
        },
        {
          name: "HeroSection",
          type: "object",
          label: "Hero",
          labelField: "heading",
          groups: ["PageSection"],
          fields: [
            { name: "eyebrow", type: "string", default: "Ready for Netlify Visual Editor" },
            { name: "heading", type: "string", required: true, default: "Blank Website" },
            {
              name: "body",
              type: "text",
              default: "Start editing this page in Netlify Visual Editor, or replace this starter content with your own."
            },
            { name: "buttonLabel", type: "string", default: "Learn More" },
            { name: "buttonUrl", type: "string", default: "https://www.netlify.com/" }
          ]
        },
        {
          name: "TextSection",
          type: "object",
          label: "Text",
          labelField: "heading",
          groups: ["PageSection"],
          fields: [
            { name: "eyebrow", type: "string", default: "Section" },
            { name: "heading", type: "string", required: true, default: "Add a headline" },
            { name: "body", type: "markdown", default: "Add paragraph text here." }
          ]
        },
        {
          name: "ButtonSection",
          type: "object",
          label: "Button",
          labelField: "label",
          groups: ["PageSection"],
          fields: [
            { name: "label", type: "string", required: true, default: "Button Label" },
            { name: "url", type: "string", required: true, default: "https://www.netlify.com/" },
            {
              name: "style",
              type: "enum",
              controlType: "button-group",
              options: [
                { label: "Solid", value: "solid" },
                { label: "Outline", value: "outline" }
              ],
              default: "solid"
            }
          ]
        },
        {
          name: "CardGridSection",
          type: "object",
          label: "Card Grid",
          labelField: "heading",
          groups: ["PageSection"],
          fields: [
            { name: "heading", type: "string", required: true, default: "Add cards" },
            {
              name: "cards",
              type: "list",
              items: {
                type: "model",
                models: ["Card"]
              }
            }
          ]
        },
        {
          name: "Card",
          type: "object",
          label: "Card",
          labelField: "title",
          fields: [
            { name: "title", type: "string", required: true, default: "Card title" },
            { name: "body", type: "text", default: "Card text goes here." },
            { name: "linkLabel", type: "string", default: "" },
            { name: "linkUrl", type: "string", default: "" }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
