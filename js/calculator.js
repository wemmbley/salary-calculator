class Calculator {
    constructor() {
        const buttonCalculate = document.querySelector('#calculate');
        buttonCalculate.addEventListener('click', () => this.clickButtonCalculate());
    }

    clickButtonCalculate() {
        const nodeRates = document.querySelectorAll('#calculator__rate');
        let rates = [];

        for(let el of nodeRates) {
            if(el.value === '') {
                alert('Обнаружен пустой элемент ставки');
                return;
            }

            rates.push(parseInt(el.value));
        }

        const nodeWorkedDays = document.querySelectorAll('#calculator__worked');
        let workedDays = [];

        for(let el of nodeWorkedDays) {
            if(el.value === '') {
                alert('Обнаружен пустой элемент отработанного дня');
                return;
            }

            workedDays.push(parseInt(el.value));
        }

        // let statistic = {};
        // rates.forEach((key, i) => statistic[key] = workedDays[i]);
        // statistic['daysWorked'] = workedDays.reduce((a, b) => a + b, 0);

        let allWorkedDays = workedDays.reduce((a, b) => a + b, 0);
        let sum = 0;

        for(let i=0; i<workedDays.length; i++) {
            sum += rates[i]/allWorkedDays*workedDays[i];
        }

        sum = Math.round(sum);

        alert(sum + '$');
    }
}