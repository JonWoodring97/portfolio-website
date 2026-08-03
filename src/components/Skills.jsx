import Section from './Section';

const SKILL_GROUPS = [
  {
    title: 'Agents & orchestration',
    items: [
      'LangGraph',
      'LangChain',
      'Claude agents',
      'Multi-agent systems',
      'Open-source LLMs (Llama)',
    ],
  },
  {
    title: 'Retrieval & embeddings',
    items: [
      'RAG: chunking, hybrid search, re-ranking',
      'PGVector / Pinecone / Chroma',
      'OpenAI embeddings',
      'Semantic search & classification',
    ],
  },
  {
    title: 'Integration & protocol',
    items: [
      'MCP servers (Node / TypeScript)',
      'Typed agent tools',
      'API gateways / BFF',
      'Python',
    ],
  },
  {
    title: 'Eval, cloud & delivery',
    items: [
      'LangSmith evals & observability',
      'AWS (Bedrock, CDK, ECS, Lambda)',
      'Azure DevOps CI/CD',
      'Docker / Kubernetes',
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" kicker="Stack" title="What I build with">
      <div className="card-grid">
        {SKILL_GROUPS.map(({ title, items }) => (
          <div className="card" key={title}>
            <h3 className="card-title">{title}</h3>
            <ul className="tag-list">
              {items.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
