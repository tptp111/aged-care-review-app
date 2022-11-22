using Npgsql;

namespace AgedCareReviewApp.Models;

public static class FacilitySearchResultRepo
{
    //todo configurable connString for prod
    public static string connectionString = "Host=localhost:5432;Username=;Password=;Database=aged-care-review;";
    
    public static List<FacilitySearchResultView> GetFacilitySearchResults()
    {
        string query = @"SELECT * FROM public.""FacilitySearchResultView"" order by ""AverageOverallScore"" desc;";

        List<FacilitySearchResultView> facilitySearchResultViewList = new List<FacilitySearchResultView>();
        try
        {
            using (var conn = new NpgsqlConnection(connectionString))
            {
                conn.Open();
                using (var command = new NpgsqlCommand(query, conn))
                {
                    var reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        FacilitySearchResultView facilitySearchResultView = new FacilitySearchResultView();
                        facilitySearchResultView.Id = reader.GetInt32(0);
                        facilitySearchResultView.FacilityName = reader.GetString(1);
                        facilitySearchResultView.Street = reader.GetString(2);
                        facilitySearchResultView.Postcode = reader.GetString(3);
                        facilitySearchResultView.SuburbName = reader.GetString(4);
                        facilitySearchResultView.Region = reader.GetString(5);
                        facilitySearchResultView.Description = reader.GetString(6);
                        facilitySearchResultView.Amenities = reader.GetString(7);
                        facilitySearchResultView.FacilityClassification = reader.GetString(8);
                        facilitySearchResultView.FacilityImagePath = reader.GetString(9);
                        facilitySearchResultView.OverallScore = Math.Round(reader.GetDouble(10), 1);
                        facilitySearchResultView.QualityOfCareScore = Math.Round(reader.GetDouble(11),1);
                        facilitySearchResultView.StaffScore = Math.Round(reader.GetDouble(12), 1);
                        facilitySearchResultView.FoodScore = Math.Round(reader.GetDouble(13), 1);
                        facilitySearchResultView.SafetyScore = Math.Round(reader.GetDouble(14),1);
                        facilitySearchResultView.ActivityProgramsScore = Math.Round(reader.GetDouble(15),1);
                        facilitySearchResultView.AmenitiesScore = Math.Round(reader.GetDouble(16),1);
                        facilitySearchResultView.TotalNumberOfReviews = reader.GetInt32(17);
                        facilitySearchResultViewList.Add(facilitySearchResultView);
                    }
                    reader.Close();
                }
            }
        }
        catch (Exception exception)
        {
            Console.WriteLine("Unable to process reading table due to error= {}", exception);
        }
        return facilitySearchResultViewList;
    }
}