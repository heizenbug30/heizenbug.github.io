$(document).ready(function () {
  
    // $('.more-btn').click(function(){
    //     $(this).toggleClass('active');
    //     $('.main-navigation').toggleClass('active');
    // })

    $('.more-btn').click(bbb);

    function bbb()
    {
        $(this).toggleClass('active');
        $('.main-navigation').toggleClass('active');
    }
});


            const options = {
            root: null, // viewport
            rootMargin: "0px",
            threshold: 1.0,  // 50%가 viewport에 들어와 있어야 callback 실행
            }

            const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                entry.target.classList.add('fadein');
                } else {
                entry.target.classList.remove('fadein');
                }
            });
            }, options);

            const boxList = document.querySelectorAll('.slideup');

            // 반복문을 돌려 모든 DOM에 적용
            boxList.forEach(el => observer.observe(el));


 