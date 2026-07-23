import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "22",
  devCommand: "npm run dev -- --port {PORT} --hostname 127.0.0.1",
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
          fields: [
            { name: "title", type: "string", required: true },
            { name: "intro", type: "text", required: false },
            { name: "buttonLabel", type: "string", required: false },
            { name: "buttonUrl", type: "url", required: false }
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
