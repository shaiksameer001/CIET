const mongoose = require('mongoose');
mongoose.pluralize(null);

const Userschema=mongoose.Schema({
    cid : {type : String, required: true},
    caadhar : {type : String, required: true},
    cpan : {type : String, required: true},
    cdob : {type : String, required: true},

    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
    is_created:  { type: Boolean, default: false },
    is_updated:  { type: Boolean, default: false }
},{
    timestamps: true
});

module.exports=mongoose.model('topper',Userschema);
