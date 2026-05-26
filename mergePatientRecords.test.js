const { ListNode, mergePatientRecords } = require("./mergePatientRecords");

// Helper: build a linked list from an array of patient objects
function buildList(records) {
  if (records.length === 0) return null;

  const head = new ListNode(records[0].ssn, records[0].age, records[0].fullName);
  let current = head;

  for (let i = 1; i < records.length; i++) {
    current.next = new ListNode(records[i].ssn, records[i].age, records[i].fullName);
    current = current.next;
  }

  return head;
}

// Helper: convert linked list to array of SSNs for easy comparison
function listToArray(head) {
  const result = [];
  let current = head;

  while (current !== null) {
    result.push(current.ssn);
    current = current.next;
  }

  return result;
}

//
// ---------------------- NORMAL TEST CASES ----------------------
//

// Normal Case 1: Interleaving SSNs
// Ensures the merge correctly alternates between lists when values interleave.
test("merges two interleaving sorted lists", () => {
  const list1 = buildList([
    { ssn: 101 }, { ssn: 300 }, { ssn: 500 }
  ]);

  const list2 = buildList([
    { ssn: 200 }, { ssn: 400 }, { ssn: 600 }
  ]);

  const merged = mergePatientRecords(list1, list2);
  expect(listToArray(merged)).toEqual([101, 200, 300, 400, 500, 600]);
});

// Normal Case 2: One list entirely smaller
// Ensures the algorithm handles cases where all nodes of one list come first.
test("all nodes in list1 come before list2", () => {
  const list1 = buildList([
    { ssn: 100 }, { ssn: 200 }, { ssn: 300 }
  ]);

  const list2 = buildList([
    { ssn: 400 }, { ssn: 500 }, { ssn: 600 }
  ]);

  const merged = mergePatientRecords(list1, list2);
  expect(listToArray(merged)).toEqual([100, 200, 300, 400, 500, 600]);
});

// Normal Case 3: Duplicate SSNs
// Confirms duplicates are preserved and appear in sorted order.
test("preserves duplicate SSNs when merging", () => {
  const list1 = buildList([
    { ssn: 200 }, { ssn: 300 }
  ]);

  const list2 = buildList([
    { ssn: 200 }, { ssn: 400 }
  ]);

  const merged = mergePatientRecords(list1, list2);
  expect(listToArray(merged)).toEqual([200, 200, 300, 400]);
});


//
// ---------------------- EDGE TEST CASES ----------------------
//

// Edge Case 1: list1 is empty
// Ensures the function returns list2 unchanged.
test("list1 empty returns list2", () => {
  const list1 = null;

  const list2 = buildList([
    { ssn: 100 }, { ssn: 200 }
  ]);

  const merged = mergePatientRecords(list1, list2);
  expect(listToArray(merged)).toEqual([100, 200]);
});

// Edge Case 2: list2 is empty
// Ensures the function returns list1 unchanged.
test("list2 empty returns list1", () => {
  const list1 = buildList([
    { ssn: 300 }, { ssn: 400 }
  ]);

  const list2 = null;

  const merged = mergePatientRecords(list1, list2);
  expect(listToArray(merged)).toEqual([300, 400]);
});

// Edge Case 3: both lists empty
// Ensures the function handles null inputs gracefully.
test("both lists empty returns null", () => {
  const merged = mergePatientRecords(null, null);
  expect(merged).toBeNull();
});
