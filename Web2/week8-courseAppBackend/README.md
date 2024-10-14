# Three ways to write routers in a backend application

### - The basic and usual way
- Write all routes in a single file and use it

This approach will lead to more confusion and it will have less readablity

### - Write routes in different section and files
- Use a different file for user routes
- Use a different file for admin routes
- Use a different file for course routes

Write all the routes in a function
- pass app to that function and write the routes

Example: 
    ` function userRoutes(app){
        app.post("", (req, res) => {
            //content
        });

        app.get("", (req, res) => {
            //content
        });

        app.delete("", (req, res) => {
            //content
        });
    } `

    Export the above function and call it in index.js file - userRoutes(app)

### - Use Express Router in different files and call them in main file
    This way is followed in this basic backend application


### Live Class tips
    Don't store the base-64 url of an image inside the database
    instead store a direct link of the image