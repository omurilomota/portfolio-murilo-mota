import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, SEGMENTS } from "@/data/projects";
import {
  countBySegment,
  filterProjects,
  pluralizeProjects,
  type SegmentFilter,
} from "@/lib/filter";

const FILTERS: SegmentFilter[] = ["Todos", ...SEGMENTS];

export default function App() {
  const [query, setQuery] = useState("");
  const [segment, setSegment] = useState<SegmentFilter>("Todos");

  const filtered = useMemo(
    () => filterProjects(projects, { query, segment }),
    [query, segment],
  );

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#projetos">
        Pular para os projetos
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Murilo Mota, início">
            <span className="brand-mark" aria-hidden="true">
              MM
            </span>
            <span className="brand-text">
              <strong>Murilo Mota</strong>
              <small>portfólio · 2026</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Navegação principal">
            <a href="#projetos">Projetos</a>
            <a href="#processo">Como trabalho</a>
            <a href="https://github.com/omurilomota" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Sites e sistemas para pequenos negócios</p>
              <h1 className="hero-title" id="hero-title">
                O cliente chega.
                <br />
                <em>A operação acompanha.</em>
              </h1>
              <p className="hero-lead">
                Dezesseis demonstrações funcionais de catálogo, pedido, agenda, portal e
                painel. Cada uma resolve um gargalo concreto de quem vende todos os dias.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">
                  Ver os projetos
                </a>
                <a
                  className="button button-ghost"
                  href="https://github.com/omurilomota"
                  target="_blank"
                  rel="noreferrer"
                >
                  Código no GitHub
                </a>
              </div>
            </div>

            <aside className="hero-note" aria-label="Sobre esta coleção">
              <p className="hero-quote">
                “Não é só um site bonito. É o pedido chegando organizado, o orçamento com
                prazo e o painel mostrando o que aconteceu.”
              </p>
              <dl className="hero-facts">
                <div>
                  <dt>Feito para</dt>
                  <dd>Negócios de bairro e operações enxutas</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>React, Next.js, PostgreSQL e Tailwind</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>Demonstrações públicas com dados fictícios</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="stats" aria-label="Números do portfólio">
          <div className="container stats-grid">
            <div className="stat">
              <strong>16</strong>
              <span>projetos publicados</span>
            </div>
            <div className="stat">
              <strong>10</strong>
              <span>com banco de dados</span>
            </div>
            <div className="stat">
              <strong>4</strong>
              <span>segmentos atendidos</span>
            </div>
            <div className="stat">
              <strong>100%</strong>
              <span>responsivo</span>
            </div>
          </div>
        </section>

        <section className="section" id="projetos" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">A coleção</p>
              <h2 className="section-title" id="projects-title">
                Um projeto para cada gargalo.
              </h2>
              <p className="section-lead">
                Comece pelo segmento do cliente ou busque pelo problema: pedido, agenda,
                orçamento, portal, fidelidade. Todas as demonstrações estão no ar.
              </p>
            </div>

            <div className="filter-bar">
              <div className="search-field">
                <label htmlFor="busca">Buscar projeto</label>
                <input
                  id="busca"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Nome, segmento ou tecnologia"
                  autoComplete="off"
                />
              </div>

              <div className="segment-list" role="group" aria-label="Filtrar por segmento">
                {FILTERS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="segment-button"
                    aria-pressed={segment === item}
                    onClick={() => setSegment(item)}
                  >
                    {item}
                    <span aria-hidden="true">{countBySegment(projects, item)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="results-line" aria-live="polite">
              <span>{pluralizeProjects(filtered.length)}</span>
              {query ? (
                <button type="button" className="clear-button" onClick={() => setQuery("")}>
                  Limpar busca
                </button>
              ) : null}
            </div>

            {filtered.length > 0 ? (
              <div className="project-grid">
                {filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>Nenhum projeto encontrado para essa combinação.</p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => {
                    setQuery("");
                    setSegment("Todos");
                  }}
                >
                  Ver todos os projetos
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="section process" id="processo" aria-labelledby="process-title">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Como trabalho</p>
              <h2 className="section-title" id="process-title">
                Primeiro o processo. Depois a tela.
              </h2>
              <p className="section-lead">
                A demonstração serve para conversar sobre o dia a dia do negócio, não para
                desfilar tecnologia. O site é consequência do que o cliente precisa resolver.
              </p>
            </div>

            <div className="process-grid">
              <article className="process-step">
                <span className="process-number">01</span>
                <h3>Diagnóstico</h3>
                <p>
                  Entender como o cliente encontra o negócio, como o pedido chega e onde a
                  operação trava. Sem proposta antes disso.
                </p>
              </article>
              <article className="process-step">
                <span className="process-number">02</span>
                <h3>Demonstração</h3>
                <p>
                  Mostrar a vitrine, executar uma ação real e abrir o painel. O cliente vê o
                  caminho completo, do interesse ao resultado.
                </p>
              </article>
              <article className="process-step">
                <span className="process-number">03</span>
                <h3>Implantação</h3>
                <p>
                  Trocar os dados fictícios pelos reais, configurar domínio, treinar quem
                  atualiza e acompanhar o primeiro ciclo.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">Murilo Mota</p>
            <p className="footer-copy">
              Sites e sistemas que organizam a venda, o atendimento e a operação de pequenos
              negócios.
            </p>
          </div>
          <div>
            <p className="footer-label">Código</p>
            <a href="https://github.com/omurilomota" target="_blank" rel="noreferrer">
              github.com/omurilomota
            </a>
          </div>
          <div>
            <p className="footer-label">Aviso</p>
            <p className="footer-copy">
              Todas as demonstrações usam contatos e dados fictícios. Nenhum pedido,
              mensagem ou formulário é enviado a um canal real.
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Murilo Mota</span>
          <span>React 19 · Vite 7 · Tailwind CSS 4</span>
        </div>
      </footer>
    </div>
  );
}
