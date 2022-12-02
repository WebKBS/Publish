using AliceUtil;
using DataStructure;
using Email.Services;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using Tracking.Models;

namespace NftMinter_User.Controllers
{
    public class SignController : BaseController
    {
        private readonly ILogger<SignController> _logger;

        public SignController(DatabaseContext _Tables, ILogger<SignController> logger)
        {
            Tables = _Tables;
            _logger = logger;
        }

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

        [HttpPost]
        public async Task<cResult> SendEmailAuth(string email)
        {
            cResult Result = new cResult() { result = false };

            if (email is null)
            {
                Result.sData = "인증번호를 전송할 이메일을 입력해주세요.";
                return Result;
            }

            tbUser tUser = Tables.tUser.Where(x => x.Email == email).FirstOrDefault();
            Random random = new Random();

            string emailAuth = random.Next(0, 1000000).ToString("000000");

            try
            {
                if (tUser != null)
                {
                    if (tUser.UserState != eUserState.Hold)
                    {
                        Result.sData = "이미 사용중인 이메일입니다.";
                        return Result;
                    }
                    else
                    {
                        tUser.EmailAuth = emailAuth;

                        Tables.Update(tUser);
                    }
                }
                else
                {
                    tUser = new tbUser()
                    {
                        Email = email,
                        UserState = eUserState.Hold,
                        EmailAuth = emailAuth
                    };
                    Tables.Add(tUser);
                }

                // 이메일 전송부분
                //var resultMail = EmailSender.Send(email, tUser.Email, $"[ NFT Minter ] 회원가입 인증번호", "인증번호 : " + emailAuth);
                //if (resultMail.Success)
                //{
                //    Result.sData = "인증번호가 전송되었습니다.";
                //    Result.result = true;
                //}
                //else
                //{
                //    Result.result = false;
                //    Result.sData = resultMail.ErrorStr;
                //    return Result;
                //}

                Tables.SaveChanges();
            }
            catch (Exception ex)
            {
                Result.result = false;
                Result.sData = ex.Message + " / " + ex.InnerException?.Message;
            }

            return Result;
        }

        [HttpPost]
        public async Task<cResult> CheckValidEmail(string email)
        {
            cResult Result = new cResult() { result = false };

            if (string.IsNullOrEmpty(email))
            {
                Result.sData = "이메일 주소를 입력해주세요.";
                return Result;
            }

            Regex regex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$");
            Match match = regex.Match(email);

            if (!match.Success)
            {
                Result.sData = "이메일 형식이 올바르지 않습니다.";
                return Result;
            }
            tbUser tUser = Tables.tUser.Where(x => x.Email == email && x.UserState != eUserState.Hold).FirstOrDefault();

            if (tUser is not null)
            {
                Result.sData = "이미 사용중인 ID입니다.";
                return Result;
            }

            Result.result = true;
            Result.sData = "사용 가능한 아이디입니다.";

            return Result;
        }

        [HttpPost]
        public async Task<cResult> CheckValidEmailAuth(string email, string emailAuth)
        {
            cResult Result = new cResult() { result = false };

            if (string.IsNullOrEmpty(email))
            {
                Result.sData = "인증번호를 확인할 이메일을 입력해주세요.";
                return Result;
            }

            if (string.IsNullOrEmpty(emailAuth))
            {
                Result.sData = "인증번호를 입력해주세요.";
                return Result;
            }

            tbUser tUser = Tables.tUser.Where(x => x.Email == email && x.UserState == eUserState.Hold).FirstOrDefault();

            if (tUser is null)
            {
                Result.sData = "인증번호를 전송한 기록이 없는 이메일입니다.";
                return Result;
            }
            else if (tUser.EmailAuth != emailAuth)
            {
                Result.sData = "인증번호가 일치하지 않습니다.";
                return Result;
            }
            else
            {
                Result.result = true;
                Result.sData = "이메일 인증이 완료되었습니다.";
            }

            return Result;
        }

        [HttpPost]
        public async Task<cResult> CheckValidNickname(string nickname)
        {
            cResult Result = new cResult() { result = false };

            if (string.IsNullOrEmpty(nickname))
            {
                Result.sData = "사용할 닉네임을 입력해주세요.";
                return Result;
            }

            tbUser tUser = Tables.tUser.Where(x => x.Nickname == nickname).FirstOrDefault();

            if (tUser is not null)
            {
                Result.sData = "이미 사용중인 닉네임입니다.";
                return Result;
            }

            Result.result = true;
            Result.sData = "사용 가능한 닉네임입니다.";


            return Result;
        }
    }
}
