-- View: public.FacilitySearchResultView

-- DROP VIEW public."FacilitySearchResultView";

CREATE OR REPLACE VIEW public."FacilitySearchResultView"
 AS
SELECT f."Id",
       f."FacilityName",
       f."Street",
       f."Postcode",
       f."SuburbName",
       f."Region",
       f."Description",
       f."Amenities",
       f."FacilityClassification",
       f."FacilityImagePath",
       avg(r."OverallScore") AS "AverageOverallScore",
       avg(r."QualityOfCareScore") AS "AverageQualityOfCareScore",
       avg(r."StaffScore") AS "AverageStaffScore",
       avg(r."FoodScore") AS "AverageFoodScore",
       avg(r."SafetyScore") AS "AverageSafetyScore",
       avg(r."ActivityProgramsScore") AS "AverageActivityProgramsScore",
       avg(r."AmenitiesScore") AS "AverageAmenitiesScore",
       count(*) AS "NumberOfReveiws"
FROM "Facilities" f
         LEFT JOIN "Reviews" r ON r."FacilityName" = f."FacilityName"
GROUP BY f."Id";

ALTER TABLE public."FacilitySearchResultView"
    OWNER TO postgres;

