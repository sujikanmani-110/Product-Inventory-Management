import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env with explicit path and error handling
console.log('📁 Current directory:', __dirname);
const envPath = path.join(__dirname, '.env');
console.log('🔍 Looking for .env at:', envPath);

// Check if .env exists
if (!fs.existsSync(envPath)) {
  console.error('❌ .env file not found at:', envPath);
  console.log('\n📝 Creating .env file for you...');
  
  // Create .env file with default values
  const defaultEnv = `PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ProductManager
JWT_SECRET=your_super_secret_key_change_this_in_production
NODE_ENV=development
`;
  
  fs.writeFileSync(envPath, defaultEnv);
  console.log('✅ .env file created with default values');
}

// Load dotenv with explicit path
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('❌ Error loading .env file:', result.error.message);
  process.exit(1);
}

console.log('✅ .env loaded successfully');
console.log('📊 Variables loaded:', Object.keys(result.parsed || {}).length);

// Verify critical variables
const requiredVars = ['MONGO_URI', 'JWT_SECRET'];
const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingVars.join(', '));
  console.log('\nCurrent environment variables:');
  console.log('PORT:', process.env.PORT || 'not set');
  console.log('MONGO_URI:', process.env.MONGO_URI ? '✅ set' : '❌ not set');
  console.log('JWT_SECRET:', process.env.JWT_SECRET ? '✅ set' : '❌ not set');
  console.log('NODE_ENV:', process.env.NODE_ENV || 'not set');
  process.exit(1);
}

// Import other modules (NOTE: cors is already imported above)
import connectDB from "./db/db.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Hello From Product Inventory Management System");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n🚀 Server is running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
});