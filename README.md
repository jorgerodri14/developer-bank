# DeveloperBank API

1. Clonar proyectos
2. `npm install`
3. Clonar archivo `.env.dev` y renombrarlo a `.env`
4. Levantar la base de datos

```
docker-compose up -d
```

5. Levantar proyecto en desarrollo: `npm run start:dev`

6. Lanza el seed `http://localhost:3000/api/seed`

## Endpoints

### Busca cuenta por id
`http://localhost:3000/api/account/:id`
