# Aged Care Review Web Application
## Description
- ASP.NET Core Web Application
- React Front End
- Entity Framework Core (Code First) is used for generating DB Schema

## Setup
### .NET Version
.NET 6.0 is required to run this app - download from https://dotnet.microsoft.com/en-us/download/dotnet/6.0  
Verify this is installed properly with `dotnet --list-sdks`

### Update Node Packages
Navigate to the ClientApp folder and run: `npm install`  
(Make sure you have node installed - if not go to https://nodejs.org/en/download/)

### Set Up Local Postgres Database
The local database instance is used for development. Follow these steps to set up a local Postgres instance:
1. Install Postgres from https://www.postgresql.org/download/ (if on Mac the Postgres.app is the easiest way to get started).
2. Once installed, run `createdb AgedCareReviewsLocal` to create a local db instance.
3. Start up the local Postgres server ensuring that it's running on port 5432.

#### Database Migrations
Once the local db is set up, run ``dotnet ef database update`` from within the .NET project. This should populate your local database with the schema generated from the previous migrations.  
If you don't have entity framework installed run: `dotnet tool install --global dotnet-ef`

## Starting the App
The app can be started by doing any one of the three options below:
- Hitting run in IDE (run configurations should already be set up)
- Navigate into the AgedCareReviewApp project and use the command `dotnet run`
- Navigate into the ClientApp directory and use the command `npm start`