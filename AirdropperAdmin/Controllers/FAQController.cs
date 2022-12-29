using Microsoft.AspNetCore.Mvc;

namespace AirdropperAdmin.Controllers
{
    public class FAQController : Controller
    {
        public IActionResult FAQ()
        {
            return View();
        }

        public IActionResult Post()
        {
            return View();
        }
    }
}
