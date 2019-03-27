using System;
using Microsoft.AspNetCore.Mvc;
using Foodit_MVC.Models;
using System.Linq;

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
            if (this.db.Users.Count() == 0)
            {
                this.db.Users.Add(new User()
                {
                    UserName = "DanShenDaisy",
                    UserEmail = "123@321.com",
                    UserAddress="111 Lane Ave",
                    UserId="110119",
                    UserFooditCoins=1000,
                    
                });
                this.db.SaveChanges();
            }
        }
        [HttpGet]
         public IActionResult GetAction()
         {
             return Ok(db.Users);
         }
    }
}