using Microsoft.AspNetCore.Mvc;

namespace AirdropperAdmin.Controllers
{
    public class NoticeController : Controller
    {
        public IActionResult Notice()
        {
            return View();
        }

        public IActionResult Post()
        {
            return View();
        }
    }
}
