document.body.style.background = 'lightgray';


function ConvertCase(changeCase) {
    if (changeCase == "upper") {
        document.form1.elements.data1.value = document.form1.elements.data1.value.toUpperCase();

        document.form1.elements.data2.value = document.form1.elements.data2.value.toUpperCase();
    } else {
        document.form1.elements.data1.value = document.form1.elements.data1.value.toLowerCase();

        document.form1.elements.data2.value = document.form1.elements.data2.value.toLowerCase();
    }

}