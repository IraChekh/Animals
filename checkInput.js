function check_input() {
  let is_true = true;
  const titles = ['first_name', 'last_name', 'phone', 'email', 'comment'];
  const functions = [check_name, check_name, check_phone, check_email, check_comment];

  for (let i = 0; i < titles.length; i++) {
    let text = document.getElementById(titles[i]).value;
    let mistake = document.getElementById(titles[i] + "_mistake");
    if (is_true) {
      is_true = functions[i](text, mistake);
    } else {
      functions[i](text, mistake);
    }
  }

  if (is_true) {
    alert("Sending is successful");
  }
  return is_true
}


function check_comment(comment, mistake) {
  mistake.style = 'visibility:visible'
  if (comment === "") {
    mistake.textContent = "Please enter your comment";
    return false
  }
  mistake.style = 'visibility: hidden'
  return true
}

function check_email(email, mistake) {
  mistake.style = 'visibility:visible'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    mistake.textContent = "Please enter your email";
    return false
  } else if (!emailRegex.test(email)) {
    mistake.textContent = "Please enter a valid email";
    return false
  }
  mistake.style = 'visibility: hidden'
  return true
}

function check_phone(phone, mistake) {
  mistake.style='visibility:visible'
  const phoneRegex = /^(\+38)?0[0-9]{9}$/;
  if (phone === "") {
    mistake.textContent = "Please enter your phone";
    return false
  } else if (!phoneRegex.test(phone)) {
    mistake.textContent = "Please enter a valid phone";
    return false
  }
  mistake.style = 'visibility: hidden'
  return true
}

function check_name(name, mistake) {
  mistake.style='visibility:visible'
  const nameRegex = /^[A-Za-z]+$/;
  if (name === "") {
    mistake.textContent = "Please enter your name/surname";
    return false
  } else if (!nameRegex.test(name)) {
    mistake.textContent = "Please enter valid name/surname";
    return false
  }
  mistake.style = 'visibility: hidden'
  return true
}