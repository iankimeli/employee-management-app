
function submitForm() {
  const firstname = document.getElementById('firstname')?.value.trim();
  const lastname  = document.getElementById('lastname')?.value.trim();
  const email     = document.getElementById('email')?.value.trim();
  const phone     = document.getElementById('phone')?.value.trim();
  const dept      = document.getElementById('department')?.value;
  const position  = document.getElementById('position')?.value;

  if (!firstname || !lastname || !email || !phone || !dept || !position) {
    alert('⚠️ Please fill in all required fields before saving.');
    return;
  }

  showToast();
  clearForm();
}


function clearForm() {
  const inputs = document.querySelectorAll('input:not([type="radio"]), select');
  inputs.forEach(i => i.value = '');
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(r => r.checked = false);
}


function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}


function filterTable() {
  const input  = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const rows   = document.querySelectorAll('#empTable tbody tr');

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? '' : 'none';
  });
}


function showDetails(name, position, dept, email, phone) {
  document.getElementById('modalName').textContent     = name;
  document.getElementById('modalPosition').textContent = position;
  document.getElementById('modalDept').textContent     = dept;
  document.getElementById('modalEmail').textContent    = email;
  document.getElementById('modalPhone').textContent    = phone;

  const initials = name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('modalAvatar').textContent   = initials;

  document.getElementById('detailsModal').classList.add('open');
}


function closeModal() {
  document.getElementById('detailsModal')?.classList.remove('open');
}


function editRecord(name) {
  alert(`✏️ Edit functionality:\nYou are editing the record for "${name}".\n\nIn a full backend system, this would open a pre-filled form.`);
}


function deleteRecord(name) {
  const confirmed = confirm(`Are you sure you want to delete the record for "${name}"?\n\nThis action cannot be undone.`);
  if (confirmed) {
    alert(`🗑️ Record for "${name}" has been deleted (visual placeholder).`);
  }
}


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
