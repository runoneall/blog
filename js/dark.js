function changeDarkMode() {
    const darkStyle = document.querySelector("link#dark-style");
    if (darkStyle.disabled == false) {
        darkStyle.disabled = true;
        document.cookie = "colorScheme=light; path=/; expires=0";
    } else {
        darkStyle.disabled = false;
        document.cookie = "colorScheme=dark; path=/; expires=0";
    }
}
function isDarkMode() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith("colorScheme=")) {
            const value = cookie.substring("colorScheme=".length);
            return value === "dark";
        }
    }
    return false;
}
if (isDarkMode()) {
    changeDarkMode();
}
