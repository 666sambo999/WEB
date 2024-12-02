using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;


namespace WebMVCMove.Controllers
{
	public class HelloWorldController : Controller
	{
		//public IActionResult Index()
		//{
		//	return View("./Views/New/Index.cshtml");
		//}
		//public string Index(int i)
		//{
		//	return "Это моя страница...../";
		//}
		//public string Welcome(string name, int numtime=1)
		//{
		//	//return "this is the active method....";
		//	return HtmlEncoder.Default.Encode($"Hello{name}, numtime is {numtime}");
		//}
		public IActionResult Welcome(string name, int runTime)
		{
			ViewData["message"] = $"Hello{name}";
			ViewData["runTime"] = runTime;
			return View("./Views/New/Welcome.cshtml");
		}
	}
}
