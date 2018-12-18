/* //Testing for whether the age is below 27 as required or not
function validateAge() {
  var age = document.forms["reg_form"]["Age"].value;
  if(age>27)
  {
    alert("Only people below age 27 can register!");
    return false;
  }
}
//Testing for whether a valid conact number has been provided or not
function validateContact() {
  var contact_length = (document.forms["reg_form"]["Contact"].value).length();
  if(contact_length !=10)
  {
    alert("Please enter a valid 10 digit contact number.");
    return false;
  }
}

//Making sure that the user doesn't enter the name as the Password
if(Password==Name)
{
  string pwd;
  prompt("The password entered must be different form the entered name! Please enter a different one", pwd);
  alert(pwd);
  Password = pwd;
} */
/*<script>
function validateForm()
{
  var name = document.reg_form.Name;
  var age = document.reg_form.Age;
  var contact = document.forms["reg_form"]["Contact"];

  function allLetter(name)
  {
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters))
    {
      return true;
    }
    else
    {
      alert('Username must have alphabet characters only');
      name.focus();
      return false;
    }
  }

  if(age.value()>27)
  {
    alert("Only people below the age of 27 can enter!");
  age.focus();
  return false;
  }


}
</script> */

<script>
function validateForm()
{
  //var age = document.reg_form.Age.value();

  function checkAge()
  {
    if(document.reg_form.Age.value >27)
    {
      alert("Only users below age 27 can enter!");
      return false;
      Age.focus();
    }
  }
}
</script>
