document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ticketForm');
  const departureInput = document.getElementById('departure');
  const destinationInput = document.getElementById('destination');
  const passengerCountInput = document.getElementById('passenger-count');
  const passengerDetailsDiv = document.getElementById('passenger-details');
  const amountInput = document.getElementById('amount');
  const durationInput = document.getElementById('duration');

  // Define city pairs with prices and travel times
  const cityData = {
    "Mumbai-Delhi": { price: 1000, duration: 12 },
    "Mumbai-Bangalore": { price: 800, duration: 14 },
    "Delhi-Chennai": { price: 1500, duration: 18 },
    "Kolkata-Bangalore": { price: 1200, duration: 15 },
    // Add more city pairs as needed
  };

  // Function to update price and duration based on city pair
  function updatePriceAndDuration() {
    const departure = departureInput.value;
    const destination = destinationInput.value;
    const cityKey = `${departure}-${destination}`;

    if (cityData[cityKey]) {
      const price = cityData[cityKey].price;
      const duration = cityData[cityKey].duration;
      const passengerCount = parseInt(passengerCountInput.value, 10);

      // Set total amount based on passenger count
      amountInput.value = price * passengerCount;
      durationInput.value = duration;
    } else {
      amountInput.value = 0;
      durationInput.value = 0;
    }
  }

  // Generate passenger detail fields based on count
  function updatePassengerFields() {
    passengerDetailsDiv.innerHTML = ''; // Clear previous fields

    const passengerCount = parseInt(passengerCountInput.value, 10);
    for (let i = 1; i <= passengerCount; i++) {
      const passengerDiv = document.createElement('div');
      passengerDiv.classList.add('passenger');

      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.placeholder = `Passenger ${i} Name`;
      nameInput.classList.add('passenger-name');
      nameInput.required = true;

      const ageInput = document.createElement('input');
      ageInput.type = 'number';
      ageInput.placeholder = 'Age';
      ageInput.classList.add('passenger-age');
      ageInput.min = 0;
      ageInput.required = true;

      const mobileInput = document.createElement('input');
      mobileInput.type = 'tel';
      mobileInput.placeholder = 'Mobile Number';
      mobileInput.classList.add('passenger-mobile');
      mobileInput.required = true;

      passengerDiv.appendChild(nameInput);
      passengerDiv.appendChild(ageInput);
      passengerDiv.appendChild(mobileInput);
      passengerDetailsDiv.appendChild(passengerDiv);
    }
  }

  // Event listeners to update amount, duration, and passenger fields
  departureInput.addEventListener('change', updatePriceAndDuration);
  destinationInput.addEventListener('change', updatePriceAndDuration);
  passengerCountInput.addEventListener('change', () => {
    updatePassengerFields();
    updatePriceAndDuration();
  });

  // Initial call to populate passenger fields
  updatePassengerFields();

  // Form submission event
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    const departure = departureInput.value;
    const destination = destinationInput.value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const passengerCount = passengerCountInput.value;
    const amount = amountInput.value;
    const duration = durationInput.value;

    let passengerInfo = "";
    document.querySelectorAll('.passenger').forEach((passenger, index) => {
      const name = passenger.querySelector('.passenger-name').value;
      const age = passenger.querySelector('.passenger-age').value;
      const mobile = passenger.querySelector('.passenger-mobile').value;
      passengerInfo += `Passenger ${index + 1}: ${name}, Age: ${age}, Mobile: ${mobile}\n`;
    });

    alert(`Booking Details:
           \nFrom: ${departure}
           \nTo: ${destination}
           \nDate: ${date}
           \nTime: ${time}
           \nPassengers: ${passengerCount}
           \nAmount: ${amount} INR
           \nEstimated Duration: ${duration} hrs
           \n\n${passengerInfo}`);
  });
});
