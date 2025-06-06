// 📌 Differences between JavaScript (JS) and TypeScript (TS)

/*
| Difference           | JavaScript                             | TypeScript                                      |
|----------------------|----------------------------------------|-------------------------------------------------|
| Types                | No need to specify typ                 | Need to specify                                 |
| Error checking       | Errors show only when running          | Finds many errors before running                |
| Code size            | Usually smaller                        | Can be bigger due to extra code                 |
| Learning             | Easy to start                          | Need to learn a bit more                        |
| Features             | Limited to ES standards                | Adds features like interfaces, enums, type etc  |
*/

// Example:
// JS
// let message = "Hello";
// message = 10; // Allowed, no error until runtime

// TS
// let greeting: string = "Hello";
// greeting = 10; // Error: Type 'number' is not assignable to type 'string'.
