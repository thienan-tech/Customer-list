/*import connection from "../config/db.js";

export const getHomePage = async (req, res) => {
    try {
        // Fetch recent invoices


        // Fetch recent customers
        const [recentCustomers] = await connection.execute(
            'SELECT * FROM khachhang ORDER BY id DESCLIMIT 5'
    );

        res.render('home', { , recentCustomers });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};