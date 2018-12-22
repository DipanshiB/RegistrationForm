alert("File linked!");

function validateForm()
{
  var age = document.reg_form.Age.value();
  var name = document.reg_form.Name.value();
  var password = document.reg_form.Password.value();
  var contact = document.reg_form.Contact.value();
  var email = document.reg_form.Email.value();

  function checkAge()
  {
    if(age >27)
    {
      alert("Only users below age 27 can enter!");
      return false;
      Age.focus();
    }
  }

  function checkName(name)
  {
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters))
    {
      return true;
    }
    else
    {
      alert("Name must have alphabets only!");
      return false;
      Name.focus();
    }
  }

  function checkPassword()
  {
    if(password == name)
    {
      alert("Password cannot be the same as the name!");
      return false;
      Password.focus();
      Name.focus();
    }
  }

  function checkContact()
  {
    if(contact.length()==10)
    {
      return true;
    }
    else
    {
      alert("Please enter a valid 10 digit contact number!");
      return false;
      Contact.focus();
    }
  }

  function checkEmail(email)
  {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
      return true;
    }
    else
    {
      alert("You have entered an invalid email address!");
      Email.focus();
      return false;
    }
  }
}

function openSlideMenu()
{
  document.reg_form.getElementById('side-menu').style.width='250px';
  document.reg_form.getElementById('main').style.margin-left='250px';
}

function closeSlideMenu()
{
  document.reg_form.getElementById('side-menu').style.width='0px';
  document.reg_form.getElementById('main').style.margin-left='0px';
}
