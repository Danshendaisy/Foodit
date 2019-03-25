using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Foodit_MVC.Models

{
    public class User {
        public string User_Name { get; set;}

        public string User_Password { get; set;}

        public string User_Id { get; set;}
       
        public int User_FooditCoins { get; set;}

        public string User_Address { get; set;}

        public int User_PhoneNumber { get; set;}

        public string User_Email { get; set;}
    }
}