try {
  for (let form of document.forms) {
    if (form) form.addEventListener("submit", () => {
      fbq('track', 'Lead');
      console.log("facebook pixel tracking...");
    });
  }

  const buttonForPayment = document.querySelectorAll(".formats__slider formats-plan button");
  if (buttonForPayment) {
    buttonForPayment.forEach(button => button.addEventListener("click", () => {
      fbq('track', 'Lead');
      console.log("facebook pixel tracking...");
    }));
  }

  const telLink = document.querySelectorAll('a[href^="tel:"]');
  if (telLink) {
    telLink.forEach(tel => tel.addEventListener("click", () => {
      fbq('track', 'Contact');
      console.log("facebook pixel tracking...");
    }));
  }
} catch (error) {
  console.log("fb pixel catch")
}