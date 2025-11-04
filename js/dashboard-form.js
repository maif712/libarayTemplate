document.addEventListener('DOMContentLoaded', () => {
    const coverImageInput = document.getElementById('cover-image');
    const imagePreview = document.getElementById('image-preview');

    if (coverImageInput && imagePreview) {
        coverImageInput.addEventListener('change', () => {
            const file = coverImageInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
