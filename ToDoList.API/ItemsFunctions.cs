using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ToDoList.BLL;
using System.Collections.Generic;

namespace ToDoList.API
{
    public class ItemsFunctions
    {
        private ToDoItemManager itemManager;

        public ItemsFunctions(ToDoListDbContext context)
        {
            itemManager = new ToDoItemManager(context);
        }

        [FunctionName("AddItem")]
        public ActionResult<ToDoItem> AddItem(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "item")] HttpRequest req,
            ILogger log)
        {
            AddItemDTO addItemData = null;
            try
            {
                string requestBody = new StreamReader(req.Body).ReadToEnd();
                addItemData = JsonConvert.DeserializeObject<AddItemDTO>(requestBody);
                var addedItem = itemManager.AddItem(addItemData);
                return addedItem;
            }
            catch (Exception e)
            {
                var rezult = new ObjectResult(e);
                rezult.StatusCode = StatusCodes.Status500InternalServerError;
                return rezult;
            }
        }

        [FunctionName("GetAllItems")]
        public ActionResult<List<ToDoItem>> GetAllItems(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "item")] HttpRequest req,
            ILogger log)
        {
            try
            {
                List<ToDoItem> allItems = itemManager.GetAllItems();
                return allItems;
            }
            catch (Exception e)
            {
                var rezult = new ObjectResult(e);
                rezult.StatusCode = StatusCodes.Status500InternalServerError;
                return rezult;
            }
        }

        [FunctionName("GetItemWithId")]
        public ActionResult<ToDoItem> GetItemWithId(
           [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "item/{id}")] HttpRequest req, int id,
           ILogger log)
        {
            try
            {
                ToDoItem correspondingItem = itemManager.GetItmeWithId(id);
                if (correspondingItem == null)
                    return new NotFoundResult();
                else
                    return correspondingItem;
            }
            catch (Exception e)
            {
                var rezult = new ObjectResult(e);
                rezult.StatusCode = StatusCodes.Status500InternalServerError;
                return rezult;
            }
        }


        [FunctionName("UpdateItemWithId")]
        public ActionResult<ToDoItem> UpdateItemWithId(
            [HttpTrigger(AuthorizationLevel.Anonymous, "patch", Route = "item/{id}")] HttpRequest req, int id,
            ILogger log)
        {
            try
            {
                string requestBody = new StreamReader(req.Body).ReadToEnd();
                UpdateItemWithIdDTO updateData = JsonConvert.DeserializeObject<UpdateItemWithIdDTO>(requestBody);

                ToDoItem updatedItem = itemManager.UpdateItemWithId(id, updateData);
                if (updatedItem == null)
                    return new NotFoundResult();
                else
                    return updatedItem;

            }
            catch (Exception e)
            {
                var rezult = new ObjectResult(e);
                rezult.StatusCode = StatusCodes.Status500InternalServerError;
                return rezult;
            }
        }

        [FunctionName("DeleteItemWithId")]
        public ActionResult DeleteItemWithId(
            [HttpTrigger(AuthorizationLevel.Anonymous, "delete", Route = "item/{id}")] HttpRequest req, int id,
            ILogger log)
        {
            try
            {
                bool success = itemManager.DeleteItemWithId(id);
                if (!success)
                    return new NotFoundResult();
                else
                    return new OkResult();

            }
            catch (Exception e)
            {
                var rezult = new ObjectResult(e);
                rezult.StatusCode = StatusCodes.Status500InternalServerError;
                return rezult;
            }
        }
    }
}
