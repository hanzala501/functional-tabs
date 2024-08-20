 // price tabs
 function openPlan(evt, planType) {
    var i, plancontent, planlinks;
    plancontent = document.getElementsByClassName("monthly-content");
    for (i = 0; i < plancontent.length; i++) {
      plancontent[i].style.display = "none";
    }
    plancontent = document.getElementsByClassName("annual-content");
    for (i = 0; i < plancontent.length; i++) {
      plancontent[i].style.display = "none";
    }
    
    planlinks = document.getElementsByClassName("plan-links");
    for (i = 0; i < planlinks.length; i++) {
      planlinks[i].className = planlinks[i].className.replace(" active", "");
    }

    // Toggle the class for Monthly and Annual containers
    var monthlyContainer = document.getElementsByClassName("monthly")[0];
    var annualContainer = document.getElementsByClassName("annual")[0];
    if (planType === 'Monthly') {
      monthlyContainer.classList.remove("content-hidden");
      annualContainer.classList.add("content-hidden");
    } else if (planType === 'Annual') {
      monthlyContainer.classList.add("content-hidden");
      annualContainer.classList.remove("content-hidden");
    }
    
    // Set the default display for Monthly content
    document.getElementById("advanced-month").style.display = "block";

    // Set the default display for Annual content
    document.getElementById("advanced-annual").style.display = "block";

    // Set the default class for the "Annual" tab
    if (planType === 'Annual') {
      document.getElementById("annualOpen").className += " active";
    } else {
      document.getElementById("monthlyOpen").className += " active";
    }
  }

  function openSubs(evt, Subscription) {
    var i, monthlycontent, tablinks;
    monthlycontent = document.getElementsByClassName("monthly-content");
    for (i = 0; i < monthlycontent.length; i++) {
      monthlycontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("monthly-tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Subscription).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function openAnnualSubs(evt, Subscription) {
    var i, annualcontent, tablinks;
    annualcontent = document.getElementsByClassName("annual-content");
    for (i = 0; i < annualcontent.length; i++) {
      annualcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("annual-tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Subscription).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="monthlyOpen" and click on it
  document.getElementById("monthlyOpen").click();

  // Get the element with id="annualOpen" and click on it
  document.getElementById("annualOpen").click();
