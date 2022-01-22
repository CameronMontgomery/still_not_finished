const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/journal', {
  useNewUrlParser: true,
});
