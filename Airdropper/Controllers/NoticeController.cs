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
 
    }
}
