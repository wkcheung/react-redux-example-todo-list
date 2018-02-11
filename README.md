# React Redux Example (Todo List)

Using the example from ReduxJS Documentation.


## Reduecers

It's very important that the reducer stays pure. Things you should never do inside a reducer:

* Mutate its arguments;
* Perform side effects like API calls and routing transitions;
* Call non-pure functions, e.g. `Date.now()` or `Math.random()`.