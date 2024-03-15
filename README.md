# Adaptive Stories
Live Site: https://lauracastrovenegas.github.io/adaptive-stories/

## Set up the project on your computer
1. Clone the GitHub repository on your local machine by running: `git clone https://github.com/lauracastrovenegas/adaptive-stories.git` in the directory you want it to live in.
2. After cloning is complete, navigate to the project file: `cd adaptive-stories`.
3. Run `npm install` to install dependencies.
4. Now you're ready to code!

Make sure to create a new branch to make any changes to avoid committing directly to `main`.

## How to run the website locally on your computer

### Frontend
1. Open the terminal and navigate to the project file: `cd adaptive-stories`.
2. Run `npm start` to run the website on development mode.
3. Open [http://localhost:3000/adaptive-stories](http://localhost:3000/adaptive-stories) to view the dashboard in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Backend
1. Open the terminal and navigate to the flask folder: `cd adaptive-stories/flask`.
2. Run `flask --app app run` or `python -m flask --app app run` to run the development server on http://127.0.0.1:5000
3. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to view the admin page.

## Deploying the site after making changes

The website is deployed using GitHub pages. The site should only be deployed from the `main` branch, so make sure `main` is updated with any of your changes before deploying.

1. Go to the `main` branch: `git checkout main`
2. Make sure `main` is updated with any changes you want to be included in the deployment
3. Run the deployment script: `npm run deploy`
4. Deployment might take a few minutes. To check that everything is ok, go to the Actions tab on GitHub (https://github.com/lauracastrovenegas/adaptive-stories/actions).
5. Once deployment is finished, you should be able to see changes reflected on the website: https://lauracastrovenegas.github.io/adaptive-stories/

## Styled-Components
Docs: https://styled-components.com/docs/basics
