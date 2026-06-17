## Priority Rules

Placement notifications have the highest priority.

Result notifications have medium priority.

Event notifications have the lowest priority.

Priority Order:

Placement > Result > Event

## Sorting Logic

1. Sort notifications by priority.
2. If priorities are equal, sort by latest timestamp.
3. Select the top 10 notifications.

## Efficient Maintenance of Top 10

When new notifications arrive:

* Assign a priority weight.
* Compare with existing top notifications.
* Maintain a Min Heap of size 10.
* Replace the lowest-priority notification when a better notification arrives.

This avoids sorting the entire collection repeatedly and keeps updates efficient.


