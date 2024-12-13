$(document).ready(function() {
    $('#applicationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var dob = $('#dob').val();

        // Display confirmation
        $('#dispName').text(name);
        $('#dispEmail').text(email);
        $('#dispPhone').text(phone);
        $('#dispDob').text(dob);
        $('#confirmation').show(); // Show confirmation message

        // Optionally, you can send the data to the server using AJAX
        $.ajax({
            url: 'submit.php',
            type: 'POST',
            data: {
                name: name,
                email: email,
                phone: phone,
                dob: dob
            },
            success: function(response) {
                console.log('Data submitted successfully:', response);
            },
            error: function(error) {
                console.error('Error submitting data:', error);
            }
        });
    });
});