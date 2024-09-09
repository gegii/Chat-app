Start app:

1. start docker and "docker-compose up --build" (app can already be used after running this command)
2. "npm install" (optional but recommended to make VS Code errors disappear, during code review)

Things I Haven't Addressed:

1. Messaging System: Right now, messages only live in the browser's memory and disappear if you refresh the page. In a real app, we'd set up a socket connection to keep everything synced with a database. By hovering on chat list, + icon is displayed which redirects user to create new message page, but after clicking "send" button it simply logs out (not implemented because of test app state management)
2. Form Performance: I haven't optimised how the forms handle user input. I'd optimise for speed and smoothness by managing how often updates are processed to prevent excessive re-renders.
3. Better Data Structure: The mock data I've used works for testing, but in a live application, I'd rethink how it's organised to scale better and make it more efficient to work with in a database and front end (If I was back end developer).
4. Auth: For now, I'm using a basic method (localStorage) to keep users logged in. It's easy to mess with, so in a real-world scenario, I'd implement different authentication system (based on backend)
5. User Feedback Improvements: Instead of simple alerts I would do modal pop ups in real app.
6. Responsive Design: current styles work on most screens but they're not fully responsive yet. In a production app it should be fully responsive.

Technologies I have used:

* Next.js
* TypeScript
* Tailwind CSS
* Docker

