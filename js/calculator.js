class Calculator {
    constructor() {
        const buttonCalculate = document.querySelector('#calculate');
        buttonCalculate.addEventListener('click', () => this.clickButtonCalculate());
    }

    clickButtonCalculate() {
        alert( '$' + this.calculateSalary() );
    }

    calculateRates() {
        const nodeRates = document.querySelectorAll('#calculator__rate');
        let rates = [];

        for(let el of nodeRates) {
            if(el.value === '') {
                alert('Обнаружен пустой элемент ставки');
                return;
            }

            rates.push(parseInt(el.value));
        }

        return rates;
    }

    calculateWorkedDays() {
        const nodeWorkedDays = document.querySelectorAll('#calculator__worked');
        let workedDays = [];

        for(let el of nodeWorkedDays) {
            if(el.value === '') {
                alert('Обнаружен пустой элемент отработанного дня');
                return;
            }

            workedDays.push(parseInt(el.value));
        }

        return workedDays;
    }

    calculateSalary(round = true) {
        const workedDays = this.calculateWorkedDays(),
            rates = this.calculateRates(),
            allWorkedDays = workedDays.reduce((a, b) => a + b, 0);

        let sum = 0;

        for(let i=0; i<workedDays.length; i++) {
            sum += rates[i] / allWorkedDays * workedDays[i];
        }

        if(round)
            sum = Math.round(sum);

        return sum;
    }
}