alert("Здравствуйте, сейчас мы пройдём быструю регистрацию и вы сможете пользоваться сайтом дальше.");
var name = prompt("Введите своё имя или nickname.");
while(name.length == 0 || name == null) {
	alert("Имя не должно быть пустым!");
	name = prompt("Введите своё имя.");
	if (name.length > 0 && name != null) {
		break;
	}
}
	alert("Хорошо, " + name + " давайте перейдём к следующему пункту.")
var age  = prompt("Введите сюда свой возраст:");
if (age < 18) {
	alert("Доступ запрещён! Вы должны быть старше 18 лет!");
}
else {
	alert("Хорошо, давайте пройдём дальше.");
	var newsletter = confirm("Вы подписаны на нашу рассылку?");
	if (newsletter == true) {
		alert("Поздравляем, " + name + ", теперь вы можете пользоваться сайтом!");
	console.log("Пользователь допущен.")
	}
	else {
		alert("Вы не подписаны!? Подпишитесь! Мы подождём... А когда подпишитесь, тогда приходите снова.");
	}
}

