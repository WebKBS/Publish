using Microsoft.AspNetCore.Mvc;

namespace Airdropper.Controllers
{
    public class MyInfoController : Controller
    {
        public IActionResult Profile()
        {
            return View();
        }


        public IActionResult UsageHistory()
        {
            return View();
        }

        public IActionResult Withdrawal()
        {
            return View();
        }
        public IActionResult MyGallery()
        {
            return View();
        }
        public IActionResult WithdrawalComp()
        {
            return View();
        }
    }
}
