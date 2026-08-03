import Section from './Section';

const SERVICES = [
  {
    title: 'Automate your dev flow',
    body:
      "Agentic pipelines that carry work from ticket to review-ready pull request — wired into Jira or Azure DevOps, clearing your own build, test, and coverage gates, and self-correcting when CI fails. Your engineers stop grinding through mechanical steps and spend their time on the judgment calls only they can make.",
    tags: ['Ticket → PR', 'Human-gated merges', 'Learns from review'],
  },
  {
    title: 'Custom client-facing AI agents',
    body:
      "Multi-agent assistants built on your proprietary data, exposed through MCP with guardrails, observability, and auditing baked in. Strict data isolation, closed-world grounding so it won't invent answers, and a deployment that fits you — cloud or on-prem.",
    tags: ['Your data', 'Guardrails & auditing', 'Cloud or on-prem'],
  },
  {
    title: 'RAG over your proprietary docs',
    body:
      'Ask your codebase, documentation, and internal knowledge in plain language and get grounded, cited answers. Retrieval, chunking, hybrid search, and re-ranking with built-in guardrails that keep it on-source — so complex systems become navigable, even for non-engineers.',
    tags: ['Grounded & cited', 'Hybrid search', 'On-source guardrails'],
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      kicker="Services"
      title="What I can build for your team"
    >
      <div className="card-grid">
        {SERVICES.map(({ title, body, tags }) => (
          <article className="card" key={title}>
            <h3 className="card-title">{title}</h3>
            <p className="card-body">{body}</p>
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
