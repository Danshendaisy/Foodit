using System;
using System.Collections.Generic;

namespace Foodit_MVC.Models

{
    public class User {
        public string UserName { get; set;}

        public string UserPassword { get; set;}

        public string UserId { get; set;}
       
        public int UserFooditCoins { get; set;}

        public string UserAddress { get; set;}

        public int UserPhoneNumber { get; set;}

        public string UserEmail { get; set;}

        public List<Item> UserItems { get; set;}
    }
}