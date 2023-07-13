window.addEventListener('load', (e) => {
    let slider = document.getElementsByClassName('slider')[0];
    let scrollLeftMax = slider.clientWidth * (slider.children.length - 1);

    let btnAfter = document.getElementsByClassName('btn-after')[0];
    let btnBefore = document.getElementsByClassName('btn-before')[0];

    const changeEndpointSlider = (endpoint) => {
        slider.classList.remove('scroll_behavior');
        slider.scrollLeft = endpoint;
        slider.classList.add('scroll_behavior');
    }
    
    btnAfter.addEventListener('click', (e) => {
        if (slider.scrollLeft === scrollLeftMax) {
            changeEndpointSlider(0);
        }
        slider.scrollLeft = slider.scrollLeft + slider.clientWidth;
    });

    btnBefore.addEventListener('click', (e) => {
        if (slider.scrollLeft === 0) {
            changeEndpointSlider(scrollLeftMax);
        }
        slider.scrollLeft = slider.scrollLeft - slider.clientWidth;
    });
})