```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({ _id: 1 }, { $inc: { myNumber: 1 } });
//Alternative, if the field doesn't exist, create it as a number
db.collection.updateOne({ _id: 1 }, { $inc: { myNumber: 1 } }, { upsert: true });
```