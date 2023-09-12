package sms

import (
	"os"
	"log"
	"fmt"
	"github.com/joho/godotenv"
	"github.com/twilio/twilio-go"
	api "github.com/twilio/twilio-go/rest/api/v2010"
)

func smsMessage() {

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

	message := "Ola, este SMS foi enviado com Go , e , com Api Twilio "

	params := &api.CreateMessageParams{}
	params.SetBody(message)
	params.SetFrom(os.Getenv("TWILIO_FROM"))
	params.SetTo(os.Getenv("TWILIO_TO"))

	resp, err := client.Api.CreateMessage(params)
	if err != nil {
		fmt.Println(err.Error())
	} else {
		if resp.Sid != nil {
			fmt.Println(*resp.Sid)
		} else {
			fmt.Println(resp.Sid)
		}
	}

}
