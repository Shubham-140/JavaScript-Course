// 📌 Differences between Local Storage and Session Storage (Table Format)

/*
| Aspect                 | Local Storage                                 | Session Storage                                     |
|------------------------|-----------------------------------------------|----------------------------------------------------|
| Storage Limit          | ~5–10 MB                                      | ~5 MB                                              |
| Data Sent to Server    | ❌ Not sent with HTTP requests                | ❌ Not sent with HTTP requests                      |
| Expiration             | ❌ Persists until manually cleared            | ✅ Clears automatically when the tab/browser closes|
| Accessibility          | ✅ JavaScript (browser only)                  | ✅ JavaScript (browser only)                        |
| Use Case               | Store preferences, theme, tokens (client)    | Store temporary data for a session                  |
*/

// ✅ Example Usage:

// Local Storage Example
// localStorage.setItem("theme", "dark");
// console.log(localStorage.getItem("theme")); // "dark"

// Session Storage Example
// sessionStorage.setItem("sessionID", "12345");
// console.log(sessionStorage.getItem("sessionID")); // "12345"
