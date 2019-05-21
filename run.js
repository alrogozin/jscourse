let num = 1;
while(num < 55) {
	console.log(num);
	num++;
	// break;
}
do{
	console.log(num);
	num++;
} while (num < 55)

for(i=0; i < 10; i++) {
	if(i == 6) break; // прервать выполнение цикла
	if(i == 3) continue; // пропускаем одну итерацию цикла
	console.log(':::', i);
}