var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat (prompt("Enter age"));
     floatDays = parseFloat (floatAge * 365.25);
     floatMonths = parseFloat (floatAge * 12);
     intWeeks = parseInt (floatDays/7);
     intFortnights = parseInt (floatDays/14);
     alert("Current age in years" + floatAge);
     alert("Current age in days" + floatDays);
     alert("Current age in months" + floatMonths);
     alert("Current age in weeks" + intWeeks);
     alert("Current age in Fortnights" + intFortnights);