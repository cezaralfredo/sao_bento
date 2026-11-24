# Site Institucional — São Bento Turismo (Fortaleza - CE)

Site multi-página desenvolvido em **Astro**, estruturado por **setores de turismo**, com calendário interativo de saídas (Novembro/2026 a Maio/2027) e conversão direta para WhatsApp com mensagem pré-preenchida por roteiro.

## Páginas do Site
- `/` — Página Inicial (visão geral, 4 setores, destaques e pilares de confiança)
- `/passeios-ceara` — Passeios no Ceará (bate-voltas e fins de semana)
- `/excursoes-nordeste` — Excursões pelo Nordeste (feriados, férias, Réveillon e Carnaval)
- `/turismo-religioso` — Turismo Religioso & Peregrinações
- `/viagens-especiais` — Viagens Especiais, Nacionais & Aéreas
- `/calendario` — Calendário completo com filtros por setor e por mês
- `/sobre` — Nossa História (desde 2006), dados oficiais, mapa, contatos e FAQ

## Como rodar o projeto

```bash
npm install
npm run dev
```

Para gerar os arquivos estáticos de produção (`dist/`):

```bash
npm run build
npm run preview
```

## Como atualizar viagens, datas ou telefones

Todos os dados ficam centralizados em um único arquivo:
- `src/data/viagens.ts` — edite `COMPANY` (telefones/endereço) ou o array `TRIPS` (para adicionar, editar ou remover excursões). Os botões de WhatsApp e os filtros do calendário são atualizados automaticamente.
