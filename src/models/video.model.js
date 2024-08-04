import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema (
    {
        videoFile : {
            type : String, // cloudnary url
            required : true,

        },
        thumbnail:{
            type : String, // cloudnary url
            required : true,
        },
        title : {
            type : String, 
            required : true,
        },

        discription : {
            type : String, 
            required : true,
        },
        duration :{
            type : Number,
            required : true,
        },
        view :{
            type : Number,
            default : 0
        },
        isPublished:{
            type : Boolean,
            default :true,
        },
        owner : {
            type: Schema.Types.ObjectId,
            ref : "User"

        }
        
    },{
        timestamps
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const video= mongoose.model("Video", videoSchema)