using Microsoft.AspNetCore.Mvc;

namespace DFlo_Admin.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
