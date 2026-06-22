# RepoAndService

API simples em `TypeScript` com `Express` e `PostgreSQL`.

## Rodar o banco

```bash
docker compose up -d
```

## Rodar a API

```bash
copy .env.example .env
npm install
npm run dev
```

## Endpoint

`POST /products`

```json
{
  "id": 1,
  "name": "Notebook",
  "description": "Notebook para estudo"
}
```
