using Microsoft.AspNetCore.Mvc;

namespace Equipment_Admin.Controllers
{
    public class StatusController : Controller
    {
        public IActionResult Status()
        {
            return View();
        }
    }
}
