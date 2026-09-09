const REVOLUT_URL = 'https://revolut.me/GabrielePosca';

const form = document.getElementById('signupForm');
const roomType = document.getElementById('roomType');
const shares = document.getElementById('shares');
const payerName = document.getElementById('payerName');
const guestFields = document.getElementById('guestFields');
const summary = document.getElementById('paymentSummary');
const totalAmount = document.getElementById('totalAmount');
const paymentNote = document.getElementById('paymentNote');
const copyNote = document.getElementById('copyNote');
const errorBox = document.getElementById('formError');

function pricePerPerson() {
  const option = roomType.options[roomType.selectedIndex];
  return option?.dataset?.price ? Number(option.dataset.price) : 0;
}

function renderGuestFields() {
  const count = Number(shares.value);
  const previousValues = [...guestFields.querySelectorAll('input')].map(el => el.value);
  guestFields.innerHTML = '';

  for (let i = 2; i <= count; i++) {
    const label = document.createElement('label');
    label.innerHTML = `Nome e cognome persona ${i}<input type="text" class="guest-name" required placeholder="Nome Cognome" value="${previousValues[i - 2] || ''}">`;
    guestFields.appendChild(label);
  }
  updateSummary();
}

function getNames() {
  const names = [payerName.value.trim()];
  guestFields.querySelectorAll('.guest-name').forEach(input => {
    if (input.value.trim()) names.push(input.value.trim());
  });
  return names.filter(Boolean);
}

function updateSummary() {
  const price = pricePerPerson();
  const count = Number(shares.value);
  const room = roomType.value;
  const names = getNames();

  if (!price || !room || !payerName.value.trim()) {
    summary.hidden = true;
    return;
  }

  const total = price * count;
  totalAmount.textContent = `${total} CHF`;
  paymentNote.textContent = `${names.join(' + ')} — Camera ${room}`;
  summary.hidden = false;
}

roomType.addEventListener('change', updateSummary);
shares.addEventListener('change', renderGuestFields);
payerName.addEventListener('input', updateSummary);
guestFields.addEventListener('input', updateSummary);

copyNote.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(paymentNote.textContent);
    copyNote.textContent = 'Copiata';
    setTimeout(() => copyNote.textContent = 'Copia causale', 1400);
  } catch {
    copyNote.textContent = 'Seleziona e copia';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  errorBox.textContent = '';

  const expectedGuests = Number(shares.value) - 1;
  const actualGuests = [...guestFields.querySelectorAll('.guest-name')].filter(el => el.value.trim()).length;
  const price = pricePerPerson();

  if (!payerName.value.trim() || !roomType.value || !price) {
    errorBox.textContent = 'Inserisci nome e sistemazione.';
    return;
  }

  if (actualGuests !== expectedGuests) {
    errorBox.textContent = 'Inserisci il nome di tutte le persone per cui stai pagando.';
    return;
  }

  if (!document.getElementById('termsCheck').checked) {
    errorBox.textContent = 'Per procedere devi accettare Termini e Informativa privacy.';
    return;
  }

  updateSummary();
  window.open(REVOLUT_URL, '_blank', 'noopener,noreferrer');
});

renderGuestFields();
