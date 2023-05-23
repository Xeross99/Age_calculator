function saveData() {

    //font css
    let label1 = document.getElementById("1");
    let label2 = document.getElementById("2");
    let label3 = document.getElementById("3");

    //label css
    let dayLook = document.getElementById("day");
    let monthLook = document.getElementById("month");
    let yearLook = document.getElementById("year");

    //user's date
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    //accual date
    let today = new Date();
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear();

    //console test
    console.log(`Input 1: ${day}`);
    console.log(`Input 2: ${month}`);
    console.log(`Input 3: ${year}`);
    console.log(`Aktualny dzień: ${dd}`);
    console.log(`Aktualny miesiac: ${mm}`);
    console.log(`Aktualny rok: ${yyyy}`);

    //Wrong data
    if ((day > 31 || day < 1) || (month > 21 || month < 1) || (year > `${yyyy}` || year < 1)) {
        label1.style.color = "red";
        label2.style.color = "red";
        label3.style.color = "red";
        dayLook.style.borderColor = "red";
        monthLook.style.borderColor = "red";
        yearLook.style.borderColor = "red";

        //replaces numbers after wrong date
        document.getElementById("days").innerHTML = "--";
        document.getElementById("months").innerHTML = "--";
        document.getElementById("years").innerHTML = "--";
    }
    else {
        label1.style.color = "gray";
        label2.style.color = "gray";
        label3.style.color = "gray";
        dayLook.style.borderColor = "gray";
        monthLook.style.borderColor = "gray";
        yearLook.style.borderColor = "gray";

        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];

        if (day > dd) {
            dd = dd + months[mm - 1];
            mm = mm - 1;
        }
        if (month > mm) {
            mm = mm + 12;
            yyyy = yyyy - 1;
        }

        document.getElementById("days").innerHTML = `${dd}` - `${day}`;
        document.getElementById("months").innerHTML = `${mm}` - `${month}`;
        document.getElementById("years").innerHTML = `${yyyy}` - `${year}`;
    }

}