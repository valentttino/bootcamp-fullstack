sequenceDiagram
browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate server
server->>browser: url redirection

browser->>server: HTTP GET: https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server->>browser: main.css - main.js - data.json