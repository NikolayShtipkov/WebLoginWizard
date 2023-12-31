﻿using Microsoft.AspNetCore.Mvc;
using WebLoginWizard.Models;
using WebLoginWizard.Server;

namespace WebLoginWizard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServerController : ControllerBase
    {
        private static ValidationService _validationService;
        private readonly IHttpContextAccessor _contextAccessor;

        public ServerController(
            ValidationService validationService,
            IHttpContextAccessor contextAccessor)
        {
            _validationService = validationService;
            _contextAccessor = contextAccessor;
        }

        [HttpPost]
        public IActionResult ValidateData([FromBody]ValidationModel model)
        {
            string email = model.Email;
            string number = model.PhoneNumber;

            bool isEmailValid = _validationService.ValidateEmail(email);
            bool isNumberValid = _validationService.ValidatePhoneNumber(number);

            if (isEmailValid && isNumberValid)
            {
                string code = _validationService.GenerateCode();

                _contextAccessor.HttpContext.Session.SetString("email", email);
                _contextAccessor.HttpContext.Session.SetString("number", number);
                _contextAccessor.HttpContext.Session.SetString("code", code);

                Console.WriteLine(code);

                return Ok();
            }

            return BadRequest();
        }

        //Used to test if API endpoints can be hit
        [HttpGet("/api/Server/ValidateCopy")]
        public IActionResult ValidateDataCopy()
        {
            string email = "pesho";

           
            return Ok();
        }

        [HttpPost("/api/Server/Code/{code}")]
        public IActionResult VerifyCode(string code)
        {
            string correctCode = _contextAccessor.HttpContext.Session.GetString("code");

            if (code == correctCode)
            {
                return Ok();
            }

            return BadRequest();
        }
    }
}
