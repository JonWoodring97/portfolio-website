import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" kicker="Contact" title="Let's build something">
      <p className="contact-lead">
        I'm open to contracts. Whether you want to automate your dev flow, put a
        trustworthy agent in front of your customers, or make your own knowledge
        searchable, I'd be glad to talk it through.
      </p>
      <div className="hero-actions">
        <a
          className="button button-primary"
          href="mailto:jonwoodring@jonsagenticsolutions.com"
        >
          jonwoodring@jonsagenticsolutions.com
        </a>
        <a
          className="button button-ghost"
          href="https://github.com/JonWoodring97"
          target="_blank"
          rel="noreferrer"
        >
          github.com/JonWoodring97
        </a>
      </div>
    </Section>
  );
}
