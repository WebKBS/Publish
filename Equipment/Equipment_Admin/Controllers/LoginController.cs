using Microsoft.AspNetCore.Mvc;

namespace Equipment_Admin.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult SignUp()
        {
            return View();
        }
    }
}
