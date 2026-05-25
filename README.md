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
1. Are SSNs guaranteed to be valid 9‑digit numbers?

2. Can either list be empty?

3. Should duplicate SSNs be preserved?

4. Are both lists always sorted in ascending order?

5. Should the merge be performed in‑place (O(1) space)?

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

🔗 Merge Function

<img width="639" height="544" alt="image" src="https://github.com/user-attachments/assets/0677e5e5-b678-4bf4-ac91-f95d1a5c05f7" />



🖼️ Flowchart / Diagram
Before Merge

<img width="635" height="128" alt="image" src="https://github.com/user-attachments/assets/557fca65-9b1d-4dbd-bd34-09193cbb8eec" />


Pointer Movement

<img width="635" height="148" alt="image" src="https://github.com/user-attachments/assets/a5eabeb5-aee4-48ce-b13f-28eab61b4c4f" />

After Merge

<img width="637" height="106" alt="image" src="https://github.com/user-attachments/assets/a8ffb6b9-14b3-401c-8d78-e6b53fec882b" />

🧪 Unit Tests (Jest)
Normal Cases
1. Interleaving SSNs

2. One list entirely smaller

3. Duplicate SSNs preserved

Edge Cases
1. list1 empty

2. list2 empty

3. both lists empty

Tests are located in:

<img width="634" height="105" alt="image" src="https://github.com/user-attachments/assets/f76281d8-152f-4588-898b-e9f7cb0b15c3" />

⏱️ Time & Space Complexity
Time Complexity: O(n + m)
Each list is traversed once.

Space Complexity: O(1)
The merge is performed in‑place, reusing existing nodes.

🎥 Video Requirements (for instructor)
Live coding demonstration

Show your face + screen

Explain reasoning and pointer movement

Present all 6 test cases

Discuss time & space complexity

Optional: optimization discussion

Clear communication throughout

📁 Repository Structure

<img width="635" height="226" alt="image" src="https://github.com/user-attachments/assets/eff1d550-b605-42de-9e63-26d313555a55" />

✅ Summary
This project demonstrates the ability to:

Work with linked lists

Merge sorted data structures

Write clean, testable code

Communicate algorithmic reasoning

Analyze time and space complexity
