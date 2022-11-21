using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace AgedCareReviewApp.Models;

public class ApplicationContext : ApiAuthorizationDbContext<User>
{
    public ApplicationContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
    {
    }

    public DbSet<WeatherForecast> WeatherForecasts { get; set; }
    public DbSet<Facility> Facilities { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<Suburb> Suburbs { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<GovernmentValidation> GovernmentValidations { get; set; }

}