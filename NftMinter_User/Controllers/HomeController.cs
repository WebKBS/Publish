using DataStructure;
using Microsoft.AspNetCore.Mvc;
using NftMinter_User.Models;
using System.Diagnostics;

namespace NftMinter_User.Controllers
{
    public class HomeController : BaseController
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(DatabaseContext _Tables, ILogger<HomeController> logger)
        {
            _logger = logger;
            Tables = _Tables;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}