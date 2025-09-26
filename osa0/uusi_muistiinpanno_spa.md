```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types note and clicks "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Server saves note in database
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: Browser updates UI with new note without full reload