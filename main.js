function updateCake() {
    // The array of objects representing all the different parts of the
    // pie chart.
    let cake_options = new Array();

    // All divs in the container
    const all_option_divs = div_options.querySelectorAll("div.option");

    all_option_divs.forEach(div => {
        if (div.id !== "sample-option") {
            let option = new Object();
            
            // Title
            const input_text = div.querySelector("input.option-title");
            option.title = input_text.value;

            // Value
            const input_value = div.querySelector("input.option-value");
            const num = Number(input_value.value);
            option.value = (num) ? num : 0;

            // Color
            const select_color = div.querySelector("select");
            option.color = select_color.value;
            
            cake_options.push(option);
        }
    });

    // Temp
    cake.innerText = JSON.stringify(cake_options, null, 2);
}

function newOption() {
    const new_option = div_sample_option.cloneNode(true);
    
    // Setting defaults
    new_option.removeAttribute("hidden");
    new_option.removeAttribute("id");

    // Delete Button
    const button_delete = new_option.querySelector("input.option-delete");
    button_delete.addEventListener("click", () => {
        // Removing it from the list
        new_option.setAttribute("style", "opacity:0;max-height:0");
        setTimeout(() => {
            div_options.removeChild(new_option)
        }, 300);
    })

    button_add.after(new_option);
}


// Declaring globals

const cake = document.querySelector("#cake");
const button_add = document.querySelector("input.option-add");

const div_options = document.querySelector("div.options-con");
const div_sample_option = document.querySelector("div#sample-option");


// Input events
div_options.addEventListener("click", updateCake);
button_add.addEventListener("click", newOption);