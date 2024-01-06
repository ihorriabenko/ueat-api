## Development

**First**, install dependencies:

```sh
npm i
```
or
```sh
yarn install
```


**Second**, create a `.env` file:

```sh
cp .env.example .env
```

**Third**, boot the server:

```sh
npm run dev
```

## API

| Method | URI                   | Middleware |
|--------|-----------------------|------------|
| GET    | /restaurants/sorted   |            |
| POST   | /restaurants/specific |            |
| GET    | /categories           |            |
| POST   | /order                |            |

## curl

```sh
# Restaurant

curl http://localhost:${PORT}/restaurants/sorted

curl -X POST -H "Content-Type: application/json" -d '{"category": "Italian"}' http://localhost:${PORT}/restaurants/specific

# Category

curl http://localhost:${PORT}/categories

# Order

 curl -X POST -H "Content-Type: application/json" -d '{"restaurantId": "restId1234","dishes": ["id1", "id2"]}' http://localhost:${PORT}/order
```
