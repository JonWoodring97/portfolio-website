import scrollToSection from '../scrollToSection';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-kicker">Agentic Software Solutions</p>
        <h1 className="hero-title">
          Automate your dev flow with{' '}
          <span className="accent">production AI agents</span>.
        </h1>
        <p className="hero-lead">
          I design and ship agentic systems that take real work off your team's
          plate, from ticket to reviewed pull request, from your data to answers
          you can trust.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="#services"
            onClick={(event) => scrollToSection(event, '#services')}
          >
            Explore services
          </a>
          <a
            className="button button-ghost"
            href="#contact"
            onClick={(event) => scrollToSection(event, '#contact')}
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
