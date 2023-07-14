window.addEventListener('load', (e) => {
    let slider = document.getElementById('slider');
    let scrollLeftMax = slider.clientWidth * (slider.children.length - 1);

    let btnAfter = document.getElementById('btn-after');
    let btnBefore = document.getElementById('btn-before');

    const changeEndpointSlider = (endpoint) => {
        slider.classList.remove('scroll_behavior');
        slider.scrollLeft = endpoint;
        slider.classList.add('scroll_behavior');
    }
    
    btnAfter.addEventListener('click', () => {
        if (slider.scrollLeft - scrollLeftMax >= 50 || slider.scrollLeft - scrollLeftMax >= -50) {
            changeEndpointSlider(0);
        }
        // slider.scrollLeft = slider.scrollLeft + slider.clientWidth;
        slider.scrollBy(slider.clientWidth, 0);
    });

    btnBefore.addEventListener('click', () => {
        if (slider.scrollLeft === 0) {
            changeEndpointSlider(scrollLeftMax);
        }
        // slider.scrollLeft = slider.scrollLeft - slider.clientWidth;
        slider.scrollBy(-slider.clientWidth, 0);
    });
})