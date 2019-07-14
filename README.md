# poe-sniper-electron

## Development

- Include the Firebase API key in the `.env` file as described in the [example](./.env.example).
- Set up notifications (if on Windows): https://electronjs.org/docs/tutorial/notifications#windows

```bash
yarn install
yarn dev
```

## QA

As a user, I can login, so that my subscription is recognized and can access gated content

- when logged out user visits either the trade or settings screen, it is redirected to the login screen
- when logged out user visits the input screen, it can see its searches
- when logged in user visits the account screen, it:
  - has access to its session id
  - has access to its current subscription state,
  - can refresh its subscription details
- when logged in user visits the settings screen, it can:
  - set the seconds elapsed between the appearance of each notification
  - send a test notification
  - turn on/off automatic whisper message copying

As a user, my settings are stored locally, so that I do not have to set them again

- when the user logs in, its previously stored settings are reloaded from the local storage
- when logged out user restarts the application, its input searches are reloaded
- when logged in user restarts the application, its input searches are reloaded and socket connections are executed
- when logged in user restarts the application, its session id is reloaded
- when the user logs out, its session id is cleared

As a user, I can add a new search, so that I get notified for items matched by that search

- when the user tries to add a new row to the input table with wrong URL:
  - the save button does not react
  - a red line indicates it
- when logged out user adds a new row to the input table, socket connection does not happen
- when logged in user adds a new row to the input table without active subscription, socket connection does not happen
- when logged in user adds a new row to the input table with invalid session id, socket connection does not happen
- when logged in user adds a new row to the input table with valid content, socket connection happens
- when socket connection happens, the connection state is indicated in that row

As a user, I can delete searches, so that I do not get notified for items matched by that search

- when logged out user removes a search from the input table, the row is deleted
- when logged in user removes a disconnected search from the input table, the row is deleted
- when logged in user removes a connected search from the input table, the socket is disconnected and the row is deleted

As a user, I can reconnect to my searches, so that reinitialize my connections

- when the user reconnects to a disconnected socket, it executes the connection after 500ms
- when the user reconnects to a connected socket, the socket is disconnected and it executes the connection after 500ms
