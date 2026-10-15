// Cac ham xu ly tung chuc nang

function addProduct() {
    console.log("Chuc nang them san pham");
    // logic them san pham 
}

function editProduct() {
    console.log("Chuc nang sua san pham");
    // logic sua san pham 
}

function deleteProduct() {
    console.log("Chuc nang xoa san pham");
    // logic xoa san pham 
}

function calculateTotal() {
    console.log("Chuc nang tinh tong tien");
    // logic tinh tong tien 
}

function searchProduct() {
    console.log("Chuc nang tim kiem san pham");
    // logic tim kiem san pham 
}

// Ham hien thi menu
function showMenu() {
    console.log("\n========== QUAN LY SAN PHAM ==========");
    console.log("1. Them san pham");
    console.log("2. Sua san pham");
    console.log("3. Xoa san pham");
    console.log("4. Tinh tong tien");
    console.log("5. Tim kiem san pham");
    console.log("0. Thoat chuong trinh");
}

// Chuong trinh chinh
let choice;
let isRunning = true;

while (isRunning) {
    showMenu();

    choice = prompt("Nhap lua chon cua ban:");

    switch (choice) {
        case "1":
            addProduct();
            break;

        case "2":
            editProduct();
            break;

        case "3":
            deleteProduct();
            break;

        case "4":
            calculateTotal();
            break;

        case "5":
            searchProduct();
            break;

        case "0":
            isRunning = false;
            console.log("Da thoat chuong trinh!");
            break;

        default:
            console.log("Lua chon khong hop le!");
    }
}