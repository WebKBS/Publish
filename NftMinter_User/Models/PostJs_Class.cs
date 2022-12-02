using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tracking.Models
{

    public class cResult
    {
        public bool result { get; set; }
        public string sData { get; set; }
        public int iData { get; set; }
    }

    public class cNoticeResult : cResult
    {
        public string title { get; set; }
    }

    public class cDropDownCtrl
    {
        public Dictionary<string, string> sValue { get; set; }
        public Dictionary<string, bool> bValue { get; set; }
        public Dictionary<string, int> iValue { get; set; }
    }


    /// <summary>
    /// ViewBag 을 이용해서 View 로 넘긴다. cDropDownCtrl 를 사용하면 Select 에서 처리가 안된다.
    /// </summary>

    public class cDropDownList
    {
        public string Text { get; set; }
        public string sValue { get; set; }
        public int iValue { get; set; }
    }

    public class cSelectParam
    {
        public int SelectIndex { get; set; }
        public string SelectStr { get; set; }
        public bool SelectBool { get; set; }

        public float SelectFloat { get; set; }
    }


    public class cTableResult : cResult
    {
        public string AuthorizeKey { get; set; }
        public string selectMemberStr { get; set; }
        public string tableRows { get; set; }
        public string navStr { get; set; }
        public string searchStr { get; set; }
        public int pagePos { get; set; }
        public int pageCnt { get; set; }
        public int SearchPart { get; set; }        
        public int SearchIdx { get; set; }
        public int SearchSubIdx { get; set; }
        public string SelectHour { get; set; }
        public string SelectDate { get; set; }

    }

    public class ag_Login
    {
        public string username { get; set; }
        public string password { get; set; }
    }
}
