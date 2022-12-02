function LoadingScreen(text = null) {
    document.getElementById('loading').classList.add('show');

    if (text === null) {
        return;
    } else {
        document.getElementById('LoadingText').textContent = text;
    }
}

function UnLoadingScreen() {
    document.getElementById('loading').classList.remove('show');
    document.getElementById('LoadingText').textContent = "";
    
}
