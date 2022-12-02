using Microsoft.AspNetCore.Mvc;

namespace NftMinter_User.Controllers
{
    public class MyInfoController : Controller
    {
        public IActionResult Profile()
        {
            return View();
        }


        public IActionResult PaymentHistory()
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
