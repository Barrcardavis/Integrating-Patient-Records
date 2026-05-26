class ListNode {
    constructor(ssn, age, fullName) {
        this.ssn = ssn;
        this.age = age;
        this.fullName = fullName;
        this.next = null;
    }
}

// This function takes two sorted linked lists of patient records and merges them into a single sorted linked list based on the SSN.
function mergePatientRecords(list1, list2) {
    const dummy = new ListNode(null, null, null);
    let current = dummy;

    let p1 = list1;
    let p2 = list2;

    // While both pointers (p1 & p2) still have nodes, compare their SSNs values. whichever node  has the smaller SSN gets attach to the merge list. Then we advance the pointer.
    while (p1 !== null && p2 !== null) {
        if (p1.ssn <= p2.ssn) {
            current.next = p1;
            p1 = p1.next;
            } else {
            current.next = p2;
            p2 = p2.next;
            } 
            current = current.next;
         } 

         if(p1 !== null) current.next = p1;
         if(p2 !== null) current.next = p2;
         
         return dummy.next;
        }
module.exports = { ListNode, mergePatientRecords };


   