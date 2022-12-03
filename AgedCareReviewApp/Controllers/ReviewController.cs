using AgedCareReviewApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AgedCareReviewApp.Controllers;

[Authorize]
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
    [HttpGet]
    public List<Review> Get()
    {
        return _dbContext.Reviews.ToList();
    }

    [HttpPost]
    public void Post(Review review)
    {
        review.ReviewValidated = false;

        _dbContext.Add(review);
        _dbContext.SaveChanges();
    }
}