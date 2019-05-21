let appData = {
	budget: 0,
	timeData: '',
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};
let money = prompt('Budget?', '100');
let time = prompt('Input date (YYY-MM-DD)', '2019-10-01');
let mAsk = prompt('Статья затрат (наименование)?');
let mVal = prompt('Сумма (проект)?');

appData.budget = parseFloat(money);
appData.timeData = new Date(time);

// Динамическое добавление свойства в объект
appData.expenses[mAsk] = mVal;
alert('per Day:' + appData.budget/30);
console.log(appData);
