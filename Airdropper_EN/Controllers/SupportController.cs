using Microsoft.AspNetCore.Mvc;

namespace Airdropper.Controllers
{
    public class SupportController : Controller
    {
        public IActionResult FAQ()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
    }
}
