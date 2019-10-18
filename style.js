document.body.style.background = 'lightgray';


function convertCase(changeCase) {
    if (changeCase == "upper") {
        document.form1.value = document.forms1.value.toUpperCase();

        document.form2.value = document.forms2.value.toUpperCase();
    } else {
        document.form1.value = document.forms1.value.toLowerCase();

        document.form2.value = document.forms2.value.toLowerCase();
    }

}