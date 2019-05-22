function test_cb(strMessage, cbFunction) {
	console.log(strMessage);
	cbFunction();
}
function cbf() {
	console.log('OOOOps');
}
cbf2 = () => console.log('1111');
test_cb('ываываыв', cbf2);

// NB!!! Closers 
// function glbFunc() {
// 	let i = 0;
// 	const f = function(n) {
// 		i = i + n;
// 		return i;
// 	}
// 	return f;
// }
// let test = glbFunc();
// const c1 = test(1);
// const c2 = test(1);
// const c3 = test(1);
// console.log(':', c1, c2, c3); // output: ": 1 2 3"

// let num = 1;
// while(num < 55) {
// 	console.log(num);
// 	num++;
// 	// break;
// }
// do{
// 	console.log(num);
// 	num++;
// } while (num < 55)

// for(i=0; i < 10; i++) {
// 	if(i == 6) break; // прервать выполнение цикла
// 	if(i == 3) continue; // пропускаем одну итерацию цикла
// 	console.log('-> ', i);
// }