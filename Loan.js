var $ = function (id) 
{
    return document.getElementById(id);
}


/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm with loan in term months
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/ var calculate = function()
 {
    var flowMonthlyPayment, intLoanTerm, floatTotalCost;
    floatMonthlyPayment = parseFloat($("monthly payment"). value);
    intLoanTerm = parseInt($("LoanTerm").value);
    floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);
    $("total cost"). value = floatTotalCost;
 

    
 }
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}