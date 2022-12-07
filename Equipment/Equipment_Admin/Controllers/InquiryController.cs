using Microsoft.AspNetCore.Mvc;

namespace Equipment_Admin.Controllers
{
    public class InquiryController : Controller
    {
        public IActionResult Inquiry()
        {
            return View();
        }
        public IActionResult InquiryPost()
        {
            return View();
        }
    }
}
