<h1 align='center'>100 Days Of Code - Log</h1>

---

<h3 align='center'>Day 34 May 30th, 2021</h3>

**O'reilly Learning Online (o_reilly/data_structures/arrays)**: Completed the lessions on 2d arrays and bounds checking them. Did a minesweeper challenge as practice for bounds checking.

I am really starting to understand helper functions more and how useful they can really be when tackling bigger problems. Resulting in clearer more elegent code.

---

<h3 align='center'>Day 33 May 25th, 2021</h3>

**O'reilly Learning Online (o_reilly/data_structures/arrays)**: Started learning all about data data structures through javascript. Started a 45 hour course that will help me learn and understand the fundamentals of data structures in javascript. 

Today I completed all the lessons on arrays and started the ones on 2d arrays. Im looking to have this course finished before day 70!

I will still commit coding challenges everyone once in a while as I learn more about data structures.

---

<h3 align='center'>Day 32 May 24th, 2021</h3>

**Coding Challenge (find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree.js)**: Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

Follow up: Solve the problem if repeated values on the tree are allowed.

**Example**

```

Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (count-the-number-of-consistent-strings.js.js)**: You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

**Example**

```
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 31 May 22th, 2021</h3>

**Coding Challenge (partitioning-into-minimum-number-of-deci-binary-numbers.js)**: A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

**Example**

```
Input: n = "32"
Output: 3
Explanation: 10 + 11 + 11 = 32

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (minimim-number-for-operations-to-move-all-balls-to-each-box.js)**: You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.

**Example**

```
Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 30 May 21th, 2021</h3>

**Coding Challenge (sorting-the-sentence.js)**: A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

**Example**

```
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (find-the-highest-altutide.js)**: There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

**Example**

```
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 29 May 20th, 2021</h3>

**Coding Challenge (replace-all-digits-with-characters.py)**: You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

**Example**

```
Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (count-good-triplets.py)**: Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
Where |x| denotes the absolute value of x.

Return the number of good triplets.

**Example**

```
Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 28 May 18th, 2021</h3>

**Coding Challenge (check-if-two-string-arrays-are-equivalent.py)**: Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

**Example**

```
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (design-an-ordered-stream.py)**: There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

OrderedStream(int n) Constructs the stream to take n values.
String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.

**Example**

```
Input
["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
Output
[null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

Explanation
// Note that the values ordered by ID is ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"].
OrderedStream os = new OrderedStream(5);
os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].
os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].
os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
// Concatentating all the chunks returned:
// [] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
// The resulting order is the same as the order above.

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (convert-binary-number-in-a-linked-list-to-integer.py)**: Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

**Example**

```
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 27 May 17th, 2021</h3>

**Coding Challenge (range-sum-of-bts.py)**: Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

**Example**

```
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (maximum-nesting-depth-of-the-parentheses.py)**: A string is a valid parentheses string (denoted VPS) if it meets one of the following:

It is an empty string "", or a single character not equal to "(" or ")",
It can be written as AB (A concatenated with B), where A and B are VPS's, or
It can be written as (A), where A is a VPS.
We can similarly define the nesting depth depth(S) of any VPS S as follows:

depth("") = 0
depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS represented as string s, return the nesting depth of s.

**Example**

```
Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 26 May 16th, 2021</h3>

**Coding Challenge (check-if-the-sentence-is-pangram.py)**: A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise

**Example**

```
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (sum-of=all-subset-xor-totals.py)**: The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
Given an array nums, return the sum of all XOR totals for every subset of nums. 

Note: Subsets with the same elements should be counted multiple times.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

**Example**

```
Input: nums = [1,3]
Output: 6
Explanation: The 4 subsets of [1,3] are:
- The empty subset has an XOR total of 0.
- [1] has an XOR total of 1.
- [3] has an XOR total of 3.
- [1,3] has an XOR total of 1 XOR 3 = 2.
0 + 1 + 3 + 2 = 6

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 25 May 15th, 2021</h3>

**Coding Challenge (count-items-matching-a-rule.py)**: You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule

**Example**

```
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (split-a-string-in-balanced-strings.py)**: Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.

**Example**

```
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 24 May 14th, 2021</h3>

**Coding Challenge (goal-parser-interpretation.py)**: You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

**Example**

```
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (create-target-array-in-the-given-order.py)**: Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

**Example**

```
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 23 May 13th, 2021</h3>

**Coding Challenge (decompress-run-length-encoded-list.py)**: We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

**Example**

```
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (decode-xored-array.py)**: There is a hidden integer array arr that consists of n non-negative integers.

It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

Return the original array arr. It can be proved that the answer exists and is unique.

**Example**

```
Input: encoded = [1,2,3], first = 1
Output: [1,0,2,1]
Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 21 May 11th, 2021</h3>

**Coding Challenge (how-many-numbers-are-smaller-than-current.py)**: Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

**Example**

```
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (design-parking-system.py)**: Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

**Example**

```
Input
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]
Output
[null, true, true, false, false]

Explanation
ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 20 May 10th, 2021</h3>

**Coding Challenge (kids-with-candies.py)**: Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

**Example**

```
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (jewels-and-stones.py)**: You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

**Example**

```
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Input: jewels = "z", stones = "ZZ"
Output: 0

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 19 May 9th, 2021</h3>

**Coding Challenge (kids-with-candies.py)**: Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

**Example**

```
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: 
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 

```

**Coding Challenge Complete?:** Yes

**Coding Challenge (shuffle-the-array.py)**: Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

**Example**

```
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 18 May 7th, 2021</h3>

**Coding Challenge (running-sums-of-1d-array.py)**: Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

**Example**

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 17 May 6th, 2021</h3>

**Coding Challenge (count-matches-in-tournament.py)**: You are given an integer n, the number of teams in a tournament that has strange rules:

- If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
- If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.

Return the number of matches played in the tournament until a winner is decided.

**Example**

```
Input: n = 7
Output: 6
Explanation: Details of the tournament: 
- 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 3 + 2 + 1 = 6.

Input: n = 14
Output: 13
Explanation: Details of the tournament:
- 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
- 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
- 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 7 + 3 + 2 + 1 = 13.

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 16 May 5th, 2021</h3>

**Coding Challenge One (determine-if-string-halves-are-alike.py)**: You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

**Example**

```
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

```

**Coding Challenge Complete?:** Yes

**Coding Challenge Two (sign-of-the-product-of-a-list.py)**: There is a function signFunc(x) that returns:

- 1 if x is positive.
- -1 if x is negative.
- 0 if x is equal to 0. <br />

You are given an integer array nums. Let product be the product of all values in the array nums.

Return the sign of product.

**Example**

```
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 15 May 4th, 2021</h3>

**Coding Challenge (count-consistent-strings.py)**: You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

**Example**

```
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 14 May 3rd, 2021</h3>

**Coding Challenge (reverse-words-in-a-string.py)**: Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example**

```
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Input: s = "God Ding"
Output: "doG gniD"
```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 13 May 2nd, 2021</h3>

**Coding Challenge (check-two-strings-are-equivalent.py)**: Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

**Example**

```
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 12 May 1st, 2021</h3>

**Coding Challenge (richest-customer-wealth.py)**: You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

**Example**

```
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 11 April 30th, 2021</h3>

**Coding Challenge (sum-of-odd-length-subarrays.py)**: Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

**Example**

```
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 10 April 29th, 2021</h3>

**Coding Challenge (truncate-sentences.py)**: A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

- For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.

You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

**Example**

```
Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 9 April 28th, 2021</h3>

**Coding Challenge (defanging-an-ip-address.py)**: Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

**Example**

```
Input: str = "codeleet", indices = [4,5,6,7,0,1,2,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
```

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 8 April 27th, 2021</h3>
  
**Today's Progress**: Presented my capstone project yesterday and was really happy with the result. I hit a lot of my strech goals and was able to get farther then I thought I would. Now to start building my Portfoilo website and I do want to mess around with React Native
**Coding Challenge (defanging-an-ip-address.py)**: Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

**Coding Challenge Complete?:** Yes

<h3 align='center'>Day 7 April 26th, 2021</h3> 

**Coding Challenge (grading-students.py)**: HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100 .
Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 6 April 24th, 2021</h3>

**Coding Challenge (a-very-big-sum.py)**: Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 5: April 23th, 2021</h3> 

**Today's Progress**: **https://github.com/DylanDrechsel/dungeon-dive** Continued to work on my capstone project and got the Sprite to render on the screen and be able to move around. I am going to trying to get the Sprite to have moving animations next.

---

<h3 align='center'>Day 4: April 22th, 2021</h3>

**Today's Progress**: **https://github.com/DylanDrechsel/dungeon-dive** Today I started working on my capstone project. I decided to do a Gameboy inspired 8-bit web app with React.js. Im going to start doing research about what I will need this evening.

---

<h3 align='center'>Day 3: April 21th, 2021</h3> 

**Today's Progress**: Used python for the coding challenge today and I have to say its really growing on me. I love how its indent based instead of curly brackets. Very Cool! Also started to program my unnamed React Native app. Will post the link to the repo below!

**Coding Challenge (fatorial.py)**: Write a function that takes a number and returns the factorial of the number.

**Coding Challenge Complete?:** Yes

<h3 align='center'>Day 2: April 20th, 2021</h3>

---

**Today's Progress**: Started learning Python3 which has been a delight. I think I will start using it as the main language in my coding challenges. Did more reseach into React Native and get the project files ready for tomorrow.

**Coding Challenge (time-converter.js)**: Write a function that takes the current standard time and converts it into military time.

**Coding Challenge Complete?:** Yes

---

<h3 align='center'>Day 1: April 19th, 2021</h3> 

**Today's Progress**: Set up my Twitter account and started thinking of ideas for my capstone project. 

**Twitter Link:** https://twitter.com/dylandrechsel

**Coding Challenge (counting-the-bits.js)**: Write a function called countTheBits that accepts a single numeric argument that will be an integer. The function should return the number of bits set to 1 in the number's binary representation.

**Coding Challenge Complete?:** Yes
