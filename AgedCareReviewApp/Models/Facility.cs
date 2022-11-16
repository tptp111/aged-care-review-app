using System.ComponentModel.DataAnnotations;

namespace AgedCareReviewApp.Models;

public class Facility
{
    public int Id { get; set; }
    [Required]
    public string FacilityName { get; set; }
    [Required]
    public string Street { get; set; }
    [Required]
    public string Postcode { get; set; }
    [Required]
    public string SuburbName { get; set; }
    [Required]
    public string Region { get; set; }
    [Required]
    public string Description { get; set; }
    [Required]
    public string Amenities { get; set; } 
    [Required]
    public string FacilityClassification { get; set; }
    [Required]
    public string FacilityImagePath { get; set; }
}