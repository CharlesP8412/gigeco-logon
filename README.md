# React Login using MemberStack

Simple sign-up/login/logout page using React and Memberstack

Frontend: React || Backend utilizes https://www.memberstack.io/

User can sign up to create a new account (stored with MemberStack), or login using an existing account.
User will be redirected to a private welcome page on success and has the option to logout.

Notes:

**Memberstack script needs to be every HTML view**

1. Add Memberstack (Referred to as 'MS' hereafter) script to the head of the sites HTML `/public/index.html`

```
Note:
- React only renders components so the MS script needs to be reloaded on each re-render using `window.MemberStack.reload()`
- Reload is placed in each component because when it was lifted to the App component functionality  was intermittent.
```

2. Following MS directions forms and inputs use MS Data Attributes

- Redirection is handled by MS Setting
- LocalStorage is updated by MS

3. Welcome Page is inside a PrivateRoute, After checking that a user is logged in (MS Data in localstorage), then the component is rendered.

---

To Install, In the project directory, you can run:
Close the Repo
Run `npm install`

To Run the app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
