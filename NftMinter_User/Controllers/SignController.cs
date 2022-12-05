
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using Tracking.Models;

namespace NftMinter_User.Controllers
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

        public IActionResult Login2()
        {
            return View();
        }

        public IActionResult Password2()
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
