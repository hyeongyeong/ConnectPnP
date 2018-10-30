const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

/**
* @module user
* @description contain the details of user info
*/

// 기본적인 모델 스키마 정의 -> 추후 변경 필요.

const UserSchema = new Schema({
    user_code : { type : String, required : true},
    avatar_path : { type : String },
    name : { type : String }
});

UserSchema.plugin(autoIncrement.plugin, 'user');

const model = mongoose.model('user', UserSchema);

module.exports = model;