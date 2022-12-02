using Microsoft.AspNetCore.Mvc;

namespace NftMinter_User.Controllers
{
    public class NoticeController : Controller
    {
        public IActionResult Notice()
        {
            return View();
        }

        public IActionResult NoticeView()
        {
            return View();
        }
        public IActionResult FAQ()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
    }
}
