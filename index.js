/** Bài 1
 * Đầu vào: Nhập số ngày làm
 * 
 * Các bước xử lý
 * tạo số ngày làm
 * tạo lương 1 ngày
 * tính tiền lương = lương 1 ngày * số ngày
 * 
 * Đầu ra: tiền lương
 */

var songaylam = 20;

var luong1ngay = 100000;

var tienluong = songaylam * luong1ngay;
console.log("🚀 ~ file: index.js:6 ~ tienluong:", tienluong)


/**Bài 2
 * Đầu vào 5 số
 * 
 * Cộng các chữ số lại xong chia 5 ra kết qủa
 * 
 * Đầu ra: trung bình của tổng 5 chữ số
 */

var num1 = 123;
var num2 = 12356;
var num3 = 356;
var num4 = 6;
var num5 = 5346;

var trungbinh = (num1 + num2 + num3 + num4 + num5) / 5;
console.log("🚀 ~ file: index.js:40 ~ trungbinh:", trungbinh)


/**Bài 3
 * Đầu vào số tiền USD đang có
 * 
 * Nhân số tiền với tỉ giá ra số tiền VND
 * 
 * Đầu ra: số tiền VND
 */

var tigia = 23500;
var tienUSD = 34;
var tienVND = tienUSD * tigia;
console.log("🚀 ~ file: index.js:49 ~ tienVND:", tienVND)


/**Bài 4
 * Đầu vào 2 cạnh hình chữ nhật
 * 
 * chu vi = (dài + rộng)*2
 * diện tích = dài * rộng
 * 
 * Đầu ra: diện tích và chu vi hình chữ nhật
 */

var chieuDai = 23;
var chieuRong = 15;
var chuvi = (chieuDai + chieuRong) * 2;
console.log("🚀 ~ file: index.js:64 ~ chuvi:", chuvi)
var dientich = chieuDai * chieuRong;
console.log("🚀 ~ file: index.js:66 ~ dientich:", dientich)

/**Bài 5
 * Đầu vào số có 2 chữ sô
 * 
 * hàng đơn vị = số chia lấy dư cho 10
 * hàng chục = số chia cho 10 làm tròn xuống
 * 
 * Đầu ra: tổng 2 ký sô vừa nhập
 */

var number = 56;
var hangdonvi = number % 10;
var hangchuc = Math.floor(number / 10);
var tongkyso = hangdonvi + hangchuc;
console.log("🚀 ~ file: index.js:81 ~ tongkyso:", tongkyso)






