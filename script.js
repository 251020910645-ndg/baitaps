function upDate(previewPic) {
  console.log("Sự kiện upDate đã được kích hoạt!");
  console.log("Alt:", previewPic.alt);
  console.log("Src:", previewPic.src);

  let imageDiv = document.getElementById("image");
  let textDiv = document.getElementById("image-text");

  // Đổi chữ trong khung trắng
  textDiv.innerHTML = previewPic.alt;

  // Đổi ảnh nền cho khung lớn
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  let imageDiv = document.getElementById("image");
  let textDiv = document.getElementById("image-text");

  // Xóa ảnh nền
  imageDiv.style.backgroundImage = "url('')";

  // Khôi phục câu chữ hướng dẫn ban đầu trong khung trắng
  textDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}