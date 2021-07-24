using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using ToDoList.BLL;

namespace ToDoList.BLL.Tests
{
    public class ToDoItemManagerTests
    {
        private DbContextOptions<ToDoListDbContext> inMemoryContextOptions =
            new DbContextOptionsBuilder<ToDoListDbContext>().UseInMemoryDatabase("WorkshopTodoItems").Options;

        ToDoItemManager managerToTest;

        [SetUp]
        public void Setup()
        {
            var context = new ToDoListDbContext(inMemoryContextOptions);
            managerToTest = new ToDoItemManager(context);
        }

        [Test]
        public void AddItemTest()
        {
            // set up (arrange)
            var addItemData = new AddItemDTO() { Description = "Test text." };

            // do (act)
            var addedItem = managerToTest.AddItem(addItemData);

            // check (assert)
            Assert.AreEqual(addItemData.Description, addedItem.Description);
        }

        [Test]
        public void UpdateItemTest()
        {
            // set up (arrange)
            var addItemData = new AddItemDTO() { Description = "Test text." };
            var addedItem = managerToTest.AddItem(addItemData);
            UpdateItemWithIdDTO updateData = new UpdateItemWithIdDTO()
            {
                NewDescripton = "New text.",
                NewState = ItemStates.Started
            };

            // do (act)
            var updatedItem = managerToTest.UpdateItemWithId(addedItem.ID, updateData);

            // check (assert)
            Assert.AreEqual(addedItem.ID, updatedItem.ID);
            Assert.AreEqual(updateData.NewDescripton, updatedItem.Description);
            Assert.AreEqual(updateData.NewState, updatedItem.State);
            Assert.AreEqual(addedItem.CreatedAt, updatedItem.CreatedAt);
        }
    }
}