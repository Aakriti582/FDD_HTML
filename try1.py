def longest_common_prefix(words):
    ans = ""
    words = sorted(words)
    first = words[0]
    last = words[-1]

    for i in range(min(len(first), len(last))):
        if first[i] != last[i]:
            return ans
        ans += first[i]
    return ans


num = ['Flower', 'Flow', 'Flight','Fashion']
print(longest_common_prefix(num))