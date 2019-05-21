let appData = {
	budget: 0,
	timeData: '',
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};
let money = +prompt('Budget?', '100'); // + - способ преобразования к числу (NB!!!)
let time = prompt('Input date (YYY-MM-DD)', '2019-10-01');

// appData.budget = parseFloat(money);
appData.budget = money;
appData.timeData = new Date(time);

for (i=0; i<2; i++) {
	let mAsk = prompt('Статья затрат (наименование)?');
	let mVal = prompt('Сумма?');
	if( 
		(typeof(mAsk)) === 'string' // Избыточно - prompt возвращает строку
		&& 
		(typeof(mAsk) != null) // null - пользователь нажал "отмена"
		&& 
		(typeof(mVal) != null) // null - пользователь нажал "отмена"
		&&
		mAsk != '' && mVal != '' // Не пустое значение
		&&
		mAsk.length < 50 // Ограничение по длине
	){
		// Динамическое добавление свойства в объект
		appData.expenses[mAsk] = mVal;
	} else {
		i--;
	}
}

appData.moneyPerDay = appData.budget/30;
alert('per Day:' + appData.moneyPerDay);
console.log(appData);
switch(true) { // способ оформить switch для логических значенией в case
	case (appData.moneyPerDay < 100):
		console.log('min');
		break;
	case (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000): 
		console.log('avg');
		break;
	case (appData.moneyPerDay >= 1000):
		console.log('max');
		break;
	default:
		console.log('произошла ошибка:' + appData.moneyPerDay);
		break;
}