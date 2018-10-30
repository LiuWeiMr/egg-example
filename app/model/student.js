module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const StudentSchema = new Schema({
        sid: { type: Number  },
        studentName: { type: String  },
        studentAge: { type: String  }
    });

    return mongoose.model('Student', StudentSchema);
}