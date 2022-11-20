using AgedCareReviewApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgedCareReviewApp.Controllers;

[ApiController]
[Route("[controller]")]
public class FacilitySearchResultController : ControllerBase
{
    
    private readonly ApplicationContext _dbContext;

    
    public FacilitySearchResultController( ApplicationContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public async Task<List<FacilitySearchResultView>> Get()
    {
        return FacilitySearchResultRepo.GetFacilitySearchResults();
    }
}