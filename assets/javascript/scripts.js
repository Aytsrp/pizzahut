const outlets = [
  {
    outlet: "Pizza Hut Adi Sucipto Jogja",
    address:
      "Jl. Laksda Adi Sucipto No. 29 Kel. Catur Tunggal Kec. Depok Kabupaten Sleman Daerah Istimewa Yogyakarta",
    maps: "https://maps.app.goo.gl/osWB9rLHNf26ZMoE9",
  },
  {
    outlet: "Pizza Hut AEON Mall Sentul",
    address:
      "AEON Mall Sentul City Unit G - 09 Jl. MH Thamrin Kel. Citaringgul Kec. Babakan Madang Kab. Bogor",
    maps: "https://maps.app.goo.gl/fHxfgvGQVuYUZUdBA",
  },
  {
    outlet: "Pizza Hut Bali Gatot Subroto",
    address: "Jl. Gatot Subroto No.37 Denpasar Bali 80232",
    maps: "https://maps.app.goo.gl/t9RNhE5oFEQSmoyc8",
  },
  {
    outlet: "Pizza Hut Basuki Rahmat Surabaya",
    address:
      "Jl. Basuki Rahmat No. 25-31 Kel. Embong, Kaliasin, Kec. Genteng, Kota Surabaya, Jawa Timur",
    maps: "https://maps.app.goo.gl/QiZHp8TQuxiE8L5v7",
  },
  {
    outlet: "Pizza Hut Bintaro Plaza",
    address: "Bintaro Plaza , JL Bintaro Utara Sektor IIIA Bintaro Jaya",
    maps: "https://maps.app.goo.gl/YXVdtTah3saEgMidA",
  },
  {
    outlet: "Pizza Hut Bumi Serpong Damai",
    address: " BSD Ruko Plaza Sektor VII E/48 Lengkong Wetan Tangerang",
    maps: "https://maps.app.goo.gl/t658hBXcwQaRSap26",
  },
  {
    outlet: "Pizza HUt Cianjur",
    address:
      "Jl. Ir. H. Juanda No. 82 Kel. Bojongherang, Kec. Cianjur, Kab. Cianjur - Jawa Barat",
    maps: "https://maps.app.goo.gl/if92BGMtsM2MxqgB8",
  },
  {
    outlet: "Pizza Hut Cisalak Depok",
    address:
      "Jl. Raya Bogor RT 001 RW 02,Kelurahan Cisalak Kecamatan Sukmajaya Kota Depok",
    maps: "https://maps.app.goo.gl/edu5mWXR76FdNEFP7",
  },
  {
    outlet: "Pizza Hut Grand Wisata Bekasi",
    address:
      "Café Walk, Jl. Celebration Boulevard Lot 1A, Perumahan Grand Wisata Bekasi, Kel Lambang Sari, Kec. Tambun Selatan Bekasi",
    maps: "https://maps.app.goo.gl/NFSR796j7eGHXXkt8",
  },
];

const outletContainer = document.querySelector(".outlet");

outlets.forEach((outletData) => {
  const article = document.createElement("article");
  article.className = "outlet-item";

  const anchor = document.createElement("a");
  anchor.href = outletData.maps;
  anchor.target = "_blank";

  const h3 = document.createElement("h3");
  h3.textContent = outletData.outlet;

  anchor.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = outletData.address;

  article.appendChild(anchor);
  article.appendChild(p);

  outletContainer.appendChild(article);
});
