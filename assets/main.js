$tittle = "Clean Code"
$desc = "How to write clean code?"

function getTittle() {
    return $tittle
}

function getDesc() {
    return $desc
}

document.getElementsByTagName("h1")[0].innerHTML = getTittle()
document.getElementsByTagName("h2")[0].innerHTML = getDesc()


// Refactor Function

$darkTheme = false
if (localStorage.getItem('defaultTheme') == 'dark')
    toggleDarkMode()

function toggleDarkMode() {
    if ($darkTheme == false) {
        $darkTheme = true
        updateView("black", "white", "Dark!")
        localStorage.setItem('defaultTheme', 'dark');
    } else {
        $darkTheme = false
        updateView("white", "black", "Light!")
        localStorage.setItem('defaultTheme');
    }
}

function updateView(backgroundColor, textColor, themeInfo) {
    document.body.style.color = textColor
    document.body.style.backgroundColor = backgroundColor
    document.getElementById("themeInfo").innerHTML = themeInfo
}

