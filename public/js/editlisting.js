// Once the DOM is fully loaded.
$(function () {

    // on submit , post the request

    $(".create-form").on("click", "#sellerBtn", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var sale_event_id = $('.create-form').attr('sale_event_id');
        var dbDate = moment($("#date").val().trim()).format('YYYY-MM-DD');

        // create the object to be posted
        var sale = {
            id: sale_event_id,
            useraccount_id: 1,
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zip: $("#zipcode").val().trim(),
            date:  dbDate,
            start_time: dbDate + " " + $("#start-time").val().trim(),
            end_time: dbDate + " " + $("#end-time").val().trim(),
            comments: $("#comments").val().trim(),
            photo_url: "http://via.placeholder.com/350x200",
        };

        console.log(sale);

        // Send the POST request.
        $.ajax("/api/sale", {
            type: "PUT",
            data: sale
        }).then(
            function (resp) {
                // route to manage items page 
                window.location.href = "/manageitems/"+sale_event_id;
            }
        );
    });

});
