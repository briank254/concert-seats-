# concert-seats-
Andela Rwanda Cycle 6 Technical Challenge.
Instructions for submission
Create an account on codepen.io and attempt any 1 of the questions. You are required to make
use of only HTML, CSS and JavaScript, and NO FRAMEWORKS. Please submit via this form
before 10am on Monday, April 1st, 2019.

Question 1

Concert Seats

Context In a concert hall, some seats are higher than others, such that a seat can only see the
stage if the seat in front of it is lower. Your task is to find the seats that can see the stage
and those that cannot.

Task Create a function that determines whether each seat (represented with a number) can
"see" the front-stage. A number can "see" the front-stage if it is strictly greater than the
number before it. For example, consider the following seating arrangement:
// FRONT STAGE
[[1, 2, 3, 2, 1, 1],
[2, 4, 4, 3, 2, 2],
[5, 5, 5, 5, 4, 4],
[6, 6, 7, 6, 5, 5]]
// Starting from the left, 6 > 5 > 2 > 1, so all numbers can see.
// Similarly, 6 > 5 > 4 > 2 - so all numbers can see, etc.
The function should return true if every number can see the front-stage, and false if
even a single number cannot.

UI Design Your UI design for the concert hall should include the following:

● 36 seats and an input field for each seat
● A button to run the check
● When displaying the result the seats should be arranged as inputted
● Use colour green to indicate compliant seats and red for any defaulting seat
