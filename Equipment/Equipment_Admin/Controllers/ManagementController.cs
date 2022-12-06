using Microsoft.AspNetCore.Mvc;

namespace Equipment_Admin.Controllers
{
    public class ManagementController : Controller
    {
        public IActionResult Supplier()
        {
            return View();
        }

        public IActionResult Manager()
        {
            return View();
        }
        public IActionResult Payment()
        {
            return View();
        }
        public IActionResult Assignment()
        {
            return View();
        }
    }
}
