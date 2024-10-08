const form = document.getElementById('donationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const foodType = document.getElementById('foodType').value;
    const quantity = document.getElementById('quantity').value;

    // Simulate storing data
    console.log(`Donation by: ${name}, Food: ${foodType}, Quantity: ${quantity} KG`);

    alert("Thank you for your donation!");
});
