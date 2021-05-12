class Solution:
    count = 0
    def numberOfSteps(self, num: int) -> int:
        if num == 0:
            return(self.count)
        elif num % 2 == 0:
            num /= 2
            self.count += 1
        elif num % 2 != 0:
            num -= 1
            self.count += 1

        return self.numberOfSteps(num)

print(Solution.numberOfSteps(14))