function initiatePayment(amount) {
    alert("Initiating payment for amount: $" + amount);
    
    fetch("/create-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: amount })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Order created successfully:", data);
        alert("Order setup ready! Processing backend gateway...");
    })
    .catch(error => {
        console.error("Error connecting to backend:", error);
        alert("Checkout simulated! Backend server setup needed next.");
    });
}