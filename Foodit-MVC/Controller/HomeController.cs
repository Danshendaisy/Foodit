using System;
using Microsoft.AspNetCore.Mvc;

namespace Foodit_MVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Content("Home");
     
        }
    }
}