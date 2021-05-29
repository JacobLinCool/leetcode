func maximumUniqueSubarray(nums []int) int {
	max, sum := 0, 0
	table := make(map[int]int)

	front, back := 0, 0
	for front = 0; front < len(nums); front++ {
		sum += nums[front]
		if pos, exists := table[nums[front]]; exists {
			for back <= pos {
				delete(table, nums[back])
				sum -= nums[back]
				back++
			}
		} else if sum > max {
			max = sum
		}
		table[nums[front]] = front
	}

	return max
}
