function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iE6dFow7kN":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const url="https://script.google.com/macros/s/AKfycbydN6yX-WwUgrZKhIhIRGFcbEfhWTzZGGCJoZ7VS-abst1op3CAfZvWOdPEabya-gLo/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({ProcessType:player.GetVar("ProcessType"),TotalSalesValue:player.GetVar("TotalSalesValue")})
	}
	)
}

};
