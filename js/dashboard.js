document.addEventListener("DOMContentLoaded", function() {
    // Chart.js: Books Overview
    const ctx = document.getElementById('booksChart').getContext('2d');
    const booksChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Borrowed', 'Available'],
            datasets: [{
                label: 'Books',
                data: [345, 905], // Static data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Books Overview'
                }
            }
        }
    });
});
