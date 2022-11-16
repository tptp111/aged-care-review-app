using System.ComponentModel.DataAnnotations;

namespace AgedCareReviewApp.Models;

public class Suburb
{
    public int Id { get; set; }
    [Required]
    public string SuburbName { get; set; }
    [Required]
    public string RegionName { get; set; }
}