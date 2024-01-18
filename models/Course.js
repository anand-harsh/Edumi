import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter Course title"],
    minLength: [4, "title must be atleast 4 chars"],
    maxLength: [80, "title must be atmax 80 chars"],
  },
  description: {
    type: String,
    required: [true, "Please enter Course description"],
    minLength: [20, "description must be atleast 20 chars"],
  },
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

      video: {
        public_id: {
          type: String,
          //required: true,
        },
        url: {
          type: String,
          //required: true,
        },
      },
    },
  ],

  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  views: {
    type: Number,
    default: 0,
  },
  numVideos: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: [true, "Enter course creator name"],
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

export const Course = mongoose.model("Course", schema);
