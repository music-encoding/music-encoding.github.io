/*
 * Copyright 2022 Benjamin W. Bohl. Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 * http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

/*jslint browser:true*/

var intervals = [];

/*
 * sets an interval timer for a submitted carousel
 * @param {item} carousel - HTMLcolleciton item.
 * @param {integer} milliseconds  – the time per slide.
 */
function animateCarousel(carousel, milliseconds) {
    "use strict";
    var slides = carousel.getElementsByClassName("carousel-locator"),
        slideIndex = 0,
        id = carousel.id;
    // iterate over slides
    intervals['i' + id] = setInterval(function () {
        // make slide at slideIndex visible
        slides.item(slideIndex).checked = true;
        // if more slides available increment slideIndex otherwise set to 0
        if (slideIndex < slides.length - 1) {
            slideIndex = slideIndex + 1;
        } else {
            slideIndex = 0;
        }
    },
         milliseconds);
}

function stopCarouselAnimation(carousel) {
    "use strict";
    var id = carousel.id;
    clearInterval(intervals['i' + id]);
}
