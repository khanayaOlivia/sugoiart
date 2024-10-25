document.getElementById('contact-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object to send the form data
    const formData = new FormData(this);

    // Send the form data to Formspree
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        const responseMessage = document.getElementById('response-message');
        if (response.ok) {
            // Show success message
            responseMessage.style.display = 'block';
            responseMessage.innerText = "Message sent to Sugoi Art!";
            responseMessage.style.opacity = 0; // Start with transparent
            responseMessage.style.transition = 'opacity 1s'; // Transition for fade-in
            responseMessage.style.opacity = 1; // Fade in

            // Optionally, add a cute animation (e.g., bounce)
            responseMessage.classList.add('bounce');

            // Clear the form fields
            this.reset(); // Reset the form fields

            // Hide the message after a few seconds
            setTimeout(() => {
                responseMessage.style.opacity = 0; // Fade out
                setTimeout(() => {
                    responseMessage.style.display = 'none'; // Hide after fading out
                }, 1000); // Wait for fade-out to finish
            }, 3000); // Show for 3 seconds
        } else {
            // Handle errors here
            responseMessage.style.display = 'block';
            responseMessage.innerText = "There was an error sending your message. Please try again.";
            responseMessage.style.opacity = 0; // Start with transparent
            responseMessage.style.transition = 'opacity 1s'; // Transition for fade-in
            responseMessage.style.opacity = 1; // Fade in

            // Hide the message after a few seconds
            setTimeout(() => {
                responseMessage.style.opacity = 0; // Fade out
                setTimeout(() => {
                    responseMessage.style.display = 'none'; // Hide after fading out
                }, 1000); // Wait for fade-out to finish
            }, 3000); // Show for 3 seconds

            console.error('Error:', response);
        }
    })
    .catch(error => {
        const responseMessage = document.getElementById('response-message');
        responseMessage.style.display = 'block';
        responseMessage.innerText = "There was a network error. Please try again.";
        responseMessage.style.opacity = 0; // Start with transparent
        responseMessage.style.transition = 'opacity 1s'; // Transition for fade-in
        responseMessage.style.opacity = 1; // Fade in

        // Hide the message after a few seconds
        setTimeout(() => {
            responseMessage.style.opacity = 0; // Fade out
            setTimeout(() => {
                responseMessage.style.display = 'none'; // Hide after fading out
            }, 1000); // Wait for fade-out to finish
        }, 3000); // Show for 3 seconds

        console.error('Error:', error);
    });
};