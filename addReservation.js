$("#add-btn").on("click", function(event) {
    event.preventDefault();

    var newReservation = {
      name: $("#name").val().trim(),
      id: $("#id").val().trim(),
      email: $("#email").val().trim(),
      phone: $("#phone").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/reservations", newReservation)
      .then(function(data) {
        console.log(data);
        alert("Adding Reservation...");
      });

  });