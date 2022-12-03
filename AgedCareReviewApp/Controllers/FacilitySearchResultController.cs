using System.Collections;
using AgedCareReviewApp.Models;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgedCareReviewApp.Controllers;

[ApiController]
[Route("[controller]")]
public class FacilitySearchResultController : ControllerBase
{
    private readonly ApplicationContext _dbContext;


    public FacilitySearchResultController(ApplicationContext dbContext)
    {
        _dbContext = dbContext;
    }

    // [HttpGet]
    [HttpGet("{postcode}")]
    public async Task<List<FacilitySearchResultView>> Get(string postcode)
    {
        Console.WriteLine(postcode);
        if (postcode.Length == 4 && postcode[0] == '3')
        {
            return FacilitySearchResultRepo.GetFacilitySearchResults(postcode);
        }
        else if (postcode == "0000")
        {
            return FacilitySearchResultRepo.GetFacilitySearchResults();
        }
        return new List<FacilitySearchResultView>();
    }
}