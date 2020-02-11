function fadeIn(){
    // フェードインさせる要素を全て取得
    el = document.querySelectorAll('.content-fade-in');
    for(var i=0; i<7; i++){
        // 位置を取得
        el2 = el[i].getBoundingClientRect();
        // 要素の高さが画面の高さより小さい場合、is-showを付与
        if(el2.y < screenHeight){
            el[i].classList.add('is-show');
        }
        // if(el2.y < 0){
            //     el[i].classList.remove('is-show');
            // }
        };
    };
    
    // ロード後の処理
    window.onload = function(){
        // 画面の高さを取得
        screenHeight = window.screen.height;
        this.fadeIn();
};

// スクロール時の処理
window.onscroll = function(){
    this.fadeIn();
};
