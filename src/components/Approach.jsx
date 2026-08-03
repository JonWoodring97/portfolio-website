import Section from './Section';

const PRINCIPLES = [
  {
    title: 'Validated boundaries, not raw output',
    body:
      "Agents produce typed, schema-validated artifacts a deterministic layer consumes — closing off the class of failures where a model invents logic your platform doesn't support.",
  },
  {
    title: 'Gates on the irreversible steps',
    body:
      "Automate what is reversible; put a human at the one step you can't undo. A person reviews and approves before anything merges or ships — nothing happens behind your back.",
  },
  {
    title: "Closed-world grounding",
    body:
      "The system is built to refuse to guess about your data. When it isn't confident, it asks or cites rather than inventing — because a confident wrong answer is worse than none.",
  },
  {
    title: 'Data isolation below the agent',
    body:
      "Tenant and access boundaries are enforced beneath where any agent operates, so prompt injection and model mistakes can't reach data they were never meant to touch.",
  },
  {
    title: 'Human judgment that compounds',
    body:
      'Every review your team does is captured and retrieved via MCP on future work — so corrections made today become the quality the system delivers by default tomorrow.',
  },
  {
    title: 'Evaluated and observable',
    body:
      'Golden datasets, LangSmith evals, and replayable traces run as CI checks, catching model and prompt drift before it reaches production and giving you a quantitative basis to iterate.',
  },
];

export default function Approach() {
  return (
    <Section
      id="approach"
      kicker="Approach"
      title="How I build agents you can trust"
    >
      <div className="card-grid">
        {PRINCIPLES.map(({ title, body }) => (
          <div className="card" key={title}>
            <h3 className="card-title">{title}</h3>
            <p className="card-body">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
