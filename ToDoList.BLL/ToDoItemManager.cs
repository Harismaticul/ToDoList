using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ToDoList.BLL
{
    public class ToDoItemManager
    {
        private readonly ToDoListDbContext _context;

        public ToDoItemManager(ToDoListDbContext context)
        {
            _context = context;
        }

        public ToDoItem AddItem(AddItemDTO addItemData)
        {
            ToDoItem newItemToAdd = new ToDoItem()
            {
                CreatedAt = DateTime.Now,
                Description = addItemData.Description,
                State = ItemStates.New
            };

            _context.Add(newItemToAdd);
            _context.SaveChanges();
            return newItemToAdd;
        }

        public List<ToDoItem> GetAllItems()
        {
            return _context.ToDoItemsData.ToList();
        }

        public ToDoItem GetItmeWithId(int id)
        {
            return _context.ToDoItemsData.Find(id);
        }

        public ToDoItem UpdateItemWithId(int id, UpdateItemWithIdDTO updateData)
        {
            ToDoItem itemToUpdate = _context.ToDoItemsData.Find(id);
            if (itemToUpdate == null)
                return null;

            itemToUpdate.Description = updateData.NewDescripton;
            itemToUpdate.State = updateData.NewState;
            _context.SaveChanges();

            return itemToUpdate;
        }

        public bool DeleteItemWithId(int id)
        {
            ToDoItem itemToDelete = _context.ToDoItemsData.Find(id);
            if (itemToDelete == null)
                return false;

            _context.Remove(itemToDelete);
            _context.SaveChanges();


            return true;
        }
    }
}
