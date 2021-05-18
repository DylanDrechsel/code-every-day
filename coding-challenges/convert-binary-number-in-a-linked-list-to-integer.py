class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        binaryList = []

        while head != None:
            binaryList.append(head.val)
            head = head.next

        string = [str(i) for i in binaryList]
        res = "".join(string)

        return(int(res, 2))
