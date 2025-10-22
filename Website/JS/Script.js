
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.course-checkbox');
    const totalDisplay = document.getElementById('total-summary');
    const subtotalDisplay = document.getElementById('subtotal');
    const discountDisplay = document.getElementById('discount');
    const courseList = document.getElementById('course-list');
    const selectAll6MonthBtn = document.getElementById('selectAll6MonthBtn');
    const selectAll6WeekBtn = document.getElementById('selectAll6WeekBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const form = document.getElementById('feesForm');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Function to calculate and update summary
    function updateSummary() {
        let subtotal = 0;
        let selectedCount = 0;
        const selectedCourses = [];

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                subtotal += parseInt(checkbox.value);
                selectedCount++;
                selectedCourses.push(checkbox.getAttribute('data-course'));
            }
        });

        let discountPercent = 0;
        if (selectedCount === 2) {
            discountPercent = 5;
        } else if (selectedCount === 3) {
            discountPercent = 10;
        } else if (selectedCount > 3) {
            discountPercent = 15;
        }

        const discountAmount = subtotal * (discountPercent / 100);
        const discountedTotal = subtotal - discountAmount;

        // Update displays
        subtotalDisplay.textContent = `Subtotal: R${subtotal.toFixed(2)}`;
        discountDisplay.textContent = `Discount: R${discountAmount.toFixed(2)} (${discountPercent}%)`;
        totalDisplay.innerHTML = `<strong>Total: R${discountedTotal.toFixed(2)}</strong>`;

        // Update course list
        courseList.innerHTML = '';
        if (selectedCourses.length > 0) {
            selectedCourses.forEach(course => {
                const li = document.createElement('li');
                li.textContent = course;
                courseList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'No courses selected';
            courseList.appendChild(li);
        }
    }

    // Add event listeners to checkboxes for real-time updates
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSummary);
    });

    // Select All 6-Month Courses button
    selectAll6MonthBtn.addEventListener('click', function() {
        document.querySelectorAll('.course-checkbox[data-type="6month"]').forEach(checkbox => {
            checkbox.checked = true;
        });
        updateSummary();
    });

    // Select All 6-Week Courses button
    selectAll6WeekBtn.addEventListener('click', function() {
        document.querySelectorAll('.course-checkbox[data-type="6week"]').forEach(checkbox => {
            checkbox.checked = true;
        });
        updateSummary();
    });

    // Clear All button
    clearAllBtn.addEventListener('click', function() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        updateSummary();
    });

    // Form submission (from checkout button in summary)
    checkoutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const totalText = totalDisplay.textContent;
        alert(`Form submitted! ${totalText}. (In a real app, this would process payment.)`);
        // Add your actual submission logic here, e.g., send to server
    });
});

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

