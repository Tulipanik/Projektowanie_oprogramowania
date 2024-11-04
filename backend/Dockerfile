FROM alpine:3.19.1

RUN apk update --no-cache && apk upgrade --no-cache && apk add --no-cache gradle openjdk17 curl

WORKDIR /backend

COPY build.gradle .

COPY settings.gradle .

COPY src/ src/

RUN gradle build -x test

RUN mv build/libs/backend-0.0.1-SNAPSHOT.jar backend.jar

FROM alpine:3.19.1

RUN apk update --no-cache && apk upgrade --no-cache && apk add --no-cache openjdk17-jre curl

WORKDIR /backend

COPY --from=build /backend/backend.jar .

EXPOSE 8080

CMD ["java", "-jar", "backend.jar"]
