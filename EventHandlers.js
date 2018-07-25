//Working with event handlers that respond to browser activity

handleFocus = event => {
  console.log(event);
  let inputElement = event.target;
  addFocusClass(inputElement);
};

isFormValid = () => {
  return true;
};

handleSubmit = event => {
  console.log(`Form submission completed`);
  if (isFormValid()) {
    console.log(`Form valid, continuing submission...`);
    return true;
  } else {
    console.log(`There are errors!`);
    return false;
  }
};

addFocusClass = (element) => {
    element.classList.add(`inFocus`)
}

handleClick = (element) => {
    element.classList.change(`hide`)
}

hide = () => {
    let clickHandlers = document.getElementsByClassName(`clickHandlers`)
    removeClass(clickHandlers, "red")

    setTimeout(() => {
        
    })
}