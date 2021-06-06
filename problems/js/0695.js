var maxAreaOfIsland = function (grid) {
    const m = grid.length,
        n = grid[0].length;

    // 找陸地的方法
    function find(x, y) {
        // 如果是 (x, y) 是海洋或是已經找過了，就不要繼續
        if (grid[y][x] == 0 || grid[y][x] == 2) return 0;

        // area 是這一個陸塊的大小
        let area = 1;

        // 紀錄這塊地已找過
        grid[y][x] = 2;

        // 如果右邊不是邊界，找右邊
        if (x + 1 < n) area += find(x + 1, y);
        // 如果左邊不是邊界，找左邊
        if (x > 0) area += find(x - 1, y);
        // 如果下面不是邊界，找下面
        if (y + 1 < m) area += find(x, y + 1);
        // 如果上面不是邊界，找上面
        if (y > 0) area += find(x, y - 1);

        // 回傳該陸塊總大小
        return area;
    }

    let max = 0;

    // 遍歷所有位置
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 如果是陸地，則找該陸地所屬陸塊大小
            if (grid[i][j] == 1) {
                let area = find(j, i);
                max = area > max ? area : max;
            }
        }
    }

    return max;
};
