using Microsoft.EntityFrameworkCore;

namespace Foodit_MVC.Models
{
    public class UserInfo : DbContext
    {
        public UserInfo(DbContextOptions<UserInfo> options)
        : base(options)
        {

        }
        public DbSet<User> Users {get;set;}
    }
}