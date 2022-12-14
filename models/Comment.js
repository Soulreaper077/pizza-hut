const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema  (
  {
    // set custom id to prevent the confusion 
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    replyBody: {
      type: String 
    },
    writtenBy: {
      type: String 
    },
    createdAt: {
      type: Date, 
      default: Date.now, 
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
); 

const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  // use reply schema to validate for a reply 
  replies: [ReplySchema]
},
{
  toJSON: {
    virtuals: true, 
    getters: true
  },
  id: false 
}
);

const Comment = model('Comment', CommentSchema);

module.exports = Comment;
