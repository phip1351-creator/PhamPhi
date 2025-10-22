const loai_arr = [
  { 'id': "1", 'ten_loai': "Nike" },
  { 'id': "2", 'ten_loai': "Adidas" },
  { 'id': "3", 'ten_loai': "PUMA" },
  { 'id': "4", 'ten_loai': "Joma" },
  { 'id': "5", 'ten_loai': "Mizuno" }
];

const san_pham_arr = [
  {
    "id": "1",
    "id_loai": "1",
    "ten_sp": "Nike Mercurial Vapor 15 Elite FG",
    "gia": "6500000",
    "giam_gia": "10%",
    "hinh": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbmltJZ-s6uyXd_rTKhwS86jo1m0BkD62SQ&s",
    "ngay": "2024-02-01",
    "mau_sac": "Cam neon",
    "xem": "825",
    "hot": "1",
    "an_hien": "1"
  },
  {
    "id": "2",
    "id_loai": "2",
    "ten_sp": "Adidas Predator Accuracy.1 FG",
    "gia": "6200000",
    "giam_gia": "15%",
    "hinh": "hinh/adidasP.jpg",
    "ngay": "2023-06-24",
    "mau_sac": "Đen đỏ",
    "xem": "742",
    "hot": "1",
    "an_hien": "1"
  },
  {
    "id": "3",
    "id_loai": "3",
    "ten_sp": "PUMA Future Ultimate FG/AG",
    "gia": "5800000",
    "giam_gia": "12%",
    "hinh": "hinh/puma1.webp",
    "ngay": "2023-08-12",
    "mau_sac": "Xanh neon",
    "xem": "640",
    "hot": "1",
    "an_hien": "1"
  },
  {
    "id": "4",
    "id_loai": "4",
    "ten_sp": "Joma Aguila Gol FG",
    "gia": "2900000",
    "giam_gia": "5%",
    "hinh": "hinh/joma.jpg",
    "ngay": "2024-05-02",
    "mau_sac": "Trắng xanh",
    "xem": "381",
    "hot": "0",
    "an_hien": "1"
  },
  {
    "id": "5",
    "id_loai": "5",
    "ten_sp": "Mizuno Morelia Neo III Beta FG",
    "gia": "7200000",
    "giam_gia": "10%",
    "hinh": "hinh/mizuno.avif",
    "ngay": "2024-01-12",
    "mau_sac": "Trắng vàng",
    "xem": "578",
    "hot": "1",
    "an_hien": "1"
  },
  {
    "id": "6",
    "id_loai": "1",
    "ten_sp": "Nike Phantom GX Elite FG",
    "gia": "6700000",
    "giam_gia": "8%",
    "hinh": "hinh/nikeP.jpg",
    "ngay": "2023-02-13",
    "mau_sac": "Đen bạc",
    "xem": "922",
    "hot": "1",
    "an_hien": "1"
  },
  {
    "id": "7",
    "id_loai": "2",
    "ten_sp": "Adidas X Crazyfast.1 FG",
    "gia": "6400000",
    "giam_gia": "12%",
    "hinh": "hinh/adidasX.jpg",
    "ngay": "2023-09-06",
    "mau_sac": "Hồng neon",
    "xem": "1042",
    "hot": "1",
    "an_hien": "1"
  },
  {
    "id": "8",
    "id_loai": "3",
    "ten_sp": "PUMA Ultra Ultimate FG/AG",
    "gia": "6100000",
    "giam_gia": "10%",
    "hinh": "hinh/pumaU.jpg",
    "ngay": "2023-08-16",
    "mau_sac": "Cam đen",
    "xem": "720",
    "hot": "0",
    "an_hien": "1"
  },
  {
    "id": "9",
    "id_loai": "4",
    "ten_sp": "Joma Propulsion Lite FG",
    "gia": "3200000",
    "giam_gia": "10%",
    "hinh": "hinh/jomaP.jpg",
    "ngay": "2023-03-03",
    "mau_sac": "Màu vàng",
    "xem": "428",
    "hot": "0",
    "an_hien": "1"
  },
  {
    "id": "10",
    "id_loai": "5",
    "ten_sp": "Mizuno Alpha Elite FG",
    "gia": "6800000",
    "giam_gia": "7%",
    "hinh": "hinh/mizunoA.jpg",
    "ngay": "2023-09-10",
    "mau_sac": "Trắng",
    "xem": "640",
    "hot": "1",
    "an_hien": "1"
  }
];


const thuoc_tinh_arr = [
  { "id_sp": "1", "kich_thuoc": "42", "trong_luong": "190g", "de_giay": "Carbon Plate", "lot_giay": "Gripknit", "cong_nghe": "Air Zoom", "xuat_xu": "Việt Nam" },
  { "id_sp": "2", "kich_thuoc": "41", "trong_luong": "200g", "de_giay": "Control Frame", "lot_giay": "HybridTouch", "cong_nghe": "High Definition Grip", "xuat_xu": "Indonesia" },
  { "id_sp": "3","kich_thuoc": "43", "trong_luong": "195g", "de_giay": "Dynamic Motion System", "lot_giay": "FuzionFit+", "cong_nghe": "GripControl Pro", "xuat_xu": "Việt Nam" },
  { "id_sp": "4", "kich_thuoc": "42", "trong_luong": "210g", "de_giay": "Cao su tổng hợp", "lot_giay": "Ortholite", "cong_nghe": "Reactive Cushion", "xuat_xu": "Tây Ban Nha" },
  { "id_sp": "5", "kich_thuoc": "44", "trong_luong": "185g", "de_giay": "Pebax", "lot_giay": "Foam êm", "cong_nghe": "Wave Neo", "xuat_xu": "Nhật Bản" },
  { "id_sp": "6", "kich_thuoc": "40", "trong_luong": "188g", "de_giay": "Carbon soleplate", "lot_giay": "GripKnit", "cong_nghe": "Ghost Lace","xuat_xu": "Trung Quốc" },
  { "id_sp": "7", "kich_thuoc": "42", "trong_luong": "190g", "de_giay": "Speedframe 2.0", "lot_giay": "Aerocage", "cong_nghe": "AEROPACITY SPEEDSKIN", "xuat_xu": "Việt Nam" },
  { "id_sp": "8", "kich_thuoc": "43", "trong_luong": "192g", "de_giay": "Dual Density", "lot_giay": "Foam êm", "cong_nghe": "Matryxevo", "xuat_xu": "Trung Quốc" },
  { "id_sp": "9", "kich_thuoc": "41", "trong_luong": "210g", "de_giay": "Cao su bền", "lot_giay": "Ortholite", "cong_nghe": "SuperGrip", "xuat_xu": "Tây Ban Nha" },
  { "id_sp": "10", "kich_thuoc": "44", "trong_luong": "185g", "de_giay": "Nylon Outsole", "lot_giay": "Foam êm", "cong_nghe": "Wave Plate", "xuat_xu": "Nhật Bản" }
];

