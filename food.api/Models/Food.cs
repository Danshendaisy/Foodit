using System;

namespace Foodit.Api.Models{


 public class Food {
    public int Id {get;set;}

    public string Name{get;set;}
    public string Description {get;set;}
    public int Price{get;set;}

    public int Quantity{get;set;}

    public string image{get;set;}


   //  public string MyTransId  {get;set;}
   //      public int Id { get; internal set; }

       
   //      public Transaction MyTrans {get;set;}
    }
}