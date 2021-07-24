using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.BLL
{
    public class ToDoListDbContextFactory : IDesignTimeDbContextFactory<ToDoListDbContext>
    {
        public ToDoListDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<ToDoListDbContext>();
            var connectionString = Environment.GetEnvironmentVariable("ToDoListDBConnection");
            optionsBuilder = optionsBuilder.UseSqlServer(
                connectionString,
                // cloud databases can produce failures on cold start, relocation and in other cases
                // use rety on these scenarios
                options => options.EnableRetryOnFailure());
            return new ToDoListDbContext(optionsBuilder.Options);
        }
    }
}
