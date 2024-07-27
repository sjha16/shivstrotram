function showShloka() {
  // Hide all shlokas
  const shlokas = document.querySelectorAll('.shloka');
  shlokas.forEach(shloka => shloka.style.display = 'none');

  // Get the selected value
  const select = document.getElementById('shlokaSelect');
  const selectedShloka = select.value;

  // Show the selected shloka
  if (selectedShloka) {
    document.getElementById(selectedShloka).style.display = 'block';
  }
}
