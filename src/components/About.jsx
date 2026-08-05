import Section from './Section';

export default function About() {
  return (
    <Section id="about" kicker="About" title="Hi, I'm Jon.">
      <div className="about-grid">
        <p>
          I'm a senior software engineer who builds production AI systems:
          retrieval-augmented pipelines, multi-agent workflows, and the MCP
          tooling that ties them to real data. That work sits on top of years
          of distributed-systems and full-stack engineering, shipping platforms
          used by thousands of people across demanding enterprise domains.
        </p>
        <p>
          I care about agents you can actually put in production. The systems I
          build act through validated boundaries, put deterministic gates on the
          steps you can't take back, and capture your team's judgment as a
          compounding asset, so the AI gets more useful and more trustworthy the
          longer it runs instead of quietly guessing.
        </p>
      </div>
    </Section>
  );
}
