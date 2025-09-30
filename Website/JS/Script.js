//Set up total calculator (The IIE, 2025)
//Wait until DOM (website structure) has fully loaded before running script (The IIE, 2025)
document.addEventListener("DOMContentLoaded", () => {
    //Set const (The IIE, 2025)
    //Get form element that handles courses feee selection (The IIE, 2025)
    const form = document.getElementById("feesForm");
    //Select all checkboxes inside the form (each represents a course fee option) (The IIE, 2025)
    const checkboxes = form.querySelectorAll("input[type=checkbox]");
    //Get the element where the total fee will be displayed (The IIE, 2025)
    const totalDisplay = document.getElementById("total");
    
    //Add function to calculate and update the total fee will be displayed (The IIE, 2025)
    function updateTotal() {
        //Start total at 0 (The IIE, 2025)
        let total = 0; 

        //Loop through ech checkbox (The IIE, 2025)
        checkboxes.forEach(cb => {
            //if the checkbox is checked, add its value to the total (The IIE, 2025)
            if (cb.checked) {
                total += parseInt(cb.value);
            }
        });
        //Update the "Total" display with the new calculated amount (The IIE, 2025)
        totalDisplay.textContent = "Total: R" + total;
    }
    //Attach the updateTotal function to the "change" event of each checkbox (The IIE, 2025)
    checkboxes.forEach(cb => cb.addEventListener("change", updateTotal));
});

function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

/*
Referencing:
- The IIE. 2025. Web Development [WEDE5020 Module Manual]. The Independent Institute of Education: Unpublished.
*/