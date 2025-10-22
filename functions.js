function hienmenu(){
    let str = "<a href='/'>Trang chu</a>";
    loai_arr.forEach(loai => {
        str+="<a href=loai.html?id="+ loai.id + ">" + loai.ten_loai +"</a>"

    });
    document.querySelector("nav").innerHTML= str;
}


function hienspmoi(sosp){
    let spmoi_arr = san_pham_arr.filter( (sp, index) => index < sosp);
    let str = ``;
    spmoi_arr.forEach( sp => {
        str+= `<div class="sp" onclick="location.href='chitietsp.html?id=${sp.id}'">
                    <h3>${sp.ten_sp}</h3>
                    <img src="${sp.hinh}">
                    <h4>Giá: ${sp.gia}</h4>
                    <p>Ngày: ${sp.ngay}</p>
                    <button>Thêm vào giỏ</button>
                </div>`;
    });
    document.querySelector("main").innerHTML =
        `<div class='listsp'>
            <h2>Sản phẩm mới</h2>
            <div id="data"> ${str}</div>
        </div>`;
}

function hienformdangky() {
    let str = `
    <p> Họ tên <input type='text' id='ho_ten'></p>
    <p> Mật khẩu <input type='pasword' id='mat_khau'></p>
    <p> Email <input type='email' id='emial'></p>
    <p> <button id="btndk" onclick="return validformdk()">Đăng ký</button></p>
    `;
    document.querySelector("main").innerHTML=
    `<div class='formdk'>
        <h2>ĐĂNG KÝ THÀNH VIÊN</h2>
        <form id="formdk"> ${str} </form>
    </div>`;
}

function validformdk(){
    let ht = document.getElementById("ho_ten"); 
    let mk = document.getElementById("mat_khau");
    let em = document.getElementById("email");
    let thongbao="";
    if (ht.value=="") thongbao+='Chưa nhập họ tên<br>';
    if (mk.value=="") thongbao+='Chưa nhập mật khẩu<br>';
    else if (mk.value.length<6) thongbao+='Mật khẩu ngắn quá<br>';
    if (em.value=="") thongbao+='Chưa nhập email<br>';
    if (thongbao=="") thongbao="Đã nhập đủ thông tin";
    document.getElementById("thongbao").innerHTML=thongbao;
    return false;
}

let currentIndex = 0;
const slides = document.querySelectorAll(".banner-slider img");
const totalSlides = slides.length;
const slider = document.querySelector(".banner-slider");

function showSlide(index) {
  if (index < 0) currentIndex = totalSlides - 1;
  else if (index >= totalSlides) currentIndex = 0;
  else currentIndex = index;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentIndex + 1);
});
document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

// Tự động chạy mỗi 4 giây
setInterval(() => {
  showSlide(currentIndex + 1);
}, 4000);




function hienchitietsp() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  // Tìm sản phẩm có id tương ứng
  const sp = san_pham_arr.find(item => item.id === id);
  if (!sp) {
    document.getElementById("chitiet").innerHTML = "<p>Không tìm thấy sản phẩm!</p>";
    return;
  }

  // Lấy thông tin thuộc tính
  const tt = thuoc_tinh_arr.find(t => t.id_sp === id);

  // Tạo HTML hiển thị chi tiết
  let str = `
    <div class="chitiet-container">
      <div class="hinhsp">
        <img src="${sp.hinh}" alt="${sp.ten_sp}">
      </div>
      <div class="ttsp">
        <h2>${sp.ten_sp}</h2>
        <p><b>Giá:</b> ${sp.gia} ₫ (${sp.giam_gia} OFF)</p>
        <p><b>Màu sắc:</b> ${sp.mau_sac}</p>
        <p><b>Ngày ra mắt:</b> ${sp.ngay}</p>
        <p><b>Lượt xem:</b> ${sp.xem}</p>
        <h3>Thông tin kỹ thuật:</h3>
        <ul>
          <li><b>Kích thước:</b> ${tt.kich_thuoc}</li>
          <li><b>Trọng lượng:</b> ${tt.trong_luong}</li>
          <li><b>Đế giày:</b> ${tt.de_giay}</li>
          <li><b>Lót giày:</b> ${tt.lot_giay}</li>
          <li><b>Công nghệ:</b> ${tt.cong_nghe}</li>
          <li><b>Xuất xứ:</b> ${tt.xuat_xu}</li>
        </ul>
        <button onclick="themvaogio(${sp.id})">🛒 Thêm vào giỏ</button>
      </div>
    </div>
  `;

  document.getElementById("chitiet").innerHTML = str;
}



// Hàm thêm sản phẩm vào giỏ
function themvaogio(id_sp) {
  let gio = JSON.parse(localStorage.getItem("giohang")) || [];
  let sp = san_pham_arr.find(x => x.id == id_sp);
  if (!sp) return;

  let item = gio.find(x => x.id == id_sp);
  if (item) {
    item.sl += 1;
  } else {
    gio.push({ id: sp.id, ten_sp: sp.ten_sp, gia: sp.gia, hinh: sp.hinh, sl: 1 });
  }

  localStorage.setItem("giohang", JSON.stringify(gio));
  alert("✅ Đã thêm " + sp.ten_sp + " vào giỏ hàng!");
  window.location.href = "gioihang.html";
}

// Hiển thị giỏ hàng
function hiengiohang() {
  let gio = JSON.parse(localStorage.getItem("giohang")) || [];
  let main = document.getElementById("giohang");

  if (gio.length === 0) {
    main.innerHTML = `<h2 style="text-align:center; margin:50px;">Giỏ hàng trống 😢</h2>`;
    return;
  }

  let tong = 0;
  let str = `
    <table class="tablegiohang">
      <tr>
        <th>Hình</th>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Thành tiền</th>
        <th>Xóa</th>
      </tr>
  `;

  gio.forEach(item => {
    let tt = item.sl * item.gia;
    tong += tt;
    str += `
      <tr>
        <td><img src="${item.hinh}" width="80"></td>
        <td>${item.ten_sp}</td>
        <td>${Number(item.gia).toLocaleString()} ₫</td>
        <td>
          <button onclick="giamSL('${item.id}')">-</button>
          ${item.sl}
          <button onclick="tangSL('${item.id}')">+</button>
        </td>
        <td>${tt.toLocaleString()} ₫</td>
        <td><button onclick="xoaSP('${item.id}')">❌</button></td>
      </tr>
    `;
  });

  str += `
      <tr>
        <td colspan="4" style="text-align:right; font-weight:bold;">Tổng cộng:</td>
        <td colspan="2" style="color:red; font-size:18px;">${tong.toLocaleString()} ₫</td>
      </tr>
    </table>
    <div class="gh-btn">
      <button onclick="thanhtoan()">💳 Thanh toán</button>
      <button onclick="xoahet()">🗑 Xóa tất cả</button>
    </div>
  `;

  main.innerHTML = str;
}



function tangSL(id) {
  let gio = JSON.parse(localStorage.getItem("giohang")) || [];
  let sp = gio.find(x => x.id == id);
  if (sp) sp.sl++;
  localStorage.setItem("giohang", JSON.stringify(gio));
  hiengiohang();
}

function giamSL(id) {
  let gio = JSON.parse(localStorage.getItem("giohang")) || [];
  let sp = gio.find(x => x.id == id);
  if (sp && sp.sl > 1) sp.sl--;
  else gio = gio.filter(x => x.id != id);
  localStorage.setItem("giohang", JSON.stringify(gio));
  hiengiohang();
}

function xoaSP(id) {
  let gio = JSON.parse(localStorage.getItem("giohang")) || [];
  gio = gio.filter(x => x.id != id);
  localStorage.setItem("giohang", JSON.stringify(gio));
  hiengiohang();
}

function xoahet() {
  localStorage.removeItem("giohang");
  hiengiohang();
}

function thanhtoan() {
  alert("💳 Chức năng thanh toán đang được cập nhật!");
}