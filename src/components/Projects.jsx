import Section from './Section';

const PROJECTS = [
  {
    title: 'Codebase & Docs RAG Platform',
    description:
      'Production RAG over a large internal codebase and technical documentation, exposed to agents over MCP — letting engineers and non-engineers query and validate system behavior in plain language. Cut new-developer onboarding time by ~55% and reclaimed an estimated 40% of sprint capacity.',
    tags: ['LangChain', 'PGVector', 'MCP', 'Embeddings'],
  },
  {
    title: 'Agentic Dev-Delivery Pipeline',
    description:
      'A multi-agent system that plans from work items, inspects the codebase via MCP, implements changes, and raises pull requests — with a self-correction loop that resolves failing CI gates. Humans approve at the merge.',
    tags: ['Multi-agent', 'Azure DevOps', 'MCP'],
  },
  {
    title: 'Client-Facing Multi-Agent Assistant',
    description:
      "A domain-specific assistant that pulls from a customer's internal data, orchestrated with LangGraph, validated against golden datasets in LangSmith, and grounded on a PGVector store — with guardrails and observability throughout.",
    tags: ['LangGraph', 'LangSmith', 'PGVector'],
  },
  {
    title: 'Open-source agent SDKs',
    description:
      'Open-source tooling for building production agents is on the way — SDKs that package the patterns behind the systems above. Coming soon.',
    tags: ['Open source', 'Coming soon'],
  },
];

export default function Projects() {
  return (
    <Section id="projects" kicker="Work" title="What I've built">
      <p className="section-note">
        These are internal and production systems, so there are no public repos
        to link — write-ups coming as I open more of this work up.
      </p>
      <div className="card-grid">
        {PROJECTS.map(({ title, description, tags }) => (
          <article className="card" key={title}>
            <h3 className="card-title">{title}</h3>
            <p className="card-body">{description}</p>
            <ul className="tag-list">
              {tags.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
