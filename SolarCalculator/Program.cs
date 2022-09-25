using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SolarCalculator.Data;
using SolarCalculator.Models;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<SolarCalculatorContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

//Datenbank füllen
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    SeedData.Initialize(services);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

//app.UseAuthentication();
//app.UseAuthorization();

app.MapControllerRoute(
    name: "home",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "solarCalculator",
    pattern: "{controller=SolarCalculator}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "Nutzer",
    pattern: "{controller=SolarCalculator}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "Anbieter",
    pattern: "{controller=SolarCalculator}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "Vertrag",
    pattern: "{controller=SolarCalculator}/{action=Index}/{id?}");

//app.MapRazorPages();

app.Run();