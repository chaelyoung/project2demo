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
        validateZip(sale.zip)


        validateDate(sale.date)


        Send the POST request.
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


    function validateDate(date)
        {
            const formattedDate = moment(date)
            console.log (formattedDate);
            if (formattedDate.isValid()) {
                console.log("valid date")
            } else {
                console.log("invalid date")
            }
        }

    function validateZip(zipCode) {
        console.log(typeof zipCode);
        const parsedZip = parseInt(zipCode);
        if (Number.isInteger(parsedZip) && zipCode.length === 5) {
            console.log("this is a valid number");
            if (true) {

                // On line 45 replace true with regex if I want. This is optional.
                return true;

            }
        } else {
            console.log("invalid number");
            return false;
        }
    }
});
