

const data = require('./data.json')
const fs = require('fs')
const path = require('path')

let getIndexMax = ()=>{
    let arr=[]
    data.forEach((item)=>{
        arr.push(item.id)
    })
    return Math.max.apply(null,arr);
}

let toRedictIndex = (res)=>{
    fs.writeFile(path.join(__dirname,'/data.json'),JSON.stringify(data, null, 4),(err)=>{
        if (err) {
         res.send('服务器错误')
        }
        res.redirect('/')
    })

}


//获取图书列表
exports.getBook=(req,res)=>{
    // res.send(data)
    res.render('index',{list:data})
}


// 添加图书页面
exports.toAddBook=(req,res)=>{
    res.render('addBook',{})
}


exports.toEditBook=(req,res)=>{
    let id = req.query.id
    let book = {}
    data.forEach((item)=>{
        if(item.id==id){
            for(let key in item){
                book[key]=item[key]
            }
            return;
        }
    })
    res.render('editBook',book)
}


exports.editBook=(req,res)=>{
    let info=req.body;
    data.forEach((item)=>{
        if(item.id==info.id){
            for(let key in item){
                item[key]= info[key]
            }
            return;
        }
    })
    toRedictIndex(res)
}



exports.addBook=(req,res)=>{
    // res.send(data)
    let info = req.body;
    let book={}
    for(let key in info ){
        book[key]=info[key]
    }
    book.id=getIndexMax()+1;
    data.push(book)
    toRedictIndex(res)
}

exports.deleteBook=(req,res)=>{
    let id = req.query.id;
    data.forEach((item,index)=>{
        if(item.id==id){
            data.splice(index,1)
        return;
        }
    })
    toRedictIndex(res)
}

