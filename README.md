Integrating Patient Records from Two Healthcare Providers | Linked List
Author: David A. Davis
Course: AD312 – Data Structures & Algorithms
Assignment: Merge Two Sorted Linked Lists (Healthcare Records)
📌 Problem Overview
HealthMerge Inc. recently acquired CarePlus, and both organizations maintain patient records in sorted linked lists, ordered by SSN.
To unify their systems, we must merge two sorted linked lists into a single sorted list without losing any records, including duplicates.

This module implements:

A ListNode class representing a patient record

A mergePatientRecords(list1, list2) function that merges two sorted lists

Unit tests (normal + edge cases)

Diagrams explaining the merge process

Time & space complexity analysis

🧠 Clarifying Questions
Are SSNs guaranteed to be valid 9‑digit numbers?

Can either list be empty?

Should duplicate SSNs be preserved?

Are both lists always sorted in ascending order?

Should the merge be performed in‑place (O(1) space)?

🧩 Solution Approach
This problem is equivalent to the merge step of merge sort, but applied to linked lists.

We maintain two pointers:

p1 → current node in list1

p2 → current node in list2

We compare SSNs and attach the smaller node to the merged list.
If equal, we attach both in order.

A dummy head node simplifies pointer management.

🧱 Data Structure
ListNode
<img width="639" height="250" alt="image" src="https://github.com/user-attachments/assets/fd9bb42b-b6a4-4d6b-8f45-e5db326fa930" />
