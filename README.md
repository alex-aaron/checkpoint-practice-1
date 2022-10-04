### Week 1 Checkpoint Practice

#### How to test code

To run the test code, make sure your terminal points to the correct directory by typing this into your terminal:

```
cd checkpoint-practice-1
```
To actually run the tests, type this into your terminal:

```
npm test
```

Complete the prompts below.

#### Problem 1
Create a function called `createNumberedList` that takes in one parameter - `array` - which represents an array of todo items as strings. Assume, this input array will ALWAYS have 3 items. This function should create a numbered list WITH LINEBREAKS from this array.

*Hint*: Look up the line break character `\n` to properly format the string.

```
var todos = ['feed cat', 'do laundry', 'do dishes'];

createNumberedList(todos);
// RETURNS =>
1. feed cat
2. do laundry
3. do dishes
```
#### Problem 2

Create a function called `createStringFromObj` that takes in one parameter - `obj` - that looks like this:

```
var sample = {
  organization: 'Operation Spark',
  city: 'New Orleans, LA',
  course: {
    name: 'Bootcamp',
    language: 'Javascript'
  }
}
```
This function should return a string like this:
"I am learning {JavaScript} at {Operation Spark}'s {Bootcamp} course in {New Orleans, LA}."

Use object access methods to access the values in the object so you can create the string.

#### Problem 3
