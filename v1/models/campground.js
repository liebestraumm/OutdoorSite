var mongoose	= require("mongoose");
var comment = require("./comment");

var campgroundSchema = new mongoose.Schema({
		name: String,
        image: String,
        imageId: String,
		description: String,
        price: String,
        author: {
            id: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "User"
            },
            username: String
        },
        comments: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
        }]
});

module.exports = mongoose.model("Campground", campgroundSchema);