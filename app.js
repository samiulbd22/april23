let phoneNumber;
let inputNumber = document.getElementById("cell-num");
inputNumber.addEventListener("keyup",showButton);
function showButton(){
    phoneNumber = inputNumber.value;
    // input member phone number
    if(
        (phoneNumber === "01814843266") ||(phoneNumber === "01640454889")||
        (phoneNumber === "01925315230") ||(phoneNumber === "01922362569")||
        (phoneNumber === "01738393696") ||(phoneNumber === "01794942131")||
        (phoneNumber === "01400709854") ||(phoneNumber === "01532023080")||
        (phoneNumber === "01922635500")){
       let goButton = document.getElementById("submit-num");
        // select submit button
       goButton.style.opacity = '1';
       goButton.addEventListener("click", showMe);
       function showMe() {
            let regisContainer = document.getElementById("registrar-wrapper");
           // registration page select
            regisContainer.style.display = 'none';
            let listContainer = document.getElementById("listMe");
           // list page select
            listContainer.style.display ="block";
       }



        const member = {
            "01814843266":{ name:"Istiaq Ahmad Udoy",
                stayCost:2200,
                othersCost:0,
                totalMeal:11,
                prePayable:2502,
                paid:5500
            },
            "01640454889":{ name:"Imran",
                stayCost:2330,
                othersCost:0,
                totalMeal:42,
                prePayable:2512,
                paid:5000
            },
            "01925315230":{ name:"Masum",
                stayCost:4500,
                othersCost:0,
                totalMeal:23,
                prePayable:4409,
                paid:12500
            },
            "01922362569":{ name:"Razu",
                stayCost:2000,
                othersCost:0,
                totalMeal:23,
                prePayable:2633,
                paid:5500
            },
            "01738393696":{ name:"Amrul",
                stayCost:3000,
                othersCost:0,
                totalMeal:26,
                prePayable:2296,
                paid:5000
            },
            "01794942131":{ name:"Mehedi Hasan Maruf",
                stayCost:3000,
                othersCost:0,
                totalMeal:46,
                prePayable:4606,
                paid:6500
            },
            "01400709854":{ name:"Rikto Islam",
                stayCost:2500,
                othersCost:0,
                totalMeal:0,
                prePayable:2500,
                paid:4500
            },
            "01532023080":{ name:"Sony Hasan",
                stayCost:2500,
                othersCost:500,
                totalMeal:46,
                prePayable:3186,
                paid:7500
            },
            "01922635500":{ name:"Rubel Hossain",
                stayCost:0,
                othersCost:0,
                totalMeal:28,
                prePayable:1633,
                paid:1500
            },

            khalaCost:400,
            netCost:140,
            mealRate:43.5,
            serviceCost:30
        };
     let memberName     = member[phoneNumber].name;
     let stayCost       = member[phoneNumber].stayCost;
     let khalaCost      = member.khalaCost;
     let netCost        = member.netCost;
     let serviceCost    = member.serviceCost;

    let othersCost       = member[phoneNumber].othersCost;

     let totalMeal      = member[phoneNumber].totalMeal;
     let mealRate       = member.mealRate;

     let paid           = member[phoneNumber].paid;
     let prePayable     = member[phoneNumber].prePayable;

     // Total paid - Total payable (previous to running)
     let depositBalance         = (paid > prePayable) ? `${paid - prePayable}` :"";
     let dueBalance             = (paid < prePayable) ? `${prePayable - paid }` :"";

     // let getMoney = depositBalance - totalMealCost;
     // let PreviousDueBalance2 = Number(dueBalance);

     //Recent Total meal cost
     let totalMealCost  = totalMeal * mealRate;

     let mealCostCalculation    = (depositBalance > totalMealCost)?`${depositBalance - totalMealCost}`:"";
     let dueMealCost            = (totalMealCost > depositBalance) ? `${totalMealCost - depositBalance}`:"";

     //previous due added in running cost
       let dueMoney = Number(dueBalance);
       let dueMoneyOnrunning = Number(dueMealCost);
       let getMoney = Number(mealCostCalculation);



     //running Payable amount
     let totalAmount    = (stayCost + khalaCost + serviceCost + othersCost + netCost + dueMoney + dueMoneyOnrunning) - (getMoney) ;
    

     // Recent date
     let dateTime               = "23-03-23";


    // section number 2 is started
        let memberPage = document.getElementById("member");
            memberPage.innerHTML = memberName;
        let datePage = document.getElementById("dateMe");
            datePage.innerHTML = dateTime;
        let amountPage = document.getElementById("amount");
            amountPage.innerHTML = `${totalAmount} <span>tk</span>`;
      // section number 2 is ended
    // section number 2 is started  due-previous
        let stayCostPage = document.getElementById("stay-cost");
            stayCostPage.innerHTML = `${stayCost} <span>tk</span>`;
        let khalaCostPage = document.getElementById("khala-cost");
            khalaCostPage.innerHTML = `${khalaCost} <span>tk</span>`;
        let netCostPage = document.getElementById("net-cost");
            netCostPage.innerHTML = `${netCost} <span>tk</span>`;
        let serviceCostPage = document.getElementById("service-cost");
            serviceCostPage.innerHTML = `${serviceCost} <span>tk</span>`;
        let otherCostPage = document.getElementById("other-cost");
            otherCostPage.innerHTML = `${othersCost} <span>tk</span>`;
        let dueMealCostPage = document.getElementById("dueMeal-cost");
            dueMealCostPage.innerHTML = (dueMealCost ==="") ? "00" : `${dueMealCost} <span>tk</span>`;
        let duePreviousPage = document.getElementById("due-previous");
            duePreviousPage.innerHTML = (dueBalance ==="") ? "00" : `${dueBalance} <span>tk</span>`;
        let getMealCostPage = document.getElementById("getMeal-cost");
            getMealCostPage.innerHTML = (mealCostCalculation ==="") ? "00" : `<span>-</span>${mealCostCalculation} <span>tk</span>`;
        let totalAmountPage = document.getElementById("total-cost");
            totalAmountPage.innerHTML = `${totalAmount} <span>tk</span>`;
    // section number 2 is ended
    // section number 3 is started
        let totalMealPage = document.getElementById("meal-total");
            totalMealPage.innerHTML = `${totalMeal} <span>tk</span>`;
        let mealRatePage = document.getElementById("meal-rate");
            mealRatePage.innerHTML = `${mealRate} <span>tk</span>`;
        let totalMealCostPage = document.getElementById("meal-amount");
            totalMealCostPage.innerHTML = `${totalMealCost} <span>tk</span>`;
        let paidPage = document.getElementById("meal-paid");
            paidPage.innerHTML = (depositBalance === "") ? "00" :`${depositBalance} <span>tk</span>`;

        let duePage = document.getElementById("due-amount");
            duePage.innerHTML = (dueMealCost ==="") ? "00" : `<span style="color: darkred">-</span> ${dueMealCost} <span>tk</span>`;
        let mealCostCalculationPage = document.getElementById("calculation-amount");
            mealCostCalculationPage.innerHTML = (mealCostCalculation ==="") ? "00" : `<span style="color: darkgreen">+</span> ${mealCostCalculation} <span>tk</span>`;
    // section number 3 is ended

    // section number 4 is started
        let totalPayablePage = document.getElementById("total-payable");
            totalPayablePage.innerHTML = `${prePayable} <span>tk</span>`;
        let totalPaidPage = document.getElementById("paid-amount");
            totalPaidPage.innerHTML = `${paid} <span>tk</span>`;
        let totalDuePage = document.getElementById("totalDue-amount");
            totalDuePage.innerHTML = (dueBalance ==="") ? "00" :`<span style="color: darkred">-</span> ${dueBalance} <span>tk</span>`;
        let totalAddBazarPage = document.getElementById("totalAdd-amount");
            totalAddBazarPage.innerHTML = (depositBalance ==="")? "00": `<span style="color: darkgreen">+</span> ${depositBalance} <span>tk</span>`;
        // section number 4 is started
    }

}

// style="color: darkred"


window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 200;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}