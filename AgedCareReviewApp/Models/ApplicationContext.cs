using Microsoft.EntityFrameworkCore;

namespace AgedCareReviewApp.Models;

public class ApplicationContext : DbContext
{
    public ApplicationContext(DbContextOptions<ApplicationContext> context) : base(context)
    {
        
    }
    
    public DbSet<WeatherForecast> WeatherForecasts { get; set; }
    public DbSet<Facility> Facilities { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<Suburb> Suburbs { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<GovernmentValidation> GovernmentValidations { get; set; }

}