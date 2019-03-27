using System;
using Foodit_MVC.Models;

namespace Foodit_MVC.Models
{
    public class Transaction
    {
        public string TransId{get;set;}
        public DateTime TransDate{get;set;}
        public int TransAmount{get;set;}
        public User TransBuyer { get; set;}
        //public string Trans_Buyer_Id{get;set;}
        public User TransSeller{get;set;}
        public string TransItem{get;set;}

    }
}