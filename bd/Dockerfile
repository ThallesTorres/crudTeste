FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=1234
ENV TZ=America/Sao_Paulo

COPY ./deploy/mysql/init /docker-entrypoint-initdb.d
