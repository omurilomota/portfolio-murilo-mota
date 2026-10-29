import type { Project, Segment } from "@/data/projects";

export type SegmentFilter = "Todos" | Segment;

/** Compara texto sem acentos, sem caixa e sem espaços nas pontas. */
export function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Filtra por segmento e por busca livre.
 * A busca cobre nome, resumo, segmento, stack e destaques.
 * Vários termos funcionam como "E": todos precisam aparecer.
 */
export function filterProjects(
  projects: Project[],
  options: { query?: string; segment?: SegmentFilter } = {},
): Project[] {
  const segment = options.segment ?? "Todos";
  const terms = normalize(options.query ?? "")
    .split(/\s+/)
    .filter(Boolean);

  return projects.filter((project) => {
    if (segment !== "Todos" && project.segment !== segment) return false;
    if (terms.length === 0) return true;
    const haystack = normalize(
      [
        project.name,
        project.summary,
        project.segment,
        ...project.highlights,
        ...project.stack,
      ].join(" "),
    );
    return terms.every((term) => haystack.includes(term));
  });
}

export function countBySegment(projects: Project[], segment: SegmentFilter): number {
  if (segment === "Todos") return projects.length;
  return projects.filter((project) => project.segment === segment).length;
}

export function pluralizeProjects(count: number): string {
  return count === 1 ? "1 projeto" : `${count} projetos`;
}
