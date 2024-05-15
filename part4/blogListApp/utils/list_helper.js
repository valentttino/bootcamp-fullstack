const dummy = (blogs) =>{
    return 1
}

const totalLikes = (blogs) =>{
    let acum = 0
    blogs.forEach(b => {
        acum = acum + b.likes
    })
    return acum
}

module.exports = {dummy, totalLikes}

