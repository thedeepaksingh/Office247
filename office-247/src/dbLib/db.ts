// src/lib/db.ts
import { Pool } from "pg";
import bcrypt from "bcrypt";

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: Number(process.env.DB_PORT),
// });

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

// List of users (replace hashed passwords with actual bcrypt hashes)
const users = [
  { email: "john.doe@example.com", fullName: "John Doe", role: "admin" },
  { email: "jane.smith@example.com", fullName: "Jane Smith", role: "user" },
  {
    email: "mike.jones@example.com",
    fullName: "Mike Jones",
    role: "moderator",
  },
  { email: "alice.brown@example.com", fullName: "Alice Brown", role: "user" },
  { email: "bob.williams@example.com", fullName: "Bob Williams", role: "user" },
];

// Hash passwords for each user (use bcrypt to hash them securely)
async function insertUsers() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN"); // Start a transaction

    // Prepare the insert query
    for (const user of users) {
      const passwordHash = await bcrypt.hash("password123", 12); // Replace with a unique password for each user
      const query =
        "INSERT INTO user_data.users (email, password_hash, full_name, role) VALUES ($1, $2, $3, $4)";
      const values = [user.email, passwordHash, user.fullName, user.role];

      // Execute the insert query for each user
      await client.query(query, values);
    }

    await client.query("COMMIT"); // Commit the transaction
    console.log("Users inserted successfully!");
  } catch (error) {
    await client.query("ROLLBACK"); // Rollback in case of an error
    console.error("Error inserting users:", error);
  } finally {
    client.release(); // Release the client back to the pool
  }
}

// Run the insert function
insertUsers().catch((err) => console.error("Error:", err));

pool.on("connect", (client) => {
  client.query(`SELECT * FROM user_data.users`);
});

export default pool;
