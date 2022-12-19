using Microsoft.AspNetCore.Mvc;

namespace Airdropper.Controllers
{
    public class AirdropController : Controller
    {
        public IActionResult Airdrop()
        {
            return View();
        }
    }
}
