using System.Text.RegularExpressions;

namespace WebLoginWizard.Server
{
    public class ValidationService
    {
        public ValidationService()
        {
            
        }

        public bool ValidateEmail(string email)
        {
            string pattern = @"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
            Regex regex = new Regex(pattern);

            return regex.IsMatch(email);
        }

        public bool ValidatePhoneNumber(string phoneNumber)
        {
            string pattern = @"^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$";
            Regex regex = new Regex(pattern);

            return regex.IsMatch(phoneNumber);
        }

        public string GenerateCode()
        {
            Random random = new Random();
            int code = random.Next(100000, 999999);

            return code.ToString();
        }

        public string GetVerificationCode()
        {
            Random random = new Random();
            int code = random.Next(100000, 999999);

            return code.ToString();
        }
    }
}