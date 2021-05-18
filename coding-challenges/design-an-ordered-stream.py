class OrderedStream:

    def __init__(self, n):
        self.list = [None] * n
        self.pointer = 0

    def insert(self, idKey, value):
        self.list[idKey - 1] = value

        ans = []
        while self.pointer < len(self.list) and self.list[self.pointer] is not None:
            ans.append(self.list[self.pointer])
            self.pointer += 1
        return ans


n = OrderedStream(5)

n.insert([[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]], ["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
        )
