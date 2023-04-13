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
        (phoneNumber === "01922635500") ||(phoneNumber === "245430")){
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
                paid:5500,
                ramadanTotalMeal:40,
                ramadanMealRate:71.71,
                ramadanMealPaid:2350,
            },
            "01640454889":{ name:"Imran",
                stayCost:2330,
                othersCost:0,
                totalMeal:45,
                prePayable:2512,
                paid:5000,
                ramadanTotalMeal:41,
                ramadanMealRate:71.71,
                ramadanMealPaid:3361,
            },
            "01925315230":{ name:"Masum",
                stayCost:4500,
                othersCost:0,
                totalMeal:23,
                prePayable:4409,
                paid:12500,
                ramadanTotalMeal:32.5,
                ramadanMealRate:71.71,
                ramadanMealPaid:2320,
            },
            "01922362569":{ name:"Razu",
                stayCost:2000,
                othersCost:0,
                totalMeal:23,
                prePayable:2633,
                paid:4300,
                ramadanTotalMeal:45,
                ramadanMealRate:71.71,
                ramadanMealPaid:896.5,
            },
            "01738393696":{ name:"Amrul",
                stayCost:3000,
                othersCost:0,
                totalMeal:26,
                prePayable:2296,
                paid:5000,
                ramadanTotalMeal:45,
                ramadanMealRate:71.71,
                ramadanMealPaid:3603,
            },
            "01794942131":{ name:"Mehedi Hasan Maruf",
                stayCost:3000,
                othersCost:0,
                totalMeal:46,
                prePayable:4606,
                paid:6500,
                ramadanTotalMeal:45,
                ramadanMealRate:71.71,
                ramadanMealPaid:1423,

            },
            "01400709854":{ name:"Rikto Islam",
                stayCost:2500,
                othersCost:0,
                totalMeal:0,
                prePayable:2500,
                paid:4500,
                ramadanTotalMeal:28,
                ramadanMealRate:68.55,
                ramadanMealPaid:18,
            },
            "01532023080":{ name:"Sony Hasan",
                stayCost:2500,
                othersCost:500,
                totalMeal:46,
                prePayable:3186,
                paid:7500,
                ramadanTotalMeal:46,
                ramadanMealRate:71.71,
                ramadanMealPaid:3343,
            },
            "01922635500":{ name:"Rubel Hossain",
                stayCost:0,
                othersCost:0,
                totalMeal:28,
                prePayable:1633,
                paid:1500,
                ramadanTotalMeal:45,
                ramadanMealRate:71.71,
                ramadanMealPaid:3319,
            },
            "245430":{ name:"Samiul Islam",
                stayCost:0,
                othersCost:0,
                totalMeal:28,
                prePayable:1633,
                paid:1500,
                ramadanTotalMeal:39,
                ramadanMealRate:68.55,
                ramadanMealPaid:18,
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

        /*Ramadan Month*/
        /*Sony*/
        let sony = member["01532023080"].name;
        let sonyRamadanMeal = (member["01532023080"].ramadanTotalMeal * member["01532023080"].ramadanMealRate).toFixed(0);
        let sonyPaid = member["01532023080"].ramadanMealPaid;
        let sonyGet = (member["01532023080"].ramadanMealPaid > sonyRamadanMeal)?(member["01532023080"].ramadanMealPaid - sonyRamadanMeal) : "00";
        let sonyDue = (member["01532023080"].ramadanMealPaid < sonyRamadanMeal)?(sonyRamadanMeal - member["01532023080"].ramadanMealPaid):"00";
        document.getElementById("sony").innerText = sony;
        document.getElementById("sony-meal-cost").innerText = sonyRamadanMeal.toString();
        document.getElementById("sony-meal-pay").innerText = sonyPaid;
        document.getElementById("sony-get").innerText = sonyGet;
        document.getElementById("sony-due").innerText = sonyDue;
        /*Sony*/

        /*udoy*/
        let udoy = member["01814843266"].name;
        let udoyRamadanMeal = (member["01814843266"].ramadanTotalMeal * member["01814843266"].ramadanMealRate).toFixed(0);
        let udoyPaid = member["01814843266"].ramadanMealPaid;
        let udoyGet = (member["01814843266"].ramadanMealPaid > udoyRamadanMeal)?(member["01814843266"].ramadanMealPaid - udoyRamadanMeal):"00";
        let udoyDue = (member["01814843266"].ramadanMealPaid < udoyRamadanMeal)?(udoyRamadanMeal - member["01814843266"].ramadanMealPaid):"00";
        document.getElementById("udoy").innerText = udoy;
        document.getElementById("udoy-meal-cost").innerText = udoyRamadanMeal.toString();
        document.getElementById("udoy-meal-pay").innerText = udoyPaid;
        document.getElementById("udoy-get").innerText = udoyGet;
        document.getElementById("udoy-due").innerText = udoyDue;
        /*udoy*/
        /*Imran*/
        let imran = member["01640454889"].name;
        let imranRamadanMeal = (member["01640454889"].ramadanTotalMeal * member["01640454889"].ramadanMealRate).toFixed(0);
        let imranPaid = member["01640454889"].ramadanMealPaid;
        let imranGet = (member["01640454889"].ramadanMealPaid > imranRamadanMeal)?(member["01640454889"].ramadanMealPaid - imranRamadanMeal) : "00";
        let imranDue = (member["01640454889"].ramadanMealPaid < imranRamadanMeal)?(imranRamadanMeal - member["01640454889"].ramadanMealPaid):"00";
        document.getElementById("imran").innerText = imran;
        document.getElementById("imran-meal-cost").innerText = imranRamadanMeal.toString();
        document.getElementById("imran-meal-pay").innerText = imranPaid;
        document.getElementById("imran-get").innerText = imranGet;
        document.getElementById("imran-due").innerText = imranDue;
        /*Imran*/

        /*Masum*/
        let masum = member["01925315230"].name;
        let masumRamadanMeal = (member["01925315230"].ramadanTotalMeal * member["01925315230"].ramadanMealRate).toFixed(0);
        let masumPaid = member["01925315230"].ramadanMealPaid;
        let masumGet = (member["01925315230"].ramadanMealPaid > masumRamadanMeal)?(member["01925315230"].ramadanMealPaid - masumRamadanMeal):"00";
        let masumDue = (member["01925315230"].ramadanMealPaid < masumRamadanMeal)?(masumRamadanMeal - member["01925315230"].ramadanMealPaid):"00";
        document.getElementById("masum").innerText = masum;
        document.getElementById("masum-meal-cost").innerText = masumRamadanMeal.toString();
        document.getElementById("masum-meal-pay").innerText = masumPaid;
        document.getElementById("masum-get").innerText = masumGet;
        document.getElementById("masum-due").innerText = masumDue;
        /*Masum*/

        /*razu*/
        let razu = member["01922362569"].name;
        let razuRamadanMeal = (member["01922362569"].ramadanTotalMeal * member["01922362569"].ramadanMealRate).toFixed(0);
        let razuPaid = member["01922362569"].ramadanMealPaid;
        let razuGet = (member["01922362569"].ramadanMealPaid > razuRamadanMeal)?(member["01922362569"].ramadanMealPaid - razuRamadanMeal):"00";
        let razuDue = (member["01922362569"].ramadanMealPaid < razuRamadanMeal)?(razuRamadanMeal - member["01922362569"].ramadanMealPaid):"00";
        document.getElementById("razu").innerText = razu;
        document.getElementById("razu-meal-cost").innerText = razuRamadanMeal.toString();
        document.getElementById("razu-meal-pay").innerText = razuPaid;
        document.getElementById("razu-get").innerText = razuGet;
        document.getElementById("razu-due").innerText = razuDue;
        /*razu*/

        /*amrul*/
        let amrul = member["01738393696"].name;
        let amrulRamadanMeal = (member["01738393696"].ramadanTotalMeal * member["01738393696"].ramadanMealRate).toFixed(0);
        let amrulPaid = member["01738393696"].ramadanMealPaid;
        let amrulGet = (member["01738393696"].ramadanMealPaid > amrulRamadanMeal)?(member["01738393696"].ramadanMealPaid - amrulRamadanMeal):"00";
        let amrulDue = (member["01738393696"].ramadanMealPaid < amrulRamadanMeal)?(amrulRamadanMeal - member["01738393696"].ramadanMealPaid):"00";
        document.getElementById("amrul").innerText = amrul;
        document.getElementById("amrul-meal-cost").innerText = amrulRamadanMeal.toString();
        document.getElementById("amrul-meal-pay").innerText = amrulPaid;
        document.getElementById("amrul-get").innerText = amrulGet;
        document.getElementById("amrul-due").innerText = amrulDue;
        /*amrul*/

        /*maruf*/
        let maruf = member["01794942131"].name;
        let marufRamadanMeal = (member["01794942131"].ramadanTotalMeal * member["01794942131"].ramadanMealRate).toFixed(0);
        let marufPaid = member["01794942131"].ramadanMealPaid;
        let marufGet = (member["01794942131"].ramadanMealPaid > marufRamadanMeal)?(member["01794942131"].ramadanMealPaid - marufRamadanMeal):"00";
        let marufDue = (member["01794942131"].ramadanMealPaid < marufRamadanMeal)?(marufRamadanMeal - member["01794942131"].ramadanMealPaid):"00";
        document.getElementById("maruf").innerText = maruf;
        document.getElementById("maruf-meal-cost").innerText = marufRamadanMeal.toString();
        document.getElementById("maruf-meal-pay").innerText = marufPaid;
        document.getElementById("maruf-get").innerText = marufGet;
        document.getElementById("maruf-due").innerText = marufDue;
        /*maruf*/

        /*rubel*/
        let rubel = member["01922635500"].name;
        let rubelRamadanMeal = (member["01922635500"].ramadanTotalMeal * member["01922635500"].ramadanMealRate).toFixed(0);
        let rubelPaid = member["01922635500"].ramadanMealPaid;
        let rubelGet = (member["01922635500"].ramadanMealPaid > rubelRamadanMeal)? member["01922635500"].ramadanMealPaid - rubelRamadanMeal :"00";
        let rubelDue = (member["01922635500"].ramadanMealPaid < rubelRamadanMeal)?(rubelRamadanMeal - member["01922635500"].ramadanMealPaid):"00";
        document.getElementById("rubel").innerText = rubel;
        document.getElementById("rubel-meal-cost").innerText = rubelRamadanMeal.toString();
         document.getElementById("rubel-meal-pay").innerText = rubelPaid;
        document.getElementById("rubel-get").innerText = rubelGet;
        document.getElementById("rubel-due").innerText = rubelDue;
        /*rubel*/
	
        let cellPhone = document.getElementById(`${phoneNumber}`);
        if(cellPhone || phoneNumber){
            cellPhone.style.backgroundColor = "#F3CCFF";
        }
        const date = new Date;
        const day =date.getDate();
        const month =date.getMonth() +1;
        const year = date.getFullYear();
        const fullYear =`${day}-${month}-${year}`;
        document.getElementById("date-time").innerText = fullYear;
        const ramazan = day + 8;
        document.getElementById("ramzan").innerHTML=`${ramazan} <sup>th</sup> Ramadan`;

        /*Ramadan Month*/
        /* upperRomjan */

        document.getElementById("sony1").innerText = sonyRamadanMeal.toString();
        document.getElementById("udoy1").innerText = udoyRamadanMeal.toString();
        document.getElementById("razu1").innerText = razuRamadanMeal.toString();
        document.getElementById("amrul1").innerText = amrulRamadanMeal.toString();
        document.getElementById("maruf1").innerText = marufRamadanMeal.toString();
        document.getElementById("masum1").innerText = masumRamadanMeal.toString();
        document.getElementById("imran1").innerText = imranRamadanMeal.toString();
        document.getElementById("rubel1").innerText = rubelRamadanMeal.toString();

        /* upperRomjan */
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


