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

    createItem() {
        const item = prompt("Enter item name:");
        this.items.push(item);
        console.log(`Item '${item}' added.`);
    }

    viewItems() {
        if (this.items.length === 0) {
            console.log("No items to display.");
        } else {
            console.log("Items:");
            this.items.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        }
    }

    deleteItem() {
        const index = parseInt(prompt("Enter item number to delete:")) - 1;
        if (index >= 0 && index < this.items.length) {
            const removedItem = this.items.splice(index, 1);
            console.log(`Item '${removedItem}' deleted.`);
        } else {
            console.log("Invalid item number.");
        }
    }
}

function main() {
    const itemManager = new ItemManager();
    const menu = new Menu(itemManager);
    let continueRunning = true;

    while (continueRunning) {
        menu.displayMenu();
        const choice = prompt("Enter your choice:");
        continueRunning = menu.handleChoice(choice);
    }
}

main();
