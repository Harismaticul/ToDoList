using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;


[assembly: FunctionsStartup(typeof(ToDoList.API.StartUp))]
namespace ToDoList.API
{
    class StartUp : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            var connectionString = Environment.GetEnvironmentVariable("ToDoListDBConnection");
            builder.Services.AddDbContext<ToDoList.BLL.ToDoListDbContext>(
                options => options.UseSqlServer(
                connectionString,
                // cloud databases can produce failures on cold start, relocation and in other cases
                // use rety on these scenarios
                options => options.EnableRetryOnFailure()));
        }
    }
}
