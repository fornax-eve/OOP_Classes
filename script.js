'use script';
const inp_mark = document.querySelector('.inp_mark');
const inp_model = document.querySelector('.inp_model');
const inp_year = document.querySelector('.inp_year');
const inp_power = document.querySelector('.inp_power');
const inp_accelerate = document.querySelector('.inp_accelerate');
const inp_color = document.querySelector('.inp_color');
const inp_autopilot = document.querySelector('.inp_autopilot');
const inp_powerReserve = document.querySelector('.inp_powerReserve');
const inp_chargeTime = document.querySelector('.inp_chargeTime');
const inp_engCapacity = document.querySelector('.inp_engCapacity');
const inp_fuelConsumption = document.querySelector('.inp_fuelConsumption');
const formClass = document.querySelector('.formClass');
const select = document.querySelector('[name="view"]')
const table = document.querySelector('table')
const allInputs = document.querySelectorAll('input')

const btn = document.querySelector('.save');
let massive = [];
let checkVariable = false;

class Automobile {
    constructor(mark, model, year, power, accelerate, color, autopilot, types) {
        this._mark = mark;
        this._model = model;
        this._year = year;
        this._power = power;
        this._accelerate = accelerate;
        this._color = color;
        this._autopilot = autopilot;
        this._types = types;
    }

    remove(arr, ind) {
        arr.splice([ind - 1], 1)
    }

    get mark() {
        return this._mark
    }

    get model() {
        return this._model
    }

    get year() {
        return this._year
    }

    get power() {
        return this._power
    }

    get accelerate() {
        return this._accelerate
    }

    get color() {
        return this._color
    }

    get autopilot() {
        return this._autopilot
    }

    set mark(str) {
        this._mark = str
    }

    set model(str) {
        this._model = str
    }

    set year(str) {
        this._year = str
    }

    set power(str) {
        this._power = str
    }

    set accelerate(str) {
        this._accelerate = str
    }

    set color(str) {
        this._color = str
    }

    set autopilot(str) {
        if (str == true) {
            this._autopilot = 'присутствует'
        } else {
            this._autopilot = 'отсутствует'
        }
    }

    get types() {
        return this._types
    }

    set types(str) {
        if (select.value == 1) {
            this._types = 'Электромобиль'
        } else {
            this._types = 'ДВС-ник'
        }
    }
}

class Electromobile extends Automobile {
    constructor(mark, model, year, power, accelerate, color, autopilot, types, distance, charging) {
        super(mark, model, year, power, accelerate, color, autopilot, types);
        this._distance = distance;
        this._charging = charging;
    }

    get distance() {
        return this._distance
    }

    set distance(str) {
        this._distance = str
    }

    get charging() {
        return this._charging
    }

    set charging(str) {
        this._charging = str
    }
}

class Dvs extends Automobile {
    constructor(mark, model, year, power, accelerate, color, autopilot, types, capacity, consumption) {
        super(mark, model, year, power, accelerate, color, autopilot, types);
        this._capacity = capacity;
        this._consumption = consumption;
    }

    get capacity() {
        return this._capacity
    }

    set capacity(str) {
        this._capacity = str
    }

    get consumption() {
        return this._consumption
    }

    set consumption(str) {
        this._consumption = str
    }
}

formClass.addEventListener('submit', (e) => {
    e.preventDefault();
})

select.addEventListener('change', (e) => {
    if (select.value == 0) {
        inp_powerReserve.setAttribute('disabled', 'disabled')
        inp_chargeTime.setAttribute('disabled', 'disabled')
        inp_engCapacity.setAttribute('disabled', 'disabled')
        inp_fuelConsumption.setAttribute('disabled', 'disabled')
        inp_powerReserve.value = ''
        inp_chargeTime.value = ''
        inp_engCapacity.value = ''
        inp_fuelConsumption.value = ''
    } else if (select.value == 1) {
        inp_powerReserve.removeAttribute('disabled')
        inp_chargeTime.removeAttribute('disabled')
        inp_engCapacity.setAttribute('disabled', 'disabled')
        inp_fuelConsumption.setAttribute('disabled', 'disabled')
        inp_engCapacity.value = ''
        inp_fuelConsumption.value = ''
    } else if (select.value == 2) {
        inp_engCapacity.removeAttribute('disabled')
        inp_fuelConsumption.removeAttribute('disabled')
        inp_powerReserve.setAttribute('disabled', 'disabled')
        inp_chargeTime.setAttribute('disabled', 'disabled')
        inp_powerReserve.value = ''
        inp_chargeTime.value = ''
    }
})

function isNumber(num) {
    if (num) {
        if (!isNaN(parseFloat(num) && isFinite(num)) && (num ^ 0) === num) {
            return true;
        }
    }
    return false;
}

function isString(str) {

    let pattern = /^[\s]+$/
    if (isNumber(str)) {
        return false
    } else if (pattern.test(str)) {
        alert('Сами пробелы не подходят');
        return false;
    } else if (str) {
        return true
    } else {
        return false
    }
}

function checkAllFields() {
    if (select.value != 0) {
        if ( (/^[а-яА-Яa-zA-Z\-\s]+$/.test(inp_mark.value)) && (/^[а-яА-Я\w\.\s\-]+$/.test(inp_model.value)) && (/^[\d]+$/.test(inp_year.value)) && (/^[\d]+$/.test(inp_power.value)) && (/^[\d.,:]+$/.test(inp_accelerate.value)) && (/^[а-яА-Яa-zA-Z\-]+$/.test(inp_color.value))) {
            if ((select.value == 1 && (/^[\d.,:]+$/.test(inp_powerReserve.value)) && (/^[\d.,:]+$/.test(inp_chargeTime.value)) || (select.value == 2 && (/^[\d.,:]+$/.test(inp_engCapacity.value)) && (/^[\d.,:]+$/.test(inp_fuelConsumption.value))))) {
                checkVariable = true;
                return checkVariable;
            }
        }
    }
    checkVariable = false;
    return checkVariable;
}

function addClass() {

    if (select.value == 1) {
        let auto = new Electromobile();
        auto.mark = inp_mark.value;
        auto.model = inp_model.value;
        auto.year = inp_year.value;
        auto.power = inp_power.value;
        auto.accelerate = inp_accelerate.value;
        auto.color = inp_color.value;
        auto.autopilot = inp_autopilot.checked;
        auto.types = select.value;
        auto.distance = inp_powerReserve.value;
        auto.charging = inp_chargeTime.value;
        massive.push(auto)
        allInputs.forEach(item => item.value = '')
    } else {
        let auto = new Dvs();
        auto.mark = inp_mark.value;
        auto.model = inp_model.value;
        auto.year = inp_year.value;
        auto.power = inp_power.value;
        auto.accelerate = inp_accelerate.value;
        auto.color = inp_color.value;
        auto.autopilot = inp_autopilot.checked;
        auto.types = select.value;
        auto.capacity = inp_engCapacity.value;
        auto.consumption = inp_fuelConsumption.value;
        massive.push(auto)
        allInputs.forEach(item => item.value = '')
    }
    render();
}

const render = function () {
    table.innerHTML = `
<caption>Избранные модели</caption>
<tr>
                <th>Марка</th>
                <th>Модель</th>
                <th>Год выпуска</th>
                <th>Мощность</th>
                <th>Разгон</th>
                <th>Цвет</th>
                <th>Автопилот</th>
                <th>Тип</th>
                <th>Запас Хода</th>
                <th>Зарядка</th>
                <th>Объём</th>
                <th>Расход</th>
            </tr>`;
    localStorage.clear();

    for (let i = 0; i < massive.length; i++) {
        try {
            if (massive[i]['_types'] === 'Электромобиль') {
                // console.log(massive[i])
                let row = document.createElement('tr');
                row.innerHTML = `
                <td>${massive[i]['_mark']}</td>
                <td>${massive[i]['_model']}</td>
                <td>${massive[i]['_year']}</td>
                <td>${massive[i]['_power']}</td>
                <td>${massive[i]['_accelerate']}</td>
                <td>${massive[i]['_color']}</td>
                <td>${massive[i]['_autopilot']}</td>
                <td>${massive[i]['_types']}</td>
                <td>${massive[i]['_distance']}</td>
                <td>${massive[i]['_charging']}</td>
                <td>прочерк</td>
                <td>прочерк</td>
                <td><button class = "btn"; style="border: 0; color: red;">Удалить</button></td>
            `;
                table.append(row);
            } else {
                let row = document.createElement('tr');
                row.innerHTML = `
                <td>${massive[i]['_mark']}</td>
                <td>${massive[i]['_model']}</td>
                <td>${massive[i]['_year']}</td>
                <td>${massive[i]['_power']}</td>
                <td>${massive[i]['_accelerate']}</td>
                <td>${massive[i]['_color']}</td>
                <td>${massive[i]['_autopilot']}</td>
                <td>${massive[i]['_types']}</td>
                <td>прочерк</td>
                <td>прочерк</td>
                <td>${massive[i]['_capacity']}</td>
                <td>${massive[i]['_consumption']}</td>
                 <td><button class = "btn"; style="border: 0; color: red;">Удалить</button></td>
            `;
                table.append(row);
            }
        } catch (e) {
            console.error(e)
        }
    }

    localStorage.name = JSON.stringify(massive);
    // console.log(localStorage.name);
};

table.addEventListener('click', (e) => {
    if (e.target.closest('button')) {
        let rowIndex = e.target.parentElement.parentElement.rowIndex;
        let auto = new Automobile()
        auto.remove(massive, rowIndex)
        render()
    }
})

btn.addEventListener('mouseover', () => {
    console.log(checkAllFields())
    if (checkVariable) {
        btn.addEventListener('click', addClass)
    } else {
        btn.removeEventListener('click', addClass);
    }
})

massive = JSON.parse(localStorage.getItem('name'));

if (massive.length > 0) {
    render();
} else {
    massive = [];
}

// localStorage.clear();
