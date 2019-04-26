using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Foodit.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace food.api.Controllers
{
    [Route("/api/food")]
    [ApiController]
    public class FoodsController : ControllerBase
    {
        private readonly FoodContext db;

        public FoodsController(FoodContext db)
        {
            this.db = db;
            if(this.db.Foods.Count()==0)
            {
                this.db.Foods.Add(new Food()
                {
                    Id=1,
                    Name = "Pork",
                    Description="Delicious braised pork",
                    Price = 12,
                    Quantity = 1,
                    image = "assets/pork.jpg",
                    Seller = "David",
                    PlaceToMeet = "Ohio Union"
                });
                this.db.Foods.Add(new Food()
                {
                    Id=2,
                    Name = "Chicken",
                    Description="General Tso Chicken",
                    Price = 10,
                    Quantity = 1,
                    image = "assets/chicken.jpg",
                    Seller = "David",
                    PlaceToMeet = "Ohio Union"
                });

            }
            this.db.SaveChanges();

        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.Foods);
        }
        [HttpGet("{id}",Name="GetFood")]
        public IActionResult GetFood(int id)
        {
            var food = db.Foods.FirstOrDefault(f =>f.Id ==id);

            if(food == null)
            {
                return NotFound();
            }

            return Ok(food);
        }
        [HttpPost]
        public IActionResult Post([FromBody]Food food)
        {
            if(food == null)
            {
                return BadRequest();
            }
            db.Foods.Add(food);
            db.SaveChanges();

        return CreatedAtRoute("GetFood",new {id = food.Id},food);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete (int id)
        {
            var food = db.Foods.FirstOrDefault(f=>f.Id ==id);
            if(food == null)
            {
                return NotFound();
            }
            db.Foods.Remove(food);
            db.SaveChanges();

            return NoContent();
        }    
    }
}