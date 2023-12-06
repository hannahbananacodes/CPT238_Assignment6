$(document).ready(function() {
    var $fname = $("#fname"),
        $msgFname = $("#err-fname"),
        $lname = $("#lname"),
        $msgLname = $("#err-lname"),
        $saddress1 = $("#saddress1"),
        $msgSaddress1 = $("#err-saddress1"),
        $saddress2 = $("#saddress2"),
        $msgSaddress2 = $("#err-saddress2"),
        $city = $("#city"),
        $msgCity = $("#err-city"),
        $state = $("#state"),
        $msgState = $("#err-state"),
        $zip = $("#zip"),
        $msgZip = $("#err-zip"),
        $phone = $("#phone"),
        $msgPhone = $("#err-phone"),
        $email = $("#email"),
        $msgEMail = $("#err-email"),
        $ccnum = $("#ccnum"),
        $msgCCnum = $("#err-ccnum"),
        $cForm = $("#custForm");

    // state hint
    $state.focus(function() {
        $msgState.empty().append("Use a two letter abbreviation");
    }).blur(function() {
        $msgState.empty();
    });

    // zip code hint
    $zip.focus(function() {
        $msgZip.empty().append("Use a 5 digit Zip Code");
    }).blur(function() {
        $msgZip.empty();
    });

    // phone hint
    $phone.focus(function() {
        $msgPhone.empty().append("Numbers Only - No Spaces or Dashes");
    }).blur(function() {
        $msgPhone.empty();
    });

    // email hint
    $email.focus(function() {
          $msgEMail.empty().append("Example: john@doe.com");
    }).blur(function() {
          $msgEMail.empty();
    });

    // credit card hint
    $ccnum.focus(function() {
        $msgCCnum.empty().append("Numbers Only - No Spaces or Dashes");
    }).blur(function() {
        $msgCCnum.empty();
    });

    //

  
    $cForm.submit(function(event) {
        var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            letterspace = /^[a-z ]{2,20}$/i,
            letterspacenum = /^[a-z0-9 ]{2,20}$/i,
            statePattern = /^[a-z]{2,2}$/i,
            zipPattern = /^[0-9]{5,5}$/i,
            phonePattern = /^[0-9]{10,10}$/i,
            ccPattern = /^[0-9]{16,16}$/i,
            errors = 0,
            fieldColor = "#FFF",
            errColor = "#FDD";
        $(".fields").css("background-color", fieldColor);
        $(".err-msg").empty();

        // first name
        if (!letterspace.test($fname.val())) { 
            $fname.css("background-color", errColor);
            $msgFname.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1; 
        }

        // last name
        if (!letterspace.test($lname.val())) { 
            $lname.css("background-color", errColor);
            $msgLname.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1; 
        }

        // street address 1
        if (!letterspacenum.test($saddress1.val())) { 
            $saddress1.css("background-color", errColor);
            $msgSaddress1.append("Required: Must contain only letters, numbers, and spaces between 2 and 20 characters!");
            errors += 1; 
        }

        // street address 2
        if ($saddress2.val().length > 0) {
            if (!letterspacenum.test($saddress2.val())) { 
            $saddress2.css("background-color", errColor);
            $msgSaddress2.append("Required: Must contain only letters, numbers, and spaces between 2 and 20 characters!");
            errors += 1; 
        }}

        // city
        if (!letterspace.test($city.val())) { 
            $city.css("background-color", errColor);
            $msgCity.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1; 
        }
    
        // state
        if (!statePattern.test($state.val())) {
            $state.css("background-color", errColor);
            $msgState.append("Required: Must contain a two-letter State abbreviation!");
            errors += 1; 
        }
        
        // zip code
        if (!zipPattern.test($zip.val())) { 
            $zip.css("background-color", errColor);
            $msgZip.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1; 
        }
        // phone
        if ($phone.val().length > 0) {
            if (!phonePattern.test($phone.val())) { 
            $phone.css("background-color", errColor);
            $msgPhone.append("Required: Must contain only letters, numbers, and spaces between 2 and 20 characters!");
            errors += 1; 
        }}
        // email
        if (!emailPattern.test($email.val())) {
            $email.css("background-color", errColor);
            $msgEMail.append("Required: Must be a valid e-mail address");
            errors += 1;
        }
        // credit card num
    
        if (errors > 0) {
            $cForm.prepend('<div class="err-msg">Please edit the marked fields below to fix errors.</div>');
            event.preventDefault();
  } });
  });