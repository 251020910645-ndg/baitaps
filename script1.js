/* 1. Hàm khởi tạo tự động chạy khi trang tải xong (onload) */
function initializeGallery() {
    console.log("Sự kiện onload đã kích hoạt: Khởi tạo thuộc tính tabindex cho gallery.");
    
    // Lấy tất cả các hình ảnh có class="preview"
    let images = document.querySelectorAll(".preview");
    
    // Vòng lặp for duyệt qua từng hình ảnh để thêm tabindex="0"
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm tabindex='0' cho hình ảnh thứ " + (i + 1));
    }
}

/* 2. Hàm cập nhật nội dung và hình nền (dùng cho onmouseover và onfocus) */
function upDate(previewPic) {
    console.log("Sự kiện upDate / focus đã kích hoạt!");
    console.log("Alt:", previewPic.alt);
    console.log("Src:", previewPic.src);

    let imageDiv = document.getElementById("image");
    let textDiv = document.getElementById("image-text");

    // Thay đổi chữ và hình nền
    textDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* 3. Hàm khôi phục trạng thái ban đầu (dùng cho onmouseout và onblur) */
function unDo() {
    let imageDiv = document.getElementById("image");
    let textDiv = document.getElementById("image-text");

    // Khôi phục chữ và hình nền ban đầu
    imageDiv.style.backgroundImage = "url('')";
    textDiv.innerHTML = "Di chuột hoặc dùng phím Tab qua một hình ảnh bên dưới để hiển thị ở đây.";
}