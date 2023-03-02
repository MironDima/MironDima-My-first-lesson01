"use strict";
const title = document.getElementsByTagName('h1')[0];

const startBtn = document.getElementsByClassName('handler_btn')[0];			 //рассчитать
const resetBtn = document.getElementsByClassName('handler_btn')[1];			//сброс
const buttunPlus = document.querySelector('.screen-btn');  					//плюс

const otherItemPercent = document.querySelectorAll('.other-items.percent'); //адаптация в %
const otherItemNumber = document.querySelectorAll('.other-items.number'); 	//адаптация фикс

const rollback = document.querySelector('.rollback');  						//ползунок конструкция
const inputRange = document.querySelector('.rollback  input');  			//сам ползунок
const inputRangeValue = document.querySelector('.rollback .range-value');  	//span

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollBack = document.getElementsByClassName('total-input')[4];

const cms = document.getElementById('cms-open');
const checkBoxCms = document.querySelector('input[type = "checkbox"]');
const blockCmsVariants = document.querySelector('.hidden-cms-variants');
const selectCms = blockCmsVariants.querySelector('.main-controls__select > select')
const  otherInput = blockCmsVariants.querySelector('.main-controls__input')
let screens = document.querySelectorAll('.screen');

let newScreens = document.querySelectorAll('.screen')

const appData = {
	title: '',																	//заголовок
	screens: [],																//массив типа экр и кол-во
	screenPrice: 0,																//стоимость врестки
	screenCount: 0,																//кол - во экранов
	adaptive: true,
	rollback: 0,																//% отката
	ServicePricesPercent: 0,  													//адпатция в %
	ServicePricesNumber: 0,														//адпатция  фиксир
	fullPrice: 0,																//итоговая стоимость
	servicePercentPrice: 0,														//откат посреднику
	servicesPercent: {},  														//обьект для ввода доп услуг в %
	servicesNumber: {},															//обьект для ввода доп услуг фиксир
	isError: false,																//флажок на проверке кнопки старт
	cmsPrice: 0,																//цена сms значение 50

	addTitle: function () {
		document.title = title.textContent;
	},

	init: function () {
		console.log(this);
		this.addTitle();

		startBtn.addEventListener('click', () => {
			this.screens = []
			this.checkStartBtn();
		})

		buttunPlus.addEventListener('click', () => {
			this.addScreenBlock();
		})

		inputRange.addEventListener('input', (event) => {
			inputRangeValue.textContent = event.target.value + '%';
		})

		resetBtn.addEventListener('click', () => {
			this.reset();
		})

		cms.addEventListener('click', () => {
			this.showCms();
		})
	},

	start: function () {
		this.addScreens();
		this.addServices();
		this.addPrices();
		this.showResult();
		this.blockBtn();
	
	},

	showCms: function () {       										//открытие блока cms
		if (cms.checked) {
			blockCmsVariants.style.display = 'flex';
		}
		selectCms.addEventListener('input', () => {
			if (selectCms.selectedIndex == 2) {
				otherInput.style.display = 'block';
			}
			if (selectCms.selectedIndex == 1) {
			this.cmsPrice = +selectCms.options[selectCms.selectedIndex].value
			console.log(this.cmsPrice);
			}
		})
	},

	addScreens: function () {	
										//добавление в массив элементов
		screens = document.querySelectorAll('.screen');
		this.screens = []	
		screens.forEach((screen, index) => { 						 //перебираем методом screens,получаем и select и инпут
			const select = screen.querySelector('select');			//получаем  селекта и заносим в переменную
			const input = screen.querySelector('input');			//получаем  инпут и заносим в переменную
			const selectName = select.options[select.selectedIndex].textContent;
			this.screens.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value,
				count: +input.value
			})
		})
	},

	showResult: function () {										//показ инпутов в блоке итого
		total.value = this.screenPrice;  							// выводим Стоимость верстки
		totalCountOther.value = this.ServicePricesPercent + this.ServicePricesNumber;  //стоимость суммы адаптации
		fullTotalCount.value = this.fullPrice; 						// итоговая стоимость
		totalCount.value = this.screenCount;   						 // выводим кол-во экранов
		totalCountRollBack.value = this.servicePercentPrice;   		//откат посреднику
	},

	addServices: function () {  										//вывод  адаптации на страницу
		otherItemPercent.forEach((item) => { 						 	 //в процентах 
			const check = item.querySelector('input[type="checkbox"]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type="text"]');

			if (check.checked) {
				this.servicesPercent[label.textContent] = +input.value;
			}
		}),
			otherItemNumber.forEach((item) => {  						 //в фиксированной
				const check = item.querySelector('input[type="checkbox"]');
				const label = item.querySelector('label');
				const input = item.querySelector('input[type="text"]');

				if (check.checked) {
					this.servicesNumber[label.textContent] = +input.value;
				}
			})
	},

	addScreenBlock: function () {  	 //создаем клон по нажатию на +
											
		const cloneScreen = screens[0].cloneNode(true);
		screens[screens.length - 1].after(cloneScreen);
		
		},
	
	addPrices: function () {     									//выщитывает стоимоть наших услуг и экранов
		this.rollback = +inputRange.value;   				 		//значение  rollback - значение ползунка
		for (let screen of this.screens) {
			this.screenPrice += screen.price; 						//Стоимость верстки
			this.screenCount += screen.count;  						//кол-во экранов
		};

		for (let key in this.servicesNumber) {  					//доп услуги фиксированная
			this.ServicePricesNumber += this.servicesNumber[key];
		};

		for (let key in this.servicesPercent) {  					//доп услуги проценты
			this.ServicePricesPercent += (this.screenPrice * (this.servicesPercent[key] / 100));
		};

		if (cms.checked) {
			console.log(cms.checked);
			this.fullPrice = (+this.screenPrice + this.ServicePricesPercent + this.ServicePricesNumber) + ((+this.screenPrice + this.ServicePricesPercent + this.ServicePricesNumber)/this.cmsPrice)  // итоговая стоимость
		}
		else{
			this.fullPrice = +this.screenPrice + this.ServicePricesPercent + this.ServicePricesNumber;

		}
		this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));  		// отката посреднику.	
		this.servicePercentPrice.toFixed(2)	
	},

	checkStartBtn: function () {
		    
		screens = document.querySelectorAll('.screen'); 	//проверка кнопки старт
		console.log(this);
		
		screens.forEach((screen, index) => {
			this.screens = []
			const select = screen.querySelector('select');
			const input = screen.querySelector('input');
			const selectName = select.options[select.selectedIndex].textContent;  					 //так как у селекта нет значения!
			
			if (selectName == 'Тип экранов' || input.value == '' || input.value == 0) {
				this.isError = true;
			}
			if (!this.isError) {
				this.start();
			}
		})
	},

	blockBtn: function () {
		screens.forEach((screen) => {
			let select = screen.querySelector('select'); 		//получаю селект
			let input = screen.querySelector('input');			//получаю инпут
			select.disabled = true;								//блок селекта
			input.disabled = true;								//блок инпута
		})
		startBtn.style.display = 'none';
		resetBtn.style.display = 'block';
	},

	unBlockBtn: function () {
		screens.forEach((screen) => {
			let select = screen.querySelector('select'); 		//получаю селект
			let input = screen.querySelector('input');			//получаю инпут
			select.disabled = false;								//разблок селекта
			input.disabled = false;								//разблок инпута
		})

		inputRange.value = 0;
		inputRangeValue.textContent = `${inputRange.value}%`;
		blockCmsVariants.style.display = 'none'
		resetBtn.style.display = 'none';
		startBtn.style.display = 'block';
	},

	deleteElems: function () {
		this.screenPrice = 0;
		this.screenCount = 0,
		this.rollback = 0,
		this.ServicePricesPercent = 0,
		this.ServicePricesNumber = 0,
		this.fullPrice = 0,
		this.servicePercentPrice = 0
		this.servicesPercent = {},
		this.servicesNumber = {},
		this.cmsPrice = 0,
		console.log(this);
	},

	deleteShowResult: function () {
		total.value = 0;
		totalCountOther.value = 0;
		fullTotalCount.value = 0;
		totalCount.value = 0;
		totalCountRollBack.value = 0;
	},

	clearScreen: function () {
		this.screens.length = 0;
	},

	deletChekBox: function () {
		let checkboxes = document.querySelectorAll('.main-controls__checkbox');
		checkboxes.forEach((item) => {
			let check = item.querySelector('input[type="checkbox"]');
			check.checked = false;
		})
	},

	deleteSelectInput: function () {
		screens = document.querySelectorAll('.screen');
		screens.forEach((item) => {
			let select = item.querySelector('select');
			select.value = '';
			let input = item.querySelector('input');
			input.value = '';
		})
	},

	reset: function () {
		this.unBlockBtn();
		this.deleteElems();
		this.deleteShowResult();
		this.clearScreen();
		this.deletChekBox();
		this.deleteSelectInput();
	},
}
appData.init();





