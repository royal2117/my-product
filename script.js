let price = 100;
let qtyInput = document.getElementById("qty");
let totalText = document.getElementById("total");
let instaBtn = document.getElementById("instaBtn");

function updateTotal() {
  let qty = qtyInput.value;
  let total = qty * price;
  totalText.innerText = total;

  let message = `Hi, I have paid ₹${total} for ${qty} quantity. Here is my payment screenshot.`;
  instaBtn.href = `https://instagram.com/your_instagram_username`;
}

qtyInput.addEventListener("input", updateTotal);
updateTotal();