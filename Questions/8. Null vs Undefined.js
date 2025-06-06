/*
| Feature           | null                                | undefined                             |
|-------------------|------------==-----------------------|---------------------------------------|
| Type              | Object                              | Undefined                             |
| Meaning           | Explicitly assigned "no value"      | Variable declared but not assigned    |
| Usage             | Intentional absence of any object   | uninitialized variables               |
| Coercion (==)     | becomes undefined                   | becomes null                          |
| Coercion (>, <)   | becomes 0                           | becomes NaN                           |
*/