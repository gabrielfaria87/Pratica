#Imagem com base no nodejs
FROM node
#Diretório de trabalho onde ficará a aplicação
WORKDIR /usr/src/app
#Copiar os arquivos para package.json
COPY package.json .
#Instalar todos os pacotes na pasta node-modules
RUN npm install 
#Copiar tudo que tem no app para o WORKDIR
COPY . .
#Citar a porta 3001
EXPOSE 3001
#Comando que vai dar o start na aplicação
CMD ["node", "index.js"]
