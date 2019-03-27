using System;
using Microsoft.AspNetCore.Mvc;
using Foodit_MVC.Models;

namespace Foodit_MVC.Api.Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly UserInfo db;
        public HomeController(UserInfo db)
        {
            this.db=db;
            if (this.db.Users.Count()==0)
            {
                this.db.Users.Add(new User()
                {
                    
                });
            }
        }
        public IActionResult Index()
        {
            return Content("Home");
     
        }
    }
}