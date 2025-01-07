# MongoDB $inc operator error
This example demonstrates an error that can occur when using the MongoDB `$inc` operator incorrectly. The `$inc` operator is used to increment a numeric field, but in this example, it's applied to a string field. This results in an error.

## Bug
The `bug.js` file contains code that attempts to increment a string field using the `$inc` operator.  This is incorrect and will result in an error.

## Solution
The `bugSolution.js` file provides a corrected version of the code. The solution involves ensuring that the field being incremented is of a numeric type (e.g., NumberInt, NumberLong, or a number).