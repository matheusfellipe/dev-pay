# API- Dev Payment
API para facilitar impulsionar as transações e pagamentos.

Diagramas v1 da API 

https://drive.google.com/drive/folders/1jP6IfSYWeiaq0ctG_0_Z-5HeNUNChDJP?usp=sharing

Npm Install

Setar .env com as variavéis 

Subir o container com banco e API
docker-compose up

Npm run Dev

Cria usuário
Post('/users')

Loga com usuário
Post('/login')

Copia token retornado e utiliza como Authorization Bearer nas devidas rotas onde os usuários tem permissão

Rotas:

Seller:
Cria um seller
Post('/sellers')


Checkout:
Cria um checkout
Post('/checkout')

Lista todas as transações 
Get('/checkout')