class Calculator {
    constructor(FoodProporion) {
        this.FoodProporion = FoodProporion
        this.count = 0
        this.path = document.getElementById('forms')
        this.createInputFields()
    }
    createInputFields() {
        this.count += 1;
        let mas = ['name', 'weight', 'type', 'activity'];
        let form = document.createElement('form');
        form.classList.add("pet_form");

        mas.forEach((obj) => {
            let label = document.createElement('label');
            label.textContent = obj.toUpperCase();
            label.classList.add('form_label');

            if (['name', 'weight'].includes(obj)) {
                let input = document.createElement('input');
                input.type = "text";
                input.id = obj + this.count;
                input.classList.add('form_input');

                form.append(label);
                form.append(input);
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

                form.append(label);
                form.append(select);
            }
        });

        this.path.append(form);
    }
}

const calc = new Calculator("sjjs");
add_button = document.getElementById("add_pet")
add_button.addEventListener('click', () => { calc.createInputFields(); })