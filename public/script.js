document
    .getElementById('add-task-form')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Ambil referensi ke elemen input
        const taskInput = document.getElementById('task-input');

        // Kirim form menggunakan AJAX (jika diinginkan) atau secara manual
        const formData = new FormData(this);

        fetch('/add-task', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json()) // Sesuaikan dengan format response dari server
            .then((data) => {
                // Lakukan sesuatu dengan data jika perlu

                // Fokus kembali ke elemen input
                taskInput.focus();

                // Kosongkan input setelah submit jika diinginkan
                taskInput.value = '';
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
