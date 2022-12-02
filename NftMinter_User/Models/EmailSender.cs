using MimeKit;
using System;
using AliceUtil;

namespace Email.Services
{
    public class MailAccountInfo
    {
        public string smtpServer = "smtp.beget.com";
        public string fromAddress = "contact@digtoc.com";//"contact@nftvalley.io";
        public string fromAddressTitle = "NftValley.io";
        public string username = "contact@digtoc.com";//"contact@nftvalley.io";
        public string password = "Digtoc2022#@!";//"vstro2017@!";        
        public string authentication = "plain";
        public bool enableSsl = true;
        public int smtpPort = 465;
    }

    // 보안수준을 수정해야만 가능하다
    //https://myaccount.google.com/lesssecureapps?pli=1
    public static class EmailSender
    {

        public static MailAccountInfo MailAccount = new MailAccountInfo();
        
        public static (bool Success, string ErrorStr) Send(string toAddress, string toUserName, string subject, string body, bool sendAsync = false)
        {

            var mimeMessage = new MimeMessage();
            mimeMessage.From.Add(new MailboxAddress(MailAccount.fromAddressTitle, MailAccount.fromAddress));
            mimeMessage.To.Add(new MailboxAddress(toUserName, toAddress));
            mimeMessage.Subject = subject;
 

            BodyBuilder bodyBuilder = new BodyBuilder()
            {
                HtmlBody = body
            };
            //ImageBuilder(bodyBuilder);
            mimeMessage.Body = bodyBuilder.ToMessageBody();


            try
            {
                using (var client = new MailKit.Net.Smtp.SmtpClient())
                {
                    client.Connect(MailAccount.smtpServer, MailAccount.smtpPort, MailAccount.enableSsl);
                    client.Authenticate(MailAccount.username, MailAccount.password);
                    //client.MessageSent += ClientMailAccount.MessageSent;
                    if (sendAsync)
                    {
                        // 다중으로 보낼때는 필요하다. 하지만 결과를 받는 것이 더 중요하기 때문에 여기서 처리하지 않았다.
                        //await client.SendAsync(mimeMessage);
                    }
                    else
                    {
                        client.Send(mimeMessage);
                    }
                    client.Disconnect(true);
                }
            }
            catch (Exception ex)
            {
                
                zDebug.Error(ex.Message + " " + ex.InnerException?.Message);
                return (false, ex.Message + " " + ex.InnerException?.Message);
            }
            return (true, "");
        }

        private static void Client_MessageSent(object sender, MailKit.MessageSentEventArgs e)
        {
            throw new NotImplementedException();
        }
    }
}