using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ToDoList.BLL
{
    public class ToDoItem
    {
        [Key]
        public int ID { get; set; }

        public string Description { get; set; }

        public DateTime CreatedAt { get; set; }

        public ItemStates State { get; set; }
    }
}
