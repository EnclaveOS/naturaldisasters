import { getHomePage } from "@/lib/content";

function HeroSection({ section, path }) {
  return (
    <section className="hero section" data-sb-field-path={path}>
      {section.eyebrow ? (
        <p className="eyebrow" data-sb-field-path={`${path}.eyebrow`}>
          {section.eyebrow}
        </p>
      ) : null}
      <h1 data-sb-field-path={`${path}.heading`}>{section.heading}</h1>
      {section.body ? (
        <p className="intro" data-sb-field-path={`${path}.body`}>
          {section.body}
        </p>
      ) : null}
      {section.buttonLabel && section.buttonUrl ? (
        <a className="button" href={section.buttonUrl} data-sb-field-path={`${path}.buttonLabel`}>
          {section.buttonLabel}
        </a>
      ) : null}
    </section>
  );
}

function TextSection({ section, path }) {
  return (
    <section className="section text-section" data-sb-field-path={path}>
      {section.eyebrow ? (
        <p className="eyebrow" data-sb-field-path={`${path}.eyebrow`}>
          {section.eyebrow}
        </p>
      ) : null}
      <h2 data-sb-field-path={`${path}.heading`}>{section.heading}</h2>
      {section.body ? (
        <div className="rich-text" data-sb-field-path={`${path}.body`}>
          {section.body.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function ButtonSection({ section, path }) {
  const className = section.style === "outline" ? "button button-outline" : "button";

  return (
    <section className="section button-section" data-sb-field-path={path}>
      <a className={className} href={section.url} data-sb-field-path={`${path}.label`}>
        {section.label}
      </a>
    </section>
  );
}

function CardGridSection({ section, path }) {
  return (
    <section className="section card-grid-section" data-sb-field-path={path}>
      <h2 data-sb-field-path={`${path}.heading`}>{section.heading}</h2>
      <div className="card-grid" data-sb-field-path={`${path}.cards`}>
        {(section.cards || []).map((card, index) => (
          <article className="card" key={index} data-sb-field-path={`${path}.cards.${index}`}>
            <h3 data-sb-field-path={`${path}.cards.${index}.title`}>{card.title}</h3>
            {card.body ? <p data-sb-field-path={`${path}.cards.${index}.body`}>{card.body}</p> : null}
            {card.linkLabel && card.linkUrl ? (
              <a href={card.linkUrl} data-sb-field-path={`${path}.cards.${index}.linkLabel`}>
                {card.linkLabel}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function PageSection({ section, index }) {
  const path = `sections.${index}`;

  switch (section.type) {
    case "HeroSection":
      return <HeroSection section={section} path={path} />;
    case "TextSection":
      return <TextSection section={section} path={path} />;
    case "ButtonSection":
      return <ButtonSection section={section} path={path} />;
    case "CardGridSection":
      return <CardGridSection section={section} path={path} />;
    default:
      return null;
  }
}

export default function Home() {
  const page = getHomePage();

  return (
    <main className="page-shell" data-sb-object-id="content/pages/index.json">
      {(page.sections || []).map((section, index) => (
        <PageSection section={section} index={index} key={index} />
      ))}
    </main>
  );
}
