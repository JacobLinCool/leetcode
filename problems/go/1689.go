func minPartitions(n string) int {
	max := '0'
	for _, c := range n {
		if c > max {
			max = c
		}
	}
	return int(max - '0')
}