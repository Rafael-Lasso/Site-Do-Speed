package server

import (
	"fmt"
	"net/http"
	"time"
)

func webServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World! %s", time.Now())
}

func main() {
	http.HandleFunc("/", webServer)
	http.ListenAndServe(":8080", nil)
}
