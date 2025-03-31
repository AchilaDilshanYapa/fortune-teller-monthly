document.querySelectorAll('.month-btn').forEach(button => {
    button.addEventListener('click', () => {
        const month = button.dataset.month;
        // Store the selected month in localStorage
        localStorage.setItem('selectedMonth', month);
        // Redirect to result page
        window.location.href = 'result.html';
    });
});