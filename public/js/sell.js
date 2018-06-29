// Once the DOM is fully loaded.
$(function () {

    // on submit , post the request

    $(".create-form").on("click", "button", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        function gettimestamp(time) {
            return ("1001-00-00 " + time)
        }
        // create the object to be posted
        var sale = {
            useraccount_id: 1,
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zip: $("#zipcode").val().trim(),
            date: $("#date").val().trim(),
            start_time: gettimestamp($("#start-time").val().trim()),
            end_time: gettimestamp($("#end-time").val().trim()),
            comments: $("#comments").val().trim(),
            photo_url: "http://via.placeholder.com/350x150",
        };

        console.log(sale);

        // Send the POST request.
        $.ajax("/api/sale", {
            type: "POST",
            data: sale
        }).then(
            function () {
                // Reload the page 
                location.reload();
            }
        );
    });

});
