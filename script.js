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

const btn = document.querySelector('.save');
let massive = [];
let checkVariable = false;

class Automobile {
    constructor(mark, model, year, power, accelerate, color, autopilot) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.power = power;
        this.accelerate = accelerate;
        this.color = color;
        this.autopilot = autopilot;
    }

    // consol() {
    //     console.log(this);
    //     massive.push(this)
    //     console.log(massive)
    // }
}

class Electromobile extends Automobile {
    constructor(mark, model, year, power, accelerate, color, autopilot, types, distance, charging) {
        super(mark, model, year, power, accelerate, color, autopilot);
        this.types = types;
        this.distance = distance;
        this.charging = charging;
    }
}

class Dvs extends Automobile {
    constructor(mark, model, year, power, accelerate, color, autopilot, types, capacity, consumption) {
        super(mark, model, year, power, accelerate, color, autopilot);
        this.types = types;
        this.capacity = capacity;
        this.consumption = consumption;
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
        if (isString(inp_mark.value) && isString(inp_model.value) && isNumber(+inp_year.value) && isNumber(+inp_power.value) && isNumber(+inp_accelerate.value) && isString(inp_color.value)) {
            if ((select.value == 1 && isNumber(+inp_powerReserve.value) && isNumber(+inp_chargeTime.value)) || (select.value == 2 && isNumber(+inp_engCapacity.value) && isNumber(+inp_fuelConsumption.value))) {
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
        let auto = new Electromobile(inp_mark.value, inp_model.value, inp_year.value, inp_power.value, inp_accelerate.value, inp_color.value, inp_autopilot.checked, 'Электромобиль', inp_powerReserve.value, inp_chargeTime.value);
        // auto.consol();
        massive.push(auto)
    } else {
        let auto = new Dvs(inp_mark.value, inp_model.value, inp_year.value, inp_power.value, inp_accelerate.value, inp_color.value, inp_autopilot.checked, 'ДВС-ник', inp_engCapacity.value, inp_fuelConsumption.value);
        // auto.consol();
        massive.push(auto)
    }
    // inp_mark.value = '';
    // inp_model.value = '';
    // inp_year.value = '';
    // inp_power.value = '';
    // inp_accelerate.value = '';
    // inp_color.value = '';
    // inp_autopilot.checked = false;
    // select.firstElementChild.selected = 'true';
    // inp_powerReserve.setAttribute('disabled', 'disabled')
    // inp_chargeTime.setAttribute('disabled', 'disabled')
    // inp_engCapacity.setAttribute('disabled', 'disabled')
    // inp_fuelConsumption.setAttribute('disabled', 'disabled')
    // inp_powerReserve.value = ''
    // inp_chargeTime.value = ''
    // inp_engCapacity.value = ''
    // inp_fuelConsumption.value = ''
render();
}

const render = function () {
    table.innerHTML = `<tr>
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

    for (let i = 0; i <= massive.length; i++) {
        try {
            if (massive[i]['types'] == 'Электромобиль') {
                let row = document.createElement('tr');
                row.innerHTML = `
                <td>${massive[i]['mark']}</td>
                <td>${massive[i]['model']}</td>
                <td>${massive[i]['year']}</td>
                <td>${massive[i]['power']}</td>
                <td>${massive[i]['accelerate']}</td>
                <td>${massive[i]['color']}</td>
                <td>${massive[i]['autopilot']}</td>
                <td>${massive[i]['types']}</td>
                <td>${massive[i]['distance']}</td>
                <td>${massive[i]['charging']}</td>
                <td>прочерк</td>
                <td>прочерк</td>
            `;
                table.append(row);
            } else {
                let row = document.createElement('tr');
                row.innerHTML = `
                <td>${massive[i]['mark']}</td>
                <td>${massive[i]['model']}</td>
                <td>${massive[i]['year']}</td>
                <td>${massive[i]['power']}</td>
                <td>${massive[i]['accelerate']}</td>
                <td>${massive[i]['color']}</td>
                <td>${massive[i]['autopilot']}</td>
                <td>${massive[i]['types']}</td>
                <td>прочерк</td>
                <td>прочерк</td>
                <td>${massive[i]['capacity']}</td>
                <td>${massive[i]['consumption']}</td>
            `;
                table.append(row);
            }
        } catch (e) {
            console.error(e)
        }
    }

    localStorage.name = JSON.stringify(massive);
};

btn.addEventListener('mouseover',  () => {
    console.log(checkAllFields())
    if (checkVariable) {
        btn.addEventListener('click', addClass)
    } else {
        btn.removeEventListener('click', addClass);
    }
})

massive = JSON.parse(localStorage.getItem('name'));

if (massive) {
    render();
} else {
    massive = [];
};
//
// localStorage.clear();
