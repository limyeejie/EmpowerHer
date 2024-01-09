// include.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and include the header.html content
    fetch('donors-Header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll('script[src="include.js"]').forEach(function (script) {
                script.insertAdjacentHTML('beforebegin', data);
            });
        });
});

//donors-Purchase
function validateQuantity() {
    var quantity = document.getElementById("quantityInput");
    var quantityError = document.getElementById("quantityError");

    if (quantity.value < 1) {
        quantityError.style.visibility = "visible";
        return;
    } else {
        quantityError.style.visibility = "hidden";
        return true;
    }
}

document.getElementById("quantityInput").addEventListener("change", validateQuantity);

// Add a click event listener to the div element
document.getElementById('purchaseButton').addEventListener('click', function(event) {
    //Prevent form submission if validation fails
    if (!validateQuantity()) {
        event.preventDefault();
        return;
    }

    //calculate the total payment for test kits
    var quantity = document.getElementById("quantityInput").value;
    var unitPrice = 11.10; // Assuming the unit price is RM 11.10
    var totalPayment = (quantity * unitPrice).toFixed(2);

    // Open overlay (you may need to implement this part)
    openOverlay();
  
    // Navigate to the "donors-ThankPurchase.html" page
    window.location.href = 'donors-ConfirmOrder.html?totalPayment=' + totalPayment + '&quantity=' + quantity;
});

//donors-Homepage
//do not why put it here it cannot work
/*document.getElementById('post1Btn').addEventListener('click', function(event) {
    // Open overlay (you may need to implement this part)
    openOverlay();

    // Navigate to the "donors-HomePage.html" page
    window.location.href = 'donors-Post1.html';
});*/

// Function to open overlay (you may need to implement this part)
function openOverlay() {
    // Implement the logic to show your overlay
    // For example, you can add a CSS class to display it
    // or use a third-party library for modals/overlays
}

//Posts validation
function validateDonation(event) {
    var selectedAmount = document.getElementsByName("amount");
    var selectedFrequency = document.getElementsByName("paymentFrequency");

    var formValid = false;

    // Perform validation
    for (var i = 0; i < selectedAmount.length; i++) {
      if (selectedAmount[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      document.getElementById("amountError").style.visibility = "visible";
      return false;
    } 

    formValid = false;

    for (var i = 0; i < selectedFrequency.length; i++) {
      if (selectedFrequency[i].checked) {
        formValid = true;
        break;
      }
    }

    if (!formValid) {
      document.getElementById("paymentError").style.visibility = "visible";
      return false;
    }

    window.location.href = 'donors-ThankYouDonate.html';
}