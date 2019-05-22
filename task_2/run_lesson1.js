let money, time;

let appData = {
	budget: 0,
	timeData: '',
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function start() {
	money = +prompt('Budget?', '100'); // + - способ преобразования к числу (NB!!!)
	time = prompt('Input date (YYY-MM-DD)', '2019-10-01');

	while(isNaN(money) || money == "" || money == null){
		money = +prompt('Budget?', '100'); // + - способ преобразования к числу (NB!!!)
	}

	appData.budget = money;
	appData.timeData = new Date(time);
	// appData.budget = parseFloat(money);
}

function chooseExpenses() {
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
}

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget/30).toFixed(2);
	alert('per Day:' + appData.moneyPerDay);
}

function detectLevel() {
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
}

function checkSavings() {
	if(appData.savings) {
		let save = +prompt("Сумма накоплений?"),
				percent = +prompt("Под какой процент?");
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц:" + appData.monthIncome);
	}
}

function chooseOptExpenses() {
	for(i=1; i<4; i++) {
		appData.optionalExpenses[i] = prompt("Статья необязательных расходов");
	}
}

// ========================
start();
chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
chooseOptExpenses();
// ========================

console.log(appData);

