# Backend FAQ

## How to run it?

Run the command below:

```sh
docker compose up -d
```
## Where endpointy??

```
http://localhost:8080/swagger-ui/index.html
```

## Jak się zalogować?

1. Weź usera z `BackendApplication.java`. Tam są różni userzy hasło do nich takie same.

```json
{
  username: "john.doe@gmail.com",
  password: "123"
}
```
2. Wyślij POST request na `localhost:8080/api/v1/auth/login` z danymi powyżej.

## Dostaje 403

Dodaj authToken z logowania do nagłówka `Authorisation: Bearer <token>`

```json
{
  authToken: "tutaj bedzie twoj token",
  refreshToken: "..."
}
```

Nadal? A dodałeś `Content-Type: application/json`?

Okej nadal tu jesteś, a próbowałeś wyczyścić dockera do 0?

```sh
docker compose down --rmi all --remove-orphans
```

## Nadal dostaje 403 w swaggerze

Ta wiem używaj postmana bo swagger nie dodaj nagłówka `Authorisation: Bearer <token>`.

## Nadal nie działa

To wyślij logi

```sh
docker logs catering-backend
```

