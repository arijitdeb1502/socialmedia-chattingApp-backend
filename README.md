# socialmedia-chattingApp-backend

Steps to install/Run the project:
1.) Clone or download the master branch.
2.) change your directory from the command prompt to this project folder where you downloaded or cloned as step1.
3.) npm install.
4.) Install MongoDb in your local
5.) Bring up the MongoDb that you installed.
6.) Inside the config directory create dev.env and test.env.
7.) Populate the following key=value pair as below :
PORT=<port you want express to listen>
MONGODB_URL=<Your DB Url>
8.)To run your project in dev mode:
npm run dev
9.)Once the server is up you can send the following requests:

localhost:3001/api/v1/user/signup
Sample Request Body:
{
	"name"     : "Arijit Deb",
	"email"    : "arijithere@gmail.com",
	"password" : "aRijan1@3",
	"age"      : 36
}

Steps to Test the project:
1.) Clone or download the master branch.
2.) change your directory from the command prompt to this project folder where you downloaded or cloned as step1.
3.) npm install.
4.) Install MongoDb in your local
5.) Bring up the MongoDb that you installed.
6.) Inside the config directory create dev.env and test.env.
7.) Populate the following key=value pair as below :
PORT=<port you want express to listen>
MONGODB_URL=<Your DB Url>
8.)To run your project in test mode:
npm run test
Once test is successfully Hit Keyboard 'a' to run all the tests once again, not in watch mode.
9.) Test report will be generated in the project root folder.
