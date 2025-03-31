const fortunes = {
    January: "A surprising journey will lead to an amazing discovery this year!",
    February: "Your creative talents will bring unexpected success in the coming months.",
    March: "A long-lost friend will reconnect with exciting news!",
    April: "Your determination will help you achieve a major life goal soon.",
    May: "An unexpected opportunity will open new doors for your career.",
    June: "A hidden talent will emerge and bring positive changes to your life.",
    July: "Adventure awaits! Travel will bring fortune and new friendships.",
    August: "Your leadership skills will shine and bring recognition.",
    September: "A wise investment will lead to financial prosperity.",
    October: "Your kindness will be rewarded with wonderful surprises.",
    November: "A new hobby will turn into a profitable passion.",
    December: "Success and happiness will follow your bold decisions!"
};

window.addEventListener('DOMContentLoaded', () => {
    const selectedMonth = localStorage.getItem('selectedMonth');
    const fortuneResult = document.getElementById('fortuneResult');
    
    if (selectedMonth && fortunes[selectedMonth]) {
        fortuneResult.innerHTML = `
            <h2>For ${selectedMonth} born...</h2>
            <p>🌟 ${fortunes[selectedMonth]} 🌟</p>
        `;
    } else {
        fortuneResult.innerHTML = '<p>No fortune found. Please try again.</p>';
    }
});