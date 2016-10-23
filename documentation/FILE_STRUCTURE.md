## [Organizing Your Meteor Project](https://themeteorchef.com/snippets/organizing-your-meteor-project/)  


`/client` - used to store all code that's meant to run on the client-side of our application. Any files located in this directory will be loaded on the client-side (browser) only.

`/server` - used to store all code that's meant to run on the server-side of our application. Any files located in this directory will be loaded on the server-side only.

`/public` - used to store all files that are meant to be served plublicly. Images, graphics, and other static assets can live here.

`/private` - used to store private data files and can only be accessed on the server. For example, things like email templates or mock data can be stored here.

## [Understanding the Imports Directory](https://themeteorchef.com/snippets/understanding-the-imports-directory/)

`/imports` - any code within the project’s /imports directory is not loaded automatically like the code within the `/client` and `/server` directories. This means that anything placed in this directory must be loaded explicitly in the application.

`/imports/api` - stores all code related to data in our application. This includes things like collection definitions, publications, and methods.

`/imports/startup` - contains any code that is intended to run on either _client_ startup or _server_ startup.

`/imports/ui` - stores all of the user interface related code for our application.

`/imports/ui/pages` - this is pretty self explanatory.

`/imports/ui/components` - holds all of the miscellaneous UI components in your application. For example, a button, a list, or a navigation bar.
