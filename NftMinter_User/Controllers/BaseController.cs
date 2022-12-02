using DataStructure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace NftMinter_User.Controllers
{
    
    public class BaseController : Controller
    {
        public readonly IHttpContextAccessor _httpContextAccessor;
        public int TableRowCount = 10;
        public DatabaseContext Tables;

        public BaseController(IHttpContextAccessor httpContextAccessor)
        {
            this._httpContextAccessor = httpContextAccessor;
        }

        public BaseController() { }

        
        public string Identity_Name { get { return HttpContext.User.Identity.Name; } }
        public int Identity_Idx_User { get { return int.Parse(HttpContext.User.Claims.Where(x => x.Type == "Idx_User").FirstOrDefault().Value); } }
        public tbUser Identity_tbUser { get { return Tables.tUser.Where(x => x.Idx_User == Identity_Idx_User).FirstOrDefault(); } }

        public string GetIP()
        {
            return HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
        }

        
    }
}
