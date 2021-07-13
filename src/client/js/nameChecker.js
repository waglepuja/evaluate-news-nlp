function checkForUrl(inputText) {  

    console.log("::: Running checkForName :::", inputText);
    const url = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return url.test(inputText);
}


export { checkForUrl }


//console.log("::: Running checkForName :::", inputText);
    //let url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

    // if(url.test(inputText)) {
    //     return
    // }else{
    //     alert("Please enter a valid URL");
    // }