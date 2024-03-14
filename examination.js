function removeDuplicatesAndCount(arr) {
    const countMap = new Map(); // Sử dụng Map để đếm số lần xuất hiện
    const uniqueArray = [];

    for (const num of arr) {
        if (!countMap.has(num)) {
            countMap.set(num, 1); // Nếu chưa có trong Map, thêm vào và đếm là 1
            uniqueArray.push(num); // Thêm vào mảng kết quả
        } else {
            countMap.set(num, countMap.get(num) + 1); // Nếu đã có, tăng số lần xuất hiện
        }
    }

    // In ra số lần xuất hiện của từng phần tử
    for (const [num, count] of countMap) {
        console.log(`Số ${num} xuất hiện ${count} lần.`);
    }

    return uniqueArray;
}

// Ví dụ sử dụng hàm
const inputArray = [1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4];
const result = removeDuplicatesAndCount(inputArray);
console.log("Mảng sau khi loại bỏ trùng lặp:", result);
