// Download the helper library from https://www.twilio.com/docs/go/install
package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/twilio/twilio-go"
	api "github.com/twilio/twilio-go/rest/api/v2010"
)

func main() {
	// Find your Account SID and Auth Token at twilio.com/console
	// and set the environment variables. See http://twil.io/secure

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	accountSid := os.Getenv("ACCOUNT_SID")
	authToken := os.Getenv("AUTH_TOKEN")

	client := twilio.NewRestClientWithParams(twilio.ClientParams{
		Username: accountSid,
		Password: authToken,
	})

	params := &api.CreateMessageParams{}
	params.SetFrom("whatsapp:+14155238886")
	params.SetBody("Acabou de sair um Post novo com um tema que voce vai adorar! Vem ver 😁:")
	params.SetTo("whatsapp:+5518997635588")

	resp, err := client.Api.CreateMessage(params)
	if err != nil {
		fmt.Println(err.Error())
	} else {
		if resp.Sid != nil {
			fmt.Println(*resp.Sid)
			fmt.Println("Message sent successfully")

		} else {
			fmt.Println(resp.Sid)
			fmt.Println("Failed to send message")
		}
	}
}
