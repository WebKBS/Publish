using Microsoft.AspNetCore.Mvc;

namespace Airdropper.Controllers
{
    public class NoticeController : Controller
    {
        public IActionResult Notice()
        {
            return View();
        }

        public IActionResult NoticeView()
        {
            return View();
        }
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
