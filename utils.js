const Joi = require('joi');
exports.validate =(req)=>{
    const schema= Joi.object({
        lat: Joi.number().min(-90).max(90).required(),
        lon: Joi.number().min(-180).max(180).required(),
        key: Joi.string()
    });
    return schema.validate(req);
}

exports.format_data =(data)=>{
    const result = { pollution :data?.data.data.current.pollution }
    const success = data.status === +process.env.SUCCESS_STATUS_CODE ? true : false
    return  {success, result}
}