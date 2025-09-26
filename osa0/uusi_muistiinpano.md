```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Note right of Browser: User types a note in the text field
    Note right of Browser: and clicks the "Save" button

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate Server
    Note right of Server: Server receives the note data
    Note right of Server: Saves the note in the database (data.json)
    Server-->>Browser: 201 Created (confirmation of saving)
    deactivate Server

    Note right of Browser: Browser reloads the page completely

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate Server
    Server-->>Browser: HTML document
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: CSS file
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate Server
    Server-->>Browser: JavaScript file
    deactivate Server

    Note right of Browser: Browser executes JS code that fetches the notes JSON
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: JSON data including the new note
    deactivate Server

    Note right of Browser: Browser renders all notes on the page
