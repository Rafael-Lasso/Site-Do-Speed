package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func validEnvFile() {

	toName := os.Getenv("SEND_TO_NAME")
	fromName := os.Getenv("SEND_FROM_NAME")
	toAdress := os.Getenv("SEND_TO_ADDRESS")
	fromAdress := os.Getenv("SEND_FROM_ADDRESS")

	if toName == os.Getenv("SEND_TO_NAME") {
		fmt.Println("✅ | Loaded var successfully: SEND_TO_NAME", toName)
	} else {
		log.Fatalln("❌ | Error loading .env var SEND_TO_NAME")
	}

	if fromName == os.Getenv("SEND_FROM_NAME") {
		fmt.Println("✅ | Loaded var successfully: SEND_FROM_NAME", fromName)
	} else {
		log.Fatalln("❌ | Error loading .env var SEND_FROM_NAME ")
	}

	if toAdress == os.Getenv("SEND_TO_ADDRESS") {
		fmt.Println("✅ | Loaded var successfully: SEND_TO_ADDRESS", toAdress)
	} else {
		log.Fatalln("❌ | Error loading .env var SEND_TO_ADDRESS")
	}

	if fromAdress == os.Getenv("SEND_FROM_ADDRESS") {
		fmt.Println("✅ | Loaded var successfully: SEND_FROM_ADDRESS", fromAdress)
	} else {
		log.Fatalln("❌ | Error loading .env var SEND_FROM_ADDRESS")
	}

}

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	validEnvFile()
}
