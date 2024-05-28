Hash tables are used to store key-value pairs.
They are like arrays, but the keys are not ordered.
Unlike arrays, hash tables are fast for all of the following operations.
Finding values, adding new values and removing values.

In order to look up values by key, we need a way to convert keys into valid array indices.

A function that performs this task is called a hash function.
A hash function is a function that takes a set of inputs of any arbitrary size and fits them into a table or other data structure that contains fixed-size elements

What makes a good hash?

1. Fast (constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly.
3. Deterministic (same input yields same output)

Collisions

Even with a large array and greate hash function, collisions are inevitable.

Two strategies for dealing with collisions

1. Separate Chaining
2. Linear Probing

Separate Chaining.

With separate chaining, at each index in our array, we store values using a more sophisticated data struture (an array or linked list).
This allows us to store multiple key-value pairs at the same index.

Linear Probing
With linear probing, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index.

BIG O
Insertion: O(1)
Deletion: O(1)
Access: O(1)
