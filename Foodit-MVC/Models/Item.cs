using System;

namespace Foodit_MVC.Models{


 public class Item {
    public string ItemId {get;set;}
    public string ItemDescription {get;set;}
    public int ItemSoldPrice {get;set;}
    public int ItemHighestBid {get;set;}


    public string SellerUserId {get;set;}
    public User Seller {get;set;}


    public string BuyerUserId {get;set;}
    public User Buyer {get;set;}


    public string MyTransId  {get;set;}
    public Transaction MyTrans {get;set;}
 }
}