package main

import (
	"fmt"
	"log"
	// "github.com/google/uuid"
)

type Notification struct {
	Id                 int
	Title              string
	Message            string
	DateMsg            string
	ActiveNotification bool
}

func ValidNotification(n Notification) {

	if n.ActiveNotification == false {
		log.Fatalln("Error! To send notification, active permission is required")
	} else {
		fmt.Println("Permission to send message validated successfully")
		fmt.Println(n.Message)
	}

}

func main() {

	note := Notification{
		Id:                 1,
		Title:              "Post novo",
		Message:            "Acabou de sair um Post novo",
		DateMsg:            "13-09-2023",
		ActiveNotification: true,
	}

	ValidNotification(note)
}
