class Calculator {
    constructor(activityProportion, caloricContent) {
        this.activityProportion = activityProportion
        this.caloricContent = caloricContent;
        this.count = 0
        this.path = document.getElementById('forms')
        this.createInputFields()
    }
    createInputFields() {
        this.count += 1;
        let mas = ['name', 'weight', 'type', 'activity'];
        let form = document.createElement('form')
        form.classList.add('pet_form')
        mas.forEach((obj) => {
            let lable = document.createElement('label')
            if (obj == 'weight') {
                lable.textContent = obj + " (kg)";
            } else {
                lable.textContent = obj;
            }
            lable.classList.add('form_lable')
            form.append(lable)
            if (obj == 'name' || obj == 'weight') {
                let input = document.createElement('input');
                input.type = "text";
                input.id = obj + this.count;
                input.classList.add('form_input');
                form.append(input)
            } else {
                let select = document.createElement('select');
                select.id = obj + this.count;
                select.classList.add('form_input')
                if (obj === 'type') {
                    ['Dog', 'Cat', 'Parrot', 'Hamster'].forEach(val => {
                        let option = document.createElement('option');
                        option.value = val.toLowerCase();
                        option.textContent = val;
                        select.append(option);
                    });
                }
                if (obj === 'activity') {
                    ['Low', 'Medium', 'High'].forEach(val => {
                        let option = document.createElement('option');
                        option.value = val.toLowerCase();
                        option.textContent = val;
                        select.append(option);
                    });
                }
                form.append(select)
            }
        })
        this.path.append(form)
    }

    resetForm() {
        this.count = 0;
        this.path.innerHTML = "";
        this.createInputFields()
    }

    calculateTotal() {
        if (!this.checkInput()) {
            return;
        }
        document.getElementById("modal_list").classList.remove("close_window")
        let totals = {
            cat: { wet: 0, dry: 0, path: document.getElementById('cats') },
            dog: { wet: 0, dry: 0, path: document.getElementById('dogs') },
            parrot: { wet: 0, dry: 0, path: document.getElementById('parrots') },
            hamster: { wet: 0, dry: 0, path: document.getElementById('hamsters') }
        };
        Object.values(totals).forEach(t => t.path.innerHTML = "");

        for (let i = 1; i <= this.count; i++) {
            let pet_name = document.getElementById('type' + i).value;
            let mas = this.calculatePet(i);

            if (totals[pet_name]) {
                totals[pet_name].wet += mas[0];
                totals[pet_name].dry += mas[1];
                totals[pet_name].path.append(mas[2]);
            }
        }
        document.getElementById('total_result_cats').innerHTML = `
    <h3 class="animal_pet_text">Total wet food per a day: ${totals.cat.wet.toFixed(2)}g</h3>
    <h3 class="animal_pet_text">Total dry food per a day: ${totals.cat.dry.toFixed(2)}g</h3>`;
        document.getElementById('total_result_dogs').innerHTML = `
    <h3 class="animal_pet_text">Total wet food per a day: ${totals.dog.wet.toFixed(2)}g</h3>
    <h3 class="animal_pet_text">Total dry food per a day: ${totals.dog.dry.toFixed(2)}g</h3>`;

        document.getElementById('total_result_parrots').innerHTML = `
    <h3 class="animal_pet_text">Total wet food per a day: ${totals.parrot.wet.toFixed(2)}g</h3>
    <h3 class="animal_pet_text">Total dry food per a day: ${totals.parrot.dry.toFixed(2)}g</h3>`;

        document.getElementById('total_result_hamsters').innerHTML = `
    <h3 class="animal_pet_text">Total wet food per a day: ${totals.hamster.wet.toFixed(2)}g</h3>
    <h3 class="animal_pet_text">Total dry food per a day: ${totals.hamster.dry.toFixed(2)}g</h3>`;
    }

    calculatePet(i) {
        let getWeight = document.getElementById('weight' + i).value;
        let RER = 70 * (getWeight ** (0.75));
        let DER = RER * this.getProportion(i)
        let wet = DER / this.caloricContent['Wet_food']
        let dry = DER / this.caloricContent['Dry_food']
        let pet = this.showPet(i, wet, dry)
        return [wet, dry, pet]
    }

    showPet(i, wet, dry) {
        let pet = document.createElement('div');
        pet.classList.add('animal_pet');

        let name = document.createElement('h3');
        name.textContent = 'Name: ' + document.getElementById('name' + i).value;

        let wet_food = document.createElement('h3');
        wet_food.textContent = 'Wet food per day: ' + wet.toFixed(2) + 'g';

        let dry_food = document.createElement('h3');
        dry_food.textContent = 'Dry food per day: ' + dry.toFixed(2) + 'g';

        pet.append(name, wet_food, dry_food);
        return pet;
    }

    getProportion(i) {
        let getType = document.getElementById('type' + i).value;
        let getActivity = document.getElementById('activity' + i).value;
        return this.activityProportion[getType][getActivity]
    }

    checkInput() {
        for (let i = 1; i <= this.count; i++) {
            let name = document.getElementById('name' + i).value;
            let weight = parseFloat(document.getElementById('weight' + i).value);

            if (name.trim() === "") {
                alert("Name " + i + " can't be empty");
                return false;
            }

            if (isNaN(weight) || weight < 0.1) {
                alert("Weight " + i + " can't be less than 100 grams");
                return false;
            }
        }
        return true;
    }
}


const activityProportion = {
    'cat': { 'low': 1.2, 'medium': 1.4, 'high': 1.6 },
    'dog': { 'low': 1.2, 'medium': 1.6, 'high': 2.25 },
    'parrot': { 'low': 1.3, 'medium': 1.6, 'high': 2 },
    'hamster': { 'low': 1.1, 'medium': 1.3, 'high': 1.5 }
}

const caloricContent = {
    'Dry_food': 4,
    'Wet_food': 0.85
}

const calc = new Calculator(activityProportion, caloricContent);
add_button = document.getElementById("add_pet")
add_button.addEventListener('click', () => { calc.createInputFields(); })
reset_button = document.getElementById('resetForm')
reset_button.addEventListener('click', () => { calc.resetForm(); })
calculate_button = document.getElementById('calculate_button')
calculate_button.addEventListener('click', () => {
    console.log('click');
    calc.calculateTotal()
})