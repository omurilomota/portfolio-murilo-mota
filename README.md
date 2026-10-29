# Portfólio Murilo Mota

Hub público com dezesseis demonstrações de sites e sistemas para pequenos negócios. Cada projeto tem uma dor concreta: ser encontrado, receber pedido, organizar agenda, acompanhar orçamento ou dar autonomia para a operação.

[**Ver demonstração**](https://portfolio-murilo-mota.vercel.app) · React 19 · Vite 7 · TypeScript · Tailwind CSS 4

> **Demonstração pública.** Os sites apresentados usam contatos, documentos e dados de clientes fictícios. Nenhum pedido, mensagem ou formulário é enviado a um canal real.

## O que tem

- Grade com os 16 projetos, segmento, stack e destaques de cada solução.
- Busca por nome, segmento, tecnologia ou problema resolvido.
- Filtro por segmento: alimentação, comércio, serviços e institucional.
- Links diretos para a demonstração publicada e para o código no GitHub.
- Layout responsivo, navegação por teclado e contraste alto.

## Projetos

| Projeto | Segmento | Demonstração |
| --- | --- | --- |
| AUTOVIA Veículos | Comércio | https://autovia-veiculos.vercel.app |
| Empório Paulista | Alimentação | https://emporio-paulista.vercel.app |
| Fast Burger | Alimentação | https://fastburger-muriloinc.vercel.app |
| Goldoni Contadores | Serviços | https://goldoni-contadores.vercel.app |
| Ikeda Distribuidora | Comércio | https://ikeda-distribuidora.vercel.app |
| Pão na Chapa | Alimentação | https://pao-na-chapa.vercel.app |
| Possatão Lanches | Alimentação | https://possatao-lanches.vercel.app |
| Rango | Alimentação | https://rango-delivery-muriloinc.vercel.app |
| Real Móveis Eletro | Comércio | https://real-moveis-eletro.vercel.app |
| Serralheria Ribeiro | Serviços | https://serralheria-ribeiro-web-project.vercel.app |
| Paróquia Santo Antônio | Institucional | https://paroquia-santo-antonio-muriloinc.vercel.app |
| SMC Hair Studio | Serviços | https://smc-hair-studio.vercel.app |
| Casa das Portas | Comércio | https://casa-das-portas.vercel.app |
| Classe A Contabilidade | Serviços | https://classe-a-contabilidade.vercel.app |
| Colina Lanches | Alimentação | https://colina-lanches.vercel.app |
| ChicPets | Serviços | https://petshop-chic.vercel.app |

## Comandos

```bash
npm ci
npm run dev
npm run typecheck
npm test
npm run build
```

`npm run dev` abre em `http://localhost:5173`.

## Estrutura

| Caminho | Responsabilidade |
| --- | --- |
| `src/data/projects.ts` | Fonte única dos 16 projetos, links e textos |
| `src/lib/filter.ts` | Busca, filtro por segmento e contagens |
| `src/components/ProjectCard.tsx` | Cartão de projeto |
| `src/App.tsx` | Página, hero, filtros e processo |
| `src/index.css` | Tokens visuais e layout responsivo |

## Deploy

Vercel, framework Vite, build `npm run build`, saída `dist`. Não há variáveis de ambiente obrigatórias.

## Licença

MIT. Veja [LICENSE](LICENSE).
