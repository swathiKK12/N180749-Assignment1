function change()
{
  document.getElementByID("i").src="name.png";
}
function unchange()
{
	document.getElementByID("i").src="mine.jpg";
}
function myfunction()
{
	document.getElementByID("myDropdown").classList.toggle("show");
}
function validate()
{
	var r1=change();
	var r2=change();
	var r3=myfunction();
	if(r1&&r2&&r3)
	{
		return true;
	}
	else
	{
		return false;
	}
}