# Learn-Clean-Code
Belajar Menulis Clean Code 

"Kode yang sudah jadi, masih bisa diperbaiki
    Kode yang sudah diperbaiki, masih bisa diperbaiki"

- Penamaan fungsi = camelCase

- Gaya penulisan yang konsisten = bisa menggunakan yang sudah ada 
seperti di JS ada airbnb, ESLint ataupun menggunakan gaya penulisan sendiri asalkan konsisten

- Memposisikan elemen dari pendek ke panjang agar terlihat bersih contoh :

```
function updateView(backgroundColor, textColor, themeInfo) {
    document.body.style.color = textColor                           
    document.body.style.backgroundColor = backgroundColor
    document.getElementById("themeInfo").innerHTML = themeInfo
}
```

- Hindari penulisan kode yang berulang, Boilerplate Code 

Senin 05 Juni 2023
