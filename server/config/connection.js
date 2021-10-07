mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/programming-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
  
  module.exports = mongoose.connection;