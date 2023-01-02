using Microsoft.AspNetCore.Mvc;

namespace Airdropper.Controllers
{
    public class AirdropController : Controller
    {
        public IActionResult Airdrop()
        {
            return View();
        }

        public IActionResult Payment()
        {
            return View();
        }

        public IActionResult Complete()
        {
            return View();
        }

        public IActionResult Snapshot()
        {
            return View();
        }
        public IActionResult SnapComplete()
        {
            return View();
        }
    }
}
