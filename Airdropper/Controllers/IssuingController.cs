using Microsoft.AspNetCore.Mvc;

namespace Airdropper.Controllers
{
    public class IssuingController : Controller
    {
        public IActionResult Issuing()
        {
            return View();
        }

        public IActionResult Complete()
        {
            return View();
        }
    }
}
