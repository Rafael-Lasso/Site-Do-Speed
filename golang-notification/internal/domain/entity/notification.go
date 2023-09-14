package main

import (
	"fmt"
	"log"
	// "github.com/google/uuid"
)

type Notification struct {
	Id                 int               `json:"id"`
	Title              string            `json:"title"`
	Message            string            `json:"message"`
	DateMsg            string            `json:"date"`
	Topic              TopicNotification `json:"topic"`
	ActiveNotification bool              `json:"active"`
}

type TopicNotification struct {
	TopicId       int    `json:"id"`
	TopicTitle    string `json:"title"`
	TopicInterest bool   `json:"interest"`
}

func (t *TopicNotification) ValidTopicNotification() {

	if t.TopicInterest == false {
		log.Fatalln("Error! To send notification, user interest is required")
	} else {
		fmt.Println("Permission to send message validated successfully")
	}

}

func (n Notification) ValidNotification() {

	if n.ActiveNotification == false {
		log.Fatalln("Error! To send notification, active permission is required")
	} else {
		fmt.Println("Permission to send message validated successfully")
	}

}

func main() {

	notific := Notification{
		Id:      1,
		Title:   "Post novo",
		Message: "Acabou de sair um Post novo",
		DateMsg: "13-09-2023",
		Topic: TopicNotification{
			TopicId:       1,
			TopicTitle:    "Dragon Ball",
			TopicInterest: true,
		},
		ActiveNotification: true,
	}

	notific.ValidNotification()
	notific.Topic.ValidTopicNotification()
}
