
using Microsoft.AspNetCore.Mvc;

namespace Airdropper.Controllers
{
    public class SignController : Controller
    {
     
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Password()
        {
            return View();
        }

        public IActionResult ChangePassword()
        {
            return View();
        }
        public IActionResult SignUp()
        {
            return View();
        }
        public IActionResult SignUpInfo(bool ConsentMarketing)
        {
            ViewBag.ConsentMarketing = ConsentMarketing;
            return View();
        }

        public IActionResult Complete()
        {
            return View();
        }
    }
}
