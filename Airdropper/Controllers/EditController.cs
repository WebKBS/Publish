using Microsoft.AspNetCore.Mvc;

namespace Airdropper.Controllers
{
    public class EditController : Controller
    {
        public IActionResult Email()
        {
            return View();
        }

        public IActionResult EditPw()
        {
            return View();
        }
    }
}
