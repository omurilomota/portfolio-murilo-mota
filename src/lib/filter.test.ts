import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import {
  countBySegment,
  filterProjects,
  normalize,
  pluralizeProjects,
} from "./filter";

describe("normalize", () => {
  it("remove acentos, caixa e espaços nas pontas", () => {
    expect(normalize("  Pão na Chapa  ")).toBe("pao na chapa");
    expect(normalize("ALIMENTAÇÃO")).toBe("alimentacao");
    expect(normalize("Serralheria Ribeiro")).toBe("serralheria ribeiro");
  });
});

describe("filterProjects", () => {
  it("devolve todos os projetos sem filtro", () => {
    expect(filterProjects(projects)).toHaveLength(16);
  });

  it("filtra por segmento", () => {
    const food = filterProjects(projects, { segment: "Alimentação" });
    expect(food).toHaveLength(6);
    expect(food.every((project) => project.segment === "Alimentação")).toBe(true);

    const institutional = filterProjects(projects, { segment: "Institucional" });
    expect(institutional.map((project) => project.id)).toEqual(["paroquia-santo-antonio"]);
  });

  it("busca pelo nome ignorando acentos", () => {
    const result = filterProjects(projects, { query: "pao" });
    expect(result.map((project) => project.id)).toContain("pao-na-chapa");
  });

  it("busca pela stack técnica", () => {
    const result = filterProjects(projects, { query: "postgresql" });
    expect(result).toHaveLength(10);
  });

  it("combina vários termos com E", () => {
    const result = filterProjects(projects, { query: "delivery lanchonete" });
    expect(result.map((project) => project.id).sort()).toEqual([
      "colina-lanches",
      "possatao-lanches",
    ]);
  });

  it("busca também nos destaques", () => {
    const result = filterProjects(projects, { query: "test drive" });
    expect(result.map((project) => project.id)).toEqual(["autovia-veiculos"]);
  });

  it("combina segmento e busca", () => {
    const result = filterProjects(projects, {
      segment: "Serviços",
      query: "agendamento",
    });
    expect(result.map((project) => project.id).sort()).toEqual([
      "petshop-chic",
      "smc-hair-studio",
    ]);
  });

  it("devolve vazio quando nada corresponde", () => {
    expect(filterProjects(projects, { query: "restaurante lunar" })).toEqual([]);
  });

  it("ignora busca em branco", () => {
    expect(filterProjects(projects, { query: "   " })).toHaveLength(16);
  });
});

describe("countBySegment", () => {
  it("conta o total e cada segmento", () => {
    expect(countBySegment(projects, "Todos")).toBe(16);
    expect(countBySegment(projects, "Alimentação")).toBe(6);
    expect(countBySegment(projects, "Comércio")).toBe(4);
    expect(countBySegment(projects, "Serviços")).toBe(5);
    expect(countBySegment(projects, "Institucional")).toBe(1);
  });
});

describe("pluralizeProjects", () => {
  it("usa singular para um e plural para o resto", () => {
    expect(pluralizeProjects(0)).toBe("0 projetos");
    expect(pluralizeProjects(1)).toBe("1 projeto");
    expect(pluralizeProjects(16)).toBe("16 projetos");
  });
});
