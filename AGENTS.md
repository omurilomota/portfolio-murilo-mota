# AGENTS.md — Portfólio Murilo Mota

## Contexto

Hub público que reúne dezesseis demonstrações de sites e sistemas para pequenos negócios. O hub é estático e não tem banco de dados. Os sites apresentados são demonstrações: contatos, documentos e dados de clientes são fictícios. Não trate nenhum deles como sistema de produção sem revisar autenticação, permissões, backups e LGPD.

## Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4

## Comandos

```bash
npm ci
npm run dev
npm run typecheck
npm test
npm run build
```

Rode typecheck, testes e build antes de concluir qualquer alteração.

## Arquitetura

| Caminho | Responsabilidade |
| --- | --- |
| `src/data/projects.ts` | Fonte única dos projetos, links, segmentos e destaques |
| `src/lib/filter.ts` | Busca sem acento, filtro por segmento e contagens |
| `src/components/` | Cartões e componentes de apresentação |
| `src/App.tsx` | Estrutura da página e estado dos filtros |
| `src/index.css` | Tokens, layout e responsividade |

## Regras de dados

1. Nunca insira telefone, WhatsApp, e-mail, endereço, CNPJ, redes sociais ou documentos reais de clientes nos sites apresentados.
2. Os links de demonstração e repositório ficam em `src/data/projects.ts`. Atualize lá, não no JSX.
3. Use apenas URLs públicas que respondam sem autenticação. Não aponte para previews protegidos.
4. O hub não coleta dados: não adicione formulário, analytics ou pixel sem revisar privacidade.
5. Textos devem ser concretos. Evite promessa de resultado, número inventado e jargão de marketing.

## Convenções

- TypeScript estrito; evite `any` gratuito.
- Componentes em PascalCase; funções utilitárias em camelCase.
- Preserve a identidade visual: papel creme, tinta, terracota e tipografia editorial.
- Um único `h1` por página; navegação por teclado e foco visível.
- Imagens com `alt` descritivo; prefira SVG inline para ícones.
- Não adicione dependência sem justificar.

## Git

Gitflow + Gitmoji:

- `main`: produção, tag `vX.Y.Z`.
- `develop`: integração.
- `feature/*`: funcionalidades.
- `hotfix/*`: correções urgentes.

Formato de commit: `<emoji> <tipo>: <descrição no imperativo>`.

## Deploy

Vercel, framework Vite, build `npm run build`, saída `dist`. Não há variáveis obrigatórias.
