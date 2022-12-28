using Microsoft.AspNetCore.Mvc;

namespace AirdropperAdmin.Controllers
{
    public class HistoryController : Controller
    {
        public IActionResult History()
        {
            return View();
        }
    }
}
