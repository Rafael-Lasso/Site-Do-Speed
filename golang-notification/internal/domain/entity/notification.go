package entity

import "github.com/google/uuid"

type Notification struct {
	Id      uuid.UUID
	Title   string
	Message string
	DateMsg string
}
