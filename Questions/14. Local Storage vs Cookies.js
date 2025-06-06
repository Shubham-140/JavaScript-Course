// 📌 Differences between Local Storage and Cookies (Table Format)

/*
| Aspect                 | Local Storage                                 | Cookies                                             |
|------------------------|-----------------------------------------------|-----------------------------------------------------|
| Storage Limit          | ~5–10 MB                                      | ~4 KB                                               |
| Data Sent to Server    | ❌ Not sent with HTTP requests                | ✅ Automatically sent with every HTTP request      |
| Expiration             | ❌ Persists until manually cleared            | ✅ Can set expiration (e.g., 1 day)                |
| Accessibility          | ✅ JavaScript (browser only)                  | ✅ JavaScript + server (via HTTP headers)          |
| Use Case               | Store preferences, theme, tokens (client)     | Auth sessions, tracking, server validation          |
*/

// ✅ Example Usage:

// Local Storage Example
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"

// Cookie Example
document.cookie = "username=John; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/";
console.log(document.cookie); // "username=John"
