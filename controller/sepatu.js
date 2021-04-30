const sepatuModel = require ('../model/sepatu')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    sepatuModel.create(data)
    .then(() => resolve ({
        status : true,
        pesan: 'purchase input is successful'
    })).catch (() => reject({
        status : false,
        pesan: 'purchase input failed'
    }))

})

exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    sepatuModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : ' updated successfully ',
      })).catch(()=> reject ({
      status : false,
      pesan : 'failed to update',
    }))
  })

  exports.showAllData = () =>
    new Promise((resolve, reject)=>{
    sepatuModel.find()
      .then (result =>{
        resolve({
          status : true,
          pesan : 'successfully displays',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'failed to display',
        data : []
      }))
    })  

exports.showbyID = (id) =>
    new Promise((resolve, reject) => {
    sepatuModel.findOne({
        _id: objectid(id)
      }).then (result =>{
        resolve({
          status : true,
          pesan : 'successfully displays',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'failed to display',
        data : null
      }))
    })

exports.delete = (id) =>
    new Promise((resolve, reject)=>{
      sepatuModel.deleteOne({
        _id: objectid(id)
      }).then (() => resolve({
        status : true,
        pesan : 'Deleted Successful',
        })).catch(()=> reject ({
        status : false,
        pesan : 'Deleted Failed',
        }))
    })