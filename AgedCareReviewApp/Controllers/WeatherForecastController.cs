using AgedCareReviewApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgedCareReviewApp.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };
    
    private readonly ILogger<WeatherForecastController> _logger;
    private readonly ApplicationContext _dbContext;

    
    public WeatherForecastController(ILogger<WeatherForecastController> logger, ApplicationContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpGet]
    public List<WeatherForecast> Get()
    {
        return _dbContext.WeatherForecasts.ToList();
    }
    
}