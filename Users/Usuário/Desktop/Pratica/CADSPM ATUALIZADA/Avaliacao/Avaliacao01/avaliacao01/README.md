
# Objetivo
Configurar um ambiente de hospedagem local usando Docker com o servidor NGINX para servir uma página HTML.

# Comandos Utilizados

C:\Users\Admin\Documents\Avaliacao\Avaliacao01\avaliacao01> docker build -t avaliacao01 .
C:\Users\Admin\Documents\Avaliacao\Avaliacao01\avaliacao01> docker run -d -p 8080:80 --name nginx-site avaliacao01
http://localhost:8080/
docker ps
docker logs nginx-site
git init
git add .
git commit -m "Commit inicial"
Item README.md -ItemType File



# Como executar o container
git clone https://github.com/gabrielfaria87/avaliacao01.git