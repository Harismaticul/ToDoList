using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.BLL
{
    public class UpdateItemWithIdDTO
    {
        public string NewDescripton { get; set; }

        public ItemStates NewState { get; set; }
    }
}
