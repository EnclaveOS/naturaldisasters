import { getHomePage } from "@/lib/content";

export default function Home() {
  const page = getHomePage();

  return (
    <main className="page-shell" data-sb-object-id="content/pages/index.json">
      <section className="hero">
        <p className="eyebrow">Ready for Netlify Visual Editor</p>
        <h1 data-sb-field-path="title">{page.title}</h1>
        <p className="intro" data-sb-field-path="intro">
          {page.intro}
        </p>
        <a className="button" href={page.buttonUrl} data-sb-field-path="buttonLabel">
          {page.buttonLabel}
        </a>
      </section>
    </main>
  );
}
