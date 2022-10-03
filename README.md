# For Hacktoberfest
## Notes
* Contact here mujahidali88094@gmail.com with 'hacktoberfest_help' in title.
* Please first visit https://mujahidali88094.github.io/React_Budgets_App/ to see it working.
* Do read this https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/#howtosubmitapullrequest if it is your first time.
* Don't forget to run **npm install** after downloading the code and before running **npm start**.
* Do checkout https://github.com/mujahidali88094/React_Budgets_App/edit/main/README.md#possible-additions section if you are unable to identify a possible change.
## Possible additions
* Live Search Budgets Feature (search results update as one types in the searchbar)
* Delete Budget button is also displayed in this list of budget
* Delete all budgets
* Change Limit of A Budget
   (in case of decreasing limit, one can move the exceeding expenses to uncategorized section)
* use of other hooks (use case is one's imagination)
* recent expenses overall and for each budget
* expenses graph
# Description
This project manages budgets and expenses. You can add a budget and set it's limit. Then you can add expenses to a budget and track your pocket.
# Technical Details
This project was aimed to use as many react hooks as possible.
Currently it uses:
  * useState
  * useEffect
  * useRef
  * useContext
  * useLocalStorage (custom hook to sustain data between page-refreshes)
  * useBudgetsContextValue (just a wrapper above useContext to get context_value)
# Link to Deployed App
https://mujahidali88094.github.io/React_Budgets_App/
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
