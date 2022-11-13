const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  // Remove borders
  tabItems.forEach((item) => item.classList.remove("tab-border"));

  // Add border to current
  this.classList.add("tab-border");

  // Remove show class
  tabContentItems.forEach((item) => item.classList.remove("show"));

  // Get content from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

// Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));

// send email
function submitForm(e) {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  if (name != "" && email != "" && message != "") {
    senMail(name, email, message);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please Enter All Details..!",
    });
  }
}

function senMail(name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "kasunavodya@gmail.com",
    Password: "hcobmxemywjdnccd",
    To: "kasunavodya@gmail.com",
    From: email,
    Subject: `${name} sent an Email`,
    Body: message,
  }).then((message) => {
    Swal.fire({
      icon: "success",
      title: "Done...",
      text: "Email sent Successfully",
    });
    let form = document.querySelector("#contact-form");
    form.reset();
  });
}
