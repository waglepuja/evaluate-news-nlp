function checkForUrl(inputText) {
    //console.log("::: Running checkForName :::", inputText);
    //let url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

    // if(url.test(inputText)) {
    //     return
    // }else{
    //     alert("Please enter a valid URL");
    // }

    console.log("::: Running checkForName :::", inputText);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return r.test(inputText);

}

export { checkForUrl }