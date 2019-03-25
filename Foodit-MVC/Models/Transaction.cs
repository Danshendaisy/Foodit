using System;

namespace Foodit_MVC.Models
{
    public class Transaction
    {
        public string Trans_Id{get;set;}
        public DateTime Trans_Date{get;set;}
        public int Trans_Amount{get;set;}
        public string Trans_Buyer_Id{get;set;}
        public string Trans_Seller_Id{get;set;}
        public string Trans_Item_Id{get;set;}

    }
}