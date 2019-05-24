let money, time;

let appData = {
	budget: 0,
	timeData: '',
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {
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
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget/30).toFixed(2);
		alert('per Day:' + appData.moneyPerDay);
	},
	detectLevel: function () {
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
	},
	checkSavings: function () {
		if(appData.savings) {
			let save = +prompt("Сумма накоплений?"),
					percent = +prompt("Под какой процент?");
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц:" + appData.monthIncome);
		}
	},
	chooseOptExpenses: function () {
		for(i=1; i<4; i++) {
			appData.optionalExpenses[i] = prompt("Статья необязательных расходов");
		}
	},
	chooseIncome: function() {
		let items;
		while( items == "" || items == null){
			items = prompt('что принесет доп.доход? (перечистите чере запятую)', '');
		}
		appData.income = items.split(',');
		appData.income.push(prompt('Может еще что-нибудь?'));
		appData.income.sort();
		let strListItems = 'Способы доп.заработка:\n';
		appData.income.forEach((element, index) => {
			if(index > 0 ) 
				strListItems = strListItems + index + " " + element + "\n";
		});
		alert(strListItems);
	}
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

// ========================
/*
start();
appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();
*/
// ========================
// for(let i in appData) {
// 	console.log(i, ':', appData[i]);
// }
// console.log(appData);
// ========================
let box = document.getElementById('box');
console.log(typeof(box));
