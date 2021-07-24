using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.BLL
{
    public class ToDoListDbContext : DbContext
    {
        public ToDoListDbContext(DbContextOptions<ToDoListDbContext> options)
            : base(options)
        {

        }

        public DbSet<ToDoItem> ToDoItemsData { get; set; }
    }
}
