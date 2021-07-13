// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     Client.checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8081/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

// export { handleSubmit }


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    //const data = {formText}

    if(Client.checkForUrl(formText)){

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/addData',{
        method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({formText: formText}),
        //body:JSON.stringify(data),
        
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = "Results: " + res.results;
        document.getElementById('polarity').innerHTML = "Polarity: " + res.polarity;
        document.getElementById('agreement').innerHTML = "Agreement: " + res.agreement;
        document.getElementById('confidence').innerHTML = "Confidence: " + res.confidence;
        document.getElementById('irony').innerHTML = "Irony " + res.irony;
    })
}else{
    alert("Please enter a valid URL")
}
}

export { handleSubmit }
