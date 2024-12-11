// /pages/api/get-snap-token.js
export default async (req, res) => {
    if (req.method === 'POST') {
      const { items, total_price } = JSON.parse(req.body);
      // Logic untuk mendapatkan snap token atau proses pembayaran
      // Pastikan untuk mengganti logika ini dengan API layanan pembayaran yang digunakan
  
      res.status(200).json({ snapToken: 'your-snap-token' }); // Replace this with actual token
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };
  