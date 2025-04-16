
// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    pages.forEach(page => page.classList.remove('active'));
    navLinks.forEach(nav => nav.classList.remove('active'));
    document.getElementById(target).classList.add('active');
    link.classList.add('active');
  });
});

// Converter functionality using ExchangeRate-API
const form = document.getElementById('converterForm');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const resultDiv = document.getElementById('result');
const swapButton = document.getElementById('swapButton');

swapButton.addEventListener('click', () => {
  const temp = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = temp;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount)) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  resultDiv.textContent = "Converting...";
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[toCurrency];
      if (!rate) {
        resultDiv.textContent = "Conversion rate not available.";
        return;
      }
      const converted = (amount * rate).toFixed(2);
      resultDiv.textContent = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
      
      const historyList = document.getElementById('historyList');
      const li = document.createElement('li');
      li.textContent = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
      historyList.appendChild(li);
      
      const historySummary = document.getElementById('historySummary');
      historySummary.textContent = `Total Conversions: ${historyList.children.length}`;
    })
    .catch(error => {
      resultDiv.textContent = "Error fetching conversion rate.";
    });
});

// Toggle Theme functionality
const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
});

// Notifications toggle
const toggleNotifications = document.getElementById('toggleNotifications');
const notification = document.getElementById('notification');
toggleNotifications.addEventListener('change', () => {
  const message = toggleNotifications.checked ? "Notifications Enabled" : "Notifications Disabled";
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => { notification.classList.remove('show'); }, 2000);
});

// Sound toggle
const toggleSound = document.getElementById('toggleSound');
toggleSound.addEventListener('change', () => {
  const message = toggleSound.checked ? "Sound Enabled" : "Sound Disabled";
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => { notification.classList.remove('show'); }, 2000);
});

// Vibrations toggle
const toggleVibrations = document.getElementById('toggleVibrations');
toggleVibrations.addEventListener('change', () => {
  const message = toggleVibrations.checked ? "Vibrations Enabled" : "Vibrations Disabled";
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => { notification.classList.remove('show'); }, 2000);
});

// Usage Tips toggle
const showUsageTips = document.getElementById('showUsageTips');
showUsageTips.addEventListener('change', () => {
  const message = showUsageTips.checked ? "Usage Tips Shown" : "Usage Tips Hidden";
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => { notification.classList.remove('show'); }, 2000);
});

// Beta Features toggle
const enableBetaFeatures = document.getElementById('enableBetaFeatures');
enableBetaFeatures.addEventListener('change', () => {
  const message = enableBetaFeatures.checked ? "Beta Features Enabled" : "Beta Features Disabled";
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => { notification.classList.remove('show'); }, 2000);
});

// Clear History functionality
const clearHistoryButton = document.getElementById('clearHistory');
clearHistoryButton.addEventListener('click', () => {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = "";
  document.getElementById('historySummary').textContent = "Total Conversions: 0";
});

// Team Member Modal functionality
const teamModal = document.getElementById('teamModal');
const closeModal = document.getElementById('closeModal');
const modalName = document.getElementById('modalName');
const modalInfo = document.getElementById('modalInfo');
const creditCards = document.querySelectorAll('.credit-card');
creditCards.forEach(card => {
  card.addEventListener('click', () => {
    const name = card.getAttribute('data-name');
    const info = card.getAttribute('data-info');
    modalName.innerHTML = name;
    modalInfo.innerHTML = info;
    teamModal.classList.add('active');
  });
});
closeModal.addEventListener('click', () => {
  teamModal.classList.remove('active');
});
