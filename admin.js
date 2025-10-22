import { apiGet, apiPost, apiPut, apiDelete } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const tblBody = document.querySelector('#listPro');
  
  async function loadProducts() {
    const products = await apiGet('/products');
    tblBody.innerHTML = products.map((p, i) => `
      <tr>
        <th>${i + 1}</th>
        <td>${p.ten_sp}</td>
        <td><img src="${p.hinh}" style="width:80px;height:60px;object-fit:cover" /></td>
        <td>${Number(p.gia).toLocaleString()} ₫</td>
        <td class="text-center">
          <button class="btn btn-sm btn-outline-secondary" data-id="${p.id}" data-action="edit">Sửa</button>
          <button class="btn btn-sm btn-outline-danger" data-id="${p.id}" data-action="delete">Xóa</button>
        </td>
      </tr>
    `).join('');
  }

  tblBody.addEventListener('click', async (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const id = btn.dataset.id;

    if (btn.dataset.action === 'delete') {
      if (!confirm('Bạn có chắc muốn xóa?')) return;
      await apiDelete(`/products/${id}`);
      loadProducts();
    }
  });
  tblBody.addEventListener('click', async (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const id = btn.dataset.id;

  if (btn.dataset.action === 'delete') {
    if (!confirm('Bạn có chắc muốn xóa?')) return;
    await apiDelete(`/products/${id}`);
    loadProducts();
  }

  if (btn.dataset.action === 'edit') {
    const product = await apiGet(`/products/${id}`);
    const newName = prompt('Nhập tên mới:', product.ten_sp);
    const newPrice = prompt('Nhập giá mới:', product.gia);

    if (newName && newPrice) {
      await apiPut(`/products/${id}`, {
        ...product,
        ten_sp: newName,
        gia: newPrice
      });
      loadProducts();
    }
  }
});

// Xử lý nút "Thêm Sản phẩm mới"
document.querySelector('.btn.btn-primary').addEventListener('click', async (e) => {
  e.preventDefault();

  const ten_sp = prompt('Nhập tên sản phẩm:');
  const gia = prompt('Nhập giá sản phẩm:');
  const hinh = prompt('Nhập link hình ảnh:');

  if (!ten_sp || !gia || !hinh) {
    alert('Vui lòng nhập đầy đủ thông tin!');
    return;
  }

  // Tạo sản phẩm mới
  await apiPost('/products', {
    ten_sp,
    gia,
    hinh,
    id_loai: "1",  
    giam_gia: "0%",
    ngay: new Date().toISOString().split('T')[0],
    mau_sac: "Không rõ",
    xem: "0",
    hot: "0",
    an_hien: "1"
  });

  alert('✅ Thêm sản phẩm thành công!');
  loadProducts();
});


  

  loadProducts();
});
