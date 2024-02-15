$(function () {
    const nameInput = $(".name-input");
    const imgInput = $(".img-input");
    const designationInput = $(".designation-input");
    const projectInput = $(".project-input");
    const dojInput = $(".doj-input");
    const downloadBtn = $('.download-btn button')

    nameInput.on('input', function () {
        const inputValue = $(this).val();
        $('.name-text').text(inputValue);
    })

    designationInput.on('input', function () {
        const inputValue = $(this).val();
        $('.designation-text').text(inputValue);
    })

    projectInput.on('input', function () {
        const inputValue = $(this).val();
        $('.project-text span').text(inputValue);
    })

    dojInput.on('input', function () {
        const inputValue = $(this).val();
        $('.doj-text span').text(inputValue);
    });

    imgInput.on('change', function () {
        const files = imgInput[0].files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            $('.profile-pic-wrapper img').attr('src', reader.result);
            console.log(e.target.value);
        }
        reader.readAsDataURL(files);
    })

    downloadBtn.on('click', function () {
        const container = document.querySelector('.output-image-wrapper');
        html2canvas(container, { scale: 10 }).then(function (canvas) {
            let downloadLink = document.createElement('a');
            downloadLink.href = canvas.toDataURL('image/png');
            downloadLink.download = 'meme.png';
            downloadLink.click();
        })
    })


    // Controllers
    const scaleControl = $('.scale-controller');
    const xControl = $('.x-controller');
    const yControl = $('.y-controller');
    let scaleValue = 1;
    let xValue = 0;
    let yValue = 0;

    scaleControl.on('input', function () {
        scaleValue = $(this).val();
        $('.profile-pic-wrapper img').css('scale', scaleValue);
    })

    xControl.on('input', function () {
        xValue = $(this).val();
        $('.profile-pic-wrapper img').css('transform', `translateX(${xValue}px) translateY(${yValue}px)`);
    })

    yControl.on('input', function () {
        yValue = $(this).val();
        $('.profile-pic-wrapper img').css('transform', `translateX(${xValue}px) translateY(${yValue}px)`);
    })
})