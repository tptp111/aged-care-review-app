namespace AgedCareReviewApp.Models;

public class FacilitySearchResultView
{
    public int Id { get; set; }
    public string FacilityName { get; set; }
    public string Street { get; set; }
    public string Postcode { get; set; }
    public string SuburbName { get; set; }
    public string Region { get; set; }
    public string Description { get; set; }
    public string Amenities { get; set; } 
    public string FacilityClassification { get; set; }
    public string FacilityImagePath { get; set; }
    
    //computed values
    public double OverallScore { get; set; } 
    public double QualityOfCareScore { get; set; }
    public double StaffScore { get; set; } 
    public double FoodScore { get; set; } 
    public double AmenitiesScore { get; set; }     
    public double SafetyScore { get; set; } 
    public double ActivityProgramsScore { get; set; }
    public int TotalNumberOfReviews { get; set; }
}