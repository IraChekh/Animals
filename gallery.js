const imgURLArr = ['./images/gallery/img1.jpg','./images/gallery/img2.jpg','./images/gallery/img3.jpg','./images/gallery/img4.jpg',
    './images/gallery/img5.jpg','./images/gallery/img6.jpg','./images/gallery/img7.jpg','./images/gallery/img8.jpg','./images/gallery/img1.jpg','./images/gallery/img2.jpg','./images/gallery/img3.jpg','./images/gallery/img4.jpg',
    './images/gallery/img5.jpg','./images/gallery/img6.jpg','./images/gallery/img7.jpg','./images/gallery/img8.jpg','./images/gallery/img1.jpg','./images/gallery/img2.jpg','./images/gallery/img3.jpg','./images/gallery/img4.jpg',
    './images/gallery/img5.jpg','./images/gallery/img6.jpg','./images/gallery/img7.jpg','./images/gallery/img8.jpg','./images/gallery/img1.jpg','./images/gallery/img2.jpg','./images/gallery/img3.jpg','./images/gallery/img4.jpg',
    './images/gallery/img5.jpg','./images/gallery/img6.jpg','./images/gallery/img7.jpg','./images/gallery/img8.jpg']
const promiseArr = []
for (const url of imgURLArr) {     
    const promise = new Promise(function(resolve, reject) { 
        const img = document.createElement('img') 
        img.classList.add("picture", "hidden")        
        img.src = url 
        img.addEventListener("load", function() { 
            resolve()
        })
        img.addEventListener("error", function() {
            reject()
        })
        document.getElementById("photos").append(img)
    })
    promiseArr.push(promise) 
}

Promise.all(promiseArr).then(
    function() { 
        document.querySelectorAll('.picture').forEach(img => {
            img.classList.remove("hidden")
        })
        document.getElementById("loader").classList.add('hidden')
    },
    function() { 
        alert("Помилка завантаження")
    }
)
