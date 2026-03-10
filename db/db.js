import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI;
    
    if (!mongoURI) {
      throw new Error('MongoDB URI not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    
    // Note: No options needed in newer Mongoose versions
    const conn = await mongoose.connect(mongoURI);
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    console.log('\n💡 Make sure MongoDB is running:');
    console.log('   Windows: net start MongoDB');
    console.log('   macOS: brew services start mongodb-community');
    console.log('   Linux: sudo systemctl start mongod');
    process.exit(1);
  }
};

export default connectDB;