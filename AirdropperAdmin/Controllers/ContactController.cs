using Microsoft.AspNetCore.Mvc;

namespace AirdropperAdmin.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Post()
        {
            return View();
        }
    }
}
