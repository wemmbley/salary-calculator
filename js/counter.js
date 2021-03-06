class Counter {
    inputJobStart;
    checkboxRemember;

    clickCounter = 0;

    constructor() {
        this.inputJobStart = document.querySelector('#calculator__job-start');
        this.checkboxRemember = document.querySelector('#calculator__remember');

        this.initEvents();

        if(localStorage.getItem('calculator_job_start') !== '') {
            this.inputJobStart.value = localStorage.getItem('calculator_job_start');
            this.checkboxRemember.checked = true;
        }
    }

    initEvents() {
        const divAddRate = document.querySelector('#add-rate');
        divAddRate.addEventListener('click', () => this.clickButtonAddRate());

        this.checkboxRemember.addEventListener('click', () => this.clickCheckboxRemember());
    }

    clickButtonAddRate() {
        if(this.clickCounter === INPUT_ADD_LIMIT) {
            alert('Достигнут лимит!');
            return;
        }

        this.createCalculatorBlock();
        this.clickCounter++;
    }

    clickCheckboxRemember() {
        if(this.checkboxRemember.checked === true)
            localStorage.setItem('calculator_job_start',this.inputJobStart.value);
        else
            localStorage.setItem('calculator_job_start','');
    }

    createCalculatorBlock() {
        const divCalculator = document.querySelector('.calculator__inputs');

        const divCreateCalculator = document.createElement("div");
        divCreateCalculator.classList.add('calculator__inputs-block');

        const inputRate = document.createElement("input");
        inputRate.type = 'text';
        inputRate.name = 'calculator__rate';
        inputRate.id = 'calculator__rate';
        inputRate.placeholder = 'Ставка';
        divCreateCalculator.append(inputRate);

        const inputWorkedDays = document.createElement("input");
        inputWorkedDays.type = 'text';
        inputWorkedDays.name = 'calculator__worked';
        inputWorkedDays.id = 'calculator__worked';
        inputWorkedDays.placeholder = 'Отработано';
        divCreateCalculator.append(inputWorkedDays);

        divCalculator.append(divCreateCalculator);
    }
}