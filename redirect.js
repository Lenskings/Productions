<script>
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform form validation here if needed

    // Simulate form submission and redirect to thank you page
    setTimeout(function() {
        window.location.href = 'thankyou.html';
    }, 1000); // Simulate delay for form submission
});
</script>
