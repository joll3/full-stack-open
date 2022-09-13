[websequencesdiagrams](https://www.websequencediagrams.com)

## 0.4: New note
```
title user creates a new note on https://studies.cs.helsinki.fi/exampleapp/notes by inserting data and pressing "save" button.

note over browser 
Disabled caching to force browser
to create new HTTP GET requests
end note
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->browser: HTTP 302 "url redirect" > /exampleapp/notes"
browser->server: HTTP GET 200 https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET 200 https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET 200 https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js
note over browser
browser starts executing js-code
that requests JSON data from server
end note
browser->server: HTTP GET 200 https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{"content":"6666666","date":"2022-09-05T18:02:51.542Z"}, ...]
note over browser
browser executes the event handler
that render notes to display
end note 
```
## 0.5: Single page app
```uml
title user goes to singe page app https://studies.cs.helsinki.fi/exampleapp/spa 

note over browser 
Disabled caching to force browser
to create new HTTP GET requests
end note
browser->server: HTTP GET 200 https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: HTML-code
browser->server: HTTP GET 200 https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET 200 https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js
browser->server: HTTP GET 200  https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{"content":"joo","date":"2022-09-05T13:04:49.591Z"}, ...]
```
## 0.6: New note
```uml
title user creates a new note on https://studies.cs.helsinki.fi/exampleapp/spa by inserting data and pressing "save" button.

note over browser 
Disabled caching to force browser
to create new HTTP GET requests
end note
browser->server: HTTP POST 201 https://studies.cs.helsinki.fi/exampleapp/new_note_spa
browser-->server: [{content: "test", date: "2022-09-05T18:22:38.307Z"}]
```

## 1b Javascript
- During this course the use of var is ill-advised and you should stick with using const and let! 
- use console.log() to test functionality

