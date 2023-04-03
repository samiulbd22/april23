let phoneNumber = "";
let inputNumber = document.getElementById("cell-num");
inputNumber.addEventListener("keyup",showButton);
function showButton(){
     phoneNumber = inputNumber.value;
    // input member phone number
    if(phoneNumber === "01821245430"){
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
                dueCost:0,
                getCost:0,
                totalMeal:30,
                paid:5500
            },
            "01821245430":{ name:"Md Samiul",
                stayCost:3000,
                othersCost:30,
                dueCost:30,
                getCost:30,
                totalMeal:30,
                paid:5000
            },
            "01821245430":{ name:"Md Samiul",
                stayCost:3000,
                othersCost:30,
                dueCost:30,
                getCost:30,
                totalMeal:30,
                paid:5000
            },
            "01821245430":{ name:"Md Samiul",
                stayCost:3000,
                othersCost:30,
                dueCost:30,
                getCost:30,
                totalMeal:30,
                paid:5000
            },
            "01821245430":{ name:"Md Samiul",
                stayCost:3000,
                othersCost:30,
                dueCost:30,
                getCost:30,
                totalMeal:30,
                paid:5000
            },
            "01821245430":{ name:"Md Samiul",
                stayCost:3000,
                othersCost:30,
                dueCost:30,
                getCost:30,
                totalMeal:30,
                paid:5000
            },
            "01821245430":{ name:"Md Samiul",
                stayCost:3000,
                othersCost:30,
                dueCost:30,
                getCost:30,
                totalMeal:30,
                paid:5000
            },
            "01821245430":{ name:"Md Samiul",
                stayCost:3000,
                othersCost:30,
                dueCost:30,
                getCost:30,
                totalMeal:30,
                paid:5000
            },
            "01821245430":{ name:"Md Samiul",
                stayCost:3000,
                othersCost:30,
                dueCost:30,
                getCost:30,
                totalMeal:30,
                paid:5000
            },
            "01821245430":{ name:"Md Samiul",
                stayCost:3000,
                othersCost:30,
                dueCost:30,
                getCost:30,
                totalMeal:30,
                paid:5000
            },
            khalaCost:400,
            netCost:140,
            serviceCost:30,
            mealRate:43.5,
        };
     let memberName     = member[phoneNumber].name;
     let stayCost       = member[phoneNumber].stayCost;
     let khalaCost      = member.khalaCost;
     let netCost        = member.netCost;
     let serviceCost    = member.serviceCost;
     let othersCost     = member[phoneNumber].othersCost;
     let dueCost        = member[phoneNumber].dueCost;
     let getCost        = member[phoneNumber].getCost;
     let totalMeal      = member[phoneNumber].totalMeal;
     let mealRate       = member.mealRate;
     let paid           = member[phoneNumber].paid;

     let totalMealCost  = totalMeal * mealRate;
     let totalAmount    = stayCost + khalaCost + serviceCost + othersCost + totalMealCost + dueCost - getCost;


     let remainingForBazzar     = (paid > totalAmount) ? `${paid - totalAmount}`: "00";
     let remainingDue           = (totalAmount > paid)?`${totalAmount - paid}`:"00";

     let mealCostCalculation    = (remainingForBazzar > totalMealCost)?`${remainingForBazzar - totalMealCost}`:"00";
     let dueMealCost            = (totalMealCost > remainingForBazzar)?`${totalMealCost - remainingForBazzar}`:"00";
     let dateTime               = "23-03-23";


        let memberPage = document.getElementById("member");
            memberPage.innerHTML = memberName;
        let datePage = document.getElementById("dateMe");
            datePage.innerHTML = dateTime;
        let amountPage = document.getElementById("amount");
            amountPage.innerHTML = `${totalAmount} <span>tk</span>`;

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
        let mealCostPage = document.getElementById("meal-cost");
            mealCostPage.innerHTML = `${remainingForBazzar} <span>tk</span>`;
        let totalAmountPage = document.getElementById("total-cost");
            totalAmountPage.innerHTML = `${totalAmount} <span>tk</span>`;
        let totalMealPage = document.getElementById("meal-total");
            totalMealPage.innerHTML = `${totalMeal} <span>tk</span>`;
        let mealRatePage = document.getElementById("meal-rate");
            mealRatePage.innerHTML = `${mealRate} <span>tk</span>`;
        let totalMealCostPage = document.getElementById("meal-amount");
            totalMealCostPage.innerHTML = `${totalMealCost} <span>tk</span>`;
        let paidPage = document.getElementById("meal-paid");
            paidPage.innerHTML = `${remainingForBazzar} <span>tk</span>`;
        let duePage = document.getElementById("due-amount");
            duePage.innerHTML = `<span style="color: darkred">-</span> ${dueMealCost} <span>tk</span>`;
        let mealCostCalculationPage = document.getElementById("calculation-amount");
            mealCostCalculationPage.innerHTML = `<span style="color: darkgreen">+</span> ${mealCostCalculation} <span>tk</span>`;


        let totalPayablePage = document.getElementById("total-payable");
            totalPayablePage.innerHTML = `${totalAmount} <span>tk</span>`;
        let totalPaidPage = document.getElementById("paid-amount");
            totalPaidPage.innerHTML = `${paid} <span>tk</span>`;
        let totalDuePage = document.getElementById("totalDue-amount");
            totalDuePage.innerHTML = `<span style="color: darkred">-</span> ${remainingDue} <span>tk</span>`;
        let totalAddBazarPage = document.getElementById("totalAdd-amount");
            totalAddBazarPage.innerHTML = `<span style="color: darkgreen">+</span> ${remainingForBazzar} <span>tk</span>`;
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