FROM mysql:8

ENV MYSQL_ROOT_PASSWORD=123456
ENV MYSQL_DATABASE=teste_db
ENV MYSQL_USER=usuario
ENV MYSQL_PASSWORD=senha123

COPY init.sql /docker-entrypoint-initdb.d/

