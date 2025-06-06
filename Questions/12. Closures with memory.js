/*
Garbage Collection:
- JS automatically frees memory that's no longer used.
- It removes objects if no reference to them exists.

Closures:
- A closure is a function that "remembers" variables from its outer scope.
- Those outer variables stay in memory as long as the closure exists.

Memory Leaks:
- If closures hold references to unused variables or DOM elements, GC can't free them.
- This causes memory leaks — memory stays used unnecessarily.

Connection:
- Closures can unintentionally keep data in memory.
- So, poor closure usage can lead to memory leaks, affecting performance, so after usage of closures, we can set its reference to null so that its memory gets freed by garbage collection 
*/
