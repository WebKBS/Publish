using Microsoft.AspNetCore.Mvc;

namespace Airdropper.Controllers
{
    public class GuideController : Controller
    {
        public IActionResult UseGuide()
        {
            return View();
        }
        public IActionResult PriceGuide()
        {
            return View();
        }
    }
}
