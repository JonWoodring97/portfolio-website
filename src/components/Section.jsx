export default function Section({ id, kicker, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        {kicker && <p className="section-kicker">{kicker}</p>}
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
