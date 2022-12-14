using AgedCareReviewApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AgedCareReviewApp.Controllers;

[ApiController]
[Route("[controller]")]
public class ReviewController
{
    private readonly ApplicationContext _dbContext;
    
    public ReviewController(ApplicationContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    [AllowAnonymous]
    [HttpGet("{facilityName}")]
    public List<Review> Get(string facilityName)
    {
        
        return _dbContext.Reviews.Where(r => r.FacilityName == facilityName && r.ReviewValidated == true).ToList();
    }

    [HttpPost]
    public void Post(Review review)
    {
        review.ReviewValidated = false;

        _dbContext.Add(review);
        _dbContext.SaveChanges();
    }
}