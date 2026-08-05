import Section from './Section';

const PROJECTS = [
  {
    title: 'Codebase & Docs RAG Platform',
    description:
      'Production RAG over a large internal codebase and technical documentation, exposed to agents over MCP so engineers and non-engineers can query and validate system behavior in plain language. Cut new-developer onboarding time by roughly 55% and reclaimed an estimated 40% of sprint capacity.',
    tags: ['LangChain', 'PGVector', 'MCP', 'Embeddings'],
  },
  {
    title: 'Agentic Dev-Delivery Pipeline',
    description:
      'A multi-agent system that plans from work items, inspects the codebase via MCP, implements changes, and raises pull requests, with a self-correction loop that resolves failing CI gates. Humans approve at the merge.',
    tags: ['Multi-agent', 'Azure DevOps', 'MCP'],
  },
  {
    title: 'Client-Facing Multi-Agent Assistant',
    description:
      "A domain-specific assistant that pulls from a customer's internal data, orchestrated with LangGraph, validated against golden datasets in LangSmith, and grounded on a PGVector store, with guardrails and observability throughout.",
    tags: ['LangGraph', 'LangSmith', 'PGVector'],
  },
];

export default function Projects() {
  return (
    <Section id="projects" kicker="Work" title="What I build">
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
