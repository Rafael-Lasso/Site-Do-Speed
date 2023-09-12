<br>
 <div style="display:flex" align="center" class="imgs">
 <img style="margin: 0 20px;" height="100em" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/800px-Go_Logo_Blue.svg.png">

 <img height="100em" src="https://cdn.worldvectorlogo.com/logos/twilio.svg"> 
</div>
<br>

<br>
<hr>

## Golang Notification

O Serviço de Notificação é escrito em codigo Go, localizado na package
<b><i style="color:#FB8D12;cursor:pointer">cmd</i></b>

- Para rodar a aplicação certifiquice de ter o Go instalado em sua maquina, ou , execute um codigo Docker para poder compilar o codigo ( Lembrando, a verção ultilizada foi a <b style="color:#FB8D12;cursor:pointer">Go 1.19</b> )

- Acesse a pasta <b><i>services</i></b> com o comando no terminal

        cd cmd

- Apos acessar o diretorio do arquivo, rode o arquivo no seu terminal com o comando

        go run main.go

- Para se realizar o <b style="color:#FB8D12;cursor:pointer"><i>Build</i></b> use o comando

        go build main.go

<br>

  <hr>

## API

A Api escolhida foi Api <a style="text-decoration:none" href="https://www.twilio.com/"><b style="color:#FB8D12;cursor:pointer;"><i>Twilio</i></b></a> pois possui facil integração com mais diversos sistemas, suporte e uma documentação completa, alem de ser ultilisada por grandes empresas como
<br>

- Nubank
- Mercado Livre
- Dasa
- Inter
- Rappi

Não é um serviço qualquer sem confiança, por isso sua escolha

<hr>

## Variaveis de Ambiente

Para poder rodar a aplicação é de estrema importancia

- Criar um arquivo <b><i>.env</i></b>
  (Windows)

          type nul > ".env"

- Criar um arquivo <b><i>.env</i></b>
  (Linux)

          cat > .env

- Criar um arquivo <b><i>.env</i></b>
  (Mac OS)

          touch .env

- Escrever as Variaveis da seguinte forma

        ACCOUNT_SID=SeuSidGeradoDaApi
        AUTH_TOKEN=SeuTockenGeradoDaApi
        TWILIO_TO=+NumRemetente (Codigo Nacional + Numero)
        TWILIO_FROM=+SeuNumeroGeradoDaApi
