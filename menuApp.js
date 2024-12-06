class Menu {
    constructor(itemManager) {
        this.itemManager = itemManager;
    }

    displayMenu() {
        console.log("Menu:");
        console.log("1. Create Item");
        console.log("2. View Items");
        console.log("3. Delete Item");
        console.log("4. Exit");
    }

    handleChoice(choice) {
        switch (choice) {
            case '1':
                this.itemManager.createItem();
                break;
            case '2':
                this.itemManager.viewItems();
                break;
            case '3':
                this.itemManager.deleteItem();
                break;
            case '4':
                console.log("Exiting...");
                return false;
            default:
                console.log("Invalid choice, please try again.");
        }
        return true;
    }
}

class ItemManager {
    constructor() {
        this.items = [];
    }

    createItem(item) {
        this.items.push(item);
        console.log(`Item '${item}' added.`);
    }

    viewItems() {
        document.getElementById('items').innerHTML = this.items.map((item, index) => `<div>${index + 1}. ${item}</div>`).join('');
    }

    deleteItem(index) {
        if (index >= 0 && index < this.items.length) {
            const removedItem = this.items.splice(index, 1);
            console.log(`Item '${removedItem}' deleted.`);
        } else {
            console.log("Invalid item number.");
        }
    }
}

function createItem() {
    const item = prompt("Enter item name:");
    itemManager.createItem(item);
    itemManager.viewItems();
}

function viewItems() {
    itemManager.viewItems();
}

function deleteItem() {
    const index = parseInt(prompt("Enter item number to delete:")) - 1;
    itemManager.deleteItem(index);
    itemManager.viewItems();
}

const itemManager = new ItemManager();
viewItems();
