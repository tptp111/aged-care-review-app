using Microsoft.EntityFrameworkCore;

namespace AgedCareReviewApp.Models;

public class ApplicationContext : DbContext
{
    public ApplicationContext(DbContextOptions<ApplicationContext> context) : base(context)
    {
        
    }
    
    public DbSet<WeatherForecast> WeatherForecasts { get; set; }
}