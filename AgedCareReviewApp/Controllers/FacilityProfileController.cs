using AgedCareReviewApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgedCareReviewApp.Controllers;

[ApiController]
[Route("[controller]")]
public class FacilityProfileController : ControllerBase
{
    
    private readonly ApplicationContext _dbContext;
    
    public FacilityProfileController( ApplicationContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet("{facilityName}")]
    public async Task<FacilitySearchResultView> Get(string facilityName )
    {
        Console.WriteLine(facilityName);
        return FacilitySearchResultRepo.GetSingleFacilityProfileView(facilityName);
    }
}