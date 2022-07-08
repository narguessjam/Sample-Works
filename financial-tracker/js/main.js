window.addEventListener('load', function(e){
    

    let newTransaction = document.forms[0];
    console.log(document.forms[0][1].type);
    console.log(document.forms[0][2]);
  
    let totalDebit = 0;
    let totalCredit = 0;
    
    function newRow() { //getting the information
        const x = document.forms[0];
        let description = x[1].value;
        let type = x[2].value;
        let amount = x[3].value;

        const tableBody = document.querySelector('.transactions tbody');
        let tr = document.createElement('tr');
        let tdDescription = document.createElement('td');
        tdDescription.textContent = description;
        let tdType = document.createElement('td');
        tdType.textContent = type;
        let tdAmount = document.createElement('td');
        tdAmount.textContent = amount;

        let tdRemoveIcon = document.createElement('td')
        
        let icon = document.createElement('i');
        icon.classList.add('fa')
        icon.classList.add('fa-trash-o');
        icon.alt="delete"
        icon.addEventListener('click', remove);
        tdRemoveIcon.appendChild(icon);
        tr.appendChild(tdDescription)
        tr.appendChild(tdType)
        tr.appendChild(tdAmount)
        tr.appendChild(tdRemoveIcon);
        tableBody.appendChild(tr);

        addAmount(type, amount);
        startTimer();
    }

    //showinh Row and preventing refresh
    newTransaction.addEventListener('submit', function(e){
            e.preventDefault();
            newRow();    
    })
    
    //changing the amout of total credit or total debit by adding the amount
    function addAmount(type, amount){
        if (type === 'debit') 
        {
            totalDebit += +amount;
        }
        else if (type === 'credit')
        {
            totalCredit += +amount;
        }

        document.querySelector('.debits').innerHTML = totalDebit;
        document.querySelector('.credits').textContent = totalCredit;
    }
     
    //function t substract the amout if they click the trash icon
    function subtractAmount(type, amount){
        if (type === 'debit') 
        {
            totalDebit -= +amount;
        }
        else if (type === 'credit')
        {
            totalCredit -= +amount;
        }

        document.querySelector('.debits').innerHTML = totalDebit;
        document.querySelector('.credits').textContent = totalCredit;
    }

    //removing row and substract the amount
    function remove(x) {
        const row = x.srcElement.parentElement.parentElement;
        let type = row.querySelectorAll('td')[1].textContent;
        let amount = +row.querySelectorAll('td')[2].textContent;
        subtractAmount(type, amount);
        row.remove();

    }

    //refresh the page after 2 mins
    var timeoutInMiliseconds = 120000;
    var timeoutId;

    function resetTimer() { 
        window.clearTimeout(timeoutId)
    }
    
    function startTimer() { 
        // window.setTimeout returns an Id that can be used to start and stop a timer
        timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds);   
    }
        
    function doInactive() {
        alert("if you remain inactive for 2 mins the page will refresh ");
        location.reload(true);
        resetTimer();
    }              
    
})